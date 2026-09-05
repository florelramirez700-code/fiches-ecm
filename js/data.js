/* ==========================================================================
   Fiches ECM — Index des programmes officiels (Togo, Ministère des
   Enseignements Primaire et Secondaire, Direction des Programmes et
   Innovations Pédagogiques, août 2024)

   Ce fichier ne contient QUE la structure officielle des programmes
   (compétences / thèmes / leçons / durée en séances de 55 min).
   Le champ "fiche" de chaque leçon est rempli au fur et à mesure de la
   rédaction des fiches pédagogiques (voir gabarit dans js/app.js).

   Écart connu : 4e, Leçon 5 — absente du guide d'exécution officiel
   (seul le tableau programme existe). À rédiger à partir des seules
   capacités/contenus disponibles.
   ========================================================================== */

const NIVEAUX = {
  "6e": {
    nom: "Sixième",
    lecons: [
      { id: "6e-l1", numero: 1, competence: "Se respecter et respecter les autres", theme: "Civilité", titre: "Règles de bienséance", seances: 2, fiche: null },
      { id: "6e-l2", numero: 2, competence: "Se respecter et respecter les autres", theme: "Civilité", titre: "Formules de courtoisie", seances: 2, fiche: null },
      { id: "6e-l3", numero: 3, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "IMC et son interprétation", seances: 2, fiche: null },
      { id: "6e-l4", numero: 4, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "Surpoids et obésité", seances: 2, fiche: null },
      { id: "6e-l5", numero: 5, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "Qui suis-je ?", seances: 2, fiche: null },
      { id: "6e-l6", numero: 6, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "Membres de ma famille", seances: 2, fiche: null },
      { id: "6e-l7", numero: 7, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "Fondements, fonctions et gestion de la famille", seances: 2, fiche: null },
      { id: "6e-l8", numero: 8, competence: "Protéger son cadre de vie", theme: "Connaissance de son cadre de vie", titre: "Description et utilité de la maison", seances: 2, fiche: null },
      { id: "6e-l9", numero: 9, competence: "Protéger son cadre de vie", theme: "Connaissance de son cadre de vie", titre: "Accidents domestiques et précautions à prendre", seances: 2, fiche: null },
      { id: "6e-l10", numero: 10, competence: "Protéger son cadre de vie", theme: "Connaissance de son cadre de vie", titre: "Connaissance du collège", seances: 2, fiche: null },
      { id: "6e-l11", numero: 11, competence: "Promouvoir les idéaux de paix et de non-violence", theme: "Extrémisme violent et culture de la paix", titre: "Comprendre l'extrémisme violent", seances: 2, fiche: null },
      { id: "6e-l12", numero: 12, competence: "Promouvoir les idéaux de paix et de non-violence", theme: "Extrémisme violent et culture de la paix", titre: "Notions de paix", seances: 2, fiche: null },
      { id: "6e-l13", numero: 13, competence: "Promouvoir les idéaux de paix et de non-violence", theme: "Extrémisme violent et culture de la paix", titre: "Paix avec soi-même et avec les autres", seances: 2, fiche: null },
      { id: "6e-l14", numero: 14, competence: "Adopter des règles d'hygiène et prendre soin de son environnement", theme: "Santé, environnement", titre: "Conservation et protection des aliments", seances: 2, fiche: null },
      { id: "6e-l15", numero: 15, competence: "Adopter des règles d'hygiène et prendre soin de son environnement", theme: "Santé, environnement", titre: "Comité d'hygiène de l'établissement", seances: 2, fiche: null },
      { id: "6e-l16", numero: 16, competence: "Adopter des règles d'hygiène et prendre soin de son environnement", theme: "Santé, environnement", titre: "Entretien de l'environnement immédiat", seances: 2, fiche: null },
      { id: "6e-l17", numero: 17, competence: "Adopter des règles d'hygiène et prendre soin de son environnement", theme: "Santé, environnement", titre: "Jardins et parterres", seances: 2, fiche: null }
    ]
  },

  "5e": {
    nom: "Cinquième",
    lecons: [
      { id: "5e-l1", numero: 1, competence: "Adopter des comportements civiques", theme: "Civisme", titre: "Civisme : concepts clés", seances: 2, fiche: null },
      { id: "5e-l2", numero: 2, competence: "Adopter des comportements civiques", theme: "Civisme", titre: "Comportements civiques et inciviques", seances: 2, fiche: null },
      { id: "5e-l3", numero: 3, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : la rue", titre: "Rue : concepts clés", seances: 2, fiche: null },
      { id: "5e-l4", numero: 4, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : la rue", titre: "Dangers potentiels de la rue", seances: 2, fiche: null },
      { id: "5e-l5", numero: 5, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : la rue", titre: "Règles du code de la route", seances: 3, note: "Prévoir une sortie de classe pour expérimenter le code de la route.", fiche: null },
      { id: "5e-l6", numero: 6, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : l'école", titre: "Utilité et organisation de l'école", seances: 2, fiche: null },
      { id: "5e-l7", numero: 7, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : l'école", titre: "Vie au collège", seances: 2, fiche: null },
      { id: "5e-l8", numero: 8, competence: "Respecter l'État, ses institutions et ses organes décentralisés", theme: "Décentralisation au Togo", titre: "Subdivisions du Togo", seances: 2, fiche: null },
      { id: "5e-l9", numero: 9, competence: "Respecter l'État, ses institutions et ses organes décentralisés", theme: "Décentralisation au Togo", titre: "Canton", seances: 2, fiche: null },
      { id: "5e-l10", numero: 10, competence: "Respecter l'État, ses institutions et ses organes décentralisés", theme: "Symboles, principes et valeurs du Togo", titre: "Symboles du Togo (armoiries, hymne national, devise, drapeau)", seances: 4, note: "Faire acquérir aux apprenants l'hymne national et la marche républicaine.", fiche: null },
      { id: "5e-l11", numero: 11, competence: "Respecter l'État, ses institutions et ses organes décentralisés", theme: "Symboles, principes et valeurs du Togo", titre: "Principes et valeurs du Togo", seances: 2, fiche: null },
      { id: "5e-l12", numero: 12, competence: "Régler les conflits de façon pacifique", theme: "Notion de violence", titre: "Violence et extrémisme violent", seances: 2, fiche: null },
      { id: "5e-l13", numero: 13, competence: "Régler les conflits de façon pacifique", theme: "Notion de violence", titre: "Conséquences de la violence et de l'extrémisme violent", seances: 2, fiche: null },
      { id: "5e-l14", numero: 14, competence: "Promouvoir le développement durable", theme: "Santé, environnement et développement", titre: "Pollution de l'environnement", seances: 2, fiche: null },
      { id: "5e-l15", numero: 15, competence: "Promouvoir le développement durable", theme: "Santé, environnement et développement", titre: "Développement durable", seances: 2, fiche: null }
    ]
  },

  "4e": {
    nom: "Quatrième",
    lecons: [
      { id: "4e-l1", numero: 1, competence: "Adopter des comportements responsables", theme: "Citoyenneté", titre: "Notion de citoyen et de citoyenneté", seances: 2, fiche: null },
      { id: "4e-l2", numero: 2, competence: "Adopter des comportements responsables", theme: "Citoyenneté", titre: "Droits et devoirs du citoyen togolais", seances: 2, fiche: null },
      { id: "4e-l3", numero: 3, competence: "Adopter des comportements responsables", theme: "Décentralisation au Togo", titre: "Commune", seances: 2, fiche: null },
      { id: "4e-l4", numero: 4, competence: "Adopter des comportements responsables", theme: "Décentralisation au Togo", titre: "Préfecture", seances: 2, fiche: null },
      { id: "4e-l5", numero: 5, competence: "Adopter des comportements responsables", theme: "Démocratie participative", titre: "Rôles du parti politique et de la société civile", seances: 2, ecartGuide: true, fiche: null },
      { id: "4e-l6", numero: 6, competence: "Adopter des comportements responsables", theme: "Démocratie participative", titre: "Règlement intérieur de l'établissement", seances: 4, fiche: null },
      { id: "4e-l7", numero: 7, competence: "Respecter les droits et libertés des autres", theme: "Droits humains", titre: "Droits humains et dignité humaine", seances: 2, fiche: null },
      { id: "4e-l8", numero: 8, competence: "Respecter les droits et libertés des autres", theme: "Droits humains", titre: "Droits et libertés fondamentaux de l'homme", seances: 2, fiche: null },
      { id: "4e-l9", numero: 9, competence: "Respecter les droits et libertés des autres", theme: "Droits humains", titre: "Droits spécifiques ou catégoriels", seances: 2, fiche: null },
      { id: "4e-l10", numero: 10, competence: "Prendre soin de sa santé et entretenir son milieu de vie", theme: "Santé et environnement", titre: "Santé sexuelle de l'adolescent", seances: 2, fiche: null },
      { id: "4e-l11", numero: 11, competence: "Prendre soin de sa santé et entretenir son milieu de vie", theme: "Santé et environnement", titre: "Parenté responsable", seances: 2, fiche: null },
      { id: "4e-l12", numero: 12, competence: "Prendre soin de sa santé et entretenir son milieu de vie", theme: "Santé et environnement", titre: "Tabagisme et toxicomanie", seances: 4, fiche: null },
      { id: "4e-l13", numero: 13, competence: "Prendre soin de sa santé et entretenir son milieu de vie", theme: "Santé et environnement", titre: "Protection de l'environnement au Togo", seances: 2, fiche: null },
      { id: "4e-l14", numero: 14, competence: "Adopter des comportements faisant montre de valeurs de paix et de non-violence", theme: "Non-violence", titre: "Non-violence et lutte contre l'extrémisme violent", seances: 2, fiche: null },
      { id: "4e-l15", numero: 15, competence: "Adopter des comportements faisant montre de valeurs de paix et de non-violence", theme: "Non-violence", titre: "Martin Luther King et la lutte pour les droits civiques des Noirs", seances: 2, fiche: null }
    ]
  },

  "3e": {
    nom: "Troisième",
    lecons: [
      { id: "3e-l1", numero: 1, competence: "Adopter des comportements responsables", theme: "Démocratie à l'école", titre: "Pratiques démocratiques à l'école", seances: 2, fiche: null },
      { id: "3e-l2", numero: 2, competence: "Adopter des comportements responsables", theme: "Démocratie à l'école", titre: "Police des examens", seances: 2, fiche: null },
      { id: "3e-l3", numero: 3, competence: "Respecter les normes et les lois de la République", theme: "État et nation", titre: "Constitution togolaise", seances: 2, fiche: null },
      { id: "3e-l4", numero: 4, competence: "Respecter les normes et les lois de la République", theme: "État et nation", titre: "Hiérarchie des normes", seances: 2, fiche: null },
      { id: "3e-l5", numero: 5, competence: "Respecter les normes et les lois de la République", theme: "Décentralisation au Togo", titre: "Juxtaposition des territorialités et répartition des compétences", seances: 2, fiche: null },
      { id: "3e-l6", numero: 6, competence: "Communiquer avec respect", theme: "Droit de suffrage", titre: "Élections au Togo", seances: 2, fiche: null },
      { id: "3e-l7", numero: 7, competence: "Communiquer avec respect", theme: "Médias et lutte contre l'extrémisme violent", titre: "Médias", seances: 2, fiche: null },
      { id: "3e-l8", numero: 8, competence: "Communiquer avec respect", theme: "Médias et lutte contre l'extrémisme violent", titre: "Jeune et TIC", seances: 2, fiche: null },
      { id: "3e-l9", numero: 9, competence: "Développer de l'ambition et l'esprit d'initiative", theme: "Lutte contre la pauvreté", titre: "Formation professionnelle", seances: 2, fiche: null },
      { id: "3e-l10", numero: 10, competence: "Développer de l'ambition et l'esprit d'initiative", theme: "Lutte contre la pauvreté", titre: "Genre et développement", seances: 2, fiche: null },
      { id: "3e-l11", numero: 11, competence: "Participer à la prévention et à la gestion des catastrophes naturelles", theme: "Risques de catastrophes naturelles", titre: "Catastrophes naturelles", seances: 2, fiche: null },
      { id: "3e-l12", numero: 12, competence: "Participer à la prévention et à la gestion des catastrophes naturelles", theme: "Risques de catastrophes naturelles", titre: "Prévention et gestion des catastrophes naturelles", seances: 2, fiche: null }
    ]
  }
};

/* Fiche de démonstration (aucun contenu ECM réel) — sert uniquement à
   valider visuellement le gabarit, y compris l'intégration d'une image
   dans les supports didactiques et dans une phase du déroulement. */
const FICHE_DEMO = {
  competence: "[Exemple] Compétence à valider",
  theme: "[Exemple] Thème à valider",
  documentation: [
    "[Exemple] Programme officiel ECM, Ministère des Enseignements Primaire et Secondaire, août 2024",
    "[Exemple] Guide d'exécution du programme d'ECM"
  ],
  supportsDidactiques: [
    { type: "texte", contenu: "[Exemple] Tableau, craie, cahiers" },
    { type: "image", src: "assets/images/_demo/exemple-support.png", legende: "[Exemple] Support visuel — à remplacer par la vraie image de la leçon" }
  ],
  preRequis: ["[Exemple] Pré-requis à préciser"],
  capacitesContenus: [
    { capacite: "[Exemple] Capacité 1", contenus: ["[Exemple] Contenu 1", "[Exemple] Contenu 2"] }
  ],
  situationApprentissage: "[Exemple] Description de la situation d'apprentissage (approche exploratoire).",
  consignes: ["[Exemple] Consigne 1", "[Exemple] Consigne 2"],
  strategiesPedagogiques: ["[Exemple] Travail en petits groupes", "[Exemple] Discussion dirigée"],
  deroulement: [
    { phase: "Remobilisation", dureeMin: 10, contenu: "[Exemple] Activité de remobilisation." },
    { phase: "Présentation", dureeMin: 10, contenu: "[Exemple] Présentation de la situation d'apprentissage.", image: "assets/images/_demo/exemple-support.png" },
    { phase: "Appropriation", dureeMin: 25, contenu: "[Exemple] Activité d'appropriation." },
    { phase: "Exploration", dureeMin: 25, contenu: "[Exemple] Activité d'exploration." },
    { phase: "Mise en commun", dureeMin: 15, contenu: "[Exemple] Mise en commun des productions." },
    { phase: "Institutionnalisation / trace écrite", dureeMin: 20, contenu: "[Exemple] Trace écrite à retenir." },
    { phase: "Évaluation", dureeMin: 5, contenu: "[Exemple] Évaluation formative." }
  ],
  resumeStructure: "[Exemple] Résumé structuré de la leçon.",
  evaluation: "[Exemple] Modalités d'évaluation.",
  devoirMaison: "[Exemple] Devoir de maison."
};
