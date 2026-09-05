/* ==========================================================================
   Fiches ECM — logique de l'application (squelette)
   - Menu Réglages (Classe, Durée, Établissement, Année, Professeur)
   - Navigation Niveau -> Thème -> Leçon
   - Rendu du gabarit de fiche pédagogique
   - Calcul et vérification du minutage du déroulement (multiple de 55)
   ========================================================================== */

const DUREE_SEANCE_MIN = 55;
const REGLAGES_KEY = "fichesEcmReglages";

/* ---------- Réglages (persistés dans le navigateur de l'enseignante) ---------- */

function getReglages() {
  try {
    const raw = localStorage.getItem(REGLAGES_KEY);
    return raw ? JSON.parse(raw) : { classe: "", duree: "", etablissement: "", annee: "", professeur: "" };
  } catch (e) {
    return { classe: "", duree: "", etablissement: "", annee: "", professeur: "" };
  }
}

function setReglages(reglages) {
  try {
    localStorage.setItem(REGLAGES_KEY, JSON.stringify(reglages));
  } catch (e) {
    console.warn("Impossible d'enregistrer les réglages :", e);
  }
}

function ouvrirReglages() {
  const r = getReglages();
  document.getElementById("reglage-classe").value = r.classe || "";
  document.getElementById("reglage-duree").value = r.duree || "";
  document.getElementById("reglage-etablissement").value = r.etablissement || "";
  document.getElementById("reglage-annee").value = r.annee || "";
  document.getElementById("reglage-professeur").value = r.professeur || "";
  document.getElementById("modal-reglages").hidden = false;
}

function fermerReglages() {
  document.getElementById("modal-reglages").hidden = true;
}

function enregistrerReglages(event) {
  event.preventDefault();
  setReglages({
    classe: document.getElementById("reglage-classe").value.trim(),
    duree: document.getElementById("reglage-duree").value.trim(),
    etablissement: document.getElementById("reglage-etablissement").value.trim(),
    annee: document.getElementById("reglage-annee").value.trim(),
    professeur: document.getElementById("reglage-professeur").value.trim()
  });
  fermerReglages();
  rafraichirEnTeteCourant();
}

function rafraichirEnTeteCourant() {
  const enTetes = document.querySelectorAll("[data-entete-reglages]");
  enTetes.forEach(renderEnTete);
}

function renderEnTete(container) {
  const r = getReglages();
  container.innerHTML = `
    <div class="entete-reglages">
      <span><strong>Classe :</strong> ${escapeHtml(r.classe) || "—"}</span>
      <span><strong>Durée :</strong> ${escapeHtml(r.duree) || "—"}</span>
      <span><strong>Établissement :</strong> ${escapeHtml(r.etablissement) || "—"}</span>
      <span><strong>Année :</strong> ${escapeHtml(r.annee) || "—"}</span>
      <span><strong>Professeur :</strong> ${escapeHtml(r.professeur) || "—"}</span>
    </div>`;
}

/* ---------- Utilitaires ---------- */

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function totalDeroulementMin(deroulement) {
  return deroulement.reduce((total, phase) => total + (Number(phase.dureeMin) || 0), 0);
}

function verifierMultipleDe55(totalMin) {
  return totalMin > 0 && totalMin % DUREE_SEANCE_MIN === 0;
}

/* ---------- Navigation ---------- */

const app = document.getElementById("app");

function afficherAccueil() {
  let html = `<h1>Fiches pédagogiques — Éducation Civique et Morale</h1>
    <p class="intro">Collège, programmes officiels du Ministère (août 2024). Choisissez un niveau pour voir la liste des leçons.</p>
    <div class="grille-niveaux">`;
  for (const cle of Object.keys(NIVEAUX)) {
    const niveau = NIVEAUX[cle];
    const total = niveau.lecons.length;
    const redigees = niveau.lecons.filter(l => l.fiche).length;
    html += `
      <button class="carte-niveau" onclick="afficherNiveau('${cle}')">
        <h2>${escapeHtml(cle)}</h2>
        <p>${escapeHtml(niveau.nom)}</p>
        <p class="statut">${redigees} / ${total} fiches rédigées</p>
      </button>`;
  }
  html += `</div>`;
  app.innerHTML = html;
}

