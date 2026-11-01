/* ============ GÉNÉRATEUR D'ÉPREUVES (bouton « 📝 Épreuves » de l'accueil) ============
   Même fonctionnement que le générateur de l'appli HG. Format des épreuves officielles (BEPC d'ECM, DST, compositions) :
   partie A situation d'évaluation (8 pts), partie B questions objectives (6 pts = 3 exercices de 2 pts, de formes variées),
   partie C questions traditionnelles (6 pts).
   Les questions viennent des réserves epreuves-<niveau>.js (questions neuves, tirées des traces écrites).
   Une épreuve tirée est décrite par des « blocs » (titre, paragraphe, tableau, cadre) : les mêmes blocs
   donnent l'aperçu à l'écran et les deux fichiers Word (sujet, corrigé type). */
const BANQUES_EPREUVES = {
  '6e': typeof EPREUVES_6E !== 'undefined' ? EPREUVES_6E : null,
  '5e': typeof EPREUVES_5E !== 'undefined' ? EPREUVES_5E : null,
  '4e': typeof EPREUVES_4E !== 'undefined' ? EPREUVES_4E : null,
  '3e': typeof EPREUVES_3E !== 'undefined' ? EPREUVES_3E : null
};
// Leçons de chaque trimestre (l1 = leçon 1…), d'après la progression annuelle des programmes 2024 : 1er trimestre = septembre-décembre
// (semaines 1 à 11), 2e = janvier-mars (semaines 12 à 21). Le tableau de 6e n'indique pas les mois : on y applique ceux du tableau
// de 5e (même calendrier). La composition du 3e trimestre porte sur toute l'année ('tout'). Composition du 2e trimestre :
// situation et partie B sur les leçons du 2e trimestre, questions de cours (partie C) sur le 1er et le 2e trimestre.
const TRIMESTRES = {
  // 6e : ECM_6e-_VFR_2024.pdf p. 4-5 (L8 en semaine 11, L14 en semaines 20-21)
  '6e': { '1er': ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8'], '2e': ['l9', 'l10', 'l11', 'l12', 'l13', 'l14'], '3e': 'tout' },
  // 5e : ECM__5e-_VFR_2024.pdf p. 4-5 (décembre : L7 et intégration ; janvier : L8 ; mars : L12-L13 ; avril : L14)
  '5e': { '1er': ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7'], '2e': ['l8', 'l9', 'l10', 'l11', 'l12', 'l13'], '3e': 'tout' },
  // 4e : ECM_4e-_VFR2_2024.docx, progression annuelle (décembre : L9 et intégration ; janvier : L10-L12 ; mars : L14 et L15 ; avril : intégration)
  '4e': { '1er': ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9'], '2e': ['l10', 'l11', 'l12', 'l13', 'l14', 'l15'], '3e': 'tout' },
  // 3e : VR ECM 3e -2024.pdf, progression annuelle (décembre : L5 et intégration ; L6 de la semaine 12 à janvier ; mars : L9-L10 ; avril-mai : L11-L12)
  '3e': { '1er': ['l1', 'l2', 'l3', 'l4', 'l5'], '2e': ['l6', 'l7', 'l8', 'l9', 'l10'], '3e': 'tout' }
};
const LS_EPREUVES = 'ecm_epreuves'; // leçons cochées et options, par niveau (commodité sur cet appareil seulement)
const ep = { level: '6e', choix: {}, epreuve: null };

function lireChoixEpreuves(){ try{ return JSON.parse(localStorage.getItem(LS_EPREUVES)) || {}; }catch(e){ return {}; } }
function garderChoixEpreuves(){ try{ localStorage.setItem(LS_EPREUVES, JSON.stringify(ep.choix)); }catch(e){} }
ep.choix = lireChoixEpreuves();
function choixNiveau(lv){
  if(!ep.choix[lv]) ep.choix[lv] = { lecons: [], type: 'dst', trimestre: '1er', duree: (lv === '6e' || lv === '5e') ? '1 h 30' : '2 h' };
  return ep.choix[lv];
}

// esc (échappement HTML), chargerScript, afficherMessage, reglage, NIVEAUX et NIVEAU_LABELS viennent d'index.html
const melange = a => { const b = a.slice(); for(let i = b.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const unAuHasard = a => a[Math.floor(Math.random() * a.length)];
// 4 éléments au hasard, en gardant leur ordre d'origine
// mélange « croisé » : aucun élément ne reste à sa place (relier, ranger, mots à placer), pour que les réponses ne se lisent pas en ligne droite
const croise = a => { if(a.length < 2) return a.slice(); let k; do k = melange(a.map((x, i) => i)); while(k.some((j, i) => j === i)); return k.map(j => a[j]); };
const quatreDansLOrdre = (a, n = 4) => melange(a.map((x, i) => i)).slice(0, n).sort((x, y) => x - y).map(i => a[i]);
const pts = n => String(n).replace('.', ',') + (n >= 2 ? ' pts' : ' pt');
const LETTRES = 'abcdefgh';
const idsDuNiveau = lv => NIVEAUX[lv].lecons.map(l => 'l' + l.numero);

/* ---------- Tirage ---------- */
// e.recentes (composition du 2e trimestre) : leçons du trimestre, pour les parties A et B ; la partie C prend toutes les leçons cochées
const leconsDe = (e, toutes) => (!toutes && e.recentes ? e.recentes : e.lecons);
function leconsRecentes(lv, lecons, ch){
  const t = TRIMESTRES[lv] && TRIMESTRES[lv]['2e'];
  if(ch.type !== 'compo' || ch.trimestre !== '2e' || !Array.isArray(t)) return null;
  const r = lecons.filter(id => t.includes(id));
  return r.length && r.length < lecons.length ? r : null;
}
// En 4e et en 3e, une situation peut avoir deux consignes (consignes + prods, une production par consigne) ; en 6e et 5e, une seule.
const consignesDe = A => A.consignes || [A.consigne];
const productionsDe = A => A.prods || [A];
// Documents d'une situation : docs [Document 1, Document 2…] (souvent un par consigne), ou un seul doc
const documentsDe = A => A.docs || (A.doc ? [A.doc] : []);
function tirerPartieA(e, B){
  const pool = leconsDe(e).flatMap(id => (B[id].sit || []).map(s => ({ id, s })));
  return pool.length ? [Object.assign(unAuHasard(pool), { pts: 8 })] : [];
}
// Exercices possibles de la partie B (chacun sur 2 pts : 4 réponses à 0,5 pt)
function exercicesPossibles(lecons, B){
  const pool = k => lecons.flatMap(id => (B[id][k] || []).map(x => ({ id, x })));
  const ex = {};
  // choix : les propositions entre parenthèses sont mélangées à chaque tirage (dans la réserve, la bonne réponse est écrite en premier)
  const propositions = it => [it[0].replace(/\(([^()]*\/[^()]*)\)/, (m, o) => '(' + melange(o.split(' / ')).join(' / ') + ')')].concat(it.slice(1));
  // vrai/faux : toujours des « Vrai » et des « Faux » mélangés (1 à 3 « Faux » sur 4), jamais quatre réponses identiques quand la réserve le permet
  const vraiFaux = p => { const V = melange(p.filter(o => o.x[1])), F = melange(p.filter(o => !o.x[1])), n = melange([1, 2, 3].filter(k => F.length >= k && V.length >= 4 - k))[0];
    return n ? melange(F.slice(0, n).concat(V.slice(0, 4 - n))) : melange(p).slice(0, 4); };
  ['vf', 'choix', 'defs'].forEach(k => { const p = pool(k); if(p.length >= 4) ex[k] = () => ({ type: k, items: (k === 'vf' ? vraiFaux(p) : melange(p).slice(0, 4)).map(o => k === 'choix' ? propositions(o.x) : o.x) }); });
  // l'ordre d'affichage (séries, mots) est tiré une fois pour toutes : l'aperçu et le fichier Word restent identiques
  const intr = pool('intrus'); if(intr.length >= 4) ex.intrus = () => ({ type: 'intrus', items: melange(intr).slice(0, 4).map(o => [melange(o.x[0]), o.x[1], o.x[2]]) });
  const comp = pool('comp'); if(comp.length) ex.comp = () => { const x = unAuHasard(comp).x; return { type: 'comp', x, motsAffiches: croise(x.mots) }; };
  const rel = pool('relier').filter(o => o.x.A.length >= 4);
  if(rel.length) ex.relier = () => { const r = unAuHasard(rel).x, idx = melange(r.A.map((a, i) => i)).slice(0, 4); return { type: 'relier', consigne: r.consigne, A: idx.map(i => r.A[i]), B: idx.map(i => r.B[i]), ordreB: croise([0, 1, 2, 3]) }; };
  const ord = pool('ordre').filter(o => o.x.elements.length >= 4);
  if(ord.length) ex.ordre = () => { const o = unAuHasard(ord).x, bons = quatreDansLOrdre(o.elements); return { type: 'ordre', consigne: o.consigne, bons, affiches: croise(bons) }; };
  const cla = pool('classer').filter(o => o.x.elts.length >= 4);
  if(cla.length) ex.classer = () => {
    const c = unAuHasard(cla).x; let elts;
    for(let essai = 0; essai < 20; essai++){ elts = melange(c.elts).slice(0, 4); if(new Set(elts.map(e => e[1])).size >= Math.min(2, c.cats.length)) break; }
    const cats = c.cats.filter((n, i) => elts.some(e => e[1] === i));
    return { type: 'classer', consigne: c.consigne, cats, elts: elts.map(([e, i]) => [e, cats.indexOf(c.cats[i])]) };
  };
  return ex;
}
// Trois exercices de types différents
function tirerPartieB(e, B){
  const ex = exercicesPossibles(leconsDe(e), B);
  return melange(Object.keys(ex)).slice(0, 3).map(k => ex[k]());
}
// Questions de cours dont le total fait exactement 6 pts (3 à 5 questions)
function tirerPartieC(e, B){
  const pool = melange(leconsDe(e, true).flatMap(id => (B[id].cours || []).map(q => ({ id, q }))));
  let trouve = null;
  (function cherche(i, choisies, total){
    if(trouve) return;
    if(Math.abs(total - 6) < 1e-9){ if(choisies.length >= 3) trouve = choisies.slice(); return; }
    if(i >= pool.length || total > 6 || choisies.length >= 5) return;
    choisies.push(pool[i]); cherche(i + 1, choisies, total + pool[i].q[1]); choisies.pop();
    cherche(i + 1, choisies, total);
  })(0, [], 0);
  return (trouve || []).map(o => o.q);
}
function tirerEpreuve(){
  const lv = ep.level, B = BANQUES_EPREUVES[lv], ch = choixNiveau(lv);
  const lecons = ch.lecons.filter(id => B[id]);
  if(!lecons.length){ afficherMessage('Coche au moins une leçon'); return; }
  const e = { lv, lecons, recentes: leconsRecentes(lv, lecons, ch) };
  e.A = tirerPartieA(e, B); e.B = tirerPartieB(e, B); e.C = tirerPartieC(e, B);
  ep.epreuve = e;
  renderEpreuves();
}
// « Autre … » : nouveau tirage d'une partie
function retirer(partie){
  const e = ep.epreuve, B = BANQUES_EPREUVES[e.lv];
  if(partie === 'A') e.A = tirerPartieA(e, B);
  if(partie === 'B') e.B = tirerPartieB(e, B);
  if(partie === 'C') e.C = tirerPartieC(e, B);
  renderEpreuves();
}

/* ---------- Blocs du sujet et du corrigé ---------- */
const CONSIGNES_B = {
  vf: 'Réponds par Vrai ou Faux aux affirmations suivantes :',
  choix: 'Choisis la bonne réponse :',
  defs: 'Trouve le mot ou l\'expression qui correspond à chaque définition :',
  intrus: 'Dans chaque série, relève l\'intrus et justifie ton choix :'
};
function enteteEpreuve(e, corrige){
  const o = choixNiveau(e.lv), etab = reglage('etab');
  const nom = o.type === 'compo' ? 'COMPOSITION DU ' + ({ '1er': 'PREMIER', '2e': 'DEUXIÈME', '3e': 'TROISIÈME' }[o.trimestre] || '') + ' TRIMESTRE' : 'DEVOIR SURVEILLÉ';
  const b = [];
  if(etab) b.push({ k: 'p', txt: etab, b: true });
  b.push({ k: 'titre', txt: (corrige ? 'CORRIGÉ TYPE ' + (o.type === 'compo' ? 'DE LA ' : 'DU ') : '') + nom + ' D\'ÉDUCATION CIVIQUE ET MORALE' });
  b.push({ k: 'centre', txt: 'Classe : ' + NIVEAU_LABELS[e.lv] + '          Année scolaire : ' + reglage('annee') + '          Durée : ' + (o.duree || '') });
  return b;
}
function exerciceB(x, n, corrige){
  const b = [];
  if(x.type === 'vf' || x.type === 'choix' || x.type === 'defs'){
    b.push({ k: 'p', txt: n + '. ' + CONSIGNES_B[x.type] + ' (2 pts)', b: true });
    x.items.forEach((it, i) => {
      const l = LETTRES[i] + ') ';
      if(!corrige) b.push({ k: 'p', txt: l + it[0] });
      else if(x.type === 'vf') b.push({ k: 'p', txt: l + (it[1] ? 'Vrai' : 'Faux : ' + it[2]) });
      else b.push({ k: 'p', txt: l + it[1] });
    });
  } else if(x.type === 'intrus'){
    b.push({ k: 'p', txt: n + '. ' + CONSIGNES_B.intrus + ' (2 pts)', b: true });
    x.items.forEach((it, i) => b.push({ k: 'p', txt: LETTRES[i] + ') ' + (corrige ? it[1] + ' : ' + it[2] : it[0].join(' – ')) }));
  } else if(x.type === 'comp'){
    const mots = corrige ? x.x.mots : x.motsAffiches;
    b.push({ k: 'p', txt: n + '. Complète le texte avec les mots suivants : ' + mots.join(', ') + ' : (2 pts)', b: true });
    if(corrige) b.push({ k: 'p', txt: x.x.mots.map((m, i) => LETTRES[i] + ') ' + m).join(' ; ') });
    else b.push({ k: 'p', txt: x.x.texte.replace(/\{([a-d])\}/g, '……$1……') });
  } else if(x.type === 'relier'){
    b.push({ k: 'p', txt: n + '. ' + x.consigne + ' (2 pts)', b: true });
    const lettreDe = i => LETTRES[x.ordreB.indexOf(i)];
    // corrigé en tableau, comme le sujet : chaque élément de la liste A en face de sa bonne réponse
    if(corrige) b.push({ k: 'table', entetes: ['Liste A', 'Réponse', 'Liste B'], lignes: x.A.map((a, i) => [(i + 1) + '. ' + a, (i + 1) + ' → ' + lettreDe(i), lettreDe(i) + ') ' + x.B[i]]) });
    else b.push({ k: 'table', entetes: ['Liste A', 'Liste B'], lignes: x.A.map((a, i) => [(i + 1) + '. ' + a, LETTRES[i] + ') ' + x.B[x.ordreB[i]]]) });
  } else if(x.type === 'ordre'){
    b.push({ k: 'p', txt: n + '. ' + x.consigne + ' Écris les lettres dans le bon ordre. (2 pts)', b: true });
    if(corrige) b.push({ k: 'p', txt: x.bons.map(el => LETTRES[x.affiches.indexOf(el)]).join(', ') + '  (' + x.bons.join(' → ') + ')' });
    else x.affiches.forEach((el, i) => b.push({ k: 'p', txt: LETTRES[i] + ') ' + el }));
  } else if(x.type === 'classer'){
    b.push({ k: 'p', txt: n + '. ' + x.consigne + ' (2 pts)', b: true });
    if(!corrige) b.push({ k: 'p', txt: 'Éléments à classer : ' + x.elts.map(e => e[0]).join(' ; ') + '.' });
    const lignes = corrige ? [x.cats.map((c, i) => x.elts.filter(e => e[1] === i).map(e => e[0]).join('\n'))] : [x.cats.map(() => '\n\n')];
    b.push({ k: 'table', entetes: x.cats, lignes });
  }
  if(corrige) b.push({ k: 'p', txt: x.type === 'ordre' ? 'Barème : 0,5 pt par élément bien placé.' : 'Barème : 0,5 pt par réponse juste' + (x.type === 'intrus' ? ' (0,25 pt pour l\'intrus, 0,25 pt pour la justification).' : '.'), i: true });
  return b;
}
// Partie A sur 8 pts : grille 2/2/2/2 ; avec deux consignes (4e, 3e), 1/1/1/1 par consigne
function grilleNotation(A){
  const ent = ['', 'Pertinence', 'Correction', 'Cohérence', 'Perfectionnement', 'Total'], c = consignesDe(A);
  if(c.length === 2) return { k: 'table', entetes: ent, lignes: c.map((x, i) => ['Consigne ' + (i + 1), '1 pt', '1 pt', '1 pt', '1 pt', '4 pts']) };
  return { k: 'table', entetes: ent, lignes: [['Consigne', '2 pts', '2 pts', '2 pts', '2 pts', '8 pts']] };
}
function blocsSujet(e){
  const b = enteteEpreuve(e, false);
  b.push({ k: 'h', txt: 'PARTIE A : SITUATION D\'ÉVALUATION (8 pts)' });
  e.A.forEach(({ s: A }) => {
    b.push({ k: 'p', txt: A.texte });
    const c = consignesDe(A), D = documentsDe(A);
    // une consigne qui commence par « À partir de… » ou « En t'appuyant… » n'a pas besoin de la phrase d'amorce
    if(c.length === 2 || !/^(À partir|En t'appuyant)/.test(c[0])) b.push({ k: 'p', txt: A.amorce || (D.length > 1 ? 'En t\'appuyant sur tes connaissances et sur les documents ci-après :' : D.length ? 'En t\'appuyant sur tes connaissances et sur le document ci-après :' : 'En t\'appuyant sur tes connaissances :') });
    c.forEach((x, j) => b.push({ k: 'p', txt: (c.length === 2 ? 'Consigne ' + (j + 1) + ' : ' : 'Consigne : ') + x, b: true }));
    D.forEach(d => b.push({ k: 'cadre', titre: d.titre, texte: d.texte, liste: d.liste, image: d.image, credit: d.credit, tableau: d.tableau }));
    b.push({ k: 'p', txt: 'Grille de notation', b: true });
    b.push(grilleNotation(A));
  });
  b.push({ k: 'h', txt: 'PARTIE B : QUESTIONS OBJECTIVES (' + (e.B.length * 2) + ' pts)' });
  e.B.forEach((x, i) => b.push(...exerciceB(x, i + 1, false)));
  b.push({ k: 'h', txt: 'PARTIE C : QUESTIONS TRADITIONNELLES (' + pts(e.C.reduce((s, q) => s + q[1], 0)) + ')' });
  e.C.forEach((q, i) => b.push({ k: 'p', txt: (i + 1) + '. ' + q[0] + ' (' + pts(q[1]) + ')' }));
  return b;
}
function blocsCorrige(e){
  const b = enteteEpreuve(e, true);
  b.push({ k: 'h', txt: 'PARTIE A : SITUATION D\'ÉVALUATION (8 pts)' });
  e.A.forEach(({ s: A }) => {
    const c = consignesDe(A), P = productionsDe(A), deux = c.length === 2;
    // barème de la grille de correction : sur 8 pts ; deux consignes : 4 pts par consigne
    const g = deux ? ['0,25 pt', '0,25 pt', '0,5 pt', '0,5 pt', '0,5 pt', '1 pt', '1 pt', '4 pts'] : ['0,5 pt', '0,5 pt', '1 pt', '1 pt', '1 pt', '2 pts', '2 pts', '8 pts'];
    // même présentation que les corrigés des intégrations : introduction qui reprend la situation, développement
    // ouvert par une formule d'adresse et mené avec des connecteurs, conclusion « En définitive… » ; une production par consigne
    b.push({ k: 'p', txt: deux ? 'Productions attendues' : 'Production attendue', b: true });
    P.forEach((p, j) => {
      if(deux) b.push({ k: 'p', txt: 'PRODUCTION ' + (j + 1) + ' (consigne ' + (j + 1) + ')', b: true, u: true });
      if(p.titreProd) b.push({ k: 'p', txt: p.titreProd, b: true, u: true }); // titre d'un article, d'un guide, d'une affiche
      b.push({ k: 'p', txt: 'INTRODUCTION', b: true }, { k: 'p', txt: p.intro });
      b.push({ k: 'p', txt: 'DÉVELOPPEMENT', b: true }, ...(p.adresse ? [{ k: 'p', txt: p.adresse }] : []), ...p.dev.map(t => ({ k: 'p', txt: t })));
      b.push({ k: 'p', txt: 'CONCLUSION', b: true }, { k: 'p', txt: p.concl }, ...(p.signature ? [{ k: 'p', txt: p.signature }] : []));
    });
    b.push({ k: 'p', txt: 'Grille de correction', b: true });
    // indices de chaque consigne : une colonne « Indices » et une colonne « Barème » par consigne
    const ind = p => [p.support || 'Informations du document-support exploitées', p.indConsigne || p.consigne, p.justesse.map(j => '– ' + j).join('\n'), p.concepts, 'À apprécier par le professeur selon la production de l\'élève',
      'Introduction, développement, conclusion ; idées bien agencées ; connecteurs logiques (d\'abord, ensuite, enfin, en définitive…)',
      'Phrases correctes ; grammaire, orthographe et ponctuation respectées ; bonne présentation ; lisibilité ; absence de ratures'];
    const crit = [['PERTINENCE', 'Production conforme au support'], ['', 'Production conforme à la consigne'], ['', 'Justesse des réponses au regard de la consigne'],
      ['CORRECTION', 'Concepts et outils de la discipline bien utilisés'], ['', 'Justesse des réponses au regard des concepts utilisés'],
      ['COHÉRENCE', 'Enchaînement logique des idées'], ['PERFECTIONNEMENT', 'Qualité de la langue et présentation']];
    const I = P.map(p => ind(Object.assign({ consigne: c[0] }, p)));
    b.push({ k: 'table', entetes: ['Critères', 'Indicateurs'].concat(deux ? ['Indices (consigne 1)', 'Barème', 'Indices (consigne 2)', 'Barème'] : ['Indices', 'Barème']),
      lignes: crit.map((cr, r) => cr.concat(...I.map(x => [x[r], g[r]]))).concat([['TOTAL', ''].concat(...I.map(() => ['', g[7]]))]),
      largeurs: deux ? [18, 13, 24, 10, 25, 10] : [19, 19, 50, 12] }); // en % de la largeur (fichier Word, texte en taille 10)
  });
  b.push({ k: 'h', txt: 'PARTIE B : QUESTIONS OBJECTIVES (' + (e.B.length * 2) + ' pts)' });
  e.B.forEach((x, i) => b.push(...exerciceB(x, i + 1, true)));
  b.push({ k: 'h', txt: 'PARTIE C : QUESTIONS TRADITIONNELLES (' + pts(e.C.reduce((s, q) => s + q[1], 0)) + ')' });
  e.C.forEach((q, i) => { b.push({ k: 'p', txt: (i + 1) + '. ' + q[0] + ' (' + pts(q[1]) + ')', b: true }); b.push({ k: 'p', txt: q[2] }); });
  return b;
}

/* ---------- Aperçu à l'écran ---------- */
function blocsHTML(blocs){
  return blocs.map(x => {
    if(x.k === 'titre') return `<p class="ep-titre">${esc(x.txt)}</p>`;
    if(x.k === 'centre') return `<p class="ep-centre">${esc(x.txt)}</p>`;
    if(x.k === 'h') return `<p class="ep-h">${esc(x.txt)}</p>`;
    if(x.k === 'p') return `<p class="ep-p${x.b ? ' b' : ''}${x.i ? ' i' : ''}${x.u ? ' u' : ''}">${esc(x.txt)}</p>`;
    if(x.k === 'cadre') return `<div class="ep-cadre"><p class="ep-p b">${esc(x.titre)}</p>${x.texte ? `<p class="ep-p i">${esc(x.texte)}</p>` : ''}${x.liste ? x.liste.map(l => `<p class="ep-p">– ${esc(l)}</p>`).join('') : ''}${x.image ? `<img class="ep-img" src="${esc(x.image)}" alt="${esc(x.titre)}">` : ''}${x.credit ? `<p class="ep-p i" style="font-size:.8em">${esc(x.credit)}</p>` : ''}${x.tableau ? blocsHTML([Object.assign({ k: 'table' }, x.tableau)]) : ''}</div>`;
    if(x.k === 'table') return `<div class="table-wrap ep-tablewrap"><table class="grille"><tr>${x.entetes.map(t => `<th>${esc(t)}</th>`).join('')}</tr>${x.lignes.map(l => `<tr>${l.map(c => `<td class="ep-cell">${esc(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
    return '';
  }).join('');
}

/* ---------- Fichiers Word ---------- */
// Images des documents (PNG rendus à 2 fois la taille, ou photos JPEG) : lues avant de fabriquer le Word, avec leur taille d'affichage
// (au plus 15 cm de large et 11 cm de haut). lire(src) rend les octets du fichier (fetch dans l'appli, fs dans les essais).
async function imagesDesBlocs(blocs, lire = src => fetch(src).then(r => { if(!r.ok) throw new Error('image introuvable : ' + src); return r.arrayBuffer(); })){
  const imgs = {};
  for(const x of blocs) if(x.k === 'cadre' && x.image && !imgs[x.image]){
    const data = new Uint8Array(await lire(x.image)), v = new DataView(data.buffer, data.byteOffset, data.byteLength);
    let w, h;
    if(v.getUint16(0) === 0xFFD8){ // photo JPEG (taille réelle) : largeur et hauteur lues dans le segment SOF
      for(let i = 2; i < data.length - 9;){ const m = v.getUint16(i), n = v.getUint16(i + 2);
        if(m >= 0xFFC0 && m <= 0xFFCF && m !== 0xFFC4 && m !== 0xFFC8 && m !== 0xFFCC){ h = v.getUint16(i + 5); w = v.getUint16(i + 7); break; }
        i += 2 + n; }
    } else { w = v.getUint32(16) / 2; h = v.getUint32(20) / 2; } // PNG rendu à 2 fois la taille : en-tête PNG
    const k = Math.min(1, 560 / w, 420 / h); imgs[x.image] = { data, w: Math.round(w * k), h: Math.round(h * k) };
  }
  return imgs;
}
function blocsDocx(blocs, imgs = {}){
  const d = window.docx, T = (txt, o = {}) => new d.TextRun(Object.assign({ text: txt }, o));
  const para = (txt, o = {}, p = {}) => new d.Paragraph(Object.assign({ children: String(txt).split('\n').flatMap((l, i) => i ? [T(l, Object.assign({ break: 1 }, o))] : [T(l, o)]), spacing: { after: 80 } }, p));
  const cellule = (txt, entete, pct, taille) => new d.TableCell({ children: String(txt).split('\n').map(l => para(l, Object.assign(entete ? { bold: true } : {}, taille ? { size: taille } : {}), { spacing: { after: 0 } })), shading: entete ? { fill: 'E4EDE9' } : undefined, margins: { top: 60, bottom: 60, left: 80, right: 80 },
    width: pct ? { size: Math.round(9000 * pct / 100), type: d.WidthType.DXA } : undefined });
  // largeurs (en % de la page) : colonnes fixes, sinon Word les répartit selon le texte et écrase les petites colonnes
  const tableau = (lignes, L) => new d.Table(Object.assign({ width: { size: 100, type: d.WidthType.PERCENTAGE }, rows: lignes },
    L ? { layout: d.TableLayoutType.FIXED, columnWidths: L.map(p => Math.round(9000 * p / 100)) } : {}));
  const out = [];
  blocs.forEach(x => {
    if(x.k === 'titre') out.push(para(x.txt, { bold: true, size: 26 }, { alignment: d.AlignmentType.CENTER, spacing: { after: 60 } }));
    else if(x.k === 'centre') out.push(para(x.txt, {}, { alignment: d.AlignmentType.CENTER, spacing: { after: 200 } }));
    else if(x.k === 'h') out.push(para(x.txt, { bold: true, underline: {} }, { spacing: { before: 240, after: 120 } }));
    else if(x.k === 'p') out.push(para(x.txt, Object.assign({ bold: !!x.b, italics: !!x.i }, x.u ? { underline: {} } : {})));
    else if(x.k === 'cadre') out.push(tableau([new d.TableRow({ children: [new d.TableCell({ margins: { top: 100, bottom: 100, left: 120, right: 120 }, children:
      [para(x.titre, { bold: true })].concat(x.texte ? [para(x.texte, { italics: true })] : [], (x.liste || []).map(l => para('– ' + l)),
        x.image && imgs[x.image] ? [new d.Paragraph({ alignment: d.AlignmentType.CENTER, children: [new d.ImageRun({ data: imgs[x.image].data, transformation: { width: imgs[x.image].w, height: imgs[x.image].h } })] })] : [],
        x.credit ? [para(x.credit, { italics: true, size: 18 })] : [],
        x.tableau ? [new d.Table({ width: { size: 100, type: d.WidthType.PERCENTAGE }, rows: [new d.TableRow({ tableHeader: true, children: x.tableau.entetes.map(t => cellule(t, true)) })].concat(x.tableau.lignes.map(l => new d.TableRow({ children: l.map(c => cellule(c, false)) }))) }), para('', {}, { spacing: { after: 0 } })] : []) })] })]), para(''));
    else if(x.k === 'table'){ const L = x.largeurs || [];
      out.push(tableau([new d.TableRow({ tableHeader: true, children: x.entetes.map((t, j) => cellule(t, true, L[j], x.largeurs && 20)) })].concat(x.lignes.map(l => new d.TableRow({ children: l.map((c, j) => cellule(c, false, L[j], x.largeurs && 20)) }))), x.largeurs), para('')); }
  });
  return out;
}
const nomWord = (e, quoi) => ('ECM ' + e.lv + ' ' + (choixNiveau(e.lv).type === 'compo' ? 'Composition ' + choixNiveau(e.lv).trimestre + ' trimestre' : 'DST') + ' - ' + quoi).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9 _-]+/g, ' ').replace(/\s+/g, ' ').trim() + '.docx';
async function telechargerWord(quoi){
  const e = ep.epreuve; if(!e) return;
  try{
    await chargerScript('lib/docx.umd.js');
    const d = window.docx, blocs = quoi === 'Sujet' ? blocsSujet(e) : blocsCorrige(e);
    const doc = new d.Document({
      creator: reglage('prof') || 'Professeur', title: nomWord(e, quoi).replace('.docx', ''),
      styles: { default: { document: { run: { font: 'Times New Roman', size: 24 } } } },
      sections: [{ properties: { page: { margin: { top: 1000, bottom: 1000, left: 1100, right: 1100 } } }, children: blocsDocx(blocs, await imagesDesBlocs(blocs)) }]
    });
    const blob = await d.Packer.toBlob(doc);
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = nomWord(e, quoi);
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    afficherMessage(quoi + ' enregistré (dossier Téléchargements) ✓');
  }catch(err){ afficherMessage('Le fichier Word n\'a pas pu être fabriqué : ' + err.message); }
}

/* ---------- Vue ---------- */
function openEpreuves(){
  document.getElementById('hdrNiveaux').style.display = 'none';
  document.getElementById('hdrEpreuves').style.display = 'flex';
  document.getElementById('viewNiveaux').classList.remove('active');
  document.getElementById('viewEpreuves').classList.add('active');
  renderEpreuves(); window.scrollTo(0, 0);
}
function fermerEpreuves(){
  document.getElementById('hdrEpreuves').style.display = 'none';
  document.getElementById('hdrNiveaux').style.display = 'flex';
  document.getElementById('viewEpreuves').classList.remove('active');
  document.getElementById('viewNiveaux').classList.add('active');
}
function renderEpreuves(){
  const el = document.getElementById('viewEpreuves'); if(!el) return;
  const lv = ep.level, B = BANQUES_EPREUVES[lv], ch = choixNiveau(lv);
  let h = `<div class="ep-niveaux">${['6e', '5e', '4e', '3e'].map(l => `<button data-lv="${l}" class="${l === lv ? 'active' : ''}">${l}</button>`).join('')}</div>`;
  if(!B){
    el.innerHTML = h + `<div class="card"><p class="no-content">La réserve de questions de la ${lv} est en préparation.</p></div>`;
    el.querySelectorAll('[data-lv]').forEach(b => b.onclick = () => { ep.level = b.dataset.lv; ep.epreuve = null; renderEpreuves(); });
    return;
  }
  const tous = idsDuNiveau(lv);
  h += `<div class="card"><h3>1. Leçons déjà faites</h3><p class="ep-note">Coche les leçons sur lesquelles porte l'épreuve.</p>
    ${TRIMESTRES[lv] ? `<div class="ep-actions">${Object.keys(TRIMESTRES[lv]).map(t => `<button class="btn btn-light" data-trim="${t}">${t} trimestre</button>`).join('')}</div>
    <p class="ep-note">Ces boutons cochent les leçons du trimestre selon la progression du programme ; pour une composition, le 2e trimestre coche aussi le 1er (situation et partie B sur le 2e trimestre, questions de cours sur les deux) et le 3e trimestre coche toute l'année.</p>` : ''}
    <div class="ep-actions"><button class="btn btn-light" data-tout="1">Tout cocher</button><button class="btn btn-light" data-tout="0">Tout décocher</button></div>`;
  let theme = null;
  NIVEAUX[lv].lecons.forEach(l => {
    const id = 'l' + l.numero;
    if(l.theme !== theme){ theme = l.theme; h += `<div class="theme-title">${esc(theme)}</div>`; }
    h += `<label class="ep-lecon"><input type="checkbox" data-id="${id}" ${ch.lecons.includes(id) ? 'checked' : ''}> Leçon ${l.numero} — ${esc(l.titre)}${B[id] ? '' : ' <small>(pas encore de questions)</small>'}</label>`;
  });
  h += `</div><div class="card"><h3>2. L'épreuve</h3>
    <label class="ep-label">Type</label><select id="epType" class="ep-select"><option value="dst" ${ch.type === 'dst' ? 'selected' : ''}>Devoir surveillé</option><option value="compo" ${ch.type === 'compo' ? 'selected' : ''}>Composition</option></select>
    <div style="${ch.type === 'compo' ? '' : 'display:none'}"><label class="ep-label">Trimestre</label><select id="epTrimestre" class="ep-select">${['1er', '2e', '3e'].map(t => `<option ${ch.trimestre === t ? 'selected' : ''}>${t}</option>`).join('')}</select></div>
    <label class="ep-label">Durée</label><input id="epDuree" class="ep-select" value="${esc(ch.duree)}">
    <p class="ep-note">Classe : ${esc(NIVEAU_LABELS[lv])}. Année scolaire et établissement : ceux des Réglages (${esc(reglage('annee') || 'année non réglée')}).</p>
    <div class="ep-actions"><button class="btn btn-teal" id="epGenerer">${ep.epreuve && ep.epreuve.lv === lv ? 'Autre tirage' : 'Générer l\'épreuve'}</button></div></div>`;
  const e = ep.epreuve;
  if(e && e.lv === lv){
    const totalB = e.B.length * 2, totalC = e.C.reduce((s, q) => s + q[1], 0), alertes = [];
    if(!e.A.length) alertes.push('aucune situation pour ces leçons');
    if(totalB < 6) alertes.push('partie B incomplète (' + totalB + ' pts) : coche plus de leçons');
    if(Math.abs(totalC - 6) > 1e-9) alertes.push('partie C incomplète : coche plus de leçons');
    h += `<div class="card"><h3>3. Sujet</h3>${alertes.length ? `<p class="ep-note" style="color:var(--clay)">⚠ ${alertes.join(' ; ')}.</p>` : ''}
      ${e.recentes ? '<p class="ep-note">Situation et partie B sur les leçons du 2e trimestre ; questions de cours sur toutes les leçons cochées.</p>' : ''}
      <div class="ep-actions"><button class="btn btn-teal" data-word="Sujet">⬇ Sujet (Word)</button><button class="btn btn-teal" data-word="Corrige">⬇ Corrigé type (Word)</button></div>
      <div class="ep-actions"><button class="btn btn-light" data-re="A">↻ Autre situation</button><button class="btn btn-light" data-re="B">↻ Autre partie B</button><button class="btn btn-light" data-re="C">↻ Autre partie C</button></div>
      <div class="ep-feuille">${blocsHTML(blocsSujet(e))}</div>
      <details class="corrige"><summary>Voir le corrigé type</summary><div class="ep-feuille">${blocsHTML(blocsCorrige(e))}</div></details></div>`;
  }
  el.innerHTML = h;
  el.querySelectorAll('[data-lv]').forEach(b => b.onclick = () => { ep.level = b.dataset.lv; renderEpreuves(); });
  el.querySelectorAll('[data-id]').forEach(c => c.onchange = () => {
    const s = new Set(ch.lecons); c.checked ? s.add(c.dataset.id) : s.delete(c.dataset.id);
    ch.lecons = tous.filter(id => s.has(id)); garderChoixEpreuves();
  });
  // un bouton de trimestre coche ses leçons et règle aussi le trimestre de la composition
  el.querySelectorAll('[data-trim]').forEach(b => b.onclick = () => { const T = TRIMESTRES[lv], t = T[b.dataset.trim];
    ch.lecons = (t === 'tout' ? tous : ch.type === 'compo' && b.dataset.trim === '2e' ? T['1er'].concat(t) : t).filter(id => B[id]); ch.trimestre = b.dataset.trim; garderChoixEpreuves(); renderEpreuves(); });
  el.querySelectorAll('[data-tout]').forEach(b => b.onclick = () => { ch.lecons = b.dataset.tout === '1' ? tous.filter(id => B[id]) : []; garderChoixEpreuves(); renderEpreuves(); });
  // le type, le trimestre et la durée changent l'en-tête de l'épreuve déjà tirée, sans nouveau tirage
  el.querySelector('#epType').onchange = ev => { ch.type = ev.target.value; garderChoixEpreuves(); renderEpreuves(); };
  el.querySelector('#epTrimestre').onchange = ev => { ch.trimestre = ev.target.value; garderChoixEpreuves(); renderEpreuves(); };
  el.querySelector('#epDuree').onchange = ev => { ch.duree = ev.target.value; garderChoixEpreuves(); renderEpreuves(); };
  el.querySelector('#epGenerer').onclick = tirerEpreuve;
  el.querySelectorAll('[data-re]').forEach(b => b.onclick = () => retirer(b.dataset.re));
  el.querySelectorAll('[data-word]').forEach(b => b.onclick = () => telechargerWord(b.dataset.word === 'Sujet' ? 'Sujet' : 'Corrigé'));
}
