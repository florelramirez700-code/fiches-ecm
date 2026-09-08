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

/* ---------- Édition directe des fiches (contenteditable + sauvegarde locale) ---------- */

const EDITS_KEY = "fichesEcmEdits";

function getAllEdits() {
  try {
    const raw = localStorage.getItem(EDITS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveEdit(ficheId, path, value) {
  const all = getAllEdits();
  if (!all[ficheId]) all[ficheId] = {};
  all[ficheId][path] = value;
  try {
    localStorage.setItem(EDITS_KEY, JSON.stringify(all));
  } catch (e) {
    console.warn("Impossible d'enregistrer la modification :", e);
  }
}

function getDeepValue(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
}

function setDeepValue(obj, path, value) {
  const keys = path.split(".");
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    cur = cur[keys[i]];
    if (cur == null) return;
  }
  cur[keys[keys.length - 1]] = value;
}

/* Clone la fiche et lui applique les éventuelles modifications enregistrées localement,
   pour que les corrections faites par l'enseignante restent visibles après un rechargement. */
function ficheAvecEdits(ficheId, fiche) {
  const clone = JSON.parse(JSON.stringify(fiche));
  const edits = getAllEdits()[ficheId];
  if (edits) {
    Object.keys(edits).forEach(path => setDeepValue(clone, path, edits[path]));
  }
  return clone;
}

function editable(path, value) {
  return `<span class="editable-champ" contenteditable="true" data-path="${escapeHtml(path)}">${escapeHtml(value)}</span>`;
}

/* Écoute globale : dès qu'un champ modifiable perd le focus, on enregistre la nouvelle valeur
   (et on la reflète dans les données en mémoire, pour rester cohérent le temps de la session). */
document.addEventListener("blur", function (e) {
  const el = e.target;
  if (!el.classList || !el.classList.contains("editable-champ")) return;
  const article = el.closest("[data-fiche-id]");
  if (!article) return;
  const ficheId = article.getAttribute("data-fiche-id");
  const path = el.getAttribute("data-path");
  const value = el.innerText.trim();
  saveEdit(ficheId, path, value);
  const fiche = trouverFicheParId(ficheId);
  if (fiche) setDeepValue(fiche, path, value);
  const badge = article.querySelector(".badge-enregistre");
  if (badge) {
    badge.classList.add("visible");
    clearTimeout(badge._t);
    badge._t = setTimeout(() => badge.classList.remove("visible"), 1500);
  }
}, true);

function trouverFicheParId(ficheId) {
  for (const cle of Object.keys(NIVEAUX)) {
    const niveau = NIVEAUX[cle];
    const lecon = niveau.lecons.find(l => l.id === ficheId);
    if (lecon && lecon.fiche) return lecon.fiche;
    const integ = (niveau.integrations || []).find(i => i.id === ficheId);
    if (integ && integ.fiche) return integ.fiche;
  }
  return null;
}

function reinitialiserFiche(ficheId) {
  if (!confirm("Effacer toutes vos modifications sur cette fiche et revenir au contenu d'origine ?")) return;
  const all = getAllEdits();
  delete all[ficheId];
  localStorage.setItem(EDITS_KEY, JSON.stringify(all));
  location.reload();
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

  const integrationsParLecon = {};
  (niveau.integrations || []).forEach(i => { integrationsParLecon[i.apresLeconId] = i; });

  let themeCourant = null;
  let groupeOuvert = false;
  html += `<ul class="liste-lecons">`;
  for (const lecon of niveau.lecons) {
    if (lecon.theme !== themeCourant) {
      if (groupeOuvert) html += `</ul></li>`;
      html += `<li class="groupe-theme"><h3>${escapeHtml(lecon.theme)}</h3><ul>`;
      themeCourant = lecon.theme;
      groupeOuvert = true;
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

    const integration = integrationsParLecon[lecon.id];
    if (integration) {
      if (groupeOuvert) { html += `</ul></li>`; groupeOuvert = false; themeCourant = null; }
      const statutClasseI = integration.fiche ? "statut-ok" : "statut-attente";
      const statutLabelI = integration.fiche ? "rédigée" : "à rédiger";
      html += `
        <li>
          <button class="item-lecon item-integration" onclick="afficherIntegration('${cleNiveau}', '${integration.id}')">
            <span class="numero-lecon badge-integration">Intégration</span>
            <span class="titre-lecon">${escapeHtml(integration.themesCouverts.join(" + "))}</span>
            <span class="duree-lecon">${integration.seances} séances (${integration.seances * DUREE_SEANCE_MIN} min)</span>
            <span class="statut-lecon ${statutClasseI}">${statutLabelI}</span>
          </button>
        </li>`;
    }
  }
  if (groupeOuvert) html += `</ul></li>`;
  html += `</ul>`;
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

  const ficheEditee = ficheAvecEdits(lecon.id, fiche);
  html += renderFiche(lecon, ficheEditee);
  app.innerHTML = html;
  renderEnTete(app.querySelector("[data-entete-reglages]"));
}

function afficherIntegration(cleNiveau, idIntegration) {
  const niveau = NIVEAUX[cleNiveau];
  const integration = niveau && (niveau.integrations || []).find(i => i.id === idIntegration);
  if (!integration) return afficherNiveau(cleNiveau);

  const nomsLecons = integration.leconsCouvertes
    .map(id => niveau.lecons.find(l => l.id === id))
    .filter(Boolean)
    .map(l => `Leçon ${l.numero} — ${l.titre}`);

  const fiche = integration.fiche;

  let html = `<button class="lien-retour" onclick="afficherNiveau('${cleNiveau}')">&larr; ${escapeHtml(cleNiveau)}</button>
    <div data-entete-reglages></div>
    <h1>${escapeHtml(cleNiveau)} — Intégration : ${escapeHtml(integration.themesCouverts.join(" + "))}</h1>
    <p class="note-officielle">Compétence à intégrer : ${escapeHtml(integration.competence)}<br>Leçons couvertes : ${nomsLecons.map(escapeHtml).join(", ")}</p>`;

  if (!fiche) {
    html += `<p class="a-venir">Fiche d'intégration non encore rédigée.</p>
      <button class="bouton-secondaire" onclick="afficherApercuIntegration('${cleNiveau}', '${idIntegration}')">Voir un modèle vide (démonstration)</button>`;
    app.innerHTML = html;
    renderEnTete(app.querySelector("[data-entete-reglages]"));
    return;
  }

  const ficheEditee = ficheAvecEdits(integration.id, fiche);
  html += renderFicheIntegration(integration, ficheEditee);
  app.innerHTML = html;
  renderEnTete(app.querySelector("[data-entete-reglages]"));
}

function afficherApercuIntegration(cleNiveau, idIntegration) {
  const niveau = NIVEAUX[cleNiveau];
  const integration = niveau && (niveau.integrations || []).find(i => i.id === idIntegration);
  let html = `<button class="lien-retour" onclick="afficherNiveau('${cleNiveau}')">&larr; ${escapeHtml(cleNiveau)}</button>
    <div data-entete-reglages></div>
    <p class="note-alerte">Modèle de démonstration — aucun contenu réel, sert uniquement à valider le gabarit d'intégration (y compris le corrigé type).</p>`;
  html += renderFicheIntegration(integration || { competence: "[Exemple]", themesCouverts: ["Thème exemple"], leconsCouvertes: [] }, FICHE_INTEGRATION_DEMO);
  app.innerHTML = html;
  renderEnTete(app.querySelector("[data-entete-reglages]"));
}

function renderFicheIntegration(integration, fiche) {
  const total = totalDeroulementMin(fiche.deroulement);
  const ok = verifierMultipleDe55(total);
  const fid = integration.id;

  return `
    <article class="fiche" data-fiche-id="${escapeHtml(fid)}">
      <div class="barre-edition no-print">
        <span class="astuce-edition">✏️ Cliquez sur n'importe quel texte pour le corriger</span>
        <span class="badge-enregistre">Enregistré ✓</span>
        <button class="bouton-lien" onclick="reinitialiserFiche('${escapeHtml(fid)}')">Réinitialiser cette fiche</button>
      </div>
      <section class="bloc">
        <h2>Compétence à intégrer</h2>
        <p>${escapeHtml(integration.competence)}</p>
      </section>
      <section class="bloc">
        <h2>Documentation / Pré-requis</h2>
        <ul>${fiche.documentation.map((d, i) => `<li>${editable(`documentation.${i}`, d)}</li>`).join("")}</ul>
        <ul>${fiche.preRequis.map((p, i) => `<li>${editable(`preRequis.${i}`, p)}</li>`).join("")}</ul>
      </section>
      <section class="bloc">
        <h2>Ressources mobilisées (capacités des leçons du thème)</h2>
        <ul class="liste-ressources">
          ${fiche.ressourcesMobilisees.map(r => `
            <li><strong>${escapeHtml(r.lecon)}</strong> : ${r.capacites.map(escapeHtml).join(", ")}</li>
          `).join("")}
        </ul>
      </section>
      <section class="bloc">
        <h2>Situation complexe d'intégration</h2>
        <p>${editable("situationComplexe", fiche.situationComplexe)}</p>
        <h3>Consignes</h3>
        <ol class="consignes-numerotees">
          ${fiche.consignes.map((c, i) => `<li>${editable(`consignes.${i}`, c)}</li>`).join("")}
        </ol>
      </section>
      <section class="bloc">
        <h2>Déroulement</h2>
        <p class="verif-minutage ${ok ? "minutage-ok" : "minutage-erreur"}">
          Total : ${total} min — ${ok ? "OK, multiple de 55 min" : "⚠ n'est pas un multiple de 55 min, à corriger"}
        </p>
        <table class="tableau-deroulement">
          <thead><tr><th>Phase</th><th>Durée</th><th>Activité professeur</th><th>Activité élèves</th></tr></thead>
          <tbody>
            ${fiche.deroulement.map((p, i) => `
              <tr>
                <td>${editable(`deroulement.${i}.phase`, p.phase)}</td>
                <td>${p.dureeMin} min</td>
                <td>${editable(`deroulement.${i}.activiteProf`, p.activiteProf)}</td>
                <td>${editable(`deroulement.${i}.activiteEleves`, p.activiteEleves)}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </section>
      <section class="bloc">
        <h2>Corrigé type</h2>
        <p><strong>Introduction</strong><br>${editable("corrigeType.introduction", fiche.corrigeType.introduction)}</p>
        <p><strong>Développement</strong></p>
        <ol class="corrige-developpement">
          ${fiche.corrigeType.developpement.map((d, i) => `<li><em>${escapeHtml(d.consigne)}</em><br>${editable(`corrigeType.developpement.${i}.reponse`, d.reponse)}</li>`).join("")}
        </ol>
        <p><strong>Conclusion</strong><br>${editable("corrigeType.conclusion", fiche.corrigeType.conclusion)}</p>
      </section>
      <section class="bloc">
        <h2>Grille de critères d'évaluation</h2>
        <table class="tableau-criteres">
          <thead><tr><th>Critère</th><th>Barème</th></tr></thead>
          <tbody>
            ${fiche.criteresEvaluation.map(c => `<tr><td>${escapeHtml(c.critere)}</td><td>${escapeHtml(c.bareme)}</td></tr>`).join("")}
          </tbody>
        </table>
      </section>
      <button class="bouton-secondaire no-print" onclick="window.print()">Imprimer / exporter en PDF</button>
    </article>`;
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
  const fid = lecon.id;

  return `
    <article class="fiche" data-fiche-id="${escapeHtml(fid)}">
      <div class="barre-edition no-print">
        <span class="astuce-edition">✏️ Cliquez sur n'importe quel texte pour le corriger</span>
        <span class="badge-enregistre">Enregistré ✓</span>
        <button class="bouton-lien" onclick="reinitialiserFiche('${escapeHtml(fid)}')">Réinitialiser cette fiche</button>
      </div>
      <section class="bloc">
        <h2>Compétence</h2>
        <p>${editable("competence", fiche.competence)}</p>
      </section>
      <section class="bloc">
        <h2>Thème</h2>
        <p>${editable("theme", fiche.theme)}</p>
      </section>
      <section class="bloc">
        <h2>Documentation</h2>
        <ul>${fiche.documentation.map((d, i) => `<li>${editable(`documentation.${i}`, d)}</li>`).join("")}</ul>
      </section>
      <section class="bloc">
        <h2>Supports didactiques</h2>
        <ul class="liste-supports">
          ${fiche.supportsDidactiques.map(renderSupport).join("")}
        </ul>
      </section>
      <section class="bloc">
        <h2>Pré-requis</h2>
        <ul>${fiche.preRequis.map((p, i) => `<li>${editable(`preRequis.${i}`, p)}</li>`).join("")}</ul>
      </section>
      <section class="bloc">
        <h2>Capacités / Contenus</h2>
        <table class="tableau-capacites">
          <thead><tr><th>Capacités</th><th>Contenus</th></tr></thead>
          <tbody>
            ${fiche.capacitesContenus.map((cc, i) => `
              <tr>
                <td>${editable(`capacitesContenus.${i}.capacite`, cc.capacite)}</td>
                <td><ul>${cc.contenus.map((c, j) => `<li>${editable(`capacitesContenus.${i}.contenus.${j}`, c)}</li>`).join("")}</ul></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </section>
      <section class="bloc">
        <h2>Situation d'apprentissage</h2>
        <p>${editable("situationApprentissage", fiche.situationApprentissage)}</p>
      </section>
      <section class="bloc">
        <h2>Consignes</h2>
        <ul>${fiche.consignes.map((c, i) => `<li>${editable(`consignes.${i}`, c)}</li>`).join("")}</ul>
      </section>
      <section class="bloc">
        <h2>Stratégies pédagogiques</h2>
        <ul>${fiche.strategiesPedagogiques.map((s, i) => `<li>${editable(`strategiesPedagogiques.${i}`, s)}</li>`).join("")}</ul>
      </section>
      <section class="bloc">
        <h2>Déroulement</h2>
        <p class="verif-minutage ${ok ? "minutage-ok" : "minutage-erreur"}">
          Total : ${total} min — ${ok ? "OK, multiple de 55 min" : "⚠ n'est pas un multiple de 55 min, à corriger"}
        </p>
        <table class="tableau-deroulement">
          <thead><tr><th>Phase</th><th>Durée</th><th>Contenu</th></tr></thead>
          <tbody>
            ${fiche.deroulement.map((p, i) => `
              <tr>
                <td>${editable(`deroulement.${i}.phase`, p.phase)}</td>
                <td>${p.dureeMin} min</td>
                <td>
                  ${editable(`deroulement.${i}.contenu`, p.contenu)}
                  ${p.image ? `<img class="image-deroulement" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.phase)}">` : ""}
                </td>
              </tr>`).join("")}
          </tbody>
        </table>
      </section>
      <section class="bloc">
        <h2>Résumé structuré</h2>
        ${Array.isArray(fiche.resumeStructure)
          ? `<div class="resume-structure">${fiche.resumeStructure.map((s, i) => `
              <div class="resume-section">
                <h3>${editable(`resumeStructure.${i}.titre`, s.titre)}</h3>
                <p>${editable(`resumeStructure.${i}.contenu`, s.contenu)}</p>
              </div>`).join("")}</div>`
          : `<p>${editable("resumeStructure", fiche.resumeStructure)}</p>`}
      </section>
      <section class="bloc">
        <h2>Évaluation</h2>
        <p>${editable("evaluation", fiche.evaluation)}</p>
      </section>
      <section class="bloc">
        <h2>Devoir de maison</h2>
        <p>${editable("devoirMaison", fiche.devoirMaison)}</p>
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