function afficherNiveau(cleNiveau) {
  const niveau = NIVEAUX[cleNiveau];
  if (!niveau) return afficherAccueil();

  let html = `<button class="lien-retour" onclick="afficherAccueil()">&larr; Niveaux</button>
    <h1>${escapeHtml(cleNiveau)} — ${escapeHtml(niveau.nom)}</h1>`;

  let themeCourant = null;
  html += `<ul class="liste-lecons">`;
  for (const lecon of niveau.lecons) {
    if (lecon.theme !== themeCourant) {
      if (themeCourant !== null) html += `</ul></li>`;
      html += `<li class="groupe-theme"><h3>${escapeHtml(lecon.theme)}</h3><ul>`;
      themeCourant = lecon.theme;
    }
    const statutClasse = lecon.fiche ? "statut-ok" : "statut-attente";
    const statutLabel = lecon.fiche ? "rédigée" : "à rédiger";
    const alerte = lecon.ecartGuide ? ` <span class="badge-alerte" title="Absente du guide d'exécution officiel">écart guide</span>` : "";
    html += `
      <li>
        <button class="item-lecon" onclick="afficherLecon('${cleNiveau}', '${lecon.id}')">
          <span class="numero-lecon">Leçon ${lecon.numero}</span>
          <span class="titre-lecon">${escapeHtml(lecon.titre)}${alerte}</span>
          <span class="duree-lecon">${lecon.seances} séance${lecon.seances > 1 ? "s" : ""} (${lecon.seances * DUREE_SEANCE_MIN} min)</span>
          <span class="statut-lecon ${statutClasse}">${statutLabel}</span>
        </button>
      </li>`;
  }
  html += `</ul></li></ul>`;
  app.innerHTML = html;
}

function afficherLecon(cleNiveau, idLecon) {
  const niveau = NIVEAUX[cleNiveau];
  const lecon = niveau && niveau.lecons.find(l => l.id === idLecon);
  if (!lecon) return afficherNiveau(cleNiveau);

  const fiche = lecon.fiche; // null tant que la fiche n'a pas été rédigée

  let html = `<button class="lien-retour" onclick="afficherNiveau('${cleNiveau}')">&larr; ${escapeHtml(cleNiveau)}</button>
    <div data-entete-reglages></div>
    <h1>${escapeHtml(cleNiveau)} — Leçon ${lecon.numero} : ${escapeHtml(lecon.titre)}</h1>`;

  if (lecon.note) {
    html += `<p class="note-officielle">Note du programme officiel : ${escapeHtml(lecon.note)}</p>`;
  }
  if (lecon.ecartGuide) {
    html += `<p class="note-alerte">Cette leçon est absente du guide d'exécution officiel : la fiche est construite à partir du seul tableau programme.</p>`;
  }

  if (!fiche) {
    html += `<p class="a-venir">Fiche pédagogique non encore rédigée pour cette leçon.</p>
      <button class="bouton-secondaire" onclick="afficherApercu()">Voir un modèle vide (démonstration)</button>`;
    app.innerHTML = html;
    renderEnTete(app.querySelector("[data-entete-reglages]"));
    return;
  }

  html += renderFiche(lecon, fiche);
  app.innerHTML = html;
  renderEnTete(app.querySelector("[data-entete-reglages]"));
}

function afficherApercu() {
  let html = `<button class="lien-retour" onclick="afficherAccueil()">&larr; Niveaux</button>
    <div data-entete-reglages></div>
    <p class="note-alerte">Modèle de démonstration — aucun contenu réel, sert uniquement à valider le gabarit (y compris l'intégration d'images).</p>`;
  html += renderFiche({ competence: FICHE_DEMO.competence, theme: FICHE_DEMO.theme, titre: "Modèle vide", numero: "—", seances: 2 }, FICHE_DEMO);
  app.innerHTML = html;
  renderEnTete(app.querySelector("[data-entete-reglages]"));
}

/* ---------- Gabarit de fiche ---------- */

function renderFiche(lecon, fiche) {
  const total = totalDeroulementMin(fiche.deroulement);
  const ok = verifierMultipleDe55(total);

  return `
    <article class="fiche">
      <section class="bloc">
        <h2>Compétence</h2>
        <p>${escapeHtml(fiche.competence)}</p>
      </section>
      <section class="bloc">
        <h2>Thème</h2>
        <p>${escapeHtml(fiche.theme)}</p>
      </section>
      <section class="bloc">
        <h2>Documentation</h2>
        <ul>${fiche.documentation.map(d => `<li>${escapeHtml(d)}</li>`).join("")}</ul>
      </section>
      <section class="bloc">
        <h2>Supports didactiques</h2>
        <ul class="liste-supports">
          ${fiche.supportsDidactiques.map(renderSupport).join("")}
        </ul>
      </section>
      <section class="bloc">
        <h2>Pré-requis</h2>
        <ul>${fiche.preRequis.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
      </section>
      <section class="bloc">
        <h2>Capacités / Contenus</h2>
        <table class="tableau-capacites">
          <thead><tr><th>Capacités</th><th>Contenus</th></tr></thead>
          <tbody>
            ${fiche.capacitesContenus.map(cc => `
              <tr>
                <td>${escapeHtml(cc.capacite)}</td>
                <td><ul>${cc.contenus.map(c => `<li>${escapeHtml(c)}</li>`).join("")}</ul></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </section>
      <section class="bloc">
        <h2>Situation d'apprentissage</h2>
        <p>${escapeHtml(fiche.situationApprentissage)}</p>
      </section>
      <section class="bloc">
        <h2>Consignes</h2>
        <ul>${fiche.consignes.map(c => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
      </section>
      <section class="bloc">
        <h2>Stratégies pédagogiques</h2>
        <ul>${fiche.strategiesPedagogiques.map(s => `<li>${escapeHtml(s)}</li>`).join("")}</ul>
      </section>
      <section class="bloc">
        <h2>Déroulement</h2>
        <p class="verif-minutage ${ok ? "minutage-ok" : "minutage-erreur"}">
          Total : ${total} min — ${ok ? "OK, multiple de 55 min" : "⚠ n'est pas un multiple de 55 min, à corriger"}
        </p>
        <table class="tableau-deroulement">
          <thead><tr><th>Phase</th><th>Durée</th><th>Contenu</th></tr></thead>
          <tbody>
            ${fiche.deroulement.map(p => `
              <tr>
                <td>${escapeHtml(p.phase)}</td>
                <td>${p.dureeMin} min</td>
                <td>
                  ${escapeHtml(p.contenu)}
                  ${p.image ? `<img class="image-deroulement" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.phase)}">` : ""}
                </td>
              </tr>`).join("")}
          </tbody>
        </table>
      </section>
      <section class="bloc">
        <h2>Résumé structuré</h2>
        <p>${escapeHtml(fiche.resumeStructure)}</p>
      </section>
      <section class="bloc">
        <h2>Évaluation</h2>
        <p>${escapeHtml(fiche.evaluation)}</p>
      </section>
      <section class="bloc">
        <h2>Devoir de maison</h2>
        <p>${escapeHtml(fiche.devoirMaison)}</p>
      </section>
      <button class="bouton-secondaire no-print" onclick="window.print()">Imprimer / exporter en PDF</button>
    </article>`;
}

function renderSupport(support) {
  if (support.type === "image") {
    return `<li class="support-image">
        <img src="${escapeHtml(support.src)}" alt="${escapeHtml(support.legende || "")}">
        ${support.legende ? `<span class="legende">${escapeHtml(support.legende)}</span>` : ""}
      </li>`;
  }
  return `<li>${escapeHtml(support.contenu)}</li>`;
}

/* ---------- Démarrage ---------- */

document.addEventListener("DOMContentLoaded", () => {
  afficherAccueil();

  document.getElementById("bouton-reglages").addEventListener("click", ouvrirReglages);
  document.getElementById("form-reglages").addEventListener("submit", enregistrerReglages);
  document.getElementById("bouton-fermer-reglages").addEventListener("click", fermerReglages);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      /* l'app fonctionne aussi sans service worker (juste sans mode hors-ligne) */
    });
  }
});
