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
      { id: "6e-l1", numero: 1, competence: "Se respecter et respecter les autres", theme: "Civilité", titre: "Règles de bienséance", seances: 2, fiche: {
          competence: "Se respecter et respecter les autres",
          theme: "Civilité",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 1"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Tableau, craie, cahiers d'exercices"
            },
            {
              type: "texte",
              contenu: "Petites scènes de la vie quotidienne (repas en famille, arrivée en classe, rencontre dans la rue) proposées à l'oral par le professeur"
            }
          ],
          preRequis: [
            "Vécu quotidien des apprenants en famille, à l'école et dans la rue"
          ],
          capacitesContenus: [
            {
              capacite: "Expliquer les notions relatives à la civilité",
              contenus: [
                "Définition de civilité",
                "Faire preuve de civilité"
              ]
            },
            {
              capacite: "Acquérir les règles de bienséance",
              contenus: [
                "Règles de bienséance à la maison",
                "Règles de bienséance à l'école",
                "Règles de bienséance dans la rue"
              ]
            }
          ],
          situationApprentissage: "Les apprenants sont invités à observer et à échanger sur des scènes vécues à la maison, à l'école et dans la rue (repas en famille, arrivée en classe, rencontre dans la rue) afin d'en dégager, par eux-mêmes, ce qui relève d'un comportement civil ou non.",
          consignes: [
            "Définir la civilité et expliquer l'expression « faire preuve de civilité ».",
            "Identifier les règles de bienséance à la maison (se laver les mains avant de manger, aider ses parents, etc.).",
            "Identifier les règles de bienséance à l'école (saluer ses professeurs, éviter de manger en classe, aider un camarade en difficulté, etc.).",
            "Identifier les règles de bienséance dans la rue (éviter de tousser au visage des autres, aider une personne âgée à traverser, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur ce que signifie, pour les apprenants, « bien se comporter »."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de la situation d'apprentissage : des scènes de la vie quotidienne à observer et à commenter."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la civilité et expliquer l'expression « faire preuve de civilité » à partir des scènes proposées."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Exploitation de documents et discussion dirigée pour identifier les règles de bienséance à la maison, à l'école et dans la rue, à partir d'exemples cités par les apprenants eux-mêmes."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des règles trouvées par chaque groupe ; classement en trois catégories (maison / école / rue)."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définition de la civilité et liste des règles de bienséance retenues."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Identifier oralement une règle de bienséance à la maison."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Définition",
              contenu: "La civilité est l'ensemble des usages de savoir-vivre qui règlent les rapports entre les personnes en société. Faire preuve de civilité, c'est adopter volontairement des comportements de respect et de politesse envers son entourage, que l'on soit à la maison, à l'école ou dans la rue. C'est une qualité qui se construit par l'habitude et l'exemple des adultes."
            },
            {
              titre: "2. Les règles de bienséance à la maison et à l'école",
              contenu: "À la maison, la bienséance se traduit par des gestes simples comme se laver les mains avant de manger ou aider ses parents dans les tâches quotidiennes. À l'école, elle passe par le respect des professeurs (les saluer), une tenue correcte en classe (éviter d'y manger) et l'entraide entre camarades en difficulté. Ces règles ne sont pas des contraintes mais des marques de respect envers les personnes qui nous entourent."
            },
            {
              titre: "3. Les règles de bienséance dans la rue",
              contenu: "Dans l'espace public, la civilité s'exprime par des attentions envers autrui : éviter de tousser au visage des autres, aider une personne âgée à traverser la route, ou encore céder le passage. Ces comportements montrent que le respect d'autrui ne s'arrête pas au cercle familial ou scolaire. Ils contribuent à une vie collective plus harmonieuse."
            },
            {
              titre: "4. À retenir",
              contenu: "La civilité est donc une valeur qui s'exerce partout, avec des règles adaptées à chaque lieu de vie. Un apprenant civil est reconnaissable à son comportement respectueux, que ce soit chez lui, au collège ou dans la rue."
            }
          ],
          evaluation: "Identifier des règles de bienséance à la maison, à l'école et dans la rue.",
          devoirMaison: "Observer une situation vécue à la maison, à l'école ou dans la rue et noter par écrit deux règles de bienséance qui y ont été respectées ou non respectées."
        } },
      { id: "6e-l2", numero: 2, competence: "Se respecter et respecter les autres", theme: "Civilité", titre: "Formules de courtoisie", seances: 2, fiche: {
          competence: "Se respecter et respecter les autres",
          theme: "Civilité",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 2 (le guide ajoute les formules de remerciement, absentes du tableau récapitulatif du programme : capacité vérifiée par recoupement des deux documents officiels)"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Jeux de rôle entre apprenants, cartes-formules, cahiers"
            }
          ],
          preRequis: [
            "Vocabulaire courant du français appris à l'école primaire"
          ],
          capacitesContenus: [
            {
              capacite: "Savoir utiliser les formules de courtoisie",
              contenus: [
                "Formules de politesse",
                "Formules de salutation",
                "Formules de remerciement",
                "Formules de demande d'aide ou de service",
                "Formules d'excuse"
              ]
            }
          ],
          situationApprentissage: "Les apprenants sont invités à rejouer de petites scènes (arrivée en classe, demande d'aide à un camarade, excuse après une maladresse) pour repérer quelles formules de courtoisie utiliser.",
          consignes: [
            "Identifier et utiliser les formules de politesse (S'il vous plaît, Permettez-moi de…, Je voudrais…).",
            "Identifier et utiliser les formules de salutation (Bonjour Monsieur/Madame/Camarade…).",
            "Identifier et utiliser les formules de remerciement (Merci camarade, Soyez remercié, Recevez toute ma gratitude…).",
            "Identifier et utiliser les formules de demande d'aide ou de service (Voudriez-vous…, Puis-je vous demander de…).",
            "Identifier et utiliser les formules d'excuse (Veuillez m'excuser, Je vous prie de m'excuser, Excusez-moi…)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des règles de bienséance vues à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de courtes scènes de la vie quotidienne à rejouer (arrivée, demande d'aide, excuse)."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour identifier les formules de politesse, de salutation et de remerciement à partir des scènes proposées."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Jeux de rôle : chaque groupe rejoue une scène en utilisant les formules de demande d'aide ou de service et les formules d'excuse identifiées."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Présentation des jeux de rôle devant la classe ; relevé collectif de toutes les formules utilisées."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : liste des cinq catégories de formules de courtoisie avec des exemples pour chacune."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Utiliser oralement une formule de politesse en situation."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Pourquoi utiliser des formules de courtoisie",
              contenu: "Les formules de courtoisie sont des expressions qui permettent d'entretenir des relations harmonieuses avec les autres. Leur usage correct montre le respect que l'on porte à son interlocuteur, qu'il s'agisse d'un adulte ou d'un camarade. Elles s'apprennent et se pratiquent au quotidien, à l'école comme en dehors."
            },
            {
              titre: "2. Politesse, salutation et remerciement",
              contenu: "Les formules de politesse (« s'il vous plaît », « permettez-moi de… ») accompagnent une demande pour la rendre respectueuse. Les formules de salutation (« bonjour Monsieur/Madame/Camarade ») marquent la reconnaissance de l'autre en début d'échange. Les formules de remerciement (« merci camarade », « recevez toute ma gratitude ») expriment la gratitude après un service rendu."
            },
            {
              titre: "3. Demande d'aide et excuse",
              contenu: "Pour solliciter un service, on utilise des formules comme « voudriez-vous… » ou « puis-je vous demander de… », qui rendent la demande respectueuse plutôt qu'impérative. En cas de maladresse ou d'erreur, des formules d'excuse comme « veuillez m'excuser » ou « je vous prie de m'excuser » permettent de réparer la relation avec autrui."
            },
            {
              titre: "4. À retenir",
              contenu: "Utiliser la bonne formule au bon moment est une marque concrète de civilité. C'est un savoir-faire qui se travaille par la pratique, notamment à travers des mises en situation comme celles vécues en classe."
            }
          ],
          evaluation: "Utilisation en situation des formules de politesse.",
          devoirMaison: "Écrire un court dialogue (5 répliques) entre deux camarades utilisant au moins trois formules de courtoisie différentes."
        } },
      { id: "6e-l3", numero: 3, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "IMC et son interprétation", seances: 2, fiche: {
          competence: "S'apprécier et apprécier les autres",
          theme: "Connaissance de soi et des autres",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 3"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Toise (matériel de mesure de la taille)"
            },
            {
              type: "texte",
              contenu: "Pèse-personne (balance)"
            },
            {
              type: "image",
              src: "assets/images/6e/grille-imc.png",
              legende: "Grille d'interprétation de l'IMC — classification internationale de l'OMS"
            }
          ],
          preRequis: [
            "Notions de mesure de longueur et de masse vues en mathématiques au primaire"
          ],
          capacitesContenus: [
            {
              capacite: "Calculer son IMC",
              contenus: [
                "Définition de l'IMC",
                "Mesure de sa taille",
                "Relevé de son poids",
                "Calcul de son IMC"
              ]
            },
            {
              capacite: "Interpréter l'IMC",
              contenus: [
                "Interprétation de l'IMC à l'aide de la grille de l'OMS"
              ]
            }
          ],
          situationApprentissage: "Les apprenants sont invités à mesurer eux-mêmes leur taille et leur poids en classe, à calculer leur IMC et à découvrir ce que ce chiffre signifie grâce à une grille de référence.",
          consignes: [
            "Définir l'IMC.",
            "Mesurer sa taille à l'aide de la toise.",
            "Relever son poids à l'aide du pèse-personne.",
            "Calculer son IMC avec la formule IMC = poids (kg) ÷ taille² (m²).",
            "Interpréter son IMC à l'aide de la grille d'interprétation de l'OMS."
          ],
          strategiesPedagogiques: [
            "Discussion dirigée",
            "Exercices pratiques"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des notions de mesure de longueur et de masse."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de la toise, du pèse-personne et de la formule de l'IMC."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "Chaque apprenant mesure sa taille à l'aide de la toise et relève son poids à l'aide du pèse-personne."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Chaque apprenant calcule son IMC puis l'interprète à l'aide de la grille d'interprétation de l'OMS.",
              image: "assets/images/6e/grille-imc.png"
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Quelques apprenants partagent, s'ils le souhaitent, leur démarche de calcul et d'interprétation."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : formule de l'IMC et grille d'interprétation à recopier."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Calculer son IMC à partir d'un exemple donné par le professeur."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Définition de l'IMC",
              contenu: "L'Indice de Masse Corporelle (IMC) est un indicateur qui permet d'estimer la corpulence d'une personne à partir de sa taille et de son poids. Il est largement utilisé car il est simple à calculer et donne une première indication sur l'état de santé général."
            },
            {
              titre: "2. Comment le calculer",
              contenu: "Pour calculer son IMC, il faut d'abord mesurer sa taille à l'aide d'une toise, puis relever son poids à l'aide d'un pèse-personne. L'IMC s'obtient ensuite avec la formule IMC = poids (kg) ÷ taille² (m²). Cette mesure peut être réalisée par chaque apprenant sur lui-même en classe."
            },
            {
              titre: "3. Comment l'interpréter",
              contenu: "Une fois calculé, le chiffre obtenu doit être comparé à la grille d'interprétation officielle de l'Organisation Mondiale de la Santé (OMS), qui classe les résultats depuis la dénutrition jusqu'à l'obésité morbide, en passant par la corpulence normale, le surpoids et l'obésité. Cette grille permet à chacun de situer sa propre corpulence par rapport aux normes de santé reconnues internationalement."
            },
            {
              titre: "4. À retenir",
              contenu: "Connaître et savoir interpréter son IMC est une première étape pour prendre soin de sa santé, et sert de base à la leçon suivante sur le surpoids et l'obésité."
            }
          ],
          evaluation: "Calcul de son IMC et interprétation à l'aide de la grille.",
          devoirMaison: "Recalculer à la maison, avec un membre de la famille, son propre IMC et indiquer dans quelle catégorie il se situe."
        } },
      { id: "6e-l4", numero: 4, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "Surpoids et obésité", seances: 2, fiche: {
          competence: "S'apprécier et apprécier les autres",
          theme: "Connaissance de soi et des autres",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 4"
          ],
          supportsDidactiques: [
            {
              type: "image",
              src: "assets/images/6e/grille-imc.png",
              legende: "Grille d'interprétation de l'IMC (réutilisée de la leçon 3)"
            }
          ],
          preRequis: [
            "Grille d'interprétation de l'IMC vue en leçon 3"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les inconvénients du surpoids",
              contenus: [
                "Définition du surpoids",
                "Inconvénients du surpoids"
              ]
            },
            {
              capacite: "Relever les conséquences de l'obésité",
              contenus: [
                "Définition de l'obésité",
                "Conséquences de l'obésité"
              ]
            },
            {
              capacite: "Proposer des conseils pour éviter le surpoids et l'obésité",
              contenus: [
                "Conseils pour éviter le surpoids et l'obésité"
              ]
            }
          ],
          situationApprentissage: "À partir de la grille d'interprétation de l'IMC utilisée à la leçon précédente, les apprenants sont amenés à s'interroger sur ce que signifient les catégories « surpoids » et « obésité » et sur leurs conséquences.",
          consignes: [
            "Définir le surpoids à partir de la grille d'interprétation de l'IMC.",
            "Déterminer les inconvénients du surpoids (essoufflement rapide, ronflement la nuit, respiration bruyante, etc.).",
            "Définir l'obésité à partir de la grille d'interprétation de l'IMC.",
            "Relever les conséquences de l'obésité (risques d'hypertension, d'AVC, de cancer, d'arthrose, d'infertilité, etc.).",
            "Proposer des conseils pour éviter le surpoids et l'obésité (activités physiques régulières, boire beaucoup d'eau, éviter la gloutonnerie et le grignotage, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la grille d'interprétation de l'IMC vue à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation des catégories « surpoids » et « obésité » sur la grille.",
              image: "assets/images/6e/grille-imc.png"
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir le surpoids et déterminer ses inconvénients."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "En petits groupes, discussion dirigée pour définir l'obésité, relever ses conséquences et proposer des conseils pour éviter surpoids et obésité."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des inconvénients, conséquences et conseils trouvés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définitions, inconvénients, conséquences et conseils retenus."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un inconvénient du surpoids et une conséquence de l'obésité."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le surpoids",
              contenu: "Le surpoids correspond à une catégorie de la grille d'interprétation de l'IMC, située au-dessus de la corpulence normale. Il entraîne des inconvénients pour la personne concernée, comme l'essoufflement rapide à l'effort, le ronflement pendant le sommeil ou une respiration bruyante."
            },
            {
              titre: "2. L'obésité et ses conséquences",
              contenu: "L'obésité est une catégorie plus élevée encore sur la grille de l'IMC, associée à des risques de santé plus sérieux. Elle peut favoriser l'hypertension artérielle, les accidents vasculaires cérébraux (AVC), certains cancers, l'arthrose ou encore l'infertilité. Ces conséquences justifient une vigilance particulière face à la prise de poids excessive."
            },
            {
              titre: "3. Comment les éviter",
              contenu: "Pour prévenir le surpoids et l'obésité, il est conseillé de pratiquer des activités physiques régulières, de boire suffisamment d'eau et d'éviter la gloutonnerie ainsi que le grignotage entre les repas. Ces habitudes simples, adoptées dès le plus jeune âge, contribuent à préserver une bonne santé sur le long terme."
            },
            {
              titre: "4. À retenir",
              contenu: "Le surpoids et l'obésité ne sont pas de simples questions d'apparence mais de véritables enjeux de santé, qu'il est possible de prévenir par une bonne hygiène de vie au quotidien."
            }
          ],
          evaluation: "Relevé des inconvénients du surpoids et des conséquences de l'obésité ; propositions de conseils pour les éviter.",
          devoirMaison: "Rédiger trois conseils pour éviter le surpoids et l'obésité et les appliquer une semaine à la maison."
        } },
      { id: "6e-l5", numero: 5, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "Qui suis-je ?", seances: 2, fiche: {
          competence: "S'apprécier et apprécier les autres",
          theme: "Connaissance de soi et des autres",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 5"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Modèle vierge de fiche d'enquête individuelle, distribué par le professeur"
            }
          ],
          preRequis: [
            "Connaissance de soi acquise dans la vie familiale et scolaire"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter ses qualités, ses défauts, ses talents, ses centres d'intérêt",
              contenus: [
                "Qualités, défauts, talents, centres d'intérêt"
              ]
            },
            {
              capacite: "Présenter son métier d'avenir",
              contenus: [
                "Métier d'avenir"
              ]
            }
          ],
          situationApprentissage: "Chaque apprenant est invité à se poser la question « Qui suis-je ? » et à remplir une fiche d'enquête personnelle sur ses qualités, ses défauts, ses talents, ses centres d'intérêt et le métier qu'il envisage plus tard.",
          consignes: [
            "Préparer une fiche d'enquête personnelle afin de déterminer ses qualités, ses défauts, ses talents et ses centres d'intérêt.",
            "À partir des informations recueillies, identifier ses métiers d'avenir possibles."
          ],
          strategiesPedagogiques: [
            "Exercice pratique"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral : « Que savons-nous déjà de nous-mêmes ? »"
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation du modèle de fiche d'enquête au tableau."
            },
            {
              phase: "Appropriation",
              dureeMin: 30,
              contenu: "Chaque apprenant remplit sa fiche d'enquête individuelle (qualités, défauts, talents, centres d'intérêt)."
            },
            {
              phase: "Exploration",
              dureeMin: 20,
              contenu: "À partir des informations recueillies, chaque apprenant identifie ses métiers d'avenir possibles."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Quelques apprenants volontaires présentent leur fiche à la classe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 20,
              contenu: "Trace écrite : l'importance de se connaître soi-même pour bien s'orienter."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une qualité, un talent et un métier d'avenir envisagé."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Se connaître soi-même",
              contenu: "Bien se connaître implique d'identifier ses qualités (ce que l'on fait bien, ce qui est apprécié chez soi) et ses défauts (ce que l'on doit améliorer). Cette connaissance de soi se construit par l'observation honnête de son propre comportement et par le regard bienveillant des autres."
            },
            {
              titre: "2. Talents et centres d'intérêt",
              contenu: "Chaque apprenant possède des talents particuliers (sport, dessin, chant, mathématiques, etc.) et des centres d'intérêt qui le passionnent. Les identifier à travers une fiche d'enquête personnelle aide à mieux comprendre ce qui nous anime et ce vers quoi on pourrait naturellement s'orienter."
            },
            {
              titre: "3. Vers un métier d'avenir",
              contenu: "À partir des qualités, talents et centres d'intérêt recensés, chaque apprenant peut commencer à envisager un ou plusieurs métiers d'avenir qui lui correspondraient. Cette réflexion précoce n'est pas un choix définitif mais une première piste de réflexion sur son orientation."
            },
            {
              titre: "4. À retenir",
              contenu: "Se poser la question « Qui suis-je ? » est une démarche essentielle pour grandir en confiance et commencer à se projeter vers l'avenir de façon réaliste et personnelle."
            }
          ],
          evaluation: "Réalisation de la fiche d'enquête.",
          devoirMaison: "Demander à deux membres de la famille de citer une qualité qu'ils reconnaissent chez l'apprenant, et comparer avec sa propre fiche."
        } },
      { id: "6e-l6", numero: 6, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "Membres de ma famille", seances: 2, fiche: {
          competence: "S'apprécier et apprécier les autres",
          theme: "Connaissance de soi et des autres",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 6"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemple d'arbre généalogique simplifié dessiné au tableau"
            }
          ],
          preRequis: [
            "Vécu personnel en famille"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les parents directs",
              contenus: [
                "Définition de la famille",
                "Parents directs"
              ]
            },
            {
              capacite: "Identifier les parents proches ou éloignés",
              contenus: [
                "Parents proches ou éloignés"
              ]
            },
            {
              capacite: "Aimer les membres de ma famille",
              contenus: [
                "Amour filial",
                "Amour fraternel"
              ]
            }
          ],
          situationApprentissage: "Les apprenants sont invités à présenter oralement les membres de leur famille afin de distinguer les parents directs des parents proches ou éloignés et à s'exprimer sur les liens d'affection qui les unissent.",
          consignes: [
            "Définir la famille.",
            "Identifier les parents directs (le fils/la fille, le père/la mère, le demi-frère/la demi-sœur, la grand-mère/le grand-père, etc.).",
            "Identifier les parents proches ou éloignés (la tante, l'oncle, la cousine, le cousin, la nièce, le neveu, etc.).",
            "Expliquer l'amour filial et ses caractéristiques (écoute des parents, respect des parents et de l'adulte, confiance en ses parents, estime de soi).",
            "Expliquer l'amour fraternel et ses caractéristiques (solidarité, entraide, empathie, respect mutuel, partage)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur les membres de la famille de chacun."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'un exemple d'arbre généalogique simplifié."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la famille et identifier les parents directs."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour identifier les parents proches ou éloignés et expliquer l'amour filial et l'amour fraternel."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des réponses de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définition de la famille, parents directs/proches, amour filial et fraternel."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un parent direct et un parent proche ou éloigné."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Définition de la famille",
              contenu: "La famille est le groupe de personnes unies par des liens de parenté, de mariage ou d'affection, au sein duquel un enfant grandit et est éduqué. Elle constitue le premier cercle de socialisation de chaque individu."
            },
            {
              titre: "2. Les parents directs",
              contenu: "Les parents directs regroupent les membres les plus proches de la famille : le père, la mère, le fils, la fille, le demi-frère, la demi-sœur, la grand-mère ou le grand-père. Ce sont les personnes avec lesquelles on partage un lien de filiation immédiat."
            },
            {
              titre: "3. Les parents proches ou éloignés",
              contenu: "Au-delà du cercle direct, la famille élargie comprend la tante, l'oncle, la cousine, le cousin, la nièce ou le neveu. Ces parents proches ou éloignés font également partie du réseau familial et participent souvent à l'éducation et au soutien de l'enfant."
            },
            {
              titre: "4. L'amour filial et fraternel",
              contenu: "L'amour filial se manifeste par l'écoute des parents, le respect qui leur est dû, la confiance qu'on leur accorde et l'estime de soi qu'ils contribuent à construire. L'amour fraternel, entre frères et sœurs, se traduit par la solidarité, l'entraide, l'empathie, le respect mutuel et le partage. Ces deux formes d'amour soudent la famille au quotidien."
            }
          ],
          evaluation: "Identification des parents directs et des parents proches ou éloignés ; explication de l'amour filial.",
          devoirMaison: "Dessiner un petit arbre généalogique de sa propre famille en distinguant parents directs et parents proches ou éloignés."
        } },
      { id: "6e-l7", numero: 7, competence: "S'apprécier et apprécier les autres", theme: "Connaissance de soi et des autres", titre: "Fondements, fonctions et gestion de la famille", seances: 2, fiche: {
          competence: "S'apprécier et apprécier les autres",
          theme: "Connaissance de soi et des autres",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 7"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples de planning familial (journalier ou hebdomadaire) présentés au tableau"
            }
          ],
          preRequis: [
            "Notions vues en leçon 6 : membres de la famille"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les fondements de la famille",
              contenus: [
                "Fondements de la famille"
              ]
            },
            {
              capacite: "Déterminer les fonctions de la famille",
              contenus: [
                "Fonctions de la famille"
              ]
            },
            {
              capacite: "Aider à la bonne gestion de la famille",
              contenus: [
                "Gestion de la famille"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent sur ce qui fait tenir une famille (valeurs, rôles, organisation) à partir d'exemples de familles heureuses de leur entourage.",
          consignes: [
            "Identifier les valeurs sur lesquelles repose une famille heureuse (amour, dialogue, empathie, confiance, fidélité, foi).",
            "Déterminer les fonctions de la famille (assurer une descendance, éduquer les enfants, avoir des biens, s'entraider, s'aimer les uns les autres).",
            "Proposer la contribution des enfants à la bonne gestion de la famille (planning journalier ou hebdomadaire, répartition des tâches, épargne familiale, utilisation rationnelle de l'eau, de l'électricité, des vivres, dialogue en famille)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la leçon précédente sur les membres de la famille."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'exemples de familles heureuses de l'entourage des apprenants."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour identifier les valeurs d'une famille heureuse et déterminer les fonctions de la famille."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour proposer la contribution des enfants à la bonne gestion de la famille (planning, tâches, épargne, dialogue)."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des propositions de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : fondements, fonctions et gestion de la famille."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une fonction de la famille et une contribution possible des enfants à sa gestion."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les fondements d'une famille heureuse",
              contenu: "Une famille heureuse repose sur des valeurs fortes telles que l'amour, le dialogue, l'empathie, la confiance, la fidélité et, pour beaucoup de familles togolaises, la foi. Ces valeurs constituent le socle sur lequel se construit la vie familiale."
            },
            {
              titre: "2. Les fonctions de la famille",
              contenu: "La famille remplit plusieurs fonctions essentielles : assurer une descendance, éduquer les enfants, acquérir et gérer des biens communs, s'entraider dans les moments difficiles et s'aimer les uns les autres au quotidien. Ces fonctions font de la famille une véritable institution sociale."
            },
            {
              titre: "3. La contribution des enfants à sa gestion",
              contenu: "Les enfants peuvent activement contribuer à la bonne gestion de leur famille en participant à l'organisation d'un planning journalier ou hebdomadaire, en assumant une répartition des tâches, en encourageant l'épargne familiale et en veillant à l'utilisation rationnelle de l'eau, de l'électricité et des vivres. Le dialogue en famille reste également un élément clé de cette gestion partagée."
            },
            {
              titre: "4. À retenir",
              contenu: "Une famille se construit et se gère collectivement : chaque membre, y compris l'enfant, a un rôle à jouer dans son bon fonctionnement et son bonheur."
            }
          ],
          evaluation: "Relevé des fonctions de la famille ; propositions de contribution des enfants à sa gestion.",
          devoirMaison: "Proposer, avec ses parents, un petit planning hebdomadaire des tâches familiales et le présenter en classe."
        } },
      { id: "6e-l8", numero: 8, competence: "Protéger son cadre de vie", theme: "Connaissance de son cadre de vie", titre: "Description et utilité de la maison", seances: 2, fiche: {
          competence: "Protéger son cadre de vie",
          theme: "Connaissance de son cadre de vie",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 8"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Photos ou dessins de différents types de maison apportés par le professeur"
            }
          ],
          preRequis: [
            "Vécu quotidien à la maison"
          ],
          capacitesContenus: [
            {
              capacite: "Décrire la maison",
              contenus: [
                "Définitions de la maison",
                "Description de la maison"
              ]
            },
            {
              capacite: "Donner l'utilité de la maison",
              contenus: [
                "Utilité de la maison"
              ]
            },
            {
              capacite: "Prendre soin de sa maison",
              contenus: [
                "Soins de la maison"
              ]
            }
          ],
          situationApprentissage: "Les apprenants décrivent leur propre maison (pièces, matériaux) pour en dégager une définition commune, son utilité et les soins à lui apporter.",
          consignes: [
            "Proposer une définition de la maison.",
            "Décrire la maison : ses différentes pièces avec leurs composantes.",
            "Relever l'utilité de la maison (protection des intempéries, protection du regard des autres, etc.).",
            "Montrer comment prendre soin de sa maison (nettoyage régulier, protection des fosses septiques, rangement, soin des animaux, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral : « Décris ta maison en une phrase. »"
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de photos ou dessins de différents types de maison."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour proposer une définition de la maison et la décrire (pièces et composantes)."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever l'utilité de la maison et montrer comment en prendre soin."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des définitions et propositions de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définition, description, utilité et soins de la maison."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Décrire brièvement sa propre maison."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qu'est-ce qu'une maison",
              contenu: "La maison est l'espace bâti dans lequel une personne ou une famille vit et se sent chez elle. Elle se compose généralement de plusieurs pièces, chacune avec ses propres composantes et fonctions (chambre, cuisine, salon, etc.)."
            },
            {
              titre: "2. Son utilité",
              contenu: "La maison protège ses habitants des intempéries (pluie, soleil, vent) ainsi que du regard des autres, offrant ainsi intimité et sécurité. Elle constitue le cadre de vie principal de la famille."
            },
            {
              titre: "3. En prendre soin",
              contenu: "Prendre soin de sa maison passe par un nettoyage régulier, la protection des fosses septiques, un rangement soigné et l'attention portée aux animaux qui y vivent éventuellement. Ces gestes simples permettent de préserver un cadre de vie sain et agréable."
            }
          ],
          evaluation: "Description de la maison.",
          devoirMaison: "Faire le plan simple de sa maison en indiquant le nom de chaque pièce."
        } },
      { id: "6e-l9", numero: 9, competence: "Protéger son cadre de vie", theme: "Connaissance de son cadre de vie", titre: "Accidents domestiques et précautions à prendre", seances: 2, fiche: {
          competence: "Protéger son cadre de vie",
          theme: "Connaissance de son cadre de vie",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 9"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Récits d'accidents domestiques rapportés par les apprenants"
            }
          ],
          preRequis: [
            "Leçon 8 : la maison et ses différentes pièces"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les différents accidents domestiques",
              contenus: [
                "Définitions des accidents domestiques",
                "Différents accidents domestiques"
              ]
            },
            {
              capacite: "Proposer des précautions à prendre pour éviter les accidents domestiques",
              contenus: [
                "Précautions à prendre pour éviter les accidents domestiques"
              ]
            }
          ],
          situationApprentissage: "Les apprenants racontent des accidents domestiques dont ils ont été témoins ou victimes pour en identifier les causes et les précautions à prendre.",
          consignes: [
            "Définir les accidents domestiques.",
            "Identifier les différents accidents domestiques (chutes, brûlures, coupures, piqûres, intoxications, etc.).",
            "Proposer les précautions à prendre pour éviter les accidents domestiques (retirer les meubles encombrant les lieux de passage, ranger les objets tranchants et pointus hors de portée des enfants, ranger les jouets, arroser la cour avant de la balayer, éteindre le feu après usage, bien fermer le gaz après usage, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la leçon précédente sur la maison."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de récits d'accidents domestiques."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir les accidents domestiques et en identifier les différents types."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour proposer les précautions à prendre pour éviter chaque type d'accident domestique."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des accidents identifiés et des précautions proposées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : types d'accidents domestiques et précautions à prendre."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un accident domestique et une précaution pour l'éviter."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Définition et types d'accidents domestiques",
              contenu: "Les accidents domestiques sont des accidents qui surviennent dans le cadre de la maison ou de ses abords. Ils prennent des formes variées : chutes, brûlures, coupures, piqûres ou encore intoxications."
            },
            {
              titre: "2. Les précautions à prendre",
              contenu: "Pour éviter ces accidents, plusieurs précautions simples peuvent être adoptées : retirer les meubles qui encombrent les lieux de passage, ranger les objets tranchants et pointus hors de portée des enfants, ranger les jouets après usage, arroser la cour avant de la balayer pour éviter la poussière, et bien éteindre le feu et fermer le gaz après utilisation."
            },
            {
              titre: "3. À retenir",
              contenu: "La plupart des accidents domestiques sont évitables par la vigilance et de bonnes habitudes au quotidien. Chaque membre de la famille, y compris l'enfant, peut contribuer à un environnement domestique plus sûr."
            }
          ],
          evaluation: "Proposition de précautions à prendre pour éviter les accidents domestiques.",
          devoirMaison: "Identifier à la maison trois risques d'accidents domestiques et proposer une précaution pour chacun."
        } },
      { id: "6e-l10", numero: 10, competence: "Protéger son cadre de vie", theme: "Connaissance de son cadre de vie", titre: "Connaissance du collège", seances: 2, fiche: {
          competence: "Protéger son cadre de vie",
          theme: "Connaissance de son cadre de vie",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 10"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Emploi du temps réel de la classe (séances de 55 minutes)"
            }
          ],
          preRequis: [
            "Vécu de l'école primaire"
          ],
          capacitesContenus: [
            {
              capacite: "Relever les changements par rapport à l'école primaire",
              contenus: [
                "Changements au niveau du corps d'encadrement (plusieurs enseignants au lieu d'un)",
                "Changements au niveau de la tenue",
                "Changements au niveau des horaires de travail (7h à midi, 14h30 à 17h30, séances de 55 minutes)",
                "Changements au niveau des évaluations"
              ]
            },
            {
              capacite: "Cultiver de bonnes relations entre élèves",
              contenus: [
                "Relations entre les élèves (bonne camaraderie, amitié, complémentarité, différence positive, travail collaboratif)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants comparent leur nouvelle vie au collège avec leurs souvenirs de l'école primaire pour relever les changements et réfléchir aux relations à cultiver entre camarades.",
          consignes: [
            "Relever les changements par rapport à l'école primaire au niveau du corps d'encadrement (plusieurs enseignants au lieu d'un).",
            "Relever les changements au niveau de la tenue, des horaires de travail (7h à midi, 14h30 à 17h30, séances de 55 minutes) et des évaluations.",
            "Identifier et cultiver de bonnes relations entre élèves (bonne camaraderie, amitié, complémentarité, différence positive, travail collaboratif)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur les souvenirs de l'école primaire."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de l'emploi du temps du collège."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour relever les changements par rapport à l'école primaire (encadrement, tenue, horaires, séances de 55 minutes, évaluations)."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour identifier et cultiver de bonnes relations entre élèves."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des changements relevés et des relations proposées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : principaux changements par rapport au primaire et qualités d'une bonne relation entre élèves."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un changement par rapport à l'école primaire."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Un nouvel encadrement",
              contenu: "Contrairement à l'école primaire où un seul enseignant encadrait la classe, le collège introduit plusieurs enseignants, chacun spécialisé dans une ou plusieurs matières. Ce changement demande à l'apprenant de s'adapter à des méthodes et des exigences différentes selon les professeurs."
            },
            {
              titre: "2. Nouveaux horaires et nouvelle organisation",
              contenu: "Le collège impose également de nouveaux horaires de travail, généralement de 7h à midi puis de 14h30 à 17h30, organisés en séances de 55 minutes. La tenue et les modalités d'évaluation changent aussi par rapport au primaire, ce qui constitue une étape importante dans la scolarité de l'apprenant."
            },
            {
              titre: "3. Cultiver de bonnes relations entre élèves",
              contenu: "Dans ce nouvel environnement, il est essentiel de cultiver de bonnes relations avec ses camarades : camaraderie, amitié, complémentarité, acceptation des différences et travail collaboratif. Ces relations positives facilitent l'adaptation à la vie collégienne."
            },
            {
              titre: "4. À retenir",
              contenu: "S'adapter au collège demande de comprendre ses nouvelles règles de fonctionnement tout en construisant des relations saines avec ses camarades et ses professeurs."
            }
          ],
          evaluation: "Relevé des changements par rapport à l'école primaire ; identification des bonnes relations entre élèves.",
          devoirMaison: "Écrire cinq phrases comparant une journée à l'école primaire et une journée au collège."
        } },
      { id: "6e-l11", numero: 11, competence: "Promouvoir les idéaux de paix et de non-violence", theme: "Extrémisme violent et culture de la paix", titre: "Comprendre l'extrémisme violent", seances: 2, fiche: {
          competence: "Promouvoir les idéaux de paix et de non-violence",
          theme: "Extrémisme violent et culture de la paix",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 11"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Supports écrits ou visuels simples illustrant des comportements d'intolérance ou de rejet (choisis avec prudence par le professeur)"
            }
          ],
          preRequis: [
            "Vocabulaire de base : tolérance, respect, différence"
          ],
          capacitesContenus: [
            {
              capacite: "Expliquer la notion d'extrémisme violent",
              contenus: [
                "Définition de l'extrémisme violent",
                "Notions liées : intolérance, violence, discrimination"
              ]
            },
            {
              capacite: "Identifier les signaux d'alerte de l'extrémisme violent",
              contenus: [
                "Signes d'alerte de l'extrémisme violent (rupture avec la famille, rejet des pairs, rejet de l'autorité, isolement et repli sur soi, intolérance à l'égard des autres, adoption de croyances extrêmes)"
              ]
            }
          ],
          situationApprentissage: "À partir de supports écrits ou visuels présentant des comportements d'intolérance ou de rejet, les apprenants sont amenés à s'interroger sur ce qu'est l'extrémisme violent et comment le reconnaître.",
          consignes: [
            "Définir l'extrémisme violent.",
            "Définir des notions liées à l'extrémisme violent : intolérance, violence, discrimination.",
            "Identifier les signes d'alerte de l'extrémisme violent (rupture avec la famille, rejet des pairs, rejet de l'autorité, isolement et repli sur soi, intolérance à l'égard des autres, adoption de croyances extrêmes)."
          ],
          strategiesPedagogiques: [
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur ce qu'évoque le mot « violence » pour les apprenants."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de supports écrits ou visuels sur des comportements d'intolérance."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "Discussion dirigée pour définir l'extrémisme violent et les notions liées (intolérance, violence, discrimination)."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Exploitation de documents pour identifier les signes d'alerte de l'extrémisme violent."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution collective des signes d'alerte identifiés."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définition de l'extrémisme violent et liste des signes d'alerte."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un signe d'alerte de l'extrémisme violent."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Définition de l'extrémisme violent",
              contenu: "L'extrémisme violent désigne des idées ou des comportements qui rejettent radicalement les autres et peuvent conduire à la violence pour imposer une vision du monde. Il est lié à des notions comme l'intolérance, la violence et la discrimination."
            },
            {
              titre: "2. Les signes d'alerte",
              contenu: "Plusieurs signaux permettent de repérer une personne en voie de radicalisation : la rupture avec la famille, le rejet des pairs, le rejet de l'autorité, l'isolement et le repli sur soi, l'intolérance à l'égard des autres, ou encore l'adoption de croyances extrêmes. Reconnaître ces signes tôt permet d'agir avant que la situation ne s'aggrave."
            },
            {
              titre: "3. À retenir",
              contenu: "Comprendre l'extrémisme violent et savoir en reconnaître les signes d'alerte est une première étape essentielle pour le prévenir, dans son entourage comme dans la société."
            }
          ],
          evaluation: "Définition de l'extrémisme violent.",
          devoirMaison: "Citer deux signes d'alerte de l'extrémisme violent vus en classe et expliquer pourquoi il est important de les reconnaître tôt."
        } },
      { id: "6e-l12", numero: 12, competence: "Promouvoir les idéaux de paix et de non-violence", theme: "Extrémisme violent et culture de la paix", titre: "Notions de paix", seances: 2, fiche: {
          competence: "Promouvoir les idéaux de paix et de non-violence",
          theme: "Extrémisme violent et culture de la paix",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 12"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Modèle vierge de tableau comparatif « œuvres de la guerre / œuvres de la paix » à compléter en classe"
            }
          ],
          preRequis: [
            "Notions vues en leçon 11 : extrémisme violent"
          ],
          capacitesContenus: [
            {
              capacite: "Donner les différentes définitions de la paix",
              contenus: [
                "Définitions : paix, culture de paix"
              ]
            },
            {
              capacite: "Identifier les différents types de paix",
              contenus: [
                "Paix avec soi-même, paix avec les autres, paix avec son environnement"
              ]
            },
            {
              capacite: "Comparer les œuvres de la guerre et les œuvres de la paix",
              contenus: [
                "Tableau comparatif des œuvres de la guerre et des œuvres de la paix"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent sur des exemples connus de guerre et de paix (dans le monde ou dans leur environnement proche) pour construire ensemble un tableau comparatif de leurs conséquences.",
          consignes: [
            "Définir les notions de « paix » et de « culture de paix ».",
            "Identifier les différents types de paix (la paix avec soi-même, la paix avec les autres, la paix avec son environnement).",
            "Réaliser, avec la classe, un tableau comparatif des œuvres de la guerre et des œuvres de la paix."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée",
            "Exercice pratique"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la leçon précédente sur l'extrémisme violent."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation du modèle vierge de tableau comparatif."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "Discussion dirigée pour définir la paix, la culture de paix, et identifier les différents types de paix."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "En petits groupes, exercice pratique : compléter le tableau comparatif des œuvres de la guerre et des œuvres de la paix."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Mise en commun des tableaux réalisés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définitions, types de paix et tableau comparatif retenu."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un type de paix et une œuvre de paix."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Définir la paix",
              contenu: "La paix ne se limite pas à l'absence de guerre : elle désigne un état d'harmonie et de sérénité. La culture de paix regroupe l'ensemble des valeurs et des comportements qui favorisent cette harmonie au sein de la société."
            },
            {
              titre: "2. Les différents types de paix",
              contenu: "On distingue trois formes de paix : la paix avec soi-même (être en accord avec ses propres pensées et actions), la paix avec les autres (entretenir des relations harmonieuses avec son entourage) et la paix avec son environnement (respecter la nature qui nous entoure). Ces trois dimensions sont complémentaires."
            },
            {
              titre: "3. Œuvres de guerre et œuvres de paix",
              contenu: "Le tableau comparatif réalisé en classe permet d'opposer les œuvres de la guerre — destructions, souffrances, déplacements de populations — aux œuvres de la paix — écoles, hôpitaux, infrastructures, entraide entre les peuples. Cette comparaison montre concrètement les bénéfices de la paix pour une société."
            },
            {
              titre: "4. À retenir",
              contenu: "Cultiver la paix, sous toutes ses formes, est un choix quotidien qui profite à soi-même, aux autres et à l'environnement."
            }
          ],
          evaluation: "Identification des différents types de paix ; réalisation du tableau comparatif des œuvres de la guerre et des œuvres de la paix.",
          devoirMaison: "Compléter le tableau comparatif avec deux exemples supplémentaires trouvés à la maison (dans les nouvelles ou avec les parents)."
        } },
      { id: "6e-l13", numero: 13, competence: "Promouvoir les idéaux de paix et de non-violence", theme: "Extrémisme violent et culture de la paix", titre: "Paix avec soi-même et avec les autres", seances: 2, fiche: {
          competence: "Promouvoir les idéaux de paix et de non-violence",
          theme: "Extrémisme violent et culture de la paix",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 13"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Situations vécues rapportées par les apprenants (disputes, réconciliations)"
            }
          ],
          preRequis: [
            "Notions de paix vues en leçon 12"
          ],
          capacitesContenus: [
            {
              capacite: "Montrer comment « être en paix avec soi-même »",
              contenus: [
                "Être en paix avec soi-même"
              ]
            },
            {
              capacite: "Montrer comment « être en paix avec les autres »",
              contenus: [
                "Être en paix avec les autres"
              ]
            }
          ],
          situationApprentissage: "Les apprenants racontent des expériences personnelles où ils se sont sentis en paix ou en conflit, avec eux-mêmes ou avec d'autres, pour en dégager des comportements de paix.",
          consignes: [
            "Définir « la paix avec soi-même ».",
            "Proposer des comportements démontrant la paix avec soi-même (pardonner à soi-même ses fautes, éviter de se comparer aux autres, valoriser ses qualités et talents, etc.).",
            "Définir « la paix avec les autres ».",
            "Proposer des comportements démontrant la paix avec les autres (écouter attentivement les autres, pardonner aux autres, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des types de paix vus à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de situations vécues (disputes, réconciliations) rapportées par les apprenants."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la paix avec soi-même et proposer des comportements qui la démontrent."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour définir la paix avec les autres et proposer des comportements qui la démontrent."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des comportements proposés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : comportements démontrant la paix avec soi-même et avec les autres."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un comportement démontrant la paix avec les autres."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Être en paix avec soi-même",
              contenu: "Être en paix avec soi-même signifie savoir se pardonner ses propres fautes, éviter de se comparer sans cesse aux autres, et apprendre à valoriser ses propres qualités et talents. C'est une attitude intérieure qui se cultive avec le temps."
            },
            {
              titre: "2. Être en paix avec les autres",
              contenu: "Être en paix avec les autres passe par une écoute attentive de son entourage et par la capacité à pardonner lorsque l'on a été blessé. Ces comportements permettent d'éviter et de désamorcer les conflits du quotidien."
            },
            {
              titre: "3. À retenir",
              contenu: "La paix avec soi-même et la paix avec les autres sont liées : on ne peut véritablement être en paix avec autrui sans être d'abord en paix avec soi-même."
            }
          ],
          evaluation: "Proposition de comportements démontrant la paix avec soi-même et avec les autres.",
          devoirMaison: "Écrire une situation vécue où l'apprenant a fait preuve de paix avec soi-même ou avec un(e) camarade."
        } },
      { id: "6e-l14", numero: 14, competence: "Adopter des règles d'hygiène et prendre soin de son environnement", theme: "Santé, environnement", titre: "Conservation et protection des aliments", seances: 2, fiche: {
          competence: "Adopter des règles d'hygiène et prendre soin de son environnement",
          theme: "Santé, environnement",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 14"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples réels d'aliments conservés (poisson fumé, viande séchée, légumes salés) décrits en classe"
            }
          ],
          preRequis: [
            "Habitudes alimentaires familiales"
          ],
          capacitesContenus: [
            {
              capacite: "Énumérer les différentes méthodes de conservation des aliments",
              contenus: [
                "Raisons de la conservation des aliments",
                "Différentes méthodes de conservation (fumage, séchage, salaison, etc.)"
              ]
            },
            {
              capacite: "Énumérer les différentes méthodes de protection des aliments",
              contenus: [
                "Raisons de la protection des aliments",
                "Différentes méthodes de protection (frigo, garde-manger, nappe, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants partagent des exemples de méthodes utilisées chez eux pour conserver et protéger les aliments (fumage du poisson, séchage, mise au frigo...) afin d'en comprendre les raisons.",
          consignes: [
            "Expliquer les raisons de la conservation des aliments (éviter le gaspillage, éviter qu'ils se gâtent).",
            "Relever les différentes méthodes de conservation des aliments (fumage, séchage, salaison, etc.).",
            "Expliquer les raisons de la protection des aliments (éviter la contamination, éviter la destruction par les animaux).",
            "Relever les différentes méthodes de protection des aliments (mettre au frigo, mettre dans le garde-manger, couvrir de nappe, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur des aliments conservés connus des apprenants."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'exemples réels d'aliments conservés et protégés."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour expliquer les raisons de la conservation et relever ses méthodes."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour expliquer les raisons de la protection des aliments et relever ses méthodes."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des méthodes trouvées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : raisons et méthodes de conservation et de protection des aliments."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une méthode de conservation et une méthode de protection des aliments."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Pourquoi conserver les aliments",
              contenu: "Conserver les aliments permet d'éviter le gaspillage et d'empêcher qu'ils ne se gâtent avant d'être consommés. Plusieurs méthodes traditionnelles sont utilisées à cet effet, comme le fumage, le séchage ou la salaison."
            },
            {
              titre: "2. Pourquoi protéger les aliments",
              contenu: "Protéger les aliments vise à éviter leur contamination par des germes ou leur destruction par des animaux. Cela passe par des moyens simples comme les mettre au frigo, les ranger dans un garde-manger ou les couvrir d'une nappe."
            },
            {
              titre: "3. À retenir",
              contenu: "Conservation et protection des aliments sont deux gestes complémentaires et essentiels pour préserver la santé de la famille et éviter le gaspillage des ressources alimentaires."
            }
          ],
          evaluation: "Relevé des différentes méthodes de conservation ; explication des raisons de la protection des aliments.",
          devoirMaison: "Observer à la maison une méthode de conservation ou de protection des aliments utilisée et la décrire en quelques phrases."
        } },
      { id: "6e-l15", numero: 15, competence: "Adopter des règles d'hygiène et prendre soin de son environnement", theme: "Santé, environnement", titre: "Comité d'hygiène de l'établissement", seances: 2, fiche: {
          competence: "Adopter des règles d'hygiène et prendre soin de son environnement",
          theme: "Santé, environnement",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 15"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Règlement intérieur ou note de service relative au comité d'hygiène du collège, si disponible"
            }
          ],
          preRequis: [
            "Connaissance du collège (leçon 10)"
          ],
          capacitesContenus: [
            {
              capacite: "Donner la composition du comité d'hygiène de l'établissement",
              contenus: [
                "Composition du comité d'hygiène (un conseiller principal d'éducation, un enseignant, deux élèves dont un garçon et une fille, le responsable des vendeurs)"
              ]
            },
            {
              capacite: "Identifier le rôle du comité d'hygiène de l'établissement",
              contenus: [
                "Rôle du comité d'hygiène"
              ]
            },
            {
              capacite: "Relever les actions quotidiennes du comité d'hygiène de l'établissement",
              contenus: [
                "Actions quotidiennes (contrôler la mise à jour des carnets de santé des vendeurs, contrôler leur propreté, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants s'interrogent sur qui veille à la propreté et à la santé dans leur collège, en observant les vendeurs et le personnel présents dans l'établissement.",
          consignes: [
            "Donner la composition du comité d'hygiène d'un collège.",
            "Identifier le rôle du comité d'hygiène d'un collège.",
            "Énumérer les actions quotidiennes du comité d'hygiène d'un collège (contrôler la mise à jour des carnets de santé des vendeurs, contrôler la propreté des vendeurs, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral : « Qui veille à la propreté de notre collège ? »"
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation du règlement intérieur ou de la note de service, si disponible."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour donner la composition du comité d'hygiène."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour identifier le rôle et énumérer les actions quotidiennes du comité d'hygiène."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des réponses de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : composition, rôle et actions quotidiennes du comité d'hygiène."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un membre du comité d'hygiène et une de ses actions quotidiennes."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Composition du comité d'hygiène",
              contenu: "Le comité d'hygiène d'un établissement scolaire est composé d'un conseiller principal d'éducation, d'un enseignant, de deux élèves (un garçon et une fille) et du responsable des vendeurs présents dans l'établissement."
            },
            {
              titre: "2. Son rôle et ses actions",
              contenu: "Ce comité a pour rôle de veiller à la propreté et à la santé au sein du collège. Concrètement, il contrôle quotidiennement la mise à jour des carnets de santé des vendeurs ainsi que leur propreté, afin de garantir un environnement scolaire sain pour tous les élèves."
            },
            {
              titre: "3. À retenir",
              contenu: "Le comité d'hygiène est un acteur discret mais essentiel du quotidien du collège, garant de conditions d'hygiène satisfaisantes pour toute la communauté scolaire."
            }
          ],
          evaluation: "Présentation de la composition et identification du rôle du comité d'hygiène du collège.",
          devoirMaison: "Se renseigner sur les membres du comité d'hygiène de son propre établissement et les noter."
        } },
      { id: "6e-l16", numero: 16, competence: "Adopter des règles d'hygiène et prendre soin de son environnement", theme: "Santé, environnement", titre: "Entretien de l'environnement immédiat", seances: 2, fiche: {
          competence: "Adopter des règles d'hygiène et prendre soin de son environnement",
          theme: "Santé, environnement",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 16"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Observation directe de la cour du collège ou de photos de l'environnement immédiat de l'école"
            }
          ],
          preRequis: [
            "Notions d'hygiène vues au primaire"
          ],
          capacitesContenus: [
            {
              capacite: "Expliquer « avoir droit à un environnement sain »",
              contenus: [
                "Définition d'« environnement immédiat »",
                "Avoir droit à un environnement sain"
              ]
            },
            {
              capacite: "Montrer comment entretenir son environnement immédiat",
              contenus: [
                "Entretien de son environnement immédiat (balayer régulièrement la maison et ses alentours, participer aux travaux communautaires du quartier, nettoyer sa salle de classe, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants observent leur environnement immédiat (salle de classe, cour, quartier) pour identifier ce qui relève d'un environnement sain ou non.",
          consignes: [
            "Définir la notion d'environnement immédiat.",
            "Expliquer l'expression « avoir droit à un environnement sain ».",
            "Proposer des actions démontrant l'entretien de son environnement immédiat (balayer régulièrement la maison et ses alentours, participer aux travaux communautaires du quartier, nettoyer sa salle de classe, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Observation rapide de la propreté de la salle de classe."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de photos de l'environnement immédiat de l'école."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir l'environnement immédiat et expliquer le droit à un environnement sain."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour proposer des actions démontrant l'entretien de son environnement immédiat."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des actions proposées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définition de l'environnement immédiat et actions d'entretien à retenir."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une action d'entretien de son environnement immédiat."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le droit à un environnement sain",
              contenu: "L'environnement immédiat désigne l'espace qui entoure directement une personne : sa maison, sa cour, sa salle de classe, son quartier. Chaque individu a droit à un environnement sain, c'est-à-dire propre et non pollué."
            },
            {
              titre: "2. Comment l'entretenir",
              contenu: "Entretenir son environnement immédiat passe par des gestes simples et réguliers : balayer la maison et ses alentours, participer aux travaux communautaires du quartier, ou encore nettoyer sa salle de classe. Ces actions, répétées par chacun, améliorent la vie de tous."
            },
            {
              titre: "3. À retenir",
              contenu: "Avoir droit à un environnement sain implique aussi le devoir d'y contribuer activement, dans son cadre de vie quotidien."
            }
          ],
          evaluation: "Proposition d'actions démontrant l'entretien de son environnement immédiat.",
          devoirMaison: "Participer à une action d'entretien de son environnement immédiat (balayage, rangement) et la décrire brièvement."
        } },
      { id: "6e-l17", numero: 17, competence: "Adopter des règles d'hygiène et prendre soin de son environnement", theme: "Santé, environnement", titre: "Jardins et parterres", seances: 2, fiche: {
          competence: "Adopter des règles d'hygiène et prendre soin de son environnement",
          theme: "Santé, environnement",
          documentation: [
            "Programme officiel d'ECM, classe de 6e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçon 17"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Observation du jardin scolaire ou des parterres du collège, si existants"
            }
          ],
          preRequis: [
            "Notions d'entretien de l'environnement (leçon 16)"
          ],
          capacitesContenus: [
            {
              capacite: "Donner l'utilité des jardins",
              contenus: [
                "Définition de « jardin »",
                "Différents types de jardins",
                "Utilité des jardins (consommation, protection du sol, purification de l'air, lutte contre le réchauffement climatique, éducation, médecine, opportunité entrepreneuriale)",
                "Utilité du jardin à l'école"
              ]
            },
            {
              capacite: "Donner l'utilité des parterres",
              contenus: [
                "Définition de « parterre »",
                "Utilité des parterres (décoration, lutte contre l'érosion du sol, protection des fondations des bâtiments)",
                "Utilité des parterres à l'école"
              ]
            },
            {
              capacite: "Protéger les jardins et parterres",
              contenus: [
                "Protection des jardins et parterres (arroser régulièrement, enlever les mauvaises herbes, éviter d'en faire des dépotoirs)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants observent le jardin ou les parterres de leur collège (ou en imaginent, à défaut) pour en dégager l'utilité et les moyens de les protéger.",
          consignes: [
            "Définir le jardin, identifier ses différents types et relever son utilité (consommation, protection du sol, purification de l'air, lutte contre le réchauffement climatique, éducation, médecine, opportunité entrepreneuriale), y compris à l'école.",
            "Définir le parterre et relever son utilité (décoration, lutte contre l'érosion du sol, protection des fondations des bâtiments), y compris à l'école.",
            "Montrer comment protéger les jardins et les parterres (arroser régulièrement, enlever les mauvaises herbes, éviter d'en faire des dépotoirs)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la leçon précédente sur l'entretien de l'environnement immédiat."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Observation du jardin ou des parterres du collège, ou de photos à défaut."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir le jardin, ses types, et relever son utilité, y compris à l'école."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour définir le parterre, relever son utilité et proposer des actions pour protéger jardins et parterres."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des réponses de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : utilité des jardins et des parterres, et moyens de les protéger."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une utilité du jardin et une action pour le protéger."
            }
          ],
          resumeStructure: [
            {
              titre: "1. L'utilité des jardins",
              contenu: "Les jardins, sous leurs différents types, rendent de nombreux services : ils fournissent des aliments à la consommation, protègent le sol, purifient l'air, luttent contre le réchauffement climatique, ont une valeur éducative et médicinale, et peuvent même représenter une opportunité entrepreneuriale. À l'école, un jardin permet en plus d'appliquer concrètement des notions apprises en classe."
            },
            {
              titre: "2. L'utilité des parterres",
              contenu: "Les parterres, quant à eux, jouent un rôle décoratif tout en luttant contre l'érosion du sol et en protégeant les fondations des bâtiments. À l'école, ils embellissent le cadre de vie des élèves et du personnel."
            },
            {
              titre: "3. Comment les protéger",
              contenu: "L'entretien des jardins et des parterres nécessite un arrosage régulier, le désherbage et la vigilance pour éviter qu'ils ne deviennent des dépotoirs. Ces gestes simples garantissent qu'ils continuent à rendre leurs services sur le long terme."
            },
            {
              titre: "4. À retenir",
              contenu: "Jardins et parterres ne sont pas de simples éléments de décor : ce sont des ressources utiles qui méritent d'être protégées, en particulier dans l'enceinte scolaire."
            }
          ],
          evaluation: "Relevé de l'utilité des jardins et des parterres.",
          devoirMaison: "Proposer un emplacement possible pour un petit jardin ou parterre dans la cour du collège et en expliquer l'utilité."
        } }
    ],
    integrations: [
      { id: "6e-i1", apresLeconId: "6e-l2", competence: "Se respecter et respecter les autres", themesCouverts: [
          "Civilité"
        ], leconsCouvertes: [
          "6e-l1",
          "6e-l2"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 6e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçons 1 et 2"
          ],
          preRequis: [
            "Règles de bienséance (leçon 1) et formules de courtoisie (leçon 2) déjà étudiées"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 1 — Règles de bienséance",
              capacites: [
                "Expliquer les notions relatives à la civilité",
                "Acquérir les règles de bienséance"
              ]
            },
            {
              lecon: "Leçon 2 — Formules de courtoisie",
              capacites: [
                "Savoir utiliser les formules de courtoisie"
              ]
            }
          ],
          situationComplexe: "Kodjo arrive en retard chez sa tante Akoua pour le repas de famille. Il salue rapidement sans regarder personne, s'assoit sans se laver les mains, mange en parlant fort, puis se lève sans un mot pour repartir jouer avec ses camarades dans la rue, où il bouscule une vieille dame sans s'excuser.",
          consignes: [
            "Relever, dans la situation, les manquements aux règles de bienséance et aux formules de courtoisie observés chez Kodjo.",
            "Pour chaque manquement relevé, indiquer la règle de bienséance ou la formule de courtoisie qui aurait dû être respectée.",
            "Réécrire, en 5 à 6 phrases, comment Kodjo aurait dû se comporter dans cette même situation."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation complexe, lit le texte avec la classe, pose des questions de compréhension, modélise au tableau le traitement de la première consigne avec les élèves.",
              activiteEleves: "Écoutent, répondent aux questions de compréhension, participent oralement à la modélisation de la première consigne."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation par écrit, rappelle les trois consignes, circule dans la classe, observe sans intervenir sur le fond.",
              activiteEleves: "Traitent individuellement et par écrit les trois consignes de la situation complexe."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau à partir de productions d'élèves, relève les erreurs fréquentes (manquements non identifiés, règles mal formulées), remédie.",
              activiteEleves: "Comparent leur production à la correction, s'auto-corrigent, posent des questions sur les points mal compris."
            }
          ],
          corrigeType: {
            introduction: "Dans cette situation, Kodjo manque à plusieurs règles de bienséance et n'utilise aucune formule de courtoisie, aussi bien en famille que dans la rue.",
            developpement: [
              {
                consigne: "Consigne 1 — manquements relevés",
                reponse: "Il salue rapidement sans regarder personne (salutation bâclée) ; il ne se lave pas les mains avant de manger ; il mange en parlant fort ; il repart sans un mot (pas de formule de politesse ni de remerciement) ; il bouscule une personne âgée sans s'excuser dans la rue."
              },
              {
                consigne: "Consigne 2 — règles et formules attendues",
                reponse: "Saluer poliment en regardant la personne (formule de salutation) ; se laver les mains avant de manger (règle de bienséance à la maison) ; manger calmement sans parler fort (règle de bienséance à table) ; remercier et prendre congé poliment avant de partir (formule de remerciement) ; s'excuser après avoir bousculé une personne âgée et l'aider si besoin (règle de bienséance dans la rue, formule d'excuse)."
              },
              {
                consigne: "Consigne 3 — comportement attendu",
                reponse: "Exemple de réponse attendue : « Kodjo arrive, salue chaleureusement sa tante et les autres membres de la famille présents. Il se lave les mains avant de s'asseoir à table. Il mange calmement, sans parler la bouche pleine. Avant de repartir, il remercie sa tante pour le repas et prend congé poliment. Dans la rue, en bousculant par mégarde une personne âgée, il s'excuse aussitôt et l'aide à retrouver son équilibre. »"
              }
            ],
            conclusion: "Un comportement civil et courtois se reconnaît à de petits gestes simples : saluer, se laver les mains, remercier, s'excuser. Ces règles s'appliquent aussi bien à la maison, à l'école que dans la rue."
          },
          criteresEvaluation: [
            {
              critere: "Pertinence et exhaustivité des manquements relevés",
              bareme: "6 pts"
            },
            {
              critere: "Justesse des règles de bienséance et formules de courtoisie proposées",
              bareme: "6 pts"
            },
            {
              critere: "Cohérence et réalisme du comportement réécrit",
              bareme: "5 pts"
            },
            {
              critere: "Qualité de la langue et présentation",
              bareme: "3 pts"
            }
          ]
        } },
      { id: "6e-i2", apresLeconId: "6e-l7", competence: "S'apprécier et apprécier les autres", themesCouverts: [
          "Connaissance de soi et des autres"
        ], leconsCouvertes: [
          "6e-l3",
          "6e-l4",
          "6e-l5",
          "6e-l6",
          "6e-l7"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 6e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçons 3 à 7"
          ],
          preRequis: [
            "Capacités des leçons 3 à 7 (IMC, surpoids/obésité, connaissance de soi, famille) déjà étudiées"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 3 — IMC et son interprétation",
              capacites: [
                "Calculer son IMC",
                "Interpréter l'IMC"
              ]
            },
            {
              lecon: "Leçon 4 — Surpoids et obésité",
              capacites: [
                "Identifier les inconvénients du surpoids",
                "Proposer des conseils pour éviter le surpoids et l'obésité"
              ]
            },
            {
              lecon: "Leçon 5 — Qui suis-je ?",
              capacites: [
                "Présenter ses qualités, ses défauts, ses talents, ses centres d'intérêt",
                "Présenter son métier d'avenir"
              ]
            },
            {
              lecon: "Leçon 6 — Membres de ma famille",
              capacites: [
                "Identifier les parents directs et les parents proches ou éloignés"
              ]
            },
            {
              lecon: "Leçon 7 — Fondements, fonctions et gestion de la famille",
              capacites: [
                "Identifier les fondements de la famille"
              ]
            }
          ],
          situationComplexe: "Akossiwa, 11 ans, a calculé son IMC en classe : 26,5. Elle est inquiète car sa grande sœur lui dit qu'elle est « en surpoids ». Elle vit avec ses parents et ses deux cousines chez qui elle a grandi. Elle hésite entre devenir institutrice, comme sa mère le souhaite, ou couturière, comme elle en rêve elle-même.",
          consignes: [
            "À l'aide de la grille d'interprétation de l'IMC, indiquer dans quelle catégorie se situe Akossiwa et expliquer ce que cela signifie.",
            "Proposer à Akossiwa deux conseils pour éviter que son surpoids ne s'aggrave.",
            "Identifier, dans la situation, un parent direct et un parent proche ou éloigné d'Akossiwa.",
            "En s'appuyant sur ses qualités et ses centres d'intérêt, aider Akossiwa à faire un choix argumenté entre institutrice et couturière, en tenant compte du dialogue en famille."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, s'assure de sa compréhension, modélise avec la classe le traitement de la consigne 1 (lecture de la grille IMC).",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation de la consigne 1."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs (mauvaise lecture de la grille IMC, confusion parents directs/proches), remédie.",
              activiteEleves: "Comparent, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation mobilise les connaissances sur l'IMC, la famille et la connaissance de soi pour aider Akossiwa à comprendre sa situation et à faire un choix éclairé.",
            developpement: [
              {
                consigne: "Consigne 1 — lecture de l'IMC",
                reponse: "Un IMC de 26,5 se situe dans la tranche 25–29,9 de la grille, ce qui correspond au « surpoids (pré-obésité) ». Cela signifie qu'Akossiwa doit surveiller son alimentation et son activité physique, sans que cela soit une maladie grave."
              },
              {
                consigne: "Consigne 2 — conseils",
                reponse: "Exemples de conseils : pratiquer régulièrement une activité physique (marche, jeux actifs) ; boire beaucoup d'eau et éviter le grignotage entre les repas."
              },
              {
                consigne: "Consigne 3 — parents directs/proches",
                reponse: "Parent direct : sa mère ou son père. Parent proche ou éloigné : ses cousines, chez qui elle a grandi."
              },
              {
                consigne: "Consigne 4 — choix argumenté",
                reponse: "Réponse attendue : Akossiwa peut, par exemple, choisir de devenir couturière si elle montre un talent et un centre d'intérêt réel pour la couture (leçon 5), tout en expliquant à sa mère, par le dialogue en famille (fondement d'une famille heureuse, leçon 7), les raisons de son choix — ce qui illustre à la fois la connaissance de soi et le respect du dialogue familial."
              }
            ],
            conclusion: "Se connaître soi-même (son corps, ses qualités, ses centres d'intérêt) et connaître sa famille (ses parents, le dialogue) aide à mieux grandir et à faire des choix responsables pour son avenir."
          },
          criteresEvaluation: [
            {
              critere: "Lecture correcte de la grille IMC et interprétation",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence des conseils proposés",
              bareme: "4 pts"
            },
            {
              critere: "Identification correcte des parents directs/proches",
              bareme: "4 pts"
            },
            {
              critere: "Qualité et cohérence de l'argumentation sur le choix de métier",
              bareme: "5 pts"
            },
            {
              critere: "Présentation et qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "6e-i3", apresLeconId: "6e-l10", competence: "Protéger son cadre de vie", themesCouverts: [
          "Connaissance de son cadre de vie"
        ], leconsCouvertes: [
          "6e-l8",
          "6e-l9",
          "6e-l10"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 6e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçons 8 à 10"
          ],
          preRequis: [
            "Capacités des leçons 8 à 10 (maison, accidents domestiques, connaissance du collège) déjà étudiées"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 8 — Description et utilité de la maison",
              capacites: [
                "Décrire la maison",
                "Prendre soin de sa maison"
              ]
            },
            {
              lecon: "Leçon 9 — Accidents domestiques et précautions à prendre",
              capacites: [
                "Identifier les différents accidents domestiques",
                "Proposer des précautions à prendre"
              ]
            },
            {
              lecon: "Leçon 10 — Connaissance du collège",
              capacites: [
                "Relever les changements par rapport à l'école primaire",
                "Cultiver de bonnes relations entre élèves"
              ]
            }
          ],
          situationComplexe: "En rentrant du collège, Yawo trouve sa petite sœur qui a trébuché sur des sandales laissées au milieu du couloir de la maison, près de la cuisine où une marmite d'eau chaude est restée sans surveillance. Le lendemain, à son nouveau collège, il remarque qu'un camarade de sa classe, mal à l'aise avec les nouveaux horaires en séances de 55 minutes, reste seul pendant la récréation.",
          consignes: [
            "Identifier, dans la situation, les risques d'accidents domestiques présents dans la maison de Yawo.",
            "Proposer des précautions que la famille de Yawo devrait prendre pour éviter ces accidents.",
            "Relever, dans la situation, un changement du collège par rapport à l'école primaire évoqué.",
            "Proposer à Yawo un comportement à adopter envers son camarade isolé, en lien avec les bonnes relations entre élèves."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, s'assure de sa compréhension, modélise avec la classe le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "La situation combine un risque d'accident domestique et une situation vécue au collège nécessitant de bonnes relations entre élèves.",
            developpement: [
              {
                consigne: "Consigne 1 — risques domestiques",
                reponse: "Risques identifiés : les sandales laissées au milieu du couloir (risque de chute) et la marmite d'eau chaude sans surveillance près de la cuisine (risque de brûlure)."
              },
              {
                consigne: "Consigne 2 — précautions",
                reponse: "Précautions : ranger systématiquement les sandales et objets à leur place pour dégager les lieux de passage ; ne jamais laisser une marmite d'eau chaude sans surveillance, surtout à portée des plus jeunes enfants."
              },
              {
                consigne: "Consigne 3 — changement collège/primaire",
                reponse: "Changement relevé : les nouveaux horaires organisés en séances de 55 minutes (au lieu du fonctionnement de l'école primaire)."
              },
              {
                consigne: "Consigne 4 — comportement envers le camarade",
                reponse: "Réponse attendue : Yawo devrait aller vers son camarade, engager la conversation, l'inclure dans un jeu ou une discussion, faire preuve de camaraderie et d'entraide pour l'aider à s'intégrer, ce qui illustre les bonnes relations entre élèves étudiées en leçon 10."
              }
            ],
            conclusion: "Protéger son cadre de vie, c'est aussi bien prévenir les accidents domestiques à la maison que veiller à de bonnes relations avec ses camarades au collège."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte des risques domestiques",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence des précautions proposées",
              bareme: "5 pts"
            },
            {
              critere: "Identification du changement collège/primaire",
              bareme: "4 pts"
            },
            {
              critere: "Pertinence du comportement proposé envers le camarade",
              bareme: "4 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "6e-i4", apresLeconId: "6e-l13", competence: "Promouvoir les idéaux de paix et de non-violence", themesCouverts: [
          "Extrémisme violent et culture de la paix"
        ], leconsCouvertes: [
          "6e-l11",
          "6e-l12",
          "6e-l13"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 6e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçons 11 à 13"
          ],
          preRequis: [
            "Capacités des leçons 11 à 13 (extrémisme violent, notions de paix) déjà étudiées"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 11 — Comprendre l'extrémisme violent",
              capacites: [
                "Expliquer la notion d'extrémisme violent",
                "Identifier les signaux d'alerte de l'extrémisme violent"
              ]
            },
            {
              lecon: "Leçon 12 — Notions de paix",
              capacites: [
                "Donner les différentes définitions de la paix",
                "Comparer les œuvres de la guerre et les œuvres de la paix"
              ]
            },
            {
              lecon: "Leçon 13 — Paix avec soi-même et avec les autres",
              capacites: [
                "Montrer comment être en paix avec soi-même et avec les autres"
              ]
            }
          ],
          situationComplexe: "Depuis quelques semaines, Essowè, un élève de la classe, s'isole de plus en plus, refuse de parler à ses camarades habituels, rejette les remarques de ses professeurs et tient des propos très intolérants envers un groupe d'élèves d'une autre région. Deux de ses camarades, inquiets, se demandent comment réagir sans le rejeter à leur tour.",
          consignes: [
            "Relever, dans le comportement d'Essowè, les signes d'alerte de l'extrémisme violent.",
            "Expliquer en quoi ce comportement s'oppose à la « paix avec les autres ».",
            "Proposer, aux deux camarades d'Essowè, des comportements de paix à adopter face à cette situation, plutôt que le rejet.",
            "Réaliser un petit tableau comparatif entre ce qui aggraverait la situation d'Essowè (œuvres de la guerre) et ce qui pourrait l'aider (œuvres de la paix)."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, lit le texte avec la classe, pose des questions de compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau à partir de productions d'élèves, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation illustre des signes d'alerte de l'extrémisme violent et interroge sur la meilleure façon d'y répondre par la paix plutôt que par le rejet.",
            developpement: [
              {
                consigne: "Consigne 1 — signes d'alerte",
                reponse: "Signes d'alerte relevés : isolement et repli sur soi, rejet des pairs, rejet de l'autorité, intolérance à l'égard d'un groupe d'élèves."
              },
              {
                consigne: "Consigne 2 — opposition à la paix avec les autres",
                reponse: "L'intolérance envers un groupe d'élèves et le rejet des autres s'opposent directement à la paix avec les autres, qui suppose l'écoute et le respect mutuel."
              },
              {
                consigne: "Consigne 3 — comportements proposés",
                reponse: "Réponse attendue : les deux camarades peuvent continuer à écouter Essowè sans le juger, lui parler calmement, l'inclure dans les activités de classe, et alerter un adulte de confiance (professeur, CPE) plutôt que de l'isoler à leur tour."
              },
              {
                consigne: "Consigne 4 — tableau comparatif",
                reponse: "Œuvres de la guerre (à éviter) : rejeter Essowè, se moquer de lui, répondre à son intolérance par l'agressivité. Œuvres de la paix (à privilégier) : dialogue, écoute, médiation d'un adulte, gestes d'inclusion."
              }
            ],
            conclusion: "Face aux signes d'alerte de l'extrémisme violent chez un camarade, la réponse la plus utile reste la paix : écoute, dialogue et recours à un adulte, plutôt que le rejet ou l'agressivité."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte des signes d'alerte",
              bareme: "5 pts"
            },
            {
              critere: "Justesse de l'analyse en lien avec la paix avec les autres",
              bareme: "4 pts"
            },
            {
              critere: "Pertinence et réalisme des comportements proposés",
              bareme: "6 pts"
            },
            {
              critere: "Qualité du tableau comparatif guerre/paix",
              bareme: "3 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "6e-i5", apresLeconId: "6e-l17", competence: "Adopter des règles d'hygiène et prendre soin de son environnement", themesCouverts: [
          "Santé, environnement"
        ], leconsCouvertes: [
          "6e-l14",
          "6e-l15",
          "6e-l16",
          "6e-l17"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 6e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 6e — Leçons 14 à 17"
          ],
          preRequis: [
            "Capacités des leçons 14 à 17 (aliments, comité d'hygiène, environnement, jardins/parterres) déjà étudiées"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 14 — Conservation et protection des aliments",
              capacites: [
                "Énumérer les méthodes de conservation et de protection des aliments"
              ]
            },
            {
              lecon: "Leçon 15 — Comité d'hygiène de l'établissement",
              capacites: [
                "Rôle et actions quotidiennes du comité d'hygiène"
              ]
            },
            {
              lecon: "Leçon 16 — Entretien de l'environnement immédiat",
              capacites: [
                "Montrer comment entretenir son environnement immédiat"
              ]
            },
            {
              lecon: "Leçon 17 — Jardins et parterres",
              capacites: [
                "Donner l'utilité des jardins et des parterres",
                "Protéger les jardins et parterres"
              ]
            }
          ],
          situationComplexe: "Le comité d'hygiène du collège d'Afi a remarqué que des élèves laissent traîner des restes de nourriture non protégés près du petit jardin scolaire, attirant des mouches, et que les parterres à l'entrée du collège sont envahis de mauvaises herbes et jonchés de déchets.",
          consignes: [
            "Relever, dans la situation, ce qui pose un problème de protection des aliments et d'entretien de l'environnement immédiat.",
            "Proposer des méthodes de protection des aliments que les élèves devraient adopter à la cantine ou dans la cour.",
            "Indiquer quelles actions quotidiennes le comité d'hygiène de l'établissement pourrait mener pour résoudre ce problème.",
            "Proposer des actions pour protéger et remettre en état le jardin et les parterres du collège."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, s'assure de sa compréhension, modélise avec la classe le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation combine un problème de protection des aliments, d'entretien de l'environnement immédiat et de protection des jardins et parterres au sein du collège.",
            developpement: [
              {
                consigne: "Consigne 1 — problèmes relevés",
                reponse: "Restes de nourriture non protégés attirant les mouches (manque de protection des aliments) ; parterres envahis de mauvaises herbes et jonchés de déchets (manque d'entretien de l'environnement immédiat)."
              },
              {
                consigne: "Consigne 2 — méthodes de protection des aliments",
                reponse: "Couvrir les restes de nourriture, les jeter dans une poubelle prévue à cet effet plutôt que de les laisser traîner, éviter de manger n'importe où dans la cour."
              },
              {
                consigne: "Consigne 3 — actions du comité d'hygiène",
                reponse: "Le comité d'hygiène pourrait organiser un contrôle quotidien de la propreté autour des points de vente et de la cantine, sensibiliser les élèves, et veiller à la présence de poubelles suffisantes."
              },
              {
                consigne: "Consigne 4 — protection du jardin et des parterres",
                reponse: "Désherber régulièrement les parterres, ramasser les déchets, arroser le jardin, organiser un tour de rôle des élèves pour leur entretien régulier."
              }
            ],
            conclusion: "Un environnement scolaire sain repose sur des gestes simples et réguliers : protéger les aliments, entretenir l'environnement immédiat et prendre soin des jardins et parterres, avec l'implication de tous, élèves et comité d'hygiène."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte des problèmes de la situation",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence des méthodes de protection des aliments proposées",
              bareme: "4 pts"
            },
            {
              critere: "Pertinence des actions proposées pour le comité d'hygiène",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence des actions de protection du jardin et des parterres",
              bareme: "4 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } }
    ]
  },
  "5e": {
    nom: "Cinquième",
    lecons: [
      { id: "5e-l1", numero: 1, competence: "Adopter des comportements civiques", theme: "Civisme", titre: "Civisme : concepts clés", seances: 2, fiche: {
          competence: "Adopter des comportements civiques",
          theme: "Civisme",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 1"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Tableau, craie, cahiers ; exemples d'actualité locale évoquant le civisme"
            }
          ],
          preRequis: [
            "Notions de civilité et de règles de bienséance vues en 6e"
          ],
          capacitesContenus: [
            {
              capacite: "Expliquer les concepts liés au civisme",
              contenus: [
                "Civisme",
                "Incivisme",
                "Sens civique",
                "Actes inciviques",
                "Amour de la patrie",
                "Engagement pour la patrie",
                "Vivre ensemble"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent sur des exemples vécus ou entendus de comportements « civiques » ou « inciviques » dans leur quartier pour construire progressivement une définition du civisme et des notions qui lui sont liées.",
          consignes: [
            "Définir le civisme.",
            "Définir les concepts liés au civisme : incivisme, sens civique, actes inciviques, amour de la patrie, engagement pour la patrie, vivre ensemble."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral : « Qu'est-ce qu'un bon citoyen pour vous ? »"
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'exemples d'actualité locale illustrant des comportements civiques ou inciviques."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir le civisme."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour définir les concepts liés au civisme (incivisme, sens civique, actes inciviques, amour de la patrie, engagement pour la patrie, vivre ensemble)."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des définitions trouvées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définitions du civisme et des concepts liés."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Définir oralement le civisme."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le civisme et l'incivisme",
              contenu: "Le civisme est le respect, par chaque citoyen, de ses devoirs envers la société et envers la patrie. Il s'oppose à l'incivisme, qui regroupe les comportements contraires à ce respect (les « actes inciviques »). Un citoyen civique agit toujours en pensant à l'intérêt collectif, pas seulement à son intérêt personnel."
            },
            {
              titre: "2. Le sens civique",
              contenu: "Le sens civique désigne la conscience qu'a chaque personne de ses devoirs envers la société. Il pousse à agir de manière responsable, même sans surveillance, parce que l'on comprend l'utilité de ces règles pour le bien commun."
            },
            {
              titre: "3. L'amour de la patrie et le vivre ensemble",
              contenu: "L'amour de la patrie se traduit par un engagement concret en sa faveur, qui peut prendre des formes variées selon les situations. Le « vivre ensemble » désigne quant à lui la capacité de cohabiter harmonieusement avec les autres membres de la société, malgré les différences."
            },
            {
              titre: "4. À retenir",
              contenu: "Le civisme rassemble donc plusieurs notions complémentaires — sens civique, amour de la patrie, vivre ensemble — qui, mises en pratique au quotidien, permettent de lutter contre l'incivisme."
            }
          ],
          evaluation: "Définition des notions liées au civisme.",
          devoirMaison: "Donner un exemple de comportement civique et un exemple de comportement incivique observés dans son quartier."
        } },
      { id: "5e-l2", numero: 2, competence: "Adopter des comportements civiques", theme: "Civisme", titre: "Comportements civiques et inciviques", seances: 2, fiche: {
          competence: "Adopter des comportements civiques",
          theme: "Civisme",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 2"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Cas vécus rapportés par les apprenants (école, rue, quartier)"
            }
          ],
          preRequis: [
            "Définition du civisme vue en leçon 1"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les comportements inciviques au quotidien",
              contenus: [
                "Comportements inciviques à l'école, dans la rue, dans le quartier"
              ]
            },
            {
              capacite: "Adopter des comportements civiques au quotidien",
              contenus: [
                "Comportements civiques à l'école, dans la rue, dans le quartier"
              ]
            }
          ],
          situationApprentissage: "Les apprenants observent et racontent des scènes vécues à l'école, dans la rue et dans le quartier pour distinguer ce qui relève du civisme ou de l'incivisme.",
          consignes: [
            "Identifier les comportements inciviques au quotidien à l'école, dans la rue et dans le quartier.",
            "Proposer des actions et comportements civiques au quotidien à l'école, dans la rue et dans le quartier."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la définition du civisme vue à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de cas vécus rapportés par les apprenants."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour identifier les comportements inciviques à l'école, dans la rue et dans le quartier."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour proposer des actions et comportements civiques à l'école, dans la rue et dans le quartier."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des comportements identifiés et proposés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : exemples de comportements inciviques et civiques dans les trois lieux étudiés."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un comportement incivique et son équivalent civique."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les comportements inciviques",
              contenu: "Au quotidien, l'incivisme se manifeste à l'école (tricherie, dégradation du matériel), dans la rue (jet de déchets, non-respect du code de la route) ou dans le quartier (bruit excessif, non-respect du voisinage). Ces comportements nuisent à la vie collective, même lorsqu'ils semblent anodins pris isolément."
            },
            {
              titre: "2. Les comportements civiques à adopter",
              contenu: "À l'inverse, des comportements civiques simples peuvent être adoptés partout : respecter le matériel scolaire et les règles de vie à l'école, jeter ses déchets aux endroits prévus et respecter la circulation dans la rue, ou encore contribuer à la propreté et à l'entente dans son quartier."
            },
            {
              titre: "3. À retenir",
              contenu: "Le civisme n'est pas une notion abstraite : il se vit concrètement, tous les jours, à travers des choix de comportement à l'école, dans la rue et dans le quartier."
            }
          ],
          evaluation: "Identification de comportements inciviques à l'école ; proposition d'actions civiques dans le quartier.",
          devoirMaison: "Observer une journée et noter un comportement civique qu'on a soi-même adopté."
        } },
      { id: "5e-l3", numero: 3, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : la rue", titre: "Rue : concepts clés", seances: 2, fiche: {
          competence: "Aimer et respecter son cadre de vie",
          theme: "Connaissance de son cadre de vie : la rue",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 3"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Photos ou dessins de rue, ruelle, carrefour, rond-point, trottoir, passage piéton"
            }
          ],
          preRequis: [
            "Vécu quotidien de la rue du quartier"
          ],
          capacitesContenus: [
            {
              capacite: "Définir les concepts liés à la rue",
              contenus: [
                "Chemin",
                "Sentier",
                "Route/rue",
                "Ruelle",
                "Autoroute",
                "Boulevard",
                "Carrefour",
                "Rond-point",
                "Chaussée",
                "Trottoir",
                "Bas-côté",
                "Passage piéton"
              ]
            }
          ],
          situationApprentissage: "Les apprenants décrivent le trajet qu'ils empruntent pour venir au collège afin d'identifier et de nommer les différents éléments de la rue qu'ils traversent.",
          consignes: [
            "Définir les concepts relatifs à la rue : chemin, sentier, route/rue, ruelle, autoroute, boulevard, carrefour, rond-point, chaussée, trottoir, bas-côté, passage piéton."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur le trajet emprunté pour venir au collège."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de photos ou dessins illustrant différents éléments de la rue."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir chemin, sentier, route/rue et ruelle."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour définir autoroute, boulevard, carrefour, rond-point, chaussée, trottoir, bas-côté et passage piéton."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des définitions trouvées, illustrées par des exemples du quartier."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : lexique illustré des concepts liés à la rue."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer trois éléments de la rue et les définir brièvement."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les voies de circulation",
              contenu: "La rue regroupe plusieurs types de voies : le chemin et le sentier (voies étroites, souvent non goudronnées), la route ou rue, la ruelle (voie étroite entre des habitations), l'autoroute et le boulevard (grandes voies de circulation)."
            },
            {
              titre: "2. Les points de croisement",
              contenu: "Certains endroits de la rue sont des points de croisement entre plusieurs voies : le carrefour et le rond-point, où la prudence est particulièrement importante pour tous les usagers."
            },
            {
              titre: "3. Les espaces réservés aux piétons",
              contenu: "D'autres éléments de la rue sont réservés à la sécurité des piétons : le trottoir, le bas-côté et le passage piéton. Bien les connaître et les utiliser correctement permet de circuler en toute sécurité."
            },
            {
              titre: "4. À retenir",
              contenu: "Savoir nommer et reconnaître ces différents espaces de la rue est une première étape indispensable pour comprendre comment bien s'y comporter, ce qui sera approfondi dans les leçons suivantes."
            }
          ],
          evaluation: "Définition des concepts liés à la rue.",
          devoirMaison: "Dessiner le plan simplifié d'un carrefour connu en nommant ses différents éléments (chaussée, trottoir, passage piéton)."
        } },
      { id: "5e-l4", numero: 4, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : la rue", titre: "Dangers potentiels de la rue", seances: 2, fiche: {
          competence: "Aimer et respecter son cadre de vie",
          theme: "Connaissance de son cadre de vie : la rue",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 4"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Récits d'accidents ou d'incidents de rue rapportés par les apprenants"
            }
          ],
          preRequis: [
            "Concepts liés à la rue vus en leçon 3"
          ],
          capacitesContenus: [
            {
              capacite: "Relever les fonctions de la rue",
              contenus: [
                "Fonctions de la rue (joindre deux lieux, circulation des véhicules, motos, vélos et piétons)"
              ]
            },
            {
              capacite: "Identifier les dangers potentiels de la rue",
              contenus: [
                "Dangers potentiels de la rue (encombrement de la rue, conduite sous l'effet de stupéfiants, divagation des bêtes, excès de vitesse, amusement sur la voie, etc.)"
              ]
            },
            {
              capacite: "Montrer comment se comporter dans la rue",
              contenus: [
                "Comportements dans la rue (éviter de s'amuser dans la rue, éviter de jeter des ordures dans la rue, respecter le code de la route, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants racontent des situations dangereuses vécues ou observées dans la rue pour en dégager les dangers potentiels et les bons comportements à adopter.",
          consignes: [
            "Relever les fonctions de la rue (joindre deux lieux, circulation des véhicules, motos, vélos et piétons).",
            "Identifier les dangers potentiels de la rue (encombrement de la rue, conduite sous l'effet de stupéfiants, divagation des bêtes, excès de vitesse, amusement sur la voie, etc.).",
            "Proposer des comportements à adopter dans la rue (éviter de s'amuser dans la rue, éviter de jeter des ordures dans la rue, respecter le code de la route, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des concepts liés à la rue vus à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de récits de situations dangereuses vécues dans la rue."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour relever les fonctions de la rue."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour identifier les dangers potentiels de la rue et proposer des comportements à y adopter."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des dangers et comportements identifiés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : fonctions, dangers et comportements à adopter dans la rue."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un danger potentiel de la rue et un comportement pour l'éviter."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les fonctions de la rue",
              contenu: "La rue a pour fonction principale de relier deux lieux entre eux et de permettre la circulation des véhicules, des motos, des vélos et des piétons. Elle est donc un espace partagé par des usagers très différents."
            },
            {
              titre: "2. Les dangers potentiels",
              contenu: "Cet espace partagé comporte des dangers réels : l'encombrement de la rue, la conduite sous l'effet de stupéfiants, la divagation des bêtes, l'excès de vitesse ou encore le fait de s'amuser sur la voie publique. Ces dangers concernent aussi bien les conducteurs que les piétons."
            },
            {
              titre: "3. Les bons comportements à adopter",
              contenu: "Pour limiter ces risques, il convient d'éviter de s'amuser dans la rue, de ne pas y jeter d'ordures et de respecter scrupuleusement le code de la route. Ces comportements simples réduisent considérablement les risques d'accident."
            },
            {
              titre: "4. À retenir",
              contenu: "La rue rend un service essentiel à la collectivité mais exige, en retour, prudence et discipline de la part de tous ceux qui l'empruntent."
            }
          ],
          evaluation: "Identification des dangers potentiels de la rue ; proposition de comportements à adopter dans la rue.",
          devoirMaison: "Observer sa rue pendant un trajet et noter un danger potentiel identifié."
        } },
      { id: "5e-l5", numero: 5, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : la rue", titre: "Règles du code de la route", seances: 3, note: "Prévoir une sortie de classe pour expérimenter le code de la route.", fiche: {
          competence: "Aimer et respecter son cadre de vie",
          theme: "Connaissance de son cadre de vie : la rue",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 5",
            "NB officiel : organiser une sortie de classe pour expérimenter le code de la route"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Support écrit reprenant des extraits simplifiés du code de la route togolais"
            },
            {
              type: "texte",
              contenu: "Sortie de classe encadrée dans les abords immédiats du collège pour observer panneaux, passages piétons et comportements réels"
            }
          ],
          preRequis: [
            "Dangers potentiels de la rue vus en leçon 4"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les cibles du code de la route",
              contenus: [
                "Définition du code de la route",
                "Cibles du code de la route (piétons, cyclistes, motocyclistes, automobilistes)"
              ]
            },
            {
              capacite: "Préciser le code pour les piétons",
              contenus: [
                "Règles que les piétons doivent respecter"
              ]
            },
            {
              capacite: "Préciser le code pour les cyclistes",
              contenus: [
                "Règles que les cyclistes doivent respecter"
              ]
            }
          ],
          situationApprentissage: "Avant une sortie encadrée aux abords du collège, les apprenants s'interrogent sur les règles qu'un piéton et qu'un cycliste doivent respecter pour circuler en sécurité.",
          consignes: [
            "Définir le code de la route.",
            "Identifier les cibles du code de la route (piétons, cyclistes, motocyclistes, automobilistes).",
            "À partir de supports écrits, préciser les règles que les piétons doivent respecter.",
            "À partir de supports écrits, préciser les règles que les cyclistes doivent respecter.",
            "Lors de la sortie de classe encadrée, observer et vérifier concrètement l'application de ces règles."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée",
            "Sortie de classe encadrée (expérimentation du code de la route)"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 15,
              contenu: "Rappel des dangers de la rue vus à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 15,
              contenu: "Présentation du support écrit sur le code de la route et de ses cibles."
            },
            {
              phase: "Appropriation",
              dureeMin: 40,
              contenu: "En petits groupes, discussion dirigée pour définir le code de la route et identifier ses cibles (piétons, cyclistes, motocyclistes, automobilistes)."
            },
            {
              phase: "Exploration",
              dureeMin: 45,
              contenu: "Exploitation de documents pour préciser les règles des piétons et des cyclistes, puis sortie de classe encadrée aux abords du collège pour observer concrètement panneaux, passages piétons et comportements réels."
            },
            {
              phase: "Mise en commun",
              dureeMin: 20,
              contenu: "Retour sur la sortie : mise en commun des observations faites sur le terrain."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 25,
              contenu: "Trace écrite : règles du code de la route pour les piétons et pour les cyclistes."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une règle que doit respecter un piéton et une règle que doit respecter un cycliste."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le code de la route et ses cibles",
              contenu: "Le code de la route est l'ensemble des règles qui organisent la circulation sur la voie publique. Il concerne tous les usagers de la rue : les piétons, les cyclistes, les motocyclistes et les automobilistes, chacun ayant des règles spécifiques à respecter."
            },
            {
              titre: "2. Les règles pour les piétons",
              contenu: "Le piéton doit notamment emprunter les trottoirs et les passages prévus pour lui, et rester vigilant avant de traverser une chaussée. Ces règles visent avant tout à protéger sa sécurité face aux véhicules."
            },
            {
              titre: "3. Les règles pour les cyclistes",
              contenu: "Le cycliste, de son côté, doit circuler du côté droit de la chaussée, signaler ses changements de direction et respecter la signalisation, au même titre que les autres véhicules motorisés."
            },
            {
              titre: "4. À retenir",
              contenu: "La sortie de classe encadrée permet de vérifier concrètement, sur le terrain, que ces règles sont bien appliquées par les piétons et les cyclistes rencontrés, pour ancrer ces apprentissages dans la réalité quotidienne."
            }
          ],
          evaluation: "Précision des règles du code de la route pour les piétons et pour les cyclistes.",
          devoirMaison: "Observer, sur le chemin du retour, si les piétons et les cyclistes croisés respectent les règles étudiées et rapporter une observation."
        } },
      { id: "5e-l6", numero: 6, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : l'école", titre: "Utilité et organisation de l'école", seances: 2, fiche: {
          competence: "Aimer et respecter son cadre de vie",
          theme: "Connaissance de son cadre de vie : l'école",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 6"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Organigramme simple d'un collège (à dessiner au tableau avec la classe)"
            }
          ],
          preRequis: [
            "Connaissance du collège vue en 6e"
          ],
          capacitesContenus: [
            {
              capacite: "Relever l'utilité de l'école",
              contenus: [
                "Définition de l'école",
                "Utilité de l'école (éducation, formation professionnelle, formation civique, etc.)"
              ]
            },
            {
              capacite: "Présenter l'organisation d'un collège",
              contenus: [
                "Organisation d'un collège (les cycles, les niveaux, les examens, les matières)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants s'interrogent sur ce que leur apporte l'école et sur la manière dont leur collège est organisé (niveaux, examens, matières).",
          consignes: [
            "Définir l'école.",
            "Relever l'utilité de l'école (éducation, formation professionnelle, formation civique, etc.).",
            "Présenter l'organisation d'un collège (les cycles, les niveaux, les examens, les matières)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral : « À quoi sert l'école, selon vous ? »"
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'un organigramme simple de collège."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir l'école et relever son utilité."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour présenter l'organisation d'un collège (cycles, niveaux, examens, matières)."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des réponses de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définition, utilité et organisation d'un collège."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une utilité de l'école."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Ce qu'est l'école",
              contenu: "L'école est l'institution chargée d'instruire et d'éduquer les jeunes générations. Elle joue un rôle central dans le développement de chaque individu et de la société dans son ensemble."
            },
            {
              titre: "2. Son utilité",
              contenu: "L'école assure plusieurs missions essentielles : l'éducation générale, la formation professionnelle pour préparer à un métier, et la formation civique pour former des citoyens responsables. Ces trois missions se complètent tout au long de la scolarité."
            },
            {
              titre: "3. L'organisation d'un collège",
              contenu: "Un collège s'organise en cycles et en niveaux (6e, 5e, 4e, 3e), rythmés par des examens qui valident les apprentissages, et structurés par un ensemble de matières enseignées. Comprendre cette organisation aide l'apprenant à mieux se situer dans son parcours scolaire."
            }
          ],
          evaluation: "Relevé de l'utilité de l'école.",
          devoirMaison: "Faire la liste des matières étudiées cette année et indiquer le niveau et le cycle de sa classe."
        } },
      { id: "5e-l7", numero: 7, competence: "Aimer et respecter son cadre de vie", theme: "Connaissance de son cadre de vie : l'école", titre: "Vie au collège", seances: 2, fiche: {
          competence: "Aimer et respecter son cadre de vie",
          theme: "Connaissance de son cadre de vie : l'école",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 7"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Emploi du temps et règlement intérieur du collège"
            }
          ],
          preRequis: [
            "Organisation d'un collège vue en leçon 6"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter le fonctionnement d'un collège",
              contenus: [
                "Rôle de la direction",
                "Rôle du corps enseignant"
              ]
            },
            {
              capacite: "Décrire la vie dans un collège",
              contenus: [
                "Vie dans un collège (rythme journalier, activités para et périscolaires)"
              ]
            },
            {
              capacite: "S'engager à être un bon collégien",
              contenus: [
                "Résolutions d'un bon collégien (ponctualité, assiduité, travail exemplaire, respect de la discipline, propreté, culture du vivre ensemble)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants décrivent une journée type au collège pour comprendre le rôle de chacun (direction, enseignants) et réfléchir aux résolutions d'un bon collégien.",
          consignes: [
            "Présenter le fonctionnement d'un collège : le rôle de la direction et le rôle du corps enseignant.",
            "Décrire la vie dans un collège (rythme journalier, activités para et périscolaires).",
            "Proposer des résolutions qu'un bon collégien doit adopter (ponctualité, assiduité, travail exemplaire, respect de la discipline, propreté, culture du vivre ensemble)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de l'organisation du collège vue à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de l'emploi du temps et du règlement intérieur du collège."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour présenter le rôle de la direction et du corps enseignant."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour décrire la vie dans un collège et proposer les résolutions d'un bon collégien."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des résolutions proposées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : fonctionnement du collège et résolutions d'un bon collégien."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer deux résolutions d'un bon collégien."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le fonctionnement d'un collège",
              contenu: "Un collège fonctionne grâce à deux grands piliers : la direction, qui organise et administre l'établissement, et le corps enseignant, qui assure la transmission des savoirs. Ces deux rôles sont complémentaires et indispensables au bon déroulement de la vie scolaire."
            },
            {
              titre: "2. La vie quotidienne au collège",
              contenu: "La vie au collège suit un rythme journalier précis, rythmé par les cours, mais elle comprend aussi des activités para et périscolaires qui enrichissent l'expérience des élèves au-delà des seuls enseignements."
            },
            {
              titre: "3. Les résolutions d'un bon collégien",
              contenu: "Être un bon collégien suppose d'adopter certaines résolutions : la ponctualité, l'assiduité, un travail exemplaire, le respect de la discipline, la propreté et la culture du vivre ensemble avec ses camarades et son personnel encadrant."
            },
            {
              titre: "4. À retenir",
              contenu: "Comprendre le fonctionnement du collège et s'engager à respecter ces résolutions personnelles permet à chaque élève de mieux réussir sa scolarité."
            }
          ],
          evaluation: "Présentation du fonctionnement d'un collège ; proposition des résolutions d'un bon collégien.",
          devoirMaison: "Rédiger trois résolutions personnelles pour être un meilleur collégien ce trimestre."
        } },
      { id: "5e-l8", numero: 8, competence: "Respecter l'État, ses institutions et ses organes décentralisés", theme: "Décentralisation au Togo", titre: "Subdivisions du Togo", seances: 2, fiche: {
          competence: "Respecter l'État, ses institutions et ses organes décentralisés",
          theme: "Décentralisation au Togo",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 8"
          ],
          supportsDidactiques: [
            {
              type: "image",
              src: "assets/images/5e/subdivisions-togo.png",
              legende: "Schéma des subdivisions administratives du Togo : circonscriptions administratives et collectivités territoriales"
            }
          ],
          preRequis: [
            "Notion d'État vue au primaire"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les types de subdivisions au Togo",
              contenus: [
                "Circonscriptions administratives",
                "Collectivités territoriales"
              ]
            },
            {
              capacite: "Présenter les circonscriptions administratives du Togo",
              contenus: [
                "Région",
                "Préfecture",
                "Canton",
                "Village",
                "Quartier"
              ]
            },
            {
              capacite: "Présenter les collectivités territoriales du Togo",
              contenus: [
                "Commune",
                "Région"
              ]
            },
            {
              capacite: "Présenter le cas particulier du District Autonome du Grand Lomé",
              contenus: [
                "Cas particulier du District Autonome du Grand Lomé (DAGL)"
              ]
            }
          ],
          situationApprentissage: "À partir d'un schéma des subdivisions administratives du Togo, les apprenants sont amenés à distinguer les circonscriptions administratives (déconcentrées) des collectivités territoriales (décentralisées).",
          consignes: [
            "Identifier les types de subdivisions au Togo : circonscriptions administratives (structures déconcentrées) et collectivités territoriales (structures décentralisées).",
            "Présenter les circonscriptions administratives du Togo : la région, la préfecture, le canton, le village, le quartier (nombre et autorité dirigeante de chacune).",
            "Présenter les collectivités territoriales du Togo : la commune et la région (nombre et autorité dirigeante de chacune).",
            "Présenter le cas particulier du District Autonome du Grand Lomé (DAGL), entité régie par des règles de décentralisation et de déconcentration."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur ce qu'est, selon les apprenants, une « région » ou une « commune »."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation du schéma des subdivisions administratives du Togo.",
              image: "assets/images/5e/subdivisions-togo.png"
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour identifier les types de subdivisions et présenter les circonscriptions administratives."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour présenter les collectivités territoriales et le cas particulier du DAGL, en faisant remarquer que la région est à la fois circonscription et collectivité."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des présentations de chaque groupe à l'aide du schéma."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : schéma des subdivisions administratives du Togo à recopier."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une circonscription administrative et une collectivité territoriale du Togo."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Deux types de subdivisions",
              contenu: "Le Togo est organisé selon deux logiques de subdivision du territoire : les circonscriptions administratives, qui sont des structures déconcentrées (l'État y délègue une autorité locale qui le représente), et les collectivités territoriales, qui sont des structures décentralisées (gérées par des élus locaux)."
            },
            {
              titre: "2. Les circonscriptions administratives",
              contenu: "Les circonscriptions administratives du Togo sont, du plus grand au plus petit échelon : la région, la préfecture, le canton, le village et le quartier. Chacune est dirigée par une autorité représentant l'État à ce niveau."
            },
            {
              titre: "3. Les collectivités territoriales",
              contenu: "Les collectivités territoriales sont la commune et la région, toutes deux dirigées par des instances élues qui gèrent les affaires locales de manière autonome, dans le cadre fixé par la loi."
            },
            {
              titre: "4. Le cas particulier du Grand Lomé",
              contenu: "Le District Autonome du Grand Lomé (DAGL) constitue un cas particulier, régi à la fois par des règles de décentralisation et de déconcentration, en raison de sa taille et de son importance économique et démographique pour le pays."
            }
          ],
          evaluation: "Identification des types de subdivisions du Togo ; présentation des circonscriptions administratives et des collectivités territoriales.",
          devoirMaison: "Indiquer la région, la préfecture et la commune ou le village dont dépend son domicile."
        } },
      { id: "5e-l9", numero: 9, competence: "Respecter l'État, ses institutions et ses organes décentralisés", theme: "Décentralisation au Togo", titre: "Canton", seances: 2, fiche: {
          competence: "Respecter l'État, ses institutions et ses organes décentralisés",
          theme: "Décentralisation au Togo",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 9"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Témoignage ou exemple local d'un chef de canton et de ses actions (à recueillir avec les apprenants)"
            }
          ],
          preRequis: [
            "Subdivisions du Togo vues en leçon 8"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter l'organisation administrative du canton",
              contenus: [
                "Définition du canton (unité administrative, structure déconcentrée)",
                "Organisation administrative du canton (chef canton, notables, etc.)"
              ]
            },
            {
              capacite: "Relever les attributions du chef de canton",
              contenus: [
                "Attributions du chef de canton (garde des us et coutumes, règlement de litiges fonciers, des problèmes de sorcellerie, des problèmes quotidiens de cohabitation)"
              ]
            },
            {
              capacite: "Expliquer le rôle du chef de canton dans la décentralisation au Togo",
              contenus: [
                "Rôle du chef de canton dans la décentralisation au Togo (relais de l'administration publique, promotion du développement local et du vivre ensemble, appui sur les CCD, CVD, CDQ)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants s'appuient sur un exemple local (le canton de leur région) pour comprendre l'organisation administrative du canton et le rôle du chef de canton.",
          consignes: [
            "Définir le canton comme unité administrative et structure déconcentrée.",
            "Présenter l'organisation administrative du canton (chef canton, notables, etc.).",
            "Relever les attributions du chef de canton (garde des us et coutumes, règlement de litiges fonciers, des problèmes de sorcellerie, des problèmes quotidiens de cohabitation).",
            "Expliquer le rôle du chef de canton dans la décentralisation au Togo (relais de l'administration publique, promotion du développement local et du vivre ensemble, appui sur les CCD, CVD, CDQ)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la place du canton parmi les circonscriptions administratives (leçon 8)."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'un exemple local de canton et de son chef."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir le canton et présenter son organisation administrative."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les attributions du chef de canton et expliquer son rôle dans la décentralisation."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des présentations de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : organisation administrative du canton et rôle du chef de canton."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une attribution du chef de canton."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le canton, une structure déconcentrée",
              contenu: "Le canton est une unité administrative qui constitue une structure déconcentrée de l'État togolais. Il est organisé autour d'un chef de canton, entouré de notables qui l'assistent dans ses fonctions."
            },
            {
              titre: "2. Les attributions du chef de canton",
              contenu: "Le chef de canton est le garant des us et coutumes de sa communauté. Il intervient également dans le règlement des litiges fonciers, des problèmes liés à la sorcellerie, ainsi que dans la gestion des problèmes quotidiens de cohabitation entre habitants."
            },
            {
              titre: "3. Son rôle dans la décentralisation",
              contenu: "Au-delà de ses attributions traditionnelles, le chef de canton joue un rôle de relais entre l'administration publique et la population. Il œuvre à la promotion du développement local et du vivre ensemble, en s'appuyant notamment sur les Comités Cantonaux de Développement (CCD), les Comités Villageois de Développement (CVD) et les Comités de Développement de Quartier (CDQ)."
            },
            {
              titre: "4. À retenir",
              contenu: "Le chef de canton est donc à la fois un gardien de la tradition et un acteur clé de la décentralisation au Togo."
            }
          ],
          evaluation: "Relevé des attributions du chef de canton ; explication de son rôle dans la décentralisation.",
          devoirMaison: "Se renseigner sur le nom du chef de canton ou de la localité dont dépend sa famille."
        } },
      { id: "5e-l10", numero: 10, competence: "Respecter l'État, ses institutions et ses organes décentralisés", theme: "Symboles, principes et valeurs du Togo", titre: "Symboles du Togo (armoiries, hymne national, devise, drapeau)", seances: 4, note: "Faire acquérir aux apprenants l'hymne national et la marche républicaine.", fiche: {
          competence: "Respecter l'État, ses institutions et ses organes décentralisés",
          theme: "Symboles, principes et valeurs du Togo",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 10",
            "NB officiel : faire acquérir aux apprenants l'hymne national et la marche républicaine"
          ],
          supportsDidactiques: [
            {
              type: "image",
              src: "assets/images/5e/drapeau-togo.png",
              legende: "Drapeau du Togo (couleurs et proportions officielles)"
            },
            {
              type: "texte",
              contenu: "Texte des paroles de l'hymne national du Togo, « Terre de nos aïeux », pour apprentissage progressif"
            }
          ],
          preRequis: [
            "Aucun pré-requis spécifique ; s'appuie sur le vécu civique des apprenants (montée des couleurs, cérémonies scolaires)"
          ],
          capacitesContenus: [
            {
              capacite: "Énumérer les symboles de l'État togolais",
              contenus: [
                "Définition de symbole",
                "Symboles de l'État togolais (armoiries, hymne national, devise, drapeau)"
              ]
            },
            {
              capacite: "Décrire les armoiries du Togo",
              contenus: [
                "Définition des armoiries",
                "Description des armoiries du Togo"
              ]
            },
            {
              capacite: "Présenter l'hymne national du Togo",
              contenus: [
                "Définition de l'hymne national",
                "Présentation de l'hymne national du Togo (« Terre de nos aïeux »)"
              ]
            },
            {
              capacite: "Citer la devise du Togo",
              contenus: [
                "Définition de la devise",
                "Devise du Togo : Travail - Liberté - Patrie"
              ]
            },
            {
              capacite: "Décrire le drapeau togolais",
              contenus: [
                "Définition du drapeau",
                "Description du drapeau togolais (5 bandes horizontales vert/jaune, canton rouge à l'étoile blanche)"
              ]
            },
            {
              capacite: "Expliquer le symbolisme des couleurs du drapeau togolais",
              contenus: [
                "Symbolisme des couleurs (carré rouge, étoile blanche, bandes vertes, bandes jaunes)"
              ]
            },
            {
              capacite: "Sensibiliser au respect des symboles de son pays",
              contenus: [
                "Comportements de l'élève-citoyen vis-à-vis des symboles de son pays (connaître l'hymne, le chanter avec ferveur, respecter la montée des couleurs, ne pas fouler le drapeau au pied, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants observent le drapeau du Togo et écoutent l'hymne national afin de découvrir, un à un, les symboles de l'État togolais et la façon dont un élève-citoyen doit les respecter.",
          consignes: [
            "Définir le concept de symbole d'un État et identifier les symboles de l'État togolais.",
            "Définir les armoiries et les décrire.",
            "Définir l'hymne national et présenter l'hymne national du Togo.",
            "Définir la devise et citer la devise du Togo (Travail - Liberté - Patrie).",
            "Définir le drapeau et décrire le drapeau togolais.",
            "Expliquer le symbolisme des couleurs du drapeau togolais (carré rouge, étoile blanche, bandes vertes, bandes jaunes).",
            "Adopter des comportements citoyens vis-à-vis des symboles de son pays (connaître l'hymne national, le chanter avec ferveur, respecter la montée des couleurs, ne pas fouler le drapeau national au pied, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 15,
              contenu: "Échange oral : « Connaissez-vous des symboles de notre pays ? »"
            },
            {
              phase: "Présentation",
              dureeMin: 15,
              contenu: "Présentation du drapeau du Togo et du texte de l'hymne national.",
              image: "assets/images/5e/drapeau-togo.png"
            },
            {
              phase: "Appropriation",
              dureeMin: 50,
              contenu: "En petits groupes, discussion dirigée pour définir le concept de symbole d'un État, identifier les symboles de l'État togolais, définir et décrire les armoiries."
            },
            {
              phase: "Exploration",
              dureeMin: 80,
              contenu: "Discussion dirigée, en plusieurs temps : définir et présenter l'hymne national du Togo ; définir et citer la devise du Togo ; définir et décrire le drapeau togolais à l'aide de l'image ; expliquer le symbolisme de ses couleurs (carré rouge, étoile blanche, bandes vertes et jaunes) ; dégager les comportements citoyens attendus vis-à-vis de ces symboles."
            },
            {
              phase: "Mise en commun",
              dureeMin: 25,
              contenu: "Restitution des présentations de chaque groupe ; premier apprentissage collectif du refrain de l'hymne national."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 30,
              contenu: "Trace écrite : les symboles de l'État togolais, description du drapeau et des armoiries, devise, et comportements citoyens à adopter."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer les symboles de l'État togolais et donner la devise du Togo."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les symboles de l'État togolais",
              contenu: "Un symbole d'État est un élément qui représente et incarne une nation. L'État togolais possède quatre symboles principaux : les armoiries, l'hymne national, la devise et le drapeau."
            },
            {
              titre: "2. Armoiries, hymne et devise",
              contenu: "Les armoiries du Togo sont une représentation graphique officielle de l'État. L'hymne national, « Terre de nos aïeux », est le chant qui exprime l'identité et les valeurs de la nation togolaise. La devise du Togo — Travail, Liberté, Patrie — résume en trois mots les idéaux sur lesquels repose le pays."
            },
            {
              titre: "3. Le drapeau et le symbolisme de ses couleurs",
              contenu: "Le drapeau togolais se compose de cinq bandes horizontales alternant le vert et le jaune, avec un canton rouge portant une étoile blanche à cinq branches. Chaque élément a une signification propre : le carré rouge et l'étoile blanche, ainsi que les bandes vertes et jaunes, symbolisent des valeurs et des aspects fondamentaux de la nation togolaise."
            },
            {
              titre: "4. Le respect dû aux symboles nationaux",
              contenu: "En tant qu'élève-citoyen, il est attendu de connaître l'hymne national et de le chanter avec ferveur, de respecter la cérémonie de montée des couleurs, et de ne jamais fouler le drapeau national au pied. Ces comportements traduisent le respect envers sa patrie et ses symboles."
            }
          ],
          evaluation: "Énumération des symboles de l'État togolais ; description du drapeau et explication du symbolisme de ses couleurs.",
          devoirMaison: "Apprendre le premier couplet de l'hymne national du Togo pour la prochaine séance."
        } },
      { id: "5e-l11", numero: 11, competence: "Respecter l'État, ses institutions et ses organes décentralisés", theme: "Symboles, principes et valeurs du Togo", titre: "Principes et valeurs du Togo", seances: 2, fiche: {
          competence: "Respecter l'État, ses institutions et ses organes décentralisés",
          theme: "Symboles, principes et valeurs du Togo",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 11"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Extraits simplifiés de la Constitution togolaise (préambule et articles relatifs aux principes de la République)"
            }
          ],
          preRequis: [
            "Symboles du Togo vus en leçon 10"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les principes de la République togolaise",
              contenus: [
                "Définition de « principe républicain »",
                "Principes de la République togolaise (État de droit, laïcité, démocratie, État social, unicité, indivisibilité, égalité)"
              ]
            },
            {
              capacite: "Identifier les valeurs de l'État togolais",
              contenus: [
                "Définition de « valeur républicaine »",
                "Valeurs de l'État togolais"
              ]
            }
          ],
          situationApprentissage: "À partir d'extraits simplifiés de la Constitution togolaise, les apprenants sont amenés à découvrir les principes et les valeurs sur lesquels repose la République togolaise.",
          consignes: [
            "Définir la notion de « principe républicain » et identifier les principes de la République togolaise (État de droit, laïcité, démocratie, État social, unicité, indivisibilité, égalité).",
            "Définir la notion de « valeur républicaine » et identifier les valeurs de l'État togolais."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des symboles de l'État togolais vus à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'extraits simplifiés de la Constitution togolaise."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir « principe républicain » et identifier les principes de la République togolaise."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour définir « valeur républicaine » et identifier les valeurs de l'État togolais."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des principes et valeurs identifiés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : liste des principes et des valeurs de la République togolaise."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer deux principes de la République togolaise."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les principes de la République togolaise",
              contenu: "Un principe républicain est une règle fondamentale qui organise le fonctionnement de l'État. La République togolaise repose sur plusieurs principes : l'État de droit, la laïcité, la démocratie, l'État social, l'unicité, l'indivisibilité et l'égalité."
            },
            {
              titre: "2. Les valeurs de l'État togolais",
              contenu: "Une valeur républicaine est un idéal partagé qui oriente le comportement des citoyens et des institutions. Ces valeurs, ancrées dans la Constitution togolaise, guident la vie en société et les relations entre l'État et ses citoyens."
            },
            {
              titre: "3. À retenir",
              contenu: "Connaître les principes et les valeurs de la République togolaise permet à chaque citoyen de mieux comprendre le fonctionnement de son État et les droits et devoirs qui en découlent."
            }
          ],
          evaluation: "Identification des principes de la République togolaise et des valeurs de l'État togolais.",
          devoirMaison: "Recopier et apprendre la liste des principes de la République togolaise vus en classe."
        } },
      { id: "5e-l12", numero: 12, competence: "Régler les conflits de façon pacifique", theme: "Notion de violence", titre: "Violence et extrémisme violent", seances: 2, fiche: {
          competence: "Régler les conflits de façon pacifique",
          theme: "Notion de violence",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 12"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples ou faits d'actualité (sans images choquantes) illustrant différentes formes de violence"
            }
          ],
          preRequis: [
            "Notions d'extrémisme violent vues en 6e"
          ],
          capacitesContenus: [
            {
              capacite: "Énumérer les différentes formes de violence",
              contenus: [
                "Définition de la violence",
                "Différentes formes de violence (physique, psychologique, verbale, sexuelle)",
                "Rapport entre violence et extrémisme violent"
              ]
            },
            {
              capacite: "Identifier les causes de la violence et de l'extrémisme violent",
              contenus: [
                "Causes (pauvreté, intolérance, ethnocentrisme, discrimination, injustice, absence de liberté, échecs scolaires, etc.)"
              ]
            },
            {
              capacite: "Présenter les manifestations des violences",
              contenus: [
                "Manifestations de la violence (active, passive)",
                "Manifestations de l'extrémisme violent (isolation, polarisation sociale, formation de groupes extrémistes)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent, à partir de faits d'actualité choisis avec prudence, sur les différentes formes de violence qu'ils connaissent et sur ce qui peut les expliquer.",
          consignes: [
            "Définir la violence et identifier ses différentes formes (physique, psychologique, verbale, sexuelle).",
            "Établir le rapport entre violence et extrémisme violent.",
            "Relever les causes de la violence et de l'extrémisme violent (pauvreté, intolérance, ethnocentrisme, discrimination, injustice, absence de liberté, échecs scolaires, etc.).",
            "Présenter les manifestations de la violence (active, passive) et de l'extrémisme violent (isolation, polarisation sociale, formation de groupes extrémistes)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des notions d'extrémisme violent vues en 6e."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'exemples illustrant différentes formes de violence."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la violence, ses formes et son rapport avec l'extrémisme violent."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les causes de la violence et présenter ses manifestations et celles de l'extrémisme violent."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des formes, causes et manifestations identifiées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : formes, causes et manifestations de la violence et de l'extrémisme violent."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une forme de violence et une cause de la violence."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Définition et formes de violence",
              contenu: "La violence désigne tout acte visant à porter atteinte à l'intégrité physique ou morale d'autrui. Elle peut prendre plusieurs formes : physique, psychologique, verbale ou sexuelle."
            },
            {
              titre: "2. Le lien avec l'extrémisme violent",
              contenu: "La violence peut, dans certains cas, se radicaliser et déboucher sur l'extrémisme violent, qui rejette totalement l'autre au nom d'une idéologie ou d'une croyance extrême. Comprendre ce lien aide à mieux prévenir les situations à risque."
            },
            {
              titre: "3. Les causes et les manifestations",
              contenu: "Plusieurs facteurs peuvent expliquer la violence et l'extrémisme violent : la pauvreté, l'intolérance, l'ethnocentrisme, la discrimination, l'injustice, l'absence de liberté ou encore les échecs scolaires. La violence peut se manifester de façon active ou passive, tandis que l'extrémisme violent se traduit par l'isolement, la polarisation sociale ou la formation de groupes extrémistes."
            },
            {
              titre: "4. À retenir",
              contenu: "Identifier les causes et les formes de la violence est une étape indispensable pour pouvoir la prévenir efficacement, avant qu'elle ne s'aggrave."
            }
          ],
          evaluation: "Énumération des formes de violence ; identification des causes de la violence et de l'extrémisme violent.",
          devoirMaison: "Citer une cause de la violence vue en classe et proposer une action pour la réduire."
        } },
      { id: "5e-l13", numero: 13, competence: "Régler les conflits de façon pacifique", theme: "Notion de violence", titre: "Conséquences de la violence et de l'extrémisme violent", seances: 2, fiche: {
          competence: "Régler les conflits de façon pacifique",
          theme: "Notion de violence",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 13"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Témoignages ou cas simplifiés illustrant les conséquences de la violence"
            }
          ],
          preRequis: [
            "Formes et causes de la violence vues en leçon 12"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les conséquences sur les victimes de violence",
              contenus: [
                "Problèmes de santé, troubles psychologiques, troubles comportementaux"
              ]
            },
            {
              capacite: "Identifier les conséquences sur les auteurs de violence",
              contenus: [
                "Problèmes psychologiques, sanctions pénales"
              ]
            },
            {
              capacite: "Identifier les conséquences sur l'extrémiste violent",
              contenus: [
                "Perte d'identité, aliénation sociale, mort ou blessures graves, traumatisme et stress post-traumatique, perturbation des relations familiales"
              ]
            },
            {
              capacite: "Identifier les conséquences sur la communauté victime de l'extrémisme violent",
              contenus: [
                "Détérioration de l'image de la communauté, dégradations économiques, peur, dégradation matérielle, perte de vies humaines"
              ]
            }
          ],
          situationApprentissage: "Les apprenants réfléchissent, à partir de cas simplifiés, à ce que la violence provoque chez la victime, chez l'auteur, chez l'extrémiste violent lui-même et sur toute une communauté.",
          consignes: [
            "Relever les conséquences de la violence sur les victimes (problèmes de santé, troubles psychologiques, troubles comportementaux).",
            "Relever les conséquences de la violence sur les auteurs (problèmes psychologiques, sanctions pénales).",
            "Relever les conséquences de l'extrémisme violent sur l'extrémiste lui-même (perte d'identité, aliénation sociale, mort ou blessures graves, traumatisme et stress post-traumatique, perturbation des relations familiales).",
            "Relever les conséquences de l'extrémisme violent sur la communauté (détérioration de l'image de la communauté, dégradations économiques, peur, dégradation matérielle, perte de vies humaines)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des formes et manifestations de la violence vues à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de témoignages ou de cas simplifiés sur les conséquences de la violence."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour relever les conséquences sur les victimes et sur les auteurs de violence."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les conséquences sur l'extrémiste violent et sur la communauté."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des conséquences relevées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : conséquences de la violence et de l'extrémisme violent sur les personnes et la communauté."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une conséquence de la violence sur la victime et une conséquence sur la communauté."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Conséquences sur les victimes et les auteurs",
              contenu: "La violence entraîne, chez les victimes, des problèmes de santé, des troubles psychologiques et des troubles comportementaux durables. Chez les auteurs, elle peut provoquer des problèmes psychologiques et exposer à des sanctions pénales."
            },
            {
              titre: "2. Conséquences sur l'extrémiste lui-même",
              contenu: "L'extrémisme violent affecte gravement celui qui s'y engage : perte d'identité, aliénation sociale, risque de mort ou de blessures graves, traumatisme et stress post-traumatique, ainsi que la perturbation durable de ses relations familiales."
            },
            {
              titre: "3. Conséquences sur la communauté",
              contenu: "Une communauté touchée par l'extrémisme violent subit elle aussi de lourdes conséquences : détérioration de son image, dégradations économiques et matérielles, climat de peur généralisé, et parfois des pertes de vies humaines."
            },
            {
              titre: "4. À retenir",
              contenu: "La violence et l'extrémisme violent n'affectent jamais une seule personne : leurs conséquences se propagent des victimes et des auteurs jusqu'à la communauté tout entière."
            }
          ],
          evaluation: "Relevé des conséquences de la violence et de l'extrémisme violent sur les victimes, les auteurs et la communauté.",
          devoirMaison: "Rédiger trois phrases expliquant pourquoi il vaut mieux régler un conflit de façon pacifique plutôt que par la violence."
        } },
      { id: "5e-l14", numero: 14, competence: "Promouvoir le développement durable", theme: "Santé, environnement et développement", titre: "Pollution de l'environnement", seances: 2, fiche: {
          competence: "Promouvoir le développement durable",
          theme: "Santé, environnement et développement",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 14"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples locaux d'activités polluantes (déchets, fumées, eaux usées) observés par les apprenants"
            }
          ],
          preRequis: [
            "Entretien de l'environnement immédiat vu en 6e"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les activités humaines qui polluent notre environnement immédiat",
              contenus: [
                "Activités agricoles (engrais chimiques, pesticides)",
                "Activités industrielles (produits toxiques, gaz polluants, eaux contaminées)",
                "Transports (vidanges, gaz polluants, bruit)",
                "Activités commerciales et domestiques (eaux usées, déchets solides)"
              ]
            },
            {
              capacite: "Relever les effets des activités humaines sur l'environnement",
              contenus: [
                "Réchauffement climatique, pollution de l'air, de l'eau, du sol, déforestation, épuisement des ressources"
              ]
            },
            {
              capacite: "Relever les effets de la dégradation de l'environnement sur la santé",
              contenus: [
                "Baisse de la qualité de vie, maladies respiratoires, cardiovasculaires, allergies"
              ]
            }
          ],
          situationApprentissage: "Les apprenants observent des exemples locaux d'activités polluantes (déchets, fumées, eaux usées) pour comprendre leurs effets sur l'environnement et sur la santé.",
          consignes: [
            "Identifier les activités humaines qui polluent notre environnement immédiat (agricoles, industrielles, transports, commerciales et domestiques).",
            "Relever les effets des activités humaines sur l'environnement (réchauffement climatique, pollution de l'air, de l'eau, du sol, déforestation, épuisement des ressources).",
            "Relever les effets de la dégradation de l'environnement sur la santé (baisse de la qualité de vie, maladies respiratoires, cardiovasculaires, allergies)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur des exemples locaux de pollution observés par les apprenants."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation des grandes catégories d'activités humaines polluantes."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour identifier les activités humaines qui polluent l'environnement immédiat."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les effets de ces activités sur l'environnement et sur la santé."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des activités et effets identifiés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : activités polluantes et leurs effets sur l'environnement et la santé."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une activité humaine polluante et un de ses effets sur la santé."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les activités humaines polluantes",
              contenu: "Plusieurs types d'activités humaines contribuent à la pollution de notre environnement immédiat : les activités agricoles (engrais chimiques, pesticides), les activités industrielles (produits toxiques, gaz polluants, eaux contaminées), les transports (vidanges, gaz d'échappement, bruit) ainsi que les activités commerciales et domestiques (eaux usées, déchets solides)."
            },
            {
              titre: "2. Les effets sur l'environnement",
              contenu: "Ces activités entraînent des effets préoccupants sur l'environnement : réchauffement climatique, pollution de l'air, de l'eau et du sol, déforestation, ainsi qu'épuisement progressif des ressources naturelles."
            },
            {
              titre: "3. Les effets sur la santé",
              contenu: "La dégradation de l'environnement se répercute directement sur la santé humaine, en provoquant notamment une baisse de la qualité de vie ainsi que des maladies respiratoires, cardiovasculaires ou des allergies."
            },
            {
              titre: "4. À retenir",
              contenu: "Pollution de l'environnement et santé humaine sont étroitement liées, ce qui justifie de rechercher des solutions durables, objet de la leçon suivante."
            }
          ],
          evaluation: "Identification des activités humaines polluantes ; relevé de leurs effets sur l'environnement et la santé.",
          devoirMaison: "Observer une activité polluante près de chez soi et proposer une façon de la réduire."
        } },
      { id: "5e-l15", numero: 15, competence: "Promouvoir le développement durable", theme: "Santé, environnement et développement", titre: "Développement durable", seances: 2, fiche: {
          competence: "Promouvoir le développement durable",
          theme: "Santé, environnement et développement",
          documentation: [
            "Programme officiel d'ECM, classe de 5e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçon 15"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples d'actions locales ou nationales en faveur du développement durable (reboisement, recyclage)"
            }
          ],
          preRequis: [
            "Pollution de l'environnement vue en leçon 14"
          ],
          capacitesContenus: [
            {
              capacite: "Promouvoir le développement durable comme solution à la dégradation de l'environnement",
              contenus: [
                "Définition du développement durable",
                "Actions en faveur du développement durable (agriculture bio, moteurs non polluants, reboisement, recyclage des déchets, etc.)"
              ]
            }
          ],
          situationApprentissage: "À partir des effets de la pollution étudiés à la leçon précédente, les apprenants recherchent des solutions concrètes relevant du développement durable.",
          consignes: [
            "Définir la notion de développement durable.",
            "Proposer quelques actions en faveur du développement durable (pratiquer l'agriculture bio, utiliser des moteurs non polluants, promouvoir le reboisement, recycler les déchets, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des effets de la pollution vus à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'exemples d'actions locales ou nationales en faveur du développement durable."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir le développement durable."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour proposer des actions en faveur du développement durable."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des actions proposées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définition et exemples d'actions de développement durable."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une action en faveur du développement durable."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Définir le développement durable",
              contenu: "Le développement durable est un mode de développement qui vise à répondre aux besoins du présent sans compromettre la capacité des générations futures à satisfaire les leurs. C'est une réponse directe aux problèmes de pollution étudiés à la leçon précédente."
            },
            {
              titre: "2. Des actions concrètes",
              contenu: "Plusieurs actions permettent de promouvoir le développement durable : pratiquer une agriculture biologique, utiliser des moteurs moins polluants, favoriser le reboisement ou encore recycler les déchets produits au quotidien."
            },
            {
              titre: "3. À retenir",
              contenu: "Le développement durable n'est pas réservé aux États ou aux grandes entreprises : chaque citoyen, à son échelle, peut y contribuer par des gestes simples et responsables."
            }
          ],
          evaluation: "Proposition d'actions en faveur du développement durable.",
          devoirMaison: "Mettre en pratique une action de développement durable à la maison (tri des déchets, économie d'eau) et la décrire."
        } }
    ],
    integrations: [
      { id: "5e-i1", apresLeconId: "5e-l2", competence: "Adopter des comportements civiques", themesCouverts: [
          "Civisme"
        ], leconsCouvertes: [
          "5e-l1",
          "5e-l2"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 5e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçons 1 et 2"
          ],
          preRequis: [
            "Définition du civisme et comportements civiques/inciviques déjà étudiés"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 1 — Civisme : concepts clés",
              capacites: [
                "Expliquer les concepts liés au civisme"
              ]
            },
            {
              lecon: "Leçon 2 — Comportements civiques et inciviques",
              capacites: [
                "Identifier les comportements inciviques au quotidien",
                "Adopter des comportements civiques au quotidien"
              ]
            }
          ],
          situationComplexe: "Dans le quartier d'Ayélé, un groupe de jeunes jette régulièrement ses ordures dans le caniveau, joue au ballon en pleine chaussée et se moque des passants âgés. Ayélé, elle, participe chaque samedi au nettoyage collectif du quartier et aide les personnes âgées à porter leurs courses.",
          consignes: [
            "Relever, dans la situation, les comportements inciviques du groupe de jeunes.",
            "Relever les comportements civiques d'Ayélé.",
            "Expliquer, à l'aide des concepts liés au civisme, ce qui distingue le comportement d'Ayélé de celui du groupe de jeunes.",
            "Proposer deux actions que le groupe de jeunes pourrait adopter pour devenir plus civique."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, lit le texte avec la classe, pose des questions de compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation oppose des comportements inciviques (le groupe de jeunes) à des comportements civiques (Ayélé) dans un même quartier.",
            developpement: [
              {
                consigne: "Consigne 1 — comportements inciviques",
                reponse: "Jeter les ordures dans le caniveau, jouer au ballon en pleine chaussée, se moquer des passants âgés."
              },
              {
                consigne: "Consigne 2 — comportements civiques",
                reponse: "Participer au nettoyage collectif du quartier, aider les personnes âgées à porter leurs courses."
              },
              {
                consigne: "Consigne 3 — explication",
                reponse: "Ayélé fait preuve de sens civique et d'engagement pour le vivre ensemble, tandis que le groupe de jeunes pose des actes inciviques qui nuisent au cadre de vie collectif et au respect des autres."
              },
              {
                consigne: "Consigne 4 — actions proposées",
                reponse: "Le groupe de jeunes pourrait, par exemple, jeter ses ordures dans une poubelle et participer, comme Ayélé, au nettoyage collectif du quartier ; il pourrait aussi respecter les passants âgés en les saluant et en les aidant au besoin."
              }
            ],
            conclusion: "Le civisme se construit par des gestes simples et quotidiens (propreté, respect des autres, entraide) qui s'opposent clairement aux comportements inciviques."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte des comportements inciviques et civiques",
              bareme: "6 pts"
            },
            {
              critere: "Justesse de l'explication à l'aide des concepts du civisme",
              bareme: "6 pts"
            },
            {
              critere: "Pertinence des actions proposées",
              bareme: "5 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "3 pts"
            }
          ]
        } },
      { id: "5e-i2", apresLeconId: "5e-l7", competence: "Aimer et respecter son cadre de vie", themesCouverts: [
          "Connaissance de son cadre de vie : la rue",
          "Connaissance de son cadre de vie : l'école"
        ], leconsCouvertes: [
          "5e-l3",
          "5e-l4",
          "5e-l5",
          "5e-l6",
          "5e-l7"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 5e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçons 3 à 7"
          ],
          preRequis: [
            "Concepts liés à la rue, dangers, code de la route, école et vie au collège déjà étudiés"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 3 — Rue : concepts clés",
              capacites: [
                "Définir les concepts liés à la rue"
              ]
            },
            {
              lecon: "Leçon 4 — Dangers potentiels de la rue",
              capacites: [
                "Identifier les dangers potentiels de la rue",
                "Montrer comment se comporter dans la rue"
              ]
            },
            {
              lecon: "Leçon 5 — Règles du code de la route",
              capacites: [
                "Préciser le code pour les piétons et pour les cyclistes"
              ]
            },
            {
              lecon: "Leçon 6 — Utilité et organisation de l'école",
              capacites: [
                "Relever l'utilité de l'école"
              ]
            },
            {
              lecon: "Leçon 7 — Vie au collège",
              capacites: [
                "S'engager à être un bon collégien"
              ]
            }
          ],
          situationComplexe: "Chaque matin, Komla traverse un carrefour très fréquenté pour se rendre au collège. Ce matin, pressé d'arriver à l'heure pour ne pas rater le contrôle, il traverse en dehors du passage piéton, sans regarder, pendant qu'une moto roule à vive allure. Il arrive essoufflé au collège, juste à temps.",
          consignes: [
            "Identifier, dans la situation, l'élément de la rue que Komla n'a pas utilisé alors qu'il aurait dû.",
            "Relever le danger auquel Komla s'est exposé et la règle du code de la route qu'il n'a pas respectée.",
            "Expliquer en quoi le comportement de Komla, malgré son souci d'arriver à l'heure, ne correspond pas aux résolutions d'un bon collégien.",
            "Proposer à Komla un comportement plus sûr pour se rendre au collège à l'heure sans se mettre en danger."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, s'assure de sa compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation met en jeu la connaissance de la rue, de ses dangers, du code de la route et des résolutions d'un bon collégien.",
            developpement: [
              {
                consigne: "Consigne 1 — élément de la rue non utilisé",
                reponse: "Komla n'a pas emprunté le passage piéton pour traverser."
              },
              {
                consigne: "Consigne 2 — danger et règle non respectée",
                reponse: "Il s'est exposé au danger d'un excès de vitesse d'une moto ; il n'a pas respecté la règle du piéton qui impose de traverser au passage piéton en regardant des deux côtés."
              },
              {
                consigne: "Consigne 3 — lien avec le bon collégien",
                reponse: "Même si la ponctualité est une qualité attendue d'un bon collégien, elle ne doit jamais se faire au détriment de sa sécurité : un bon collégien reste prudent et responsable, y compris quand il est pressé."
              },
              {
                consigne: "Consigne 4 — comportement proposé",
                reponse: "Komla devrait partir plus tôt pour avoir le temps de traverser au passage piéton en toute sécurité, quitte à courir ensuite sur le trottoir plutôt que de prendre un risque sur la chaussée."
              }
            ],
            conclusion: "La ponctualité est une qualité d'un bon collégien, mais elle ne justifie jamais de prendre des risques dans la rue : le respect du code de la route protège la vie."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte de l'élément de rue non utilisé",
              bareme: "4 pts"
            },
            {
              critere: "Identification du danger et de la règle non respectée",
              bareme: "5 pts"
            },
            {
              critere: "Qualité de l'analyse du lien avec le bon collégien",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence du comportement proposé",
              bareme: "4 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "5e-i3", apresLeconId: "5e-l11", competence: "Respecter l'État, ses institutions et ses organes décentralisés", themesCouverts: [
          "Décentralisation au Togo",
          "Symboles, principes et valeurs du Togo"
        ], leconsCouvertes: [
          "5e-l8",
          "5e-l9",
          "5e-l10",
          "5e-l11"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 5e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçons 8 à 11"
          ],
          preRequis: [
            "Subdivisions du Togo, canton, symboles et principes de la République déjà étudiés"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 8 — Subdivisions du Togo",
              capacites: [
                "Identifier les types de subdivisions au Togo"
              ]
            },
            {
              lecon: "Leçon 9 — Canton",
              capacites: [
                "Relever les attributions du chef de canton"
              ]
            },
            {
              lecon: "Leçon 10 — Symboles du Togo",
              capacites: [
                "Énumérer les symboles de l'État togolais",
                "Décrire le drapeau togolais"
              ]
            },
            {
              lecon: "Leçon 11 — Principes et valeurs du Togo",
              capacites: [
                "Identifier les principes de la République togolaise"
              ]
            }
          ],
          situationComplexe: "Lors de la fête de l'indépendance, le chef de canton du village d'Afanyo organise une cérémonie devant la mairie : lever des couleurs, chant de l'hymne national, puis discours rappelant que « tous les Togolais, quelle que soit leur région, sont égaux devant la loi ».",
          consignes: [
            "Identifier, dans la situation, la subdivision administrative dont dépend le village d'Afanyo et celle représentée par la mairie.",
            "Relever, dans la situation, deux symboles de l'État togolais évoqués.",
            "Identifier le principe de la République togolaise illustré par la phrase du chef de canton.",
            "Expliquer le rôle du chef de canton dans l'organisation de cette cérémonie, en lien avec la décentralisation."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, s'assure de sa compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation combine la connaissance des subdivisions du Togo, des symboles de l'État et des principes de la République.",
            developpement: [
              {
                consigne: "Consigne 1 — subdivisions",
                reponse: "Le village d'Afanyo dépend d'un canton (circonscription administrative) ; la mairie représente la commune (collectivité territoriale)."
              },
              {
                consigne: "Consigne 2 — symboles évoqués",
                reponse: "Le lever des couleurs (le drapeau) et le chant de l'hymne national."
              },
              {
                consigne: "Consigne 3 — principe illustré",
                reponse: "La phrase « tous les Togolais sont égaux devant la loi » illustre le principe d'égalité."
              },
              {
                consigne: "Consigne 4 — rôle du chef de canton",
                reponse: "En organisant cette cérémonie, le chef de canton joue son rôle de relais de l'administration publique et de promotion du vivre ensemble au niveau local, conformément à son rôle dans la décentralisation."
              }
            ],
            conclusion: "Les subdivisions administratives, les symboles de l'État et les principes de la République se retrouvent concrètement dans la vie locale, à travers des cérémonies organisées par les autorités décentralisées."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte des subdivisions",
              bareme: "5 pts"
            },
            {
              critere: "Identification correcte des symboles évoqués",
              bareme: "4 pts"
            },
            {
              critere: "Identification correcte du principe illustré",
              bareme: "4 pts"
            },
            {
              critere: "Qualité de l'explication du rôle du chef de canton",
              bareme: "5 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "5e-i4", apresLeconId: "5e-l13", competence: "Régler les conflits de façon pacifique", themesCouverts: [
          "Notion de violence"
        ], leconsCouvertes: [
          "5e-l12",
          "5e-l13"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 5e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçons 12 et 13"
          ],
          preRequis: [
            "Formes, causes, manifestations et conséquences de la violence déjà étudiées"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 12 — Violence et extrémisme violent",
              capacites: [
                "Énumérer les différentes formes de violence",
                "Identifier les causes de la violence et de l'extrémisme violent"
              ]
            },
            {
              lecon: "Leçon 13 — Conséquences de la violence et de l'extrémisme violent",
              capacites: [
                "Identifier les conséquences sur les victimes et sur les auteurs de violence"
              ]
            }
          ],
          situationComplexe: "Depuis qu'il a échoué deux fois à un examen, Séna se sent rejeté par ses camarades. Il commence à insulter régulièrement certains élèves plus jeunes et, un jour, en frappe un violemment lors d'une dispute pour un ballon. L'élève frappé a dû être conduit à l'infirmerie.",
          consignes: [
            "Identifier les formes de violence présentes dans cette situation.",
            "Relever, dans la situation, une cause possible du comportement violent de Séna.",
            "Relever une conséquence de cette violence sur la victime et une conséquence possible pour Séna, l'auteur.",
            "Proposer deux actions que l'école pourrait mener pour aider Séna à ne plus recourir à la violence."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, s'assure de sa compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation illustre plusieurs formes de violence ainsi que leurs causes et leurs conséquences, aussi bien pour la victime que pour l'auteur.",
            developpement: [
              {
                consigne: "Consigne 1 — formes de violence",
                reponse: "Violence verbale (insultes) et violence physique (coup porté lors de la dispute)."
              },
              {
                consigne: "Consigne 2 — cause possible",
                reponse: "L'échec scolaire répété de Séna et le sentiment de rejet par ses camarades peuvent expliquer, sans le justifier, son comportement violent."
              },
              {
                consigne: "Consigne 3 — conséquences",
                reponse: "Pour la victime : un problème de santé (blessure ayant nécessité l'infirmerie). Pour Séna, l'auteur : des sanctions disciplinaires possibles et des problèmes psychologiques liés à l'isolement."
              },
              {
                consigne: "Consigne 4 — actions proposées",
                reponse: "L'école pourrait organiser un accompagnement scolaire pour aider Séna à surmonter ses échecs, et proposer une médiation ou un suivi avec un adulte de confiance (CPE, enseignant) pour l'aider à exprimer sa frustration autrement que par la violence."
              }
            ],
            conclusion: "La violence a toujours des causes et des conséquences, pour la victime comme pour l'auteur. Comprendre ces causes permet de mieux prévenir la violence, sans jamais l'excuser."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte des formes de violence",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence de la cause identifiée",
              bareme: "4 pts"
            },
            {
              critere: "Identification correcte des conséquences",
              bareme: "6 pts"
            },
            {
              critere: "Pertinence des actions proposées",
              bareme: "3 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "5e-i5", apresLeconId: "5e-l15", competence: "Promouvoir le développement durable", themesCouverts: [
          "Santé, environnement et développement"
        ], leconsCouvertes: [
          "5e-l14",
          "5e-l15"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 5e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 5e — Leçons 14 et 15"
          ],
          preRequis: [
            "Pollution de l'environnement et développement durable déjà étudiés"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 14 — Pollution de l'environnement",
              capacites: [
                "Identifier les activités humaines qui polluent l'environnement",
                "Relever les effets sur l'environnement et la santé"
              ]
            },
            {
              lecon: "Leçon 15 — Développement durable",
              capacites: [
                "Proposer des actions en faveur du développement durable"
              ]
            }
          ],
          situationComplexe: "Le petit cours d'eau qui traverse le village de Kpalimé-Kpodzi est devenu noirâtre et dégage une mauvaise odeur depuis qu'un atelier de teinture y déverse ses eaux usées. Plusieurs enfants qui s'y baignaient autrefois ont développé des irritations de la peau.",
          consignes: [
            "Identifier, dans la situation, l'activité humaine responsable de la pollution du cours d'eau.",
            "Relever un effet de cette pollution sur l'environnement et un effet sur la santé des enfants.",
            "Proposer deux actions de développement durable que l'atelier de teinture pourrait adopter pour réduire cette pollution.",
            "Proposer une action que les habitants du village pourraient mener pour protéger ce cours d'eau."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, s'assure de sa compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation illustre la pollution de l'eau par une activité industrielle et ses effets sur l'environnement et la santé, tout en appelant des solutions de développement durable.",
            developpement: [
              {
                consigne: "Consigne 1 — activité responsable",
                reponse: "L'activité industrielle de l'atelier de teinture, qui déverse ses eaux usées dans le cours d'eau."
              },
              {
                consigne: "Consigne 2 — effets",
                reponse: "Effet sur l'environnement : pollution de l'eau (couleur noirâtre, mauvaise odeur). Effet sur la santé : irritations de la peau chez les enfants qui s'y baignaient."
              },
              {
                consigne: "Consigne 3 — actions pour l'atelier",
                reponse: "Traiter les eaux usées avant de les rejeter (station de traitement simple) ; utiliser des teintures moins polluantes ou recycler l'eau utilisée dans le processus de teinture."
              },
              {
                consigne: "Consigne 4 — action des habitants",
                reponse: "Les habitants pourraient alerter les autorités locales (mairie, chef de canton) et sensibiliser l'atelier aux conséquences sanitaires, tout en évitant de se baigner dans une eau polluée en attendant qu'elle soit assainie."
              }
            ],
            conclusion: "La pollution de l'eau par une activité humaine a des conséquences directes sur la santé de la communauté ; des actions simples de développement durable permettent de réduire ces effets."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte de l'activité responsable",
              bareme: "4 pts"
            },
            {
              critere: "Identification correcte des effets",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence des actions proposées pour l'atelier",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence de l'action proposée pour les habitants",
              bareme: "4 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } }
    ]
  },
  "4e": {
    nom: "Quatrième",
    lecons: [
      { id: "4e-l1", numero: 1, competence: "Adopter des comportements responsables", theme: "Citoyenneté", titre: "Notion de citoyen et de citoyenneté", seances: 2, fiche: {
          competence: "Adopter des comportements responsables",
          theme: "Citoyenneté",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 1"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Extraits du Code de la nationalité togolaise (ou présentation simplifiée par le professeur)"
            }
          ],
          preRequis: [
            "Notions de civisme vues en 5e"
          ],
          capacitesContenus: [
            {
              capacite: "Définir les concepts relatifs à la citoyenneté",
              contenus: [
                "Citoyen",
                "Citoyenneté",
                "Adopter un comportement citoyen"
              ]
            },
            {
              capacite: "Présenter les conditions d'attribution ou d'acquisition de la nationalité",
              contenus: [
                "Définitions : nationalité, majorité",
                "Conditions d'attribution de la nationalité togolaise (droit du sol, droit du sang)",
                "Conditions d'acquisition de la nationalité togolaise (mariage, naissance et résidence, décision de l'autorité publique)"
              ]
            },
            {
              capacite: "Expliquer les implications de l'acquisition de la nationalité",
              contenus: [
                "Implications de la nationalité (droit de participer à la vie politique de son pays, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent sur ce qui fait qu'une personne est togolaise pour découvrir les notions de citoyen, de citoyenneté et les conditions d'attribution ou d'acquisition de la nationalité.",
          consignes: [
            "Définir les concepts liés à la citoyenneté : citoyen, citoyenneté, adopter un comportement citoyen.",
            "Relever les conditions d'attribution de la nationalité togolaise (naissance au Togo : droit du sol ; filiation : droit du sang).",
            "Relever les conditions d'acquisition de la nationalité togolaise (mariage, naissance et résidence au Togo, décision de l'autorité publique).",
            "Déterminer les implications de l'acquisition de la nationalité (droit de participer à la vie politique de son pays, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral : « Qu'est-ce qui fait de vous des Togolais ? »"
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'extraits simplifiés du Code de la nationalité togolaise."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir citoyen, citoyenneté et comportement citoyen."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les conditions d'attribution et d'acquisition de la nationalité togolaise, et déterminer les implications de son acquisition."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des définitions et conditions relevées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définitions et conditions d'attribution/acquisition de la nationalité togolaise."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une condition d'attribution et une condition d'acquisition de la nationalité togolaise."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Citoyen et citoyenneté",
              contenu: "Le citoyen est une personne reconnue comme membre à part entière d'un État, avec des droits et des devoirs. La citoyenneté désigne ce statut et suppose d'adopter un comportement citoyen, c'est-à-dire responsable envers la société."
            },
            {
              titre: "2. Attribution de la nationalité togolaise",
              contenu: "La nationalité togolaise peut être attribuée dès la naissance selon deux principes : le droit du sol (naître sur le territoire togolais) et le droit du sang (être né de parents togolais, où que ce soit). Ces deux principes définissent qui est togolais de naissance."
            },
            {
              titre: "3. Acquisition de la nationalité",
              contenu: "Au-delà de la naissance, la nationalité togolaise peut aussi être acquise par le mariage, par la naissance et la résidence prolongée au Togo, ou par une décision de l'autorité publique (naturalisation). Cela permet à une personne non togolaise de le devenir dans certaines conditions."
            },
            {
              titre: "4. Implications de la nationalité",
              contenu: "Devenir citoyen togolais donne accès à des droits importants, notamment celui de participer à la vie politique du pays (voter, se présenter à des élections). C'est pourquoi bien comprendre les conditions de la nationalité est essentiel pour tout futur citoyen."
            }
          ],
          evaluation: "Définition des concepts liés à la citoyenneté ; présentation des conditions d'attribution ou d'acquisition de la nationalité au Togo.",
          devoirMaison: "Se renseigner auprès de ses parents sur les conditions dans lesquelles on a obtenu la nationalité togolaise dans sa famille."
        } },
      { id: "4e-l2", numero: 2, competence: "Adopter des comportements responsables", theme: "Citoyenneté", titre: "Droits et devoirs du citoyen togolais", seances: 2, fiche: {
          competence: "Adopter des comportements responsables",
          theme: "Citoyenneté",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 2"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Extraits de la Constitution togolaise ou d'un autre document officiel"
            }
          ],
          preRequis: [
            "Notions de citoyenneté vues en leçon 1"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter les droits et devoirs civiques du citoyen togolais",
              contenus: [
                "Droits et devoirs civiques du citoyen togolais"
              ]
            },
            {
              capacite: "Présenter les droits et devoirs politiques du citoyen togolais",
              contenus: [
                "Droits et devoirs politiques du citoyen togolais"
              ]
            },
            {
              capacite: "Présenter les droits et devoirs économiques, sociaux et culturels du citoyen togolais",
              contenus: [
                "Droits et devoirs économiques, sociaux et culturels du citoyen togolais"
              ]
            }
          ],
          situationApprentissage: "À partir d'extraits de la Constitution, les apprenants recherchent ce que la loi garantit au citoyen togolais et ce qu'elle attend de lui, dans trois domaines : civique, politique, économique et social.",
          consignes: [
            "À partir des supports, identifier les droits et devoirs civiques du citoyen togolais.",
            "À partir des supports, identifier les droits et devoirs politiques du citoyen togolais.",
            "À partir des supports, identifier les droits et devoirs économiques, sociaux et culturels du citoyen togolais."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la notion de citoyenneté vue à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'extraits de la Constitution togolaise."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, exploitation de documents pour identifier les droits et devoirs civiques du citoyen togolais."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Exploitation de documents pour identifier les droits et devoirs politiques, puis économiques, sociaux et culturels du citoyen togolais."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des droits et devoirs identifiés par chaque groupe, classés par catégorie."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : tableau des droits et devoirs civiques, politiques, économiques, sociaux et culturels du citoyen togolais."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un droit et un devoir politiques du citoyen togolais."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Droits et devoirs civiques",
              contenu: "Le citoyen togolais dispose de droits civiques (comme le droit à la sûreté ou à la justice) en contrepartie de devoirs civiques (comme le respect des lois). Ce premier domaine encadre sa place au sein de la société."
            },
            {
              titre: "2. Droits et devoirs politiques",
              contenu: "Sur le plan politique, le citoyen a le droit de voter et d'être élu, mais aussi le devoir de participer à la vie démocratique de son pays de façon responsable, par exemple en s'informant avant de voter."
            },
            {
              titre: "3. Droits et devoirs économiques, sociaux et culturels",
              contenu: "Enfin, le citoyen togolais bénéficie de droits économiques, sociaux et culturels (travail, éducation, santé, culture) tout en ayant le devoir de contribuer à la vie économique et sociale du pays, notamment en payant ses impôts et en travaillant honnêtement."
            },
            {
              titre: "4. À retenir",
              contenu: "Ces trois catégories de droits et de devoirs — civiques, politiques, économiques/sociaux/culturels — montrent que la citoyenneté togolaise est un équilibre entre ce que l'État garantit au citoyen et ce que celui-ci doit en retour à la société."
            }
          ],
          evaluation: "Identification des droits et devoirs civiques, politiques, économiques, sociaux et culturels du citoyen togolais.",
          devoirMaison: "Citer un droit et un devoir dans chacun des trois domaines étudiés."
        } },
      { id: "4e-l3", numero: 3, competence: "Adopter des comportements responsables", theme: "Décentralisation au Togo", titre: "Commune", seances: 2, fiche: {
          competence: "Adopter des comportements responsables",
          theme: "Décentralisation au Togo",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 3"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Organigramme simple d'une commune (conseil municipal, bureau exécutif, services techniques, commissions)"
            }
          ],
          preRequis: [
            "Subdivisions du Togo et notion de collectivité territoriale vues en 5e"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter l'organisation de la commune",
              contenus: [
                "Définition de la commune (type de subdivision, type de structure, composition par rapport aux cantons)",
                "Organisation administrative de la commune : conseil municipal, bureau exécutif du conseil municipal, services techniques (secrétariat, comptabilité, état civil, régie, voirie), commissions (économique, domaniale, action sociale)"
              ]
            },
            {
              capacite: "Relever les attributions de la commune",
              contenus: [
                "Attributions de la commune (état civil, entretien des voies communales, aménagement, urbanisme, création et gestion des gares routières, marchés et péages, constructions d'établissements scolaires primaires et dispensaires, etc.)"
              ]
            },
            {
              capacite: "Identifier les stratégies de développement de la commune",
              contenus: [
                "Plan de développement communal",
                "Ressources de la commune",
                "Participation de la population"
              ]
            }
          ],
          situationApprentissage: "Les apprenants s'interrogent sur le fonctionnement de leur commune (qui la dirige, ce qu'elle gère, comment elle se développe) à partir de supports écrits.",
          consignes: [
            "Définir la commune (type de subdivision, type de structure, composition par rapport aux cantons).",
            "Présenter l'organisation administrative de la commune (conseil municipal, bureau exécutif, services techniques, commissions).",
            "Relever les attributions de la commune (état civil, entretien des voies communales, aménagement, urbanisme, gares routières, marchés et péages, écoles primaires et dispensaires, etc.).",
            "Identifier les stratégies de développement de la commune : inventorier ses ressources, mettre en œuvre un plan de développement communal, solliciter la participation de la population, développer des partenariats avec des ONG et d'autres communes."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la notion de collectivité territoriale vue en 5e."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de l'organigramme d'une commune."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la commune et présenter son organisation administrative."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les attributions de la commune et identifier ses stratégies de développement."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des présentations de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : organisation, attributions et stratégies de développement de la commune."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une attribution de la commune et une stratégie de son développement."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qu'est-ce que la commune",
              contenu: "La commune est une collectivité territoriale décentralisée, composée d'un ou plusieurs cantons. Elle est administrée par un conseil municipal et un bureau exécutif, appuyés par des services techniques (secrétariat, comptabilité, état civil, régie, voirie) et des commissions spécialisées (économique, domaniale, action sociale)."
            },
            {
              titre: "2. Ses attributions",
              contenu: "La commune gère de nombreux domaines du quotidien : l'état civil, l'entretien des voies communales, l'aménagement et l'urbanisme, la création et la gestion des gares routières, des marchés et des péages, ainsi que la construction d'écoles primaires et de dispensaires."
            },
            {
              titre: "3. Ses stratégies de développement",
              contenu: "Pour se développer, la commune s'appuie sur l'inventaire de ses ressources propres, la mise en œuvre d'un plan de développement communal, et la participation active de la population, parfois complétée par des partenariats avec des ONG ou d'autres communes."
            },
            {
              titre: "4. À retenir",
              contenu: "La commune est donc un échelon clé de la décentralisation togolaise, à la fois gestionnaire des services de proximité et moteur du développement local, avec l'implication de ses habitants."
            }
          ],
          evaluation: "Présentation de l'organisation administrative de la commune ; relevé de ses attributions et de ses stratégies de développement.",
          devoirMaison: "Se renseigner sur le nom du maire de sa commune et une réalisation récente de la mairie."
        } },
      { id: "4e-l4", numero: 4, competence: "Adopter des comportements responsables", theme: "Décentralisation au Togo", titre: "Préfecture", seances: 2, fiche: {
          competence: "Adopter des comportements responsables",
          theme: "Décentralisation au Togo",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 4"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Organigramme simple d'une préfecture (préfet, secrétaire général, services techniques, conférence administrative préfectorale)"
            }
          ],
          preRequis: [
            "Organisation de la commune vue en leçon 3"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter l'organisation administrative de la préfecture",
              contenus: [
                "Définition de la préfecture (type de subdivision, type de structure, composition par rapport aux communes)",
                "Organisation administrative de la préfecture : le préfet, le secrétaire général de préfecture, les services techniques (secrétariat, comptabilité, service domanial), la Conférence administrative préfectorale"
              ]
            },
            {
              capacite: "Relever les attributions du préfet",
              contenus: [
                "Attributions du préfet (contrôle administratif des services publics, coordination des services déconcentrés préfectoraux, gestion de l'ordre public via gendarmerie et police, contrôle de l'application des décisions gouvernementales, etc.)"
              ]
            },
            {
              capacite: "Expliquer le rôle du préfet dans la décentralisation au Togo",
              contenus: [
                "Rôle du préfet dans la décentralisation (participation aux délibérations du Conseil municipal, contrôle de la légalité des actes des communes, supervision des projets de développement local)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants comparent la préfecture à la commune étudiée à la leçon précédente pour comprendre son organisation et le rôle particulier du préfet.",
          consignes: [
            "Définir la préfecture (type de subdivision, type de structure, composition par rapport aux communes).",
            "Présenter l'organisation administrative de la préfecture (le préfet, le secrétaire général de préfecture, les services techniques, la Conférence administrative préfectorale).",
            "Relever les attributions du préfet (contrôle administratif des services publics, coordination des services déconcentrés, gestion de l'ordre public, contrôle des décisions gouvernementales, etc.).",
            "Expliquer le rôle du préfet dans la décentralisation au Togo (participation aux délibérations du Conseil municipal, contrôle de la légalité des actes des communes, supervision des projets de développement local)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de l'organisation de la commune vue à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de l'organigramme d'une préfecture."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la préfecture et présenter son organisation administrative."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les attributions du préfet et expliquer son rôle dans la décentralisation."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des présentations de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : organisation administrative de la préfecture, attributions et rôle du préfet."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une attribution du préfet."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qu'est-ce que la préfecture",
              contenu: "La préfecture est une circonscription administrative déconcentrée, regroupant plusieurs communes. Elle est dirigée par un préfet, assisté d'un secrétaire général de préfecture, de services techniques (secrétariat, comptabilité, service domanial) et d'une Conférence administrative préfectorale."
            },
            {
              titre: "2. Les attributions du préfet",
              contenu: "Le préfet exerce le contrôle administratif des services publics de sa préfecture, coordonne les services déconcentrés, veille au maintien de l'ordre public en s'appuyant sur la gendarmerie et la police, et contrôle l'application des décisions gouvernementales."
            },
            {
              titre: "3. Son rôle dans la décentralisation",
              contenu: "Le préfet joue également un rôle actif dans la décentralisation : il participe aux délibérations du conseil municipal, contrôle la légalité des actes pris par les communes, et supervise les projets de développement local menés dans sa préfecture."
            },
            {
              titre: "4. À retenir",
              contenu: "Contrairement à la commune, structure décentralisée gérée par des élus, la préfecture reste une structure déconcentrée représentant directement l'État, tout en jouant un rôle d'appui et de contrôle auprès des communes."
            }
          ],
          evaluation: "Présentation de l'organisation administrative de la préfecture ; relevé des attributions du préfet ; explication de son rôle dans la décentralisation.",
          devoirMaison: "Se renseigner sur le nom de la préfecture et du préfet dont dépend son domicile."
        } },
      { id: "4e-l5", numero: 5, competence: "Adopter des comportements responsables", theme: "Démocratie participative", titre: "Rôles du parti politique et de la société civile", seances: 2, ecartGuide: true, fiche: {
          competence: "Adopter des comportements responsables",
          theme: "Démocratie participative",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Cette leçon est absente du guide d'exécution officiel de la classe de 4e : seul le tableau programme (capacités/contenus) est disponible. Stratégies, consignes, déroulement et évaluation ci-dessous sont proposés par prolongement direct du tableau programme et des méthodes utilisées dans les leçons voisines du même guide (travail en petits groupes, exploitation de documents, discussion dirigée) — à valider par l'enseignante avant usage."
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples locaux de partis politiques et d'organisations de la société civile (ONG, associations de jeunes) connus des apprenants"
            }
          ],
          preRequis: [
            "Droits et devoirs politiques du citoyen vus en leçon 2"
          ],
          capacitesContenus: [
            {
              capacite: "Déterminer le rôle d'un parti politique",
              contenus: [
                "Notions de parti politique, majorité, minorité, parti au pouvoir, parti d'opposition",
                "Rôles du parti politique"
              ]
            },
            {
              capacite: "Déterminer le rôle de la société civile",
              contenus: [
                "Notion de société civile",
                "Composantes de la société civile",
                "Rôle de la société civile"
              ]
            },
            {
              capacite: "Montrer comment le jeune citoyen peut participer à la vie politique de son pays",
              contenus: [
                "Participation du jeune à la vie politique du pays"
              ]
            }
          ],
          situationApprentissage: "Les apprenants citent des partis politiques ou des associations (ONG, groupements de jeunes) connus dans leur environnement pour s'interroger sur leur rôle dans la vie du pays.",
          consignes: [
            "Définir les notions de parti politique, majorité, minorité, parti au pouvoir et parti d'opposition, et déterminer le rôle d'un parti politique.",
            "Définir la société civile, identifier ses composantes et déterminer son rôle.",
            "Montrer comment le jeune citoyen peut participer à la vie politique de son pays."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des droits et devoirs politiques du citoyen togolais vus en leçon 2."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'exemples locaux de partis politiques et d'organisations de la société civile."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir parti politique, majorité, minorité, parti au pouvoir et parti d'opposition, et déterminer le rôle d'un parti politique."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour définir la société civile, ses composantes et son rôle, puis montrer comment un jeune citoyen peut participer à la vie politique de son pays."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des définitions et propositions de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite (proposée) : rôle du parti politique, rôle de la société civile, formes de participation du jeune à la vie politique."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer le rôle d'un parti politique et une façon pour un jeune de participer à la vie politique de son pays."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le rôle du parti politique",
              contenu: "Un parti politique est une organisation qui rassemble des citoyens partageant les mêmes idées pour conquérir et exercer le pouvoir. On distingue la majorité (le ou les partis qui soutiennent le gouvernement) de la minorité ou opposition (les partis qui la contestent). Le parti politique organise ainsi la compétition démocratique pour le pouvoir."
            },
            {
              titre: "2. Le rôle de la société civile",
              contenu: "La société civile regroupe l'ensemble des organisations qui agissent en dehors des partis politiques et de l'État : associations, ONG, syndicats, groupements de jeunes ou de femmes. Elle joue un rôle de défense de causes particulières et de contre-pouvoir face aux institutions officielles."
            },
            {
              titre: "3. La participation du jeune à la vie politique",
              contenu: "Même avant sa majorité, le jeune citoyen peut déjà participer à la vie politique de son pays, par exemple en s'informant sur l'actualité politique, en participant à des clubs ou associations scolaires, ou en s'exprimant de manière responsable sur les enjeux de sa communauté."
            },
            {
              titre: "4. À retenir",
              contenu: "Partis politiques et société civile jouent des rôles complémentaires dans la vie démocratique du pays : les premiers organisent la compétition pour le pouvoir, la seconde veille et défend des causes en dehors des partis. Le jeune citoyen, quant à lui, peut déjà s'y intéresser et y participer à son échelle."
            }
          ],
          evaluation: "Détermination du rôle d'un parti politique et du rôle de la société civile ; proposition de formes de participation du jeune à la vie politique.",
          devoirMaison: "Citer un parti politique et une association ou ONG connus dans son entourage, et indiquer une action de chacun."
        } },
      { id: "4e-l6", numero: 6, competence: "Adopter des comportements responsables", theme: "Démocratie participative", titre: "Règlement intérieur de l'établissement", seances: 4, fiche: {
          competence: "Adopter des comportements responsables",
          theme: "Démocratie participative",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 6"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Règlement intérieur réel du collège de l'apprenant (ou modèle type)"
            }
          ],
          preRequis: [
            "Rôle du parti politique et de la société civile vus en leçon 5"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter le règlement intérieur de l'établissement",
              contenus: [
                "Notion de règlement intérieur",
                "Composantes du règlement intérieur (principes régissant l'éducation nationale, règles de vie, sanctions)",
                "Utilité du règlement intérieur (respect de soi et des autres, facilitation des rapports entre acteurs, connaissance des droits et devoirs de chacun, etc.)"
              ]
            },
            {
              capacite: "Décrire le processus d'élaboration du règlement intérieur de l'établissement",
              contenus: [
                "Processus d'élaboration du règlement intérieur (préparation par la direction, convocation du conseil d'administration, etc.)"
              ]
            },
            {
              capacite: "Mise en scène : élection du comité de classe",
              contenus: [
                "Élection du comité de classe"
              ]
            }
          ],
          situationApprentissage: "Les apprenants relisent des extraits du règlement intérieur de leur propre collège pour en comprendre les composantes, l'utilité et le processus d'élaboration, avant d'élire eux-mêmes leur comité de classe.",
          consignes: [
            "Définir le règlement intérieur de l'établissement.",
            "Présenter les composantes du règlement intérieur (principes régissant l'éducation nationale, règles de vie, sanctions).",
            "Relever l'utilité du règlement intérieur (respect de soi et des autres, facilitation des rapports entre acteurs, connaissance des droits et devoirs de chacun, etc.).",
            "Décrire le processus d'élaboration du règlement intérieur de l'établissement (préparation par la direction, convocation du conseil d'administration, etc.).",
            "Organiser, avec l'aide du professeur, l'élection des membres du comité de classe (exercice pratique)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée",
            "Exercice pratique (élection du comité de classe)"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel du rôle du parti politique et de la société civile vus à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 15,
              contenu: "Présentation d'extraits du règlement intérieur du collège."
            },
            {
              phase: "Appropriation",
              dureeMin: 45,
              contenu: "En petits groupes, discussion dirigée pour définir le règlement intérieur et présenter ses composantes et son utilité."
            },
            {
              phase: "Exploration",
              dureeMin: 65,
              contenu: "Discussion dirigée pour décrire le processus d'élaboration du règlement intérieur, puis exercice pratique : organisation de l'élection du comité de classe (candidatures, vote, dépouillement)."
            },
            {
              phase: "Mise en commun",
              dureeMin: 30,
              contenu: "Proclamation des résultats de l'élection du comité de classe ; échange sur le déroulement du vote."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 45,
              contenu: "Trace écrite : composantes, utilité et processus d'élaboration du règlement intérieur ; rôle du comité de classe élu."
            },
            {
              phase: "Évaluation",
              dureeMin: 10,
              contenu: "Citer une composante du règlement intérieur et une étape de son élaboration."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qu'est-ce que le règlement intérieur",
              contenu: "Le règlement intérieur d'un établissement est un texte qui fixe les règles de vie de tous ses membres. Il comprend les principes régissant l'éducation nationale, les règles de vie quotidienne à respecter, et les sanctions applicables en cas de manquement."
            },
            {
              titre: "2. Son utilité",
              contenu: "Le règlement intérieur est utile à plusieurs titres : il favorise le respect de soi et des autres, facilite les rapports entre tous les acteurs de l'établissement, et permet à chacun de connaître précisément ses droits et ses devoirs."
            },
            {
              titre: "3. Son processus d'élaboration",
              contenu: "Le règlement intérieur n'est pas imposé arbitrairement : il est préparé par la direction de l'établissement, puis soumis au conseil d'administration qui est convoqué pour l'examiner et l'adopter."
            },
            {
              titre: "4. L'élection du comité de classe",
              contenu: "La mise en pratique de la démocratie participative se traduit par l'élection du comité de classe, organisée avec l'aide du professeur. Cet exercice concret permet aux apprenants d'expérimenter eux-mêmes le fonctionnement démocratique au sein de leur établissement."
            }
          ],
          evaluation: "Présentation des composantes du règlement intérieur ; description de son processus d'élaboration.",
          devoirMaison: "Relire le règlement intérieur de son collège et noter une règle qu'on ne connaissait pas encore."
        } },
      { id: "4e-l7", numero: 7, competence: "Respecter les droits et libertés des autres", theme: "Droits humains", titre: "Droits humains et dignité humaine", seances: 2, fiche: {
          competence: "Respecter les droits et libertés des autres",
          theme: "Droits humains",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 7"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Extraits simplifiés de la Déclaration universelle des droits de l'homme"
            }
          ],
          preRequis: [
            "Droits et devoirs du citoyen togolais vus en leçon 2"
          ],
          capacitesContenus: [
            {
              capacite: "Relever les principes des droits humains",
              contenus: [
                "Définition des droits humains",
                "Principes des droits humains (universalité, interdépendance, indivisibilité, égalité, etc.)"
              ]
            },
            {
              capacite: "Déterminer les actes et comportements qui portent atteinte à la dignité humaine",
              contenus: [
                "Définition de la dignité humaine",
                "Actes et comportements qui portent atteinte à la dignité humaine (corruption, détournement des deniers publics, torture, trahison, silence coupable devant l'injustice, meurtre, abandon, irresponsabilité, etc.)"
              ]
            }
          ],
          situationApprentissage: "À partir d'extraits simplifiés de la Déclaration universelle des droits de l'homme, les apprenants découvrent les principes des droits humains et ce qui porte atteinte à la dignité humaine.",
          consignes: [
            "Définir les droits humains et relever leurs principes (universalité, interdépendance, indivisibilité, égalité, etc.).",
            "Définir la dignité humaine et relever les actes qui y portent atteinte (corruption, détournement des deniers publics, torture, trahison, silence coupable devant l'injustice, meurtre, abandon, irresponsabilité, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des droits et devoirs du citoyen togolais."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'extraits simplifiés de la Déclaration universelle des droits de l'homme."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir les droits humains et relever leurs principes."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour définir la dignité humaine et relever les actes qui y portent atteinte."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des principes et des actes relevés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définition et principes des droits humains, définition de la dignité humaine et actes qui y portent atteinte."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un principe des droits humains et un acte qui porte atteinte à la dignité humaine."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les principes des droits humains",
              contenu: "Les droits humains sont les droits fondamentaux reconnus à toute personne du seul fait de son humanité. Ils reposent sur des principes essentiels : l'universalité (ils s'appliquent à tous, partout), l'interdépendance et l'indivisibilité (on ne peut séparer un droit d'un autre) et l'égalité entre tous les êtres humains."
            },
            {
              titre: "2. La dignité humaine",
              contenu: "La dignité humaine est le respect fondamental dû à chaque personne, indépendamment de sa situation. Elle est bafouée par des actes graves comme la corruption, le détournement des deniers publics, la torture, la trahison, le silence coupable devant l'injustice, le meurtre, l'abandon ou l'irresponsabilité."
            },
            {
              titre: "3. À retenir",
              contenu: "Comprendre les principes des droits humains et reconnaître ce qui porte atteinte à la dignité humaine est la première étape pour apprendre à les respecter et à les défendre, ce qui sera approfondi dans les leçons suivantes."
            }
          ],
          evaluation: "Relevé des principes des droits humains ; détermination des actes qui portent atteinte à la dignité humaine.",
          devoirMaison: "Citer un exemple d'acte, vu à la télévision ou entendu, qui porte atteinte à la dignité humaine et expliquer pourquoi."
        } },
      { id: "4e-l8", numero: 8, competence: "Respecter les droits et libertés des autres", theme: "Droits humains", titre: "Droits et libertés fondamentaux de l'homme", seances: 2, fiche: {
          competence: "Respecter les droits et libertés des autres",
          theme: "Droits humains",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 8"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Tableau des catégories de droits humains à compléter en classe"
            }
          ],
          preRequis: [
            "Principes des droits humains vus en leçon 7"
          ],
          capacitesContenus: [
            {
              capacite: "Relever les différentes catégories des droits humains",
              contenus: [
                "Droits civils et politiques",
                "Droits économiques, sociaux et culturels",
                "Droits collectifs"
              ]
            },
            {
              capacite: "Présenter les droits et libertés fondamentaux de l'homme",
              contenus: [
                "Droits civils et politiques (égalité, dignité, liberté d'opinion, liberté de culte, droit de grève, etc.)",
                "Droits économiques, sociaux et culturels (emploi, sécurité, logement, instruction, santé, environnement sain, etc.)",
                "Droits collectifs (liberté de réunion, liberté de la presse, liberté d'association, droit de manifester, etc.)"
              ]
            },
            {
              capacite: "Apprendre à respecter et défendre les droits des autres",
              contenus: [
                "Respect et défense des droits des autres"
              ]
            }
          ],
          situationApprentissage: "Les apprenants classent des exemples de droits (voter, aller à l'école, se réunir librement...) dans les catégories civils/politiques, économiques/sociaux/culturels et collectifs, pour mieux les connaître et apprendre à les respecter chez les autres.",
          consignes: [
            "Relever les différentes catégories de droits humains (droits civils et politiques, droits économiques, sociaux et culturels, droits collectifs).",
            "Présenter les droits civils et politiques (égalité, dignité, liberté d'opinion, liberté de culte, droit de grève, etc.).",
            "Présenter les droits économiques, sociaux et culturels (emploi, sécurité, logement, instruction, santé, environnement sain, etc.) et les droits collectifs (réunion, presse, association, manifestation, etc.).",
            "Montrer comment respecter et défendre les droits des autres."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des principes des droits humains vus à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation du tableau des catégories de droits humains à compléter."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, exploitation de documents pour identifier les catégories de droits humains et présenter les droits civils et politiques."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Exploitation de documents pour présenter les droits économiques, sociaux, culturels et collectifs, puis discussion dirigée sur le respect et la défense des droits des autres."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Mise en commun du tableau des catégories de droits complété par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : tableau des catégories de droits humains et exemples de chacune."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un droit civil et politique et un droit économique, social ou culturel."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Trois catégories de droits",
              contenu: "Les droits humains se répartissent en trois grandes catégories : les droits civils et politiques, les droits économiques, sociaux et culturels, et les droits collectifs. Cette classification permet de mieux comprendre l'étendue des droits fondamentaux de l'homme."
            },
            {
              titre: "2. Droits civils, politiques, économiques, sociaux et culturels",
              contenu: "Les droits civils et politiques regroupent l'égalité, la dignité, la liberté d'opinion, la liberté de culte ou encore le droit de grève. Les droits économiques, sociaux et culturels couvrent l'emploi, la sécurité, le logement, l'instruction, la santé et le droit à un environnement sain."
            },
            {
              titre: "3. Droits collectifs",
              contenu: "Les droits collectifs concernent des libertés exercées en groupe : la liberté de réunion, la liberté de la presse, la liberté d'association et le droit de manifester. Ces droits garantissent la possibilité de s'exprimer et de s'organiser collectivement."
            },
            {
              titre: "4. Respecter et défendre les droits des autres",
              contenu: "Connaître ces droits ne suffit pas : il faut aussi apprendre à respecter et à défendre les droits des autres au quotidien, en gardant à l'esprit que la liberté de chacun s'arrête là où commence celle d'autrui."
            }
          ],
          evaluation: "Identification des catégories de droits humains ; présentation des droits civils et politiques.",
          devoirMaison: "Classer cinq droits déjà connus dans les catégories étudiées en classe."
        } },
      { id: "4e-l9", numero: 9, competence: "Respecter les droits et libertés des autres", theme: "Droits humains", titre: "Droits spécifiques ou catégoriels", seances: 2, fiche: {
          competence: "Respecter les droits et libertés des autres",
          theme: "Droits humains",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 9"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Extraits simplifiés de la Convention relative aux droits de l'enfant"
            }
          ],
          preRequis: [
            "Catégories de droits humains vues en leçon 8"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les catégories de droits spécifiques",
              contenus: [
                "Définition de droit spécifique (ou catégoriel)",
                "Catégories de droits spécifiques (droits des enfants, des femmes, des personnes handicapées, des personnes âgées, des réfugiés, etc.)"
              ]
            },
            {
              capacite: "Décrire la naissance des droits des enfants",
              contenus: [
                "Naissance des droits des enfants (non prise en compte de leurs besoins spécifiques, droits noyés dans les droits humains, désir de plus de protection, instruments légaux contre les abus, etc.)"
              ]
            },
            {
              capacite: "Présenter quelques droits et devoirs des enfants",
              contenus: [
                "Droits des enfants (avoir une famille, être aimé, aller à l'école, alimentation suffisante, jouer, etc.)",
                "Devoirs associés (politesse, hygiène corporelle, éviter les jeux dangereux, aimer sa famille, assiduité aux études, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants s'interrogent sur les droits particuliers dont ils bénéficient en tant qu'enfants, à partir d'extraits simplifiés de la Convention relative aux droits de l'enfant.",
          consignes: [
            "Définir le droit spécifique (ou catégoriel) et identifier ses catégories (droits des enfants, des femmes, des personnes handicapées, des personnes âgées, des réfugiés, etc.).",
            "Décrire la naissance des droits des enfants.",
            "Présenter quelques droits des enfants (avoir une famille, être aimé, aller à l'école, alimentation suffisante et équilibrée, jouer, etc.) et les devoirs qui leur sont associés (politesse, hygiène corporelle, éviter les jeux dangereux, aimer sa famille, assiduité aux études, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des catégories de droits humains vues à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'extraits simplifiés de la Convention relative aux droits de l'enfant."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir le droit spécifique et identifier ses catégories."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour décrire la naissance des droits des enfants et présenter quelques droits et devoirs des enfants."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des droits et devoirs des enfants identifiés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : catégories de droits spécifiques, et droits/devoirs des enfants."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un droit de l'enfant et le devoir qui lui est associé."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les droits spécifiques ou catégoriels",
              contenu: "Un droit spécifique (ou catégoriel) est un droit accordé à une catégorie particulière de personnes ayant des besoins propres : les enfants, les femmes, les personnes handicapées, les personnes âgées ou encore les réfugiés."
            },
            {
              titre: "2. La naissance des droits de l'enfant",
              contenu: "Les droits de l'enfant sont nés du constat que les besoins spécifiques des enfants n'étaient pas suffisamment pris en compte lorsqu'ils restaient noyés dans les droits humains généraux. Le désir de leur offrir une protection renforcée a conduit à la création d'instruments légaux spécifiques contre les abus dont ils peuvent être victimes."
            },
            {
              titre: "3. Droits et devoirs des enfants",
              contenu: "Parmi les droits de l'enfant figurent le droit d'avoir une famille, d'être aimé, d'aller à l'école, de bénéficier d'une alimentation suffisante et de pouvoir jouer. En contrepartie, l'enfant a aussi des devoirs : la politesse, l'hygiène corporelle, éviter les jeux dangereux, aimer sa famille et être assidu dans ses études."
            },
            {
              titre: "4. À retenir",
              contenu: "Les droits spécifiques, dont ceux de l'enfant, montrent que certaines catégories de personnes nécessitent une attention et une protection particulières, en plus des droits humains reconnus à tous."
            }
          ],
          evaluation: "Identification des catégories de droits spécifiques ; présentation de quelques droits et devoirs des enfants.",
          devoirMaison: "Faire la liste de trois droits et trois devoirs de l'enfant vus en classe."
        } },
      { id: "4e-l10", numero: 10, competence: "Prendre soin de sa santé et entretenir son milieu de vie", theme: "Santé et environnement", titre: "Santé sexuelle de l'adolescent", seances: 2, fiche: {
          competence: "Prendre soin de sa santé et entretenir son milieu de vie",
          theme: "Santé et environnement",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 10"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Support écrit ou schéma simple présentant les transformations physiques de l'adolescence (garçon/fille)"
            }
          ],
          preRequis: [
            "Notions générales de puberté vues en sciences de la vie et de la terre"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les transformations physiques au cours de l'adolescence",
              contenus: [
                "Chez le garçon (élargissement de la poitrine, voix rauque, premières éjaculations, etc.)",
                "Chez la fille (élargissement du bassin, voix qui devient fine, apparition des menstrues, etc.)"
              ]
            },
            {
              capacite: "Identifier les transformations psychologiques au cours de l'adolescence",
              contenus: [
                "Chez le garçon (désir d'exercer sa force, sentiments envers l'autre sexe, contestation, compagnie des pairs, etc.)",
                "Chez la fille (désir de coquetterie, désir d'attirer l'attention de l'autre sexe, contestation, compagnie des pairs, etc.)"
              ]
            },
            {
              capacite: "Gérer son cycle menstruel",
              contenus: [
                "Cycle menstruel",
                "Gestion du cycle menstruel"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent, dans un climat de respect et de pudeur, sur les changements qu'ils observent en eux-mêmes depuis quelque temps, pour mieux comprendre les transformations physiques et psychologiques de l'adolescence.",
          consignes: [
            "Identifier les transformations physiques de l'adolescence chez le garçon et chez la fille.",
            "Identifier les transformations psychologiques de l'adolescence chez le garçon et chez la fille.",
            "Expliquer le cycle menstruel chez la jeune fille et prendre conscience de ses implications (maîtrise de son cycle, dispositions à l'apparition des règles, conscience de ses aptitudes à procréer, vie sexuelle exemplaire, éviter la parenté précoce, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral, avec tact, sur les changements ressentis depuis l'entrée dans l'adolescence."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'un support illustrant les transformations physiques de l'adolescence."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour identifier les transformations physiques chez le garçon et chez la fille."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour identifier les transformations psychologiques, puis expliquer le cycle menstruel et sa gestion chez la jeune fille."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution, dans le respect de chacun, des transformations identifiées par les groupes."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : transformations physiques et psychologiques de l'adolescence, cycle menstruel et sa gestion."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une transformation physique et une transformation psychologique de l'adolescence."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les transformations physiques de l'adolescence",
              contenu: "L'adolescence s'accompagne de changements physiques marqués : chez le garçon, on observe un élargissement de la poitrine, une voix qui devient plus rauque et les premières éjaculations ; chez la fille, un élargissement du bassin, une voix plus fine et l'apparition des menstrues."
            },
            {
              titre: "2. Les transformations psychologiques",
              contenu: "Sur le plan psychologique, le garçon peut ressentir le désir d'exercer sa force, développer des sentiments envers l'autre sexe, ou manifester une certaine contestation et une préférence pour la compagnie de ses pairs. La fille, de son côté, peut développer un désir de coquetterie, chercher à attirer l'attention de l'autre sexe, tout en connaissant également des phases de contestation."
            },
            {
              titre: "3. Gérer son cycle menstruel",
              contenu: "Chez la jeune fille, comprendre et gérer son cycle menstruel est une étape essentielle de la santé sexuelle à l'adolescence. Cette gestion implique la maîtrise de son cycle, la prise de conscience de ses aptitudes à procréer, et l'adoption d'une vie sexuelle responsable pour éviter une parenté précoce."
            },
            {
              titre: "4. À retenir",
              contenu: "Comprendre ces transformations physiques et psychologiques permet à chaque adolescent de mieux vivre cette période de sa vie et de se responsabiliser progressivement face à sa santé sexuelle."
            }
          ],
          evaluation: "Identification des transformations physiques et psychologiques de l'adolescence ; explication du cycle menstruel chez la jeune fille.",
          devoirMaison: "Rédiger, pour soi-même, trois questions que l'on se pose encore sur les changements de l'adolescence, à poser si besoin à un adulte de confiance."
        } },
      { id: "4e-l11", numero: 11, competence: "Prendre soin de sa santé et entretenir son milieu de vie", theme: "Santé et environnement", titre: "Parenté responsable", seances: 2, fiche: {
          competence: "Prendre soin de sa santé et entretenir son milieu de vie",
          theme: "Santé et environnement",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 11"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Cas simplifiés illustrant une parenté précoce et une parenté responsable"
            }
          ],
          preRequis: [
            "Santé sexuelle de l'adolescent vue en leçon 10"
          ],
          capacitesContenus: [
            {
              capacite: "Dégager les inconvénients d'une parenté précoce",
              contenus: [
                "Notions de parenté précoce et de parenté responsable",
                "Les quatre trop : trop tôt, trop tard, trop rapprochée, trop nombreuse",
                "Inconvénients d'une parenté précoce (difficultés scolaires, risques de santé pour la fille, exposition aux IST, problèmes sociaux et économiques, etc.)"
              ]
            },
            {
              capacite: "Identifier les conditions d'une parenté responsable",
              contenus: [
                "Conditions d'une parenté responsable (être majeur, être mature, être autonome, être responsable)"
              ]
            },
            {
              capacite: "Présenter les bienfaits d'une parenté responsable",
              contenus: [
                "Bienfaits d'une parenté responsable (bien-être familial, éducation harmonieuse des enfants, renforcement de l'autorité parentale, épanouissement familial, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants examinent des cas simplifiés opposant une parenté précoce à une parenté responsable pour en dégager les inconvénients et les conditions à réunir avant de devenir parent.",
          consignes: [
            "Définir la parenté précoce et la parenté responsable, et expliquer les quatre trop (trop tôt, trop tard, trop rapprochée, trop nombreuse).",
            "Relever les inconvénients d'une parenté précoce (difficultés scolaires, risques de santé pour la fille, exposition aux IST, problèmes sociaux et économiques, etc.).",
            "Relever les conditions d'une parenté responsable (être majeur, être mature, être autonome, être responsable).",
            "Présenter les bienfaits d'une parenté responsable (bien-être familial, éducation harmonieuse des enfants, renforcement de l'autorité parentale, épanouissement familial, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la leçon précédente sur la santé sexuelle de l'adolescent."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de cas simplifiés de parenté précoce et de parenté responsable."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir parenté précoce et parenté responsable, et expliquer les quatre trop."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les inconvénients d'une parenté précoce, les conditions et les bienfaits d'une parenté responsable."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des inconvénients, conditions et bienfaits relevés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : les quatre trop, inconvénients de la parenté précoce, conditions et bienfaits de la parenté responsable."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un inconvénient de la parenté précoce et une condition de la parenté responsable."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les inconvénients d'une parenté précoce",
              contenu: "Une parenté précoce survient dans l'une des quatre situations dites « des quatre trop » : trop tôt, trop tard, trop rapprochée ou trop nombreuse. Elle entraîne des inconvénients sérieux : difficultés scolaires, risques de santé pour la fille, exposition aux infections sexuellement transmissibles, ainsi que des problèmes sociaux et économiques pour la famille."
            },
            {
              titre: "2. Les conditions d'une parenté responsable",
              contenu: "À l'inverse, une parenté responsable suppose de réunir plusieurs conditions : être majeur, être mature, être autonome et être responsable. Ces conditions garantissent que les parents sont réellement prêts à assumer l'éducation d'un enfant."
            },
            {
              titre: "3. Les bienfaits d'une parenté responsable",
              contenu: "Une parenté responsable apporte de nombreux bienfaits : le bien-être familial, une éducation harmonieuse des enfants, un renforcement de l'autorité parentale et un épanouissement global de la famille."
            },
            {
              titre: "4. À retenir",
              contenu: "Éviter une parenté précoce et réunir les conditions d'une parenté responsable permettent de construire une famille stable et épanouie, dans l'intérêt des parents comme des enfants."
            }
          ],
          evaluation: "Relevé des inconvénients d'une parenté précoce ; identification des conditions et des bienfaits d'une parenté responsable.",
          devoirMaison: "Expliquer, en quelques phrases, ce que signifie pour soi « être prêt à devenir parent »."
        } },
      { id: "4e-l12", numero: 12, competence: "Prendre soin de sa santé et entretenir son milieu de vie", theme: "Santé et environnement", titre: "Tabagisme et toxicomanie", seances: 4, fiche: {
          competence: "Prendre soin de sa santé et entretenir son milieu de vie",
          theme: "Santé et environnement",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 12"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Témoignages ou campagnes de sensibilisation contre la drogue (affiches, spots, sans images choquantes)"
            }
          ],
          preRequis: [
            "Parenté responsable vue en leçon 11"
          ],
          capacitesContenus: [
            {
              capacite: "Identifier les différentes catégories de drogues",
              contenus: [
                "Définition de la drogue",
                "Catégories de drogues : sédatifs, excitants ou stimulants, perturbateurs mentaux, aphrodisiaques"
              ]
            },
            {
              capacite: "Relever les modes de consommation de la drogue",
              contenus: [
                "Voie orale (boire, fumer, ingérer)",
                "Voie nasale (sniffer, inhaler)",
                "Injection (s'injecter, se piquer)"
              ]
            },
            {
              capacite: "Indiquer les effets recherchés par le consommateur de drogue",
              contenus: [
                "Plaisir, apaisement, stimulation, oubli des soucis, courage pour relever un défi, etc."
              ]
            },
            {
              capacite: "Dégager les conséquences liées à la consommation de la drogue",
              contenus: [
                "Conséquences pour le consommateur (santé fragile, échec scolaire, troubles mentaux, etc.)",
                "Conséquences pour la société (conflits familiaux, délinquance, violence, crime, etc.)"
              ]
            },
            {
              capacite: "Détecter les signes d'alerte de la consommation de la drogue chez le jeune",
              contenus: [
                "Changement d'amis, manque d'assiduité, baisse des résultats scolaires, négligence vestimentaire, emprunt fréquent d'argent, etc."
              ]
            },
            {
              capacite: "Relever les actions et comportements qui préviennent la consommation de la drogue chez le jeune",
              contenus: [
                "Écoute des conseils des parents, des enseignants et des bons amis, pratique d'activités sportives et culturelles, etc."
              ]
            },
            {
              capacite: "Présenter les mesures de lutte contre la toxicomanie au Togo",
              contenus: [
                "Les quatre piliers : prévention, action thérapeutique, action sociale, répression"
              ]
            }
          ],
          situationApprentissage: "À partir de campagnes de sensibilisation contre la drogue, les apprenants s'interrogent sur ce qu'est la drogue, pourquoi certains jeunes y ont recours, et comment s'en prémunir.",
          consignes: [
            "Définir la drogue et identifier ses différentes catégories (sédatifs, excitants ou stimulants, perturbateurs mentaux, aphrodisiaques).",
            "Relever les modes de consommation de la drogue (voie orale, voie nasale, injection).",
            "Relever les effets recherchés par le consommateur de drogue.",
            "Relever les conséquences de la consommation de drogue pour le consommateur et pour la société.",
            "Détecter les signes d'alerte de la consommation de drogue chez le jeune.",
            "Relever les actions et comportements qui préviennent la consommation de drogue chez le jeune.",
            "Présenter les mesures de lutte contre la toxicomanie au Togo (prévention, action thérapeutique, action sociale, répression)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur ce que les apprenants savent déjà de la drogue."
            },
            {
              phase: "Présentation",
              dureeMin: 15,
              contenu: "Présentation de campagnes de sensibilisation contre la drogue."
            },
            {
              phase: "Appropriation",
              dureeMin: 45,
              contenu: "En petits groupes, discussion dirigée pour définir la drogue, ses catégories et ses modes de consommation."
            },
            {
              phase: "Exploration",
              dureeMin: 90,
              contenu: "Discussion dirigée, en plusieurs temps : effets recherchés par le consommateur ; conséquences pour le consommateur et pour la société ; signes d'alerte chez le jeune ; actions de prévention ; mesures de lutte contre la toxicomanie au Togo (les quatre piliers)."
            },
            {
              phase: "Mise en commun",
              dureeMin: 30,
              contenu: "Restitution des éléments relevés par chaque groupe sur chacun des points étudiés."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 25,
              contenu: "Trace écrite : catégories de drogues, conséquences, signes d'alerte, actions préventives et mesures de lutte contre la toxicomanie."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un signe d'alerte de la consommation de drogue et une action pour la prévenir."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les catégories de drogues",
              contenu: "La drogue regroupe plusieurs catégories de substances : les sédatifs (qui calment), les excitants ou stimulants (qui dynamisent), les perturbateurs mentaux (qui altèrent la perception) et les aphrodisiaques. Elle peut être consommée par voie orale (boire, fumer, ingérer), par voie nasale (sniffer, inhaler) ou par injection."
            },
            {
              titre: "2. Effets recherchés et conséquences",
              contenu: "Les consommateurs recherchent des effets comme le plaisir, l'apaisement, la stimulation, l'oubli des soucis ou le courage face à un défi. Mais la consommation de drogue a de lourdes conséquences : pour le consommateur (santé fragile, échec scolaire, troubles mentaux) et pour la société (conflits familiaux, délinquance, violence, crime)."
            },
            {
              titre: "3. Signes d'alerte et prévention",
              contenu: "Plusieurs signes doivent alerter l'entourage d'un jeune : changement de fréquentations, manque d'assiduité, baisse des résultats scolaires, négligence vestimentaire ou emprunts fréquents d'argent. La prévention passe par l'écoute des conseils des parents, des enseignants et des bons amis, ainsi que par la pratique d'activités sportives et culturelles."
            },
            {
              titre: "4. La lutte contre la toxicomanie au Togo",
              contenu: "Le Togo organise sa lutte contre la toxicomanie autour de quatre piliers complémentaires : la prévention, l'action thérapeutique, l'action sociale et la répression. Cette approche globale vise à protéger les jeunes tout en accompagnant ceux qui sont déjà touchés."
            }
          ],
          evaluation: "Identification des catégories et modes de consommation de la drogue ; relevé des conséquences, signes d'alerte et mesures de prévention et de lutte contre la toxicomanie.",
          devoirMaison: "Rédiger un court message de sensibilisation contre la drogue destiné à des camarades de son âge."
        } },
      { id: "4e-l13", numero: 13, competence: "Prendre soin de sa santé et entretenir son milieu de vie", theme: "Santé et environnement", titre: "Protection de l'environnement au Togo", seances: 2, fiche: {
          competence: "Prendre soin de sa santé et entretenir son milieu de vie",
          theme: "Santé et environnement",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 13"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Extraits simplifiés du Code de l'environnement togolais (1988) et de la Loi-cadre sur l'environnement (2008)"
            }
          ],
          preRequis: [
            "Notions de pollution de l'environnement vues en 5e"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter le cadre juridique de la protection de l'environnement au Togo",
              contenus: [
                "Instruments de protection (Constitution, Code de l'environnement de 1988, Loi-cadre sur l'environnement de 2008, etc.)",
                "Mécanismes étatiques (ministère de l'environnement, comité national de l'environnement, etc.)",
                "Mécanismes juridiques (juridictions sanctionnant les atteintes à l'environnement)",
                "Mécanismes privés (ONG : REFED/S, ENPRO, CREAD, ETD, INADES-Formation)"
              ]
            },
            {
              capacite: "Décrire les éléments fondamentaux de la politique nationale de protection de l'environnement au Togo",
              contenus: [
                "Politique nationale de protection de l'environnement au Togo"
              ]
            },
            {
              capacite: "Relever les acteurs d'un environnement sain",
              contenus: [
                "Acteurs d'un environnement sain (État, collectivités locales, citoyen)"
              ]
            },
            {
              capacite: "Proposer les actions à réaliser pour un environnement sain au Togo",
              contenus: [
                "Au niveau de l'État (application des lois, sensibilisation)",
                "Au niveau des collectivités locales (services d'assainissement, application des lois, sensibilisation)",
                "Au niveau du citoyen (reboisement, éviter la déforestation, réduire les produits chimiques, éviter de jeter les ordures, etc.)"
              ]
            }
          ],
          situationApprentissage: "À partir d'extraits du Code de l'environnement togolais, les apprenants découvrent comment l'État, les collectivités locales et les citoyens contribuent, chacun à son niveau, à un environnement sain.",
          consignes: [
            "Présenter les instruments de protection de l'environnement au Togo (Constitution, Code de l'environnement de 1988, Loi-cadre de 2008, etc.).",
            "Présenter les mécanismes de protection de l'environnement au Togo (mécanismes étatiques, juridiques, privés).",
            "Décrire les éléments fondamentaux de la politique nationale de protection de l'environnement au Togo.",
            "Identifier les acteurs d'un environnement sain au Togo (État, collectivités locales, citoyen).",
            "Proposer les actions à réaliser pour un environnement sain au Togo, à chacun de ces trois niveaux."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des notions de pollution de l'environnement vues en 5e."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'extraits du Code de l'environnement togolais."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour présenter les instruments et mécanismes de protection de l'environnement au Togo."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour décrire la politique nationale de protection de l'environnement, identifier les acteurs d'un environnement sain et proposer des actions à chacun des trois niveaux (État, collectivités, citoyen)."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des actions proposées par chaque groupe pour chacun des trois niveaux."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : instruments, mécanismes, acteurs et actions pour un environnement sain au Togo."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un instrument juridique de protection de l'environnement et une action que le citoyen peut mener."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le cadre juridique togolais",
              contenu: "La protection de l'environnement au Togo repose sur plusieurs instruments juridiques : la Constitution, le Code de l'environnement de 1988 et la Loi-cadre sur l'environnement de 2008. Ces textes fixent les règles que tous doivent respecter pour préserver le milieu naturel."
            },
            {
              titre: "2. Les mécanismes de protection",
              contenu: "Cette protection s'appuie sur des mécanismes étatiques (comme le ministère de l'environnement et le comité national de l'environnement), des mécanismes juridiques (les juridictions qui sanctionnent les atteintes à l'environnement) et des mécanismes privés portés par des ONG telles que REFED/S, ENPRO, CREAD, ETD ou INADES-Formation."
            },
            {
              titre: "3. Les acteurs d'un environnement sain",
              contenu: "Trois niveaux d'acteurs contribuent à un environnement sain au Togo : l'État (application des lois, sensibilisation), les collectivités locales (services d'assainissement, application des lois, sensibilisation) et le citoyen (reboisement, lutte contre la déforestation, réduction des produits chimiques, gestion correcte des ordures)."
            },
            {
              titre: "4. À retenir",
              contenu: "La protection de l'environnement togolais est donc une responsabilité partagée entre l'État, les collectivités locales et chaque citoyen, chacun ayant des actions concrètes à sa portée."
            }
          ],
          evaluation: "Présentation des instruments de protection de l'environnement ; identification des acteurs et proposition d'actions pour un environnement sain au Togo.",
          devoirMaison: "Proposer une action personnelle pour un environnement plus sain dans son quartier."
        } },
      { id: "4e-l14", numero: 14, competence: "Adopter des comportements faisant montre de valeurs de paix et de non-violence", theme: "Non-violence", titre: "Non-violence et lutte contre l'extrémisme violent", seances: 2, fiche: {
          competence: "Adopter des comportements faisant montre de valeurs de paix et de non-violence",
          theme: "Non-violence",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 14"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples ou faits d'actualité illustrant des manifestations de l'extrémisme violent (choisis avec prudence)"
            }
          ],
          preRequis: [
            "Notion de violence et d'extrémisme violent vues en 5e"
          ],
          capacitesContenus: [
            {
              capacite: "Relever les valeurs portées par la non-violence",
              contenus: [
                "Notion de non-violence",
                "Valeurs portées par la non-violence (vérité, justice, tolérance, écoute active, maîtrise de soi, acceptation des différences, etc.)"
              ]
            },
            {
              capacite: "Relever les manifestations de l'extrémisme violent",
              contenus: [
                "Chez l'individu (radicalisation, marginalisation sociale ou isolation, actes de violence et de vandalisme visant des institutions)",
                "Dans la communauté (polarisation sociale, formation de groupes extrémistes, affrontements violents, émeutes ou actes de terreur)"
              ]
            },
            {
              capacite: "Proposer les actions pour lutter contre l'extrémisme violent",
              contenus: [
                "Au sein de la famille (communication ouverte, éducation, sensibilisation aux réseaux sociaux)",
                "À l'école (clubs et organisations scolaires, projets éducatifs, leadership positif)",
                "Dans la communauté (participation civique, programmes de sensibilisation, collaboration intergénérationnelle, ateliers de prévention)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent sur des exemples connus d'extrémisme violent pour comprendre ses manifestations et découvrir les valeurs et actions de la non-violence qui permettent d'y faire face.",
          consignes: [
            "Définir la non-violence et relever les valeurs qu'elle porte (vérité, justice, tolérance, écoute active, maîtrise de soi, acceptation des différences, etc.).",
            "Relever les manifestations de l'extrémisme violent chez l'individu et dans la communauté.",
            "Proposer des actions de lutte contre l'extrémisme violent au sein de la famille, à l'école et dans la communauté."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des notions de violence et d'extrémisme violent vues en 5e."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'exemples d'actualité illustrant des manifestations de l'extrémisme violent."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la non-violence et relever ses valeurs."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les manifestations de l'extrémisme violent chez l'individu et dans la communauté, puis proposer des actions de lutte à trois niveaux (famille, école, communauté)."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des valeurs, manifestations et actions proposées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : valeurs de la non-violence, manifestations de l'extrémisme violent, actions de lutte à trois niveaux."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une valeur de la non-violence et une action de lutte contre l'extrémisme violent à l'école."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les valeurs de la non-violence",
              contenu: "La non-violence est une manière de résoudre les conflits sans recourir à la force. Elle porte des valeurs essentielles : la vérité, la justice, la tolérance, l'écoute active, la maîtrise de soi et l'acceptation des différences."
            },
            {
              titre: "2. Les manifestations de l'extrémisme violent",
              contenu: "Chez l'individu, l'extrémisme violent peut se traduire par la radicalisation, la marginalisation sociale ou des actes de violence et de vandalisme visant des institutions. Dans la communauté, il se manifeste par la polarisation sociale, la formation de groupes extrémistes, des affrontements violents, des émeutes ou des actes de terreur."
            },
            {
              titre: "3. Des actions à trois niveaux",
              contenu: "La lutte contre l'extrémisme violent peut s'organiser à plusieurs niveaux : au sein de la famille (communication ouverte, éducation, sensibilisation aux réseaux sociaux), à l'école (clubs et organisations scolaires, projets éducatifs, leadership positif) et dans la communauté (participation civique, programmes de sensibilisation, collaboration intergénérationnelle, ateliers de prévention)."
            },
            {
              titre: "4. À retenir",
              contenu: "Face aux manifestations de l'extrémisme violent, la promotion des valeurs de non-violence à tous les niveaux de la société constitue le meilleur rempart de prévention."
            }
          ],
          evaluation: "Relevé des valeurs de la non-violence et des manifestations de l'extrémisme violent ; proposition d'actions de lutte contre l'extrémisme violent.",
          devoirMaison: "Proposer une action concrète que sa classe pourrait mener pour lutter contre l'extrémisme violent."
        } },
      { id: "4e-l15", numero: 15, competence: "Adopter des comportements faisant montre de valeurs de paix et de non-violence", theme: "Non-violence", titre: "Martin Luther King et la lutte pour les droits civiques des Noirs", seances: 2, fiche: {
          competence: "Adopter des comportements faisant montre de valeurs de paix et de non-violence",
          theme: "Non-violence",
          documentation: [
            "Programme officiel d'ECM, classe de 4e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçon 15"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Courte biographie et citations de Martin Luther King (support écrit ou audio)"
            }
          ],
          preRequis: [
            "Valeurs de la non-violence vues à la leçon précédente"
          ],
          capacitesContenus: [
            {
              capacite: "Décrire les actions de Martin Luther King dans la défense des droits civiques des Noirs",
              contenus: [
                "Biographie de Martin Luther King",
                "Lutte non violente de Martin Luther King pour la défense des droits civiques des Noirs",
                "Quelques citations de Martin Luther King"
              ]
            }
          ],
          situationApprentissage: "Les apprenants découvrent, à travers une courte biographie et des citations, comment Martin Luther King a mené un combat pour les droits civiques des Noirs américains sans jamais recourir à la violence.",
          consignes: [
            "Présenter une brève biographie de Martin Luther King.",
            "Décrire la lutte non violente de Martin Luther King pour la défense des droits civiques des Noirs.",
            "Relever quelques citations de Martin Luther King et en dégager le sens."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des valeurs de la non-violence vues à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'un support biographique sur Martin Luther King."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, exploitation de documents pour présenter une brève biographie de Martin Luther King."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour décrire sa lutte non violente pour les droits civiques des Noirs et relever quelques-unes de ses citations."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des présentations et citations relevées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : biographie résumée de Martin Luther King et citations retenues."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un fait marquant de la lutte non violente de Martin Luther King."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qui était Martin Luther King",
              contenu: "Martin Luther King fut un pasteur et militant américain qui a consacré sa vie à la lutte pour les droits civiques des Noirs aux États-Unis, à une époque marquée par de fortes discriminations raciales."
            },
            {
              titre: "2. Une lutte non violente",
              contenu: "Contrairement à d'autres formes de contestation, Martin Luther King a toujours privilégié des moyens pacifiques — marches, discours, désobéissance civile non violente — pour faire progresser la cause des droits civiques, incarnant ainsi concrètement les valeurs de non-violence étudiées à la leçon précédente."
            },
            {
              titre: "3. Un héritage toujours vivant",
              contenu: "À travers ses actions et ses discours, Martin Luther King a marqué durablement l'histoire de la lutte pour l'égalité et la justice, montrant qu'un changement profond de société peut être obtenu sans recourir à la violence."
            },
            {
              titre: "4. À retenir",
              contenu: "L'exemple de Martin Luther King illustre de façon concrète que la non-violence, loin d'être une résignation, peut être une force puissante de transformation sociale."
            }
          ],
          evaluation: "Description de la lutte non violente de Martin Luther King.",
          devoirMaison: "Recopier une citation de Martin Luther King vue en classe et expliquer, en deux phrases, ce qu'elle signifie pour soi."
        } }
    ],
    integrations: [
      { id: "4e-i1", apresLeconId: "4e-l2", competence: "Adopter des comportements responsables", themesCouverts: [
          "Citoyenneté"
        ], leconsCouvertes: [
          "4e-l1",
          "4e-l2"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 4e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçons 1 et 2"
          ],
          preRequis: [
            "Notions de citoyenneté, de nationalité et de droits/devoirs du citoyen déjà étudiées"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 1 — Notion de citoyen et de citoyenneté",
              capacites: [
                "Définir les concepts relatifs à la citoyenneté",
                "Présenter les conditions d'attribution ou d'acquisition de la nationalité"
              ]
            },
            {
              lecon: "Leçon 2 — Droits et devoirs du citoyen togolais",
              capacites: [
                "Présenter les droits et devoirs civiques, politiques, économiques, sociaux et culturels du citoyen togolais"
              ]
            }
          ],
          situationComplexe: "Kossi est né au Togo de parents étrangers installés depuis longtemps à Lomé. Devenu togolais par la résidence, il vote pour la première fois aux élections locales, mais certains de ses camarades lui disent qu'il « n'est pas un vrai citoyen togolais » parce que ses parents ne sont pas nés au Togo.",
          consignes: [
            "Identifier, dans la situation, la condition par laquelle Kossi a acquis la nationalité togolaise.",
            "Expliquer, à l'aide des notions étudiées, pourquoi les propos des camarades de Kossi sont inexacts.",
            "Relever, dans la situation, un droit politique que Kossi exerce en tant que citoyen togolais.",
            "Citer un devoir civique que Kossi devra continuer à respecter en tant que citoyen togolais."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, lit le texte avec la classe, pose des questions de compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation permet de vérifier la compréhension des conditions d'acquisition de la nationalité togolaise et des droits et devoirs qui en découlent.",
            developpement: [
              {
                consigne: "Consigne 1 — condition d'acquisition",
                reponse: "Kossi a acquis la nationalité togolaise en raison de sa naissance et de sa résidence au Togo."
              },
              {
                consigne: "Consigne 2 — explication",
                reponse: "Les propos des camarades sont inexacts : la nationalité togolaise peut s'attribuer (droit du sol, droit du sang) mais aussi s'acquérir, notamment par la naissance et la résidence au Togo. Une fois cette nationalité acquise, Kossi est un citoyen togolais à part entière, avec les mêmes droits que les autres."
              },
              {
                consigne: "Consigne 3 — droit politique exercé",
                reponse: "Le droit de vote, exercé lors des élections locales."
              },
              {
                consigne: "Consigne 4 — devoir civique",
                reponse: "Exemple de devoir civique : respecter les lois de la République, ou participer à la vie civique de sa commune."
              }
            ],
            conclusion: "La nationalité togolaise peut s'acquérir de plusieurs manières ; une fois acquise, elle donne les mêmes droits et impose les mêmes devoirs à tous les citoyens, sans distinction d'origine des parents."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte de la condition d'acquisition",
              bareme: "5 pts"
            },
            {
              critere: "Qualité de l'explication réfutant les propos des camarades",
              bareme: "6 pts"
            },
            {
              critere: "Identification correcte du droit politique exercé",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence du devoir civique cité",
              bareme: "2 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "4e-i2", apresLeconId: "4e-l6", competence: "Adopter des comportements responsables", themesCouverts: [
          "Décentralisation au Togo",
          "Démocratie participative"
        ], leconsCouvertes: [
          "4e-l3",
          "4e-l4",
          "4e-l5",
          "4e-l6"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 4e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçons 3, 4 et 6 (leçon 5 : voir note sur l'écart de guide)"
          ],
          preRequis: [
            "Organisation de la commune, de la préfecture, rôle du parti politique/société civile et règlement intérieur déjà étudiés"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 3 — Commune",
              capacites: [
                "Relever les attributions de la commune"
              ]
            },
            {
              lecon: "Leçon 4 — Préfecture",
              capacites: [
                "Expliquer le rôle du préfet dans la décentralisation au Togo"
              ]
            },
            {
              lecon: "Leçon 5 — Rôles du parti politique et de la société civile",
              capacites: [
                "Déterminer le rôle de la société civile"
              ]
            },
            {
              lecon: "Leçon 6 — Règlement intérieur de l'établissement",
              capacites: [
                "Relever l'utilité du règlement intérieur"
              ]
            }
          ],
          situationComplexe: "La mairie de la commune de Blitta décide de goudronner une voie communale endommagée par les pluies. Une association locale de la société civile organise une réunion pour demander à la population de participer aux travaux de nettoyage avant le chantier. Le préfet, informé, veille à ce que le projet respecte les règles fixées par l'État. Pendant ce temps, au collège voisin, les élèves discutent d'un projet similaire : réhabiliter la cour de récréation en respectant les règles fixées par le règlement intérieur.",
          consignes: [
            "Identifier, dans la situation, une attribution de la commune illustrée par le projet de goudronnage.",
            "Expliquer le rôle joué par le préfet dans cette situation.",
            "Relever le rôle joué par l'association de la société civile dans cette situation.",
            "Établir un parallèle entre le respect des règles fixées par l'État pour le projet communal et l'utilité du règlement intérieur pour le projet des élèves au collège."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, s'assure de sa compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation combine les rôles de la commune, du préfet et de la société civile, et les met en parallèle avec l'utilité du règlement intérieur au collège.",
            developpement: [
              {
                consigne: "Consigne 1 — attribution de la commune",
                reponse: "L'entretien des voies communales, qui est une attribution de la commune."
              },
              {
                consigne: "Consigne 2 — rôle du préfet",
                reponse: "Le préfet contrôle la légalité des actes de la commune et supervise les projets de développement local, ce qui correspond à son rôle dans la décentralisation."
              },
              {
                consigne: "Consigne 3 — rôle de la société civile",
                reponse: "L'association mobilise et sensibilise la population pour qu'elle participe aux travaux, ce qui est un rôle typique de la société civile."
              },
              {
                consigne: "Consigne 4 — parallèle",
                reponse: "De même que le projet communal doit respecter les règles fixées par l'État (contrôlées par le préfet), le projet des élèves doit respecter le règlement intérieur du collège, qui organise les rapports entre les acteurs de l'établissement et facilite le bon déroulement du projet."
              }
            ],
            conclusion: "Qu'il s'agisse d'un projet communal ou d'un projet scolaire, le respect des règles établies (par l'État ou par le règlement intérieur) permet une organisation collective efficace et responsable."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte de l'attribution de la commune",
              bareme: "4 pts"
            },
            {
              critere: "Explication correcte du rôle du préfet",
              bareme: "5 pts"
            },
            {
              critere: "Identification correcte du rôle de la société civile",
              bareme: "5 pts"
            },
            {
              critere: "Qualité et pertinence du parallèle établi",
              bareme: "4 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "4e-i3", apresLeconId: "4e-l9", competence: "Respecter les droits et libertés des autres", themesCouverts: [
          "Droits humains"
        ], leconsCouvertes: [
          "4e-l7",
          "4e-l8",
          "4e-l9"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 4e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçons 7, 8 et 9"
          ],
          preRequis: [
            "Principes des droits humains, catégories de droits et droits spécifiques déjà étudiés"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 7 — Droits humains et dignité humaine",
              capacites: [
                "Déterminer les actes qui portent atteinte à la dignité humaine"
              ]
            },
            {
              lecon: "Leçon 8 — Droits et libertés fondamentaux de l'homme",
              capacites: [
                "Présenter les droits économiques, sociaux et culturels"
              ]
            },
            {
              lecon: "Leçon 9 — Droits spécifiques ou catégoriels",
              capacites: [
                "Présenter quelques droits et devoirs des enfants"
              ]
            }
          ],
          situationComplexe: "Dans un village, un homme d'affaires emploie plusieurs enfants de moins de 14 ans dans son atelier, les privant d'école. L'un des enfants, souvent battu lorsqu'il fait des erreurs, n'a pas le droit de se reposer ni de jouer avec les autres enfants du village.",
          consignes: [
            "Relever, dans la situation, deux actes qui portent atteinte à la dignité humaine des enfants employés.",
            "Identifier un droit économique et social qui n'est pas respecté dans cette situation.",
            "Citer deux droits spécifiques des enfants qui ne sont pas respectés dans cette situation.",
            "Proposer deux actions qui pourraient être menées pour faire cesser cette situation et protéger ces enfants."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, lit le texte avec la classe, pose des questions de compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation illustre une atteinte grave aux droits humains et aux droits spécifiques des enfants, qu'il convient d'identifier avant de proposer des solutions.",
            developpement: [
              {
                consigne: "Consigne 1 — atteintes à la dignité",
                reponse: "Le fait de battre l'enfant lorsqu'il fait des erreurs, et le fait de le priver de repos et de jeu, portent atteinte à sa dignité humaine."
              },
              {
                consigne: "Consigne 2 — droit économique et social non respecté",
                reponse: "Le droit à l'instruction n'est pas respecté, puisque les enfants sont privés d'école pour travailler."
              },
              {
                consigne: "Consigne 3 — droits spécifiques des enfants non respectés",
                reponse: "Le droit d'aller à l'école et le droit de jouer, tous deux des droits reconnus aux enfants, ne sont pas respectés."
              },
              {
                consigne: "Consigne 4 — actions proposées",
                reponse: "Alerter les autorités locales (chef de village, services sociaux ou de protection de l'enfance) pour faire cesser le travail des enfants ; sensibiliser l'employeur et la communauté sur les droits des enfants et l'obligation de les scolariser."
              }
            ],
            conclusion: "Le travail des enfants dans ces conditions viole à la fois leur dignité humaine et leurs droits spécifiques (école, jeu, repos) ; il appelle une réaction de la communauté et des autorités."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte des atteintes à la dignité humaine",
              bareme: "5 pts"
            },
            {
              critere: "Identification correcte du droit économique et social non respecté",
              bareme: "4 pts"
            },
            {
              critere: "Identification correcte des droits spécifiques des enfants non respectés",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence des actions proposées",
              bareme: "4 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "4e-i4", apresLeconId: "4e-l13", competence: "Prendre soin de sa santé et entretenir son milieu de vie", themesCouverts: [
          "Santé et environnement"
        ], leconsCouvertes: [
          "4e-l10",
          "4e-l11",
          "4e-l12",
          "4e-l13"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 4e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçons 10 à 13"
          ],
          preRequis: [
            "Santé sexuelle de l'adolescent, parenté responsable, tabagisme/toxicomanie et protection de l'environnement déjà étudiés"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 10 — Santé sexuelle de l'adolescent",
              capacites: [
                "Identifier les transformations de l'adolescence"
              ]
            },
            {
              lecon: "Leçon 11 — Parenté responsable",
              capacites: [
                "Relever les inconvénients d'une parenté précoce"
              ]
            },
            {
              lecon: "Leçon 12 — Tabagisme et toxicomanie",
              capacites: [
                "Détecter les signes d'alerte de la consommation de drogue chez le jeune"
              ]
            },
            {
              lecon: "Leçon 13 — Protection de l'environnement au Togo",
              capacites: [
                "Proposer des actions pour un environnement sain"
              ]
            }
          ],
          situationComplexe: "Depuis quelques mois, Afi, 14 ans, fréquente un groupe d'amis plus âgés. Ses résultats scolaires ont chuté, elle emprunte souvent de l'argent à ses parents sans explication, et une amie l'a vue fumer une cigarette suspecte derrière l'atelier du quartier, un lieu où les déchets s'accumulent aussi sans être ramassés. Sa mère s'inquiète également qu'Afi parle d'un « petit ami » plus âgé.",
          consignes: [
            "Relever, dans la situation, les signes d'alerte qui pourraient indiquer une consommation de drogue chez Afi.",
            "Expliquer pourquoi la relation d'Afi avec un « petit ami » plus âgé, à son âge, présente un risque en lien avec la parenté précoce.",
            "Relever, dans la situation, un problème environnemental observé près de l'atelier.",
            "Proposer une action que les parents d'Afi et une action que la communauté pourraient mener face à cette situation."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, s'assure de sa compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation combine plusieurs risques de l'adolescence : consommation possible de drogue, risque de parenté précoce, et un problème d'environnement dans le quartier.",
            developpement: [
              {
                consigne: "Consigne 1 — signes d'alerte",
                reponse: "Baisse des résultats scolaires, emprunt fréquent d'argent, fréquentation de nouveaux amis plus âgés, comportement observé de consommation (cigarette suspecte)."
              },
              {
                consigne: "Consigne 2 — risque de parenté précoce",
                reponse: "À 14 ans, Afi n'est ni majeure, ni mature, ni autonome au sens des conditions d'une parenté responsable ; une relation avec un garçon plus âgé augmente le risque d'une grossesse précoce (« trop tôt »), avec ses inconvénients (difficultés scolaires, risques de santé, problèmes sociaux)."
              },
              {
                consigne: "Consigne 3 — problème environnemental",
                reponse: "L'accumulation de déchets non ramassés près de l'atelier, qui pollue l'environnement immédiat du quartier."
              },
              {
                consigne: "Consigne 4 — actions proposées",
                reponse: "Les parents pourraient engager un dialogue ouvert avec Afi et solliciter, si besoin, l'aide d'un adulte de confiance ou d'un professionnel. La communauté pourrait organiser une collecte régulière des déchets près de l'atelier, dans le cadre des actions citoyennes pour un environnement sain."
              }
            ],
            conclusion: "Plusieurs risques peuvent se cumuler à l'adolescence ; les reconnaître tôt permet aux parents, à l'école et à la communauté d'agir ensemble, y compris sur des problèmes environnementaux du quotidien."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte des signes d'alerte",
              bareme: "5 pts"
            },
            {
              critere: "Qualité de l'explication du risque de parenté précoce",
              bareme: "5 pts"
            },
            {
              critere: "Identification correcte du problème environnemental",
              bareme: "4 pts"
            },
            {
              critere: "Pertinence des actions proposées",
              bareme: "4 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } },
      { id: "4e-i5", apresLeconId: "4e-l15", competence: "Adopter des comportements faisant montre de valeurs de paix et de non-violence", themesCouverts: [
          "Non-violence"
        ], leconsCouvertes: [
          "4e-l14",
          "4e-l15"
        ], seances: 3, fiche: {
          documentation: [
            "Programme officiel d'ECM, classe de 4e, août 2024",
            "Guide d'exécution du programme d'ECM, classe de 4e — Leçons 14 et 15"
          ],
          preRequis: [
            "Valeurs de la non-violence et lutte de Martin Luther King déjà étudiées"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Leçon 14 — Non-violence et lutte contre l'extrémisme violent",
              capacites: [
                "Relever les valeurs portées par la non-violence",
                "Proposer des actions de lutte contre l'extrémisme violent"
              ]
            },
            {
              lecon: "Leçon 15 — Martin Luther King et la lutte pour les droits civiques des Noirs",
              capacites: [
                "Décrire la lutte non violente de Martin Luther King"
              ]
            }
          ],
          situationComplexe: "Dans un collège, un groupe d'élèves se sent régulièrement exclu et moqué par d'autres à cause de leur origine régionale. Certains membres du groupe exclu commencent à parler de « se venger » violemment. Un professeur d'ECM décide d'organiser une discussion en classe en s'appuyant sur l'exemple de Martin Luther King.",
          consignes: [
            "Relever, dans la situation, les manifestations d'exclusion vécues par le groupe d'élèves.",
            "Expliquer le risque que représente la tentation de « se venger violemment » évoquée dans la situation.",
            "Montrer, à l'aide de l'exemple de Martin Luther King, comment il est possible de lutter contre une injustice sans recourir à la violence.",
            "Proposer deux valeurs de la non-violence que les élèves du collège pourraient adopter pour résoudre cette situation."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation, lit le texte avec la classe, pose des questions de compréhension, modélise le traitement de la consigne 1.",
              activiteEleves: "Écoutent, répondent aux questions, participent à la modélisation."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation, rappelle les quatre consignes, circule et observe.",
              activiteEleves: "Traitent individuellement et par écrit les quatre consignes."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Corrige au tableau, relève les erreurs fréquentes, remédie.",
              activiteEleves: "Comparent leur production, s'auto-corrigent, posent des questions."
            }
          ],
          corrigeType: {
            introduction: "Cette situation d'exclusion et de tentation de vengeance permet de mobiliser les valeurs de la non-violence à travers l'exemple de Martin Luther King.",
            developpement: [
              {
                consigne: "Consigne 1 — manifestations d'exclusion",
                reponse: "Le groupe d'élèves est régulièrement moqué et exclu à cause de son origine régionale, ce qui est une forme de discrimination et de marginalisation."
              },
              {
                consigne: "Consigne 2 — risque de la vengeance",
                reponse: "Répondre à l'exclusion par la violence risquerait d'aggraver le conflit, d'entraîner des sanctions pour les élèves concernés et de renforcer la polarisation entre les deux groupes, au lieu de résoudre le problème."
              },
              {
                consigne: "Consigne 3 — exemple de Martin Luther King",
                reponse: "Martin Luther King a lutté contre une injustice bien plus grave (la ségrégation raciale) sans jamais recourir à la violence, en utilisant des marches pacifiques et des discours, ce qui a permis de faire avancer les droits civiques des Noirs américains tout en gardant le soutien de l'opinion publique."
              },
              {
                consigne: "Consigne 4 — valeurs proposées",
                reponse: "Par exemple, la tolérance (accepter les différences régionales) et l'écoute active (dialoguer plutôt que se venger), qui permettraient de résoudre le conflit pacifiquement."
              }
            ],
            conclusion: "Face à l'exclusion ou à l'injustice, la non-violence, illustrée par l'exemple de Martin Luther King, reste plus efficace et plus digne que la vengeance."
          },
          criteresEvaluation: [
            {
              critere: "Identification correcte des manifestations d'exclusion",
              bareme: "4 pts"
            },
            {
              critere: "Qualité de l'explication du risque de vengeance",
              bareme: "5 pts"
            },
            {
              critere: "Pertinence du lien établi avec Martin Luther King",
              bareme: "6 pts"
            },
            {
              critere: "Pertinence des valeurs de non-violence proposées",
              bareme: "3 pts"
            },
            {
              critere: "Qualité de la langue",
              bareme: "2 pts"
            }
          ]
        } }
    ]
  },
  "3e": {
    nom: "Troisième",
    lecons: [
      { id: "3e-l1", numero: 1, competence: "Adopter des comportements responsables", theme: "Démocratie à l'école", titre: "Pratiques démocratiques à l'école", seances: 4, fiche: {
          competence: "Adopter des comportements responsables",
          theme: "Démocratie à l'école",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 1"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Précis de législation scolaire et règlement intérieur de l'établissement"
            }
          ],
          preRequis: [
            "Règlement intérieur de l'établissement vu en 4e"
          ],
          capacitesContenus: [
            {
              capacite: "Montrer comment s'exerce la démocratie à l'école",
              contenus: [
                "Démocratie à l'école : respect des textes qui gouvernent le collège, exercice de la liberté d'expression (conseil de classe, conseil des délégués, élaboration du règlement intérieur), culture des valeurs démocratiques (respect de soi, des autres, des institutions, solidarité, travail)"
              ]
            },
            {
              capacite: "Mise en scène de l'élection du conseil de classe",
              contenus: [
                "Élection du conseil de classe"
              ]
            }
          ],
          situationApprentissage: "Les apprenants s'interrogent sur la manière dont la démocratie se vit concrètement dans leur collège, avant d'organiser eux-mêmes l'élection de leur conseil de classe.",
          consignes: [
            "Montrer comment s'exerce la démocratie à l'école à travers le respect des textes qui gouvernent le collège (précis de législation, règlement intérieur, etc.).",
            "Montrer comment s'exerce la démocratie à l'école à travers l'exercice de la liberté d'expression (conseil de classe, conseil des délégués, élaboration du règlement intérieur).",
            "Montrer comment s'exerce la démocratie à l'école à travers la culture des valeurs démocratiques (respect de soi, des autres, des institutions et symboles de la République, solidarité, travail).",
            "Organiser, avec l'aide du professeur, l'élection du conseil de classe (mise en scène : candidatures, campagne courte, vote, dépouillement)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée",
            "Exercice pratique (élection du conseil de classe)"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 15,
              contenu: "Rappel du règlement intérieur de l'établissement vu en 4e."
            },
            {
              phase: "Présentation",
              dureeMin: 15,
              contenu: "Présentation du précis de législation scolaire et du fonctionnement du conseil de classe."
            },
            {
              phase: "Appropriation",
              dureeMin: 45,
              contenu: "En petits groupes, discussion dirigée pour montrer comment s'exerce la démocratie à l'école à travers le respect des textes et l'exercice de la liberté d'expression."
            },
            {
              phase: "Exploration",
              dureeMin: 90,
              contenu: "Discussion dirigée pour dégager la culture des valeurs démocratiques à l'école, puis exercice pratique : organisation complète de l'élection du conseil de classe (candidatures, vote, dépouillement, proclamation)."
            },
            {
              phase: "Mise en commun",
              dureeMin: 25,
              contenu: "Proclamation des résultats de l'élection du conseil de classe ; échange sur ce que l'exercice a permis de comprendre de la démocratie."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 25,
              contenu: "Trace écrite : manifestations de la démocratie à l'école et rôle du conseil de classe élu."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer deux manifestations de la démocratie à l'école."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le respect des textes du collège",
              contenu: "La démocratie à l'école se manifeste d'abord par le respect des textes qui gouvernent le collège, comme le précis de législation scolaire et le règlement intérieur. Ces textes garantissent un cadre commun, connu et accepté par tous les membres de l'établissement."
            },
            {
              titre: "2. La liberté d'expression",
              contenu: "Elle s'exprime aussi par l'exercice de la liberté d'expression, notamment à travers le conseil de classe, le conseil des délégués et la participation à l'élaboration du règlement intérieur. Chaque apprenant peut ainsi faire entendre sa voix dans la vie de son établissement."
            },
            {
              titre: "3. La culture des valeurs démocratiques",
              contenu: "La démocratie à l'école repose enfin sur la culture de valeurs comme le respect de soi, des autres et des institutions, la solidarité et le goût du travail. Ces valeurs se pratiquent au quotidien, bien au-delà des seuls moments électoraux."
            },
            {
              titre: "4. L'élection du conseil de classe",
              contenu: "L'organisation de l'élection du conseil de classe est une mise en pratique concrète de ces principes démocratiques : candidatures, campagne, vote et dépouillement permettent aux apprenants d'expérimenter eux-mêmes le fonctionnement de la démocratie scolaire."
            }
          ],
          evaluation: "Démonstration de l'exercice de la démocratie à l'école.",
          devoirMaison: "Rédiger un court texte présentant le rôle du conseil de classe nouvellement élu."
        } },
      { id: "3e-l2", numero: 2, competence: "Adopter des comportements responsables", theme: "Démocratie à l'école", titre: "Police des examens", seances: 2, fiche: {
          competence: "Adopter des comportements responsables",
          theme: "Démocratie à l'école",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 2"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Règlement des examens scolaires (extraits)"
            }
          ],
          preRequis: [
            "Élection du conseil de classe vue en leçon 1"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter la police des examens",
              contenus: [
                "Définition de la police des examens",
                "Importance de la police des examens (égalité de traitement, gestion méthodique, dissuasion de la fraude, etc.)"
              ]
            },
            {
              capacite: "Dégager les comportements de l'élève vis-à-vis de la police des examens",
              contenus: [
                "Comportements de l'élève vis-à-vis de la police des examens (maîtrise, respect, effort personnel, etc.)"
              ]
            }
          ],
          situationApprentissage: "À l'approche des évaluations, les apprenants s'interrogent sur les règles qui encadrent le déroulement des examens et sur le comportement attendu d'un candidat.",
          consignes: [
            "Présenter la police des examens : sa définition et ses principales attributions (modalités d'organisation des examens, conditions de participation, etc.).",
            "Présenter l'importance de la police des examens (égalité de traitement, gestion méthodique, dissuasion de la fraude, etc.).",
            "Relever les comportements que le candidat doit adopter vis-à-vis de la police des examens (maîtrise, respect, effort personnel, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur les examens déjà passés par les apprenants."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'extraits du règlement des examens scolaires."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, exploitation de documents pour présenter la police des examens et ses attributions."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour présenter l'importance de la police des examens et relever les comportements attendus du candidat."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des comportements attendus identifiés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : définition, importance de la police des examens et comportements attendus du candidat."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un comportement que le candidat doit adopter vis-à-vis de la police des examens."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qu'est-ce que la police des examens",
              contenu: "La police des examens est l'ensemble des règles et attributions qui organisent le bon déroulement des épreuves scolaires : modalités d'organisation, conditions de participation, surveillance et gestion des salles d'examen."
            },
            {
              titre: "2. Son importance",
              contenu: "Elle garantit l'égalité de traitement entre tous les candidats, assure une gestion méthodique et organisée des épreuves, et dissuade les tentatives de fraude, ce qui préserve la valeur et la crédibilité des diplômes obtenus."
            },
            {
              titre: "3. Le comportement attendu du candidat",
              contenu: "Face à la police des examens, le candidat doit faire preuve de maîtrise de soi, respecter scrupuleusement les consignes données (placement, matériel autorisé, silence) et fournir un effort personnel honnête, sans recourir à la fraude."
            },
            {
              titre: "4. À retenir",
              contenu: "Respecter la police des examens, c'est à la fois se protéger soi-même et garantir l'équité pour l'ensemble des candidats présents à l'épreuve."
            }
          ],
          evaluation: "Présentation de la police des examens ; relevé des comportements du candidat vis-à-vis de la police des examens.",
          devoirMaison: "Rédiger trois engagements personnels pour se préparer honnêtement à son prochain examen."
        } },
      { id: "3e-l3", numero: 3, competence: "Respecter les normes et les lois de la République", theme: "État et nation", titre: "Constitution togolaise", seances: 4, fiche: {
          competence: "Respecter les normes et les lois de la République",
          theme: "État et nation",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 3"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Extraits de la Constitution togolaise de la Cinquième République"
            }
          ],
          preRequis: [
            "Principes de la République togolaise vus en 5e"
          ],
          capacitesContenus: [
            {
              capacite: "Relever les différentes Constitutions togolaises",
              contenus: [
                "Notion de Constitution",
                "Différentes Constitutions togolaises (1961, 1963, 1979, 1992, révisions successives, Cinquième République)"
              ]
            },
            {
              capacite: "Présenter la Constitution de la Cinquième République",
              contenus: [
                "Constitution de la Cinquième République togolaise"
              ]
            },
            {
              capacite: "Déduire l'importance de la Constitution",
              contenus: [
                "Importance de la Constitution (garantie de l'État de droit, protection des citoyens, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants examinent des extraits de la Constitution togolaise en vigueur pour comprendre ce qu'est une Constitution, son histoire au Togo et son importance.",
          consignes: [
            "Définir la Constitution et identifier les différentes Constitutions togolaises qui se sont succédé.",
            "Présenter la Constitution de la Cinquième République togolaise.",
            "Déduire l'importance de la Constitution (garantie de l'État de droit, protection des citoyens, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 15,
              contenu: "Rappel des principes de la République togolaise vus en 5e."
            },
            {
              phase: "Présentation",
              dureeMin: 15,
              contenu: "Présentation d'extraits de la Constitution togolaise en vigueur."
            },
            {
              phase: "Appropriation",
              dureeMin: 50,
              contenu: "En petits groupes, discussion dirigée pour définir la Constitution et identifier les différentes Constitutions togolaises."
            },
            {
              phase: "Exploration",
              dureeMin: 80,
              contenu: "Discussion dirigée pour présenter la Constitution de la Cinquième République et déduire l'importance de la Constitution."
            },
            {
              phase: "Mise en commun",
              dureeMin: 25,
              contenu: "Restitution des présentations de chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 30,
              contenu: "Trace écrite : histoire des Constitutions togolaises, présentation de la Constitution en vigueur et son importance."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une raison de l'importance de la Constitution."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qu'est-ce qu'une Constitution",
              contenu: "La Constitution est la loi fondamentale d'un État : elle organise les pouvoirs publics et garantit les droits des citoyens. C'est le texte juridique le plus important d'un pays."
            },
            {
              titre: "2. Les différentes Constitutions togolaises",
              contenu: "Le Togo a connu plusieurs Constitutions successives depuis son indépendance, avec des révisions au fil du temps, jusqu'à l'actuelle Constitution de la Cinquième République. Cette évolution reflète les différentes étapes de la vie politique du pays."
            },
            {
              titre: "3. La Constitution de la Cinquième République",
              contenu: "La Constitution actuellement en vigueur organise le fonctionnement des institutions togolaises (pouvoir exécutif, législatif, judiciaire) et fixe les droits et libertés reconnus aux citoyens togolais."
            },
            {
              titre: "4. Son importance",
              contenu: "La Constitution est d'une importance capitale car elle garantit l'État de droit, c'est-à-dire que même les dirigeants doivent respecter la loi, et elle protège les citoyens contre les décisions arbitraires des autorités."
            }
          ],
          evaluation: "Identification des différentes Constitutions togolaises ; présentation de la Constitution de la Cinquième République et de son importance.",
          devoirMaison: "Rechercher, avec l'aide d'un adulte, en quelle année la Constitution actuellement en vigueur a été adoptée."
        } },
      { id: "3e-l4", numero: 4, competence: "Respecter les normes et les lois de la République", theme: "État et nation", titre: "Hiérarchie des normes", seances: 2, fiche: {
          competence: "Respecter les normes et les lois de la République",
          theme: "État et nation",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 4"
          ],
          supportsDidactiques: [
            {
              type: "image",
              src: "assets/images/3e/hierarchie-normes.png",
              legende: "Schéma de la hiérarchie des normes juridiques"
            }
          ],
          preRequis: [
            "Constitution togolaise vue en leçon 3"
          ],
          capacitesContenus: [
            {
              capacite: "Expliquer la hiérarchie des normes",
              contenus: [
                "Notion de hiérarchie des normes",
                "Principe de la hiérarchie des normes (une norme inférieure ne doit pas contredire une norme supérieure)"
              ]
            },
            {
              capacite: "Réaliser le schéma de la hiérarchie des normes",
              contenus: [
                "Schéma de la hiérarchie des normes (Constitution, traités internationaux ratifiés, lois organiques, lois ordinaires, ordonnances et décrets, arrêtés et circulaires)"
              ]
            }
          ],
          situationApprentissage: "À partir du schéma de la hiérarchie des normes, les apprenants découvrent que tous les textes juridiques ne sont pas de même niveau et qu'un texte inférieur doit toujours respecter les textes supérieurs.",
          consignes: [
            "Définir la hiérarchie des normes et expliquer son principe.",
            "Réaliser, avec l'aide du professeur, le schéma de la hiérarchie des normes en plaçant dans l'ordre : Constitution, traités internationaux ratifiés, lois organiques, lois ordinaires, ordonnances et décrets, arrêtés et circulaires."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée",
            "Exercice pratique (réalisation du schéma)"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la Constitution togolaise vue à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation du schéma de la hiérarchie des normes.",
              image: "assets/images/3e/hierarchie-normes.png"
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la hiérarchie des normes et expliquer son principe."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Exercice pratique guidé : chaque groupe réalise, sur son cahier, le schéma de la hiérarchie des normes en respectant l'ordre des six niveaux."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Comparaison des schémas réalisés par chaque groupe avec le schéma de référence."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : schéma de la hiérarchie des normes à recopier proprement."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Placer correctement trois niveaux de normes dans l'ordre de la hiérarchie."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qu'est-ce que la hiérarchie des normes",
              contenu: "La hiérarchie des normes est l'organisation des textes juridiques d'un pays selon différents niveaux d'importance, du sommet à la base de la pyramide juridique."
            },
            {
              titre: "2. Son principe fondamental",
              contenu: "Le principe de la hiérarchie des normes veut qu'une norme inférieure ne doit jamais contredire une norme supérieure. Si un texte de niveau inférieur va à l'encontre d'un texte de niveau supérieur, il peut être annulé ou déclaré invalide."
            },
            {
              titre: "3. Les six niveaux de la pyramide",
              contenu: "Du sommet à la base, la hiérarchie des normes togolaise se compose de la Constitution, des traités et accords internationaux ratifiés, des lois organiques, des lois ordinaires, des ordonnances et décrets, puis des arrêtés et circulaires."
            },
            {
              titre: "4. À retenir",
              contenu: "Réaliser soi-même le schéma de cette hiérarchie permet de mieux comprendre comment les textes juridiques togolais s'articulent entre eux, du texte le plus solennel jusqu'aux décisions administratives les plus courantes."
            }
          ],
          evaluation: "Explication du principe de la hiérarchie des normes ; réalisation de son schéma.",
          devoirMaison: "Recopier proprement le schéma de la hiérarchie des normes et le faire signer par un parent."
        } },
      { id: "3e-l5", numero: 5, competence: "Respecter les normes et les lois de la République", theme: "Décentralisation au Togo", titre: "Juxtaposition des territorialités et répartition des compétences", seances: 4, fiche: {
          competence: "Respecter les normes et les lois de la République",
          theme: "Décentralisation au Togo",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 5"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Rappel du schéma des subdivisions administratives du Togo vu en 5e"
            }
          ],
          preRequis: [
            "Subdivisions administratives et collectivités territoriales du Togo vues en 5e et 4e"
          ],
          capacitesContenus: [
            {
              capacite: "Expliquer la notion de juxtaposition de territorialités",
              contenus: [
                "Notion de territorialité",
                "Juxtaposition des territorialités (une même portion du territoire relève à la fois d'une circonscription administrative et d'une collectivité territoriale)"
              ]
            },
            {
              capacite: "Montrer comment les collectivités territoriales sont gérées sans conflit de compétences au Togo",
              contenus: [
                "Répartition des compétences : compétences propres des collectivités territoriales, compétences partagées entre l'État et les collectivités, compétences transférées par l'État aux collectivités, compétences relevant uniquement de l'État"
              ]
            }
          ],
          situationApprentissage: "Les apprenants s'interrogent sur le fait qu'un même village ou une même ville dépend à la fois d'une région (circonscription administrative) et d'une commune (collectivité territoriale), pour comprendre la notion de juxtaposition des territorialités.",
          consignes: [
            "Définir la notion de territorialité.",
            "Expliquer la notion de juxtaposition de territorialités.",
            "Montrer comment les collectivités territoriales sont gérées sans conflit de compétences au Togo, à travers la répartition des compétences propres, partagées, transférées et relevant uniquement de l'État."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 15,
              contenu: "Rappel des subdivisions administratives et collectivités territoriales du Togo vues en 5e et 4e."
            },
            {
              phase: "Présentation",
              dureeMin: 15,
              contenu: "Présentation d'un exemple concret : une ville qui est à la fois chef-lieu de région et siège d'une commune."
            },
            {
              phase: "Appropriation",
              dureeMin: 50,
              contenu: "En petits groupes, discussion dirigée pour définir la territorialité et expliquer la juxtaposition des territorialités."
            },
            {
              phase: "Exploration",
              dureeMin: 80,
              contenu: "Discussion dirigée pour montrer comment les compétences sont réparties (propres, partagées, transférées, exclusivement étatiques) afin d'éviter les conflits entre collectivités."
            },
            {
              phase: "Mise en commun",
              dureeMin: 25,
              contenu: "Restitution des explications et exemples de répartition de compétences trouvés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 30,
              contenu: "Trace écrite : notion de juxtaposition des territorialités et catégories de répartition des compétences."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une compétence propre et une compétence partagée d'une collectivité territoriale."
            }
          ],
          resumeStructure: [
            {
              titre: "1. La notion de territorialité",
              contenu: "La territorialité désigne le rattachement d'un espace géographique à une structure administrative ou politique donnée. Au Togo, un même territoire peut relever de plusieurs structures à la fois."
            },
            {
              titre: "2. La juxtaposition des territorialités",
              contenu: "C'est le cas de la juxtaposition des territorialités : une même portion du territoire togolais relève à la fois d'une circonscription administrative (comme une région ou une préfecture) et d'une collectivité territoriale (comme une commune)."
            },
            {
              titre: "3. La répartition des compétences",
              contenu: "Pour éviter les conflits entre ces différentes structures, les compétences sont clairement réparties : certaines sont propres aux collectivités territoriales, d'autres sont partagées entre l'État et les collectivités, d'autres encore sont transférées par l'État, et certaines relèvent exclusivement de l'État (comme la défense ou la justice)."
            },
            {
              titre: "4. À retenir",
              contenu: "Cette répartition claire des compétences permet aux collectivités territoriales togolaises de fonctionner sans empiéter les unes sur les autres ni sur les prérogatives de l'État."
            }
          ],
          evaluation: "Explication de la juxtaposition des territorialités ; identification des compétences propres, partagées et transférées des collectivités territoriales.",
          devoirMaison: "Donner un exemple, dans sa localité, d'une compétence gérée par la commune et d'une compétence gérée par l'État."
        } },
      { id: "3e-l6", numero: 6, competence: "Communiquer avec respect", theme: "Droit de suffrage", titre: "Élections au Togo", seances: 6, fiche: {
          competence: "Communiquer avec respect",
          theme: "Droit de suffrage",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 6"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Extraits du Code électoral togolais ; exemple de bulletin de vote et de carte d'électeur"
            }
          ],
          preRequis: [
            "Principes de la République togolaise (démocratie) vus en 5e"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter le code électoral",
              contenus: [
                "Notions de droit de suffrage, élection, référendum, code électoral",
                "Rôle du code électoral"
              ]
            },
            {
              capacite: "Décrire les étapes d'une élection",
              contenus: [
                "Différentes élections au Togo (présidentielle, législatives, locales, sénatoriales)",
                "Étapes d'une élection (convocation du corps électoral, candidatures, campagne, scrutin, dépouillement, proclamation)"
              ]
            },
            {
              capacite: "Décrire le déroulement d'un vote",
              contenus: [
                "Déroulement d'un vote (vérification de la carte d'électeur, isoloir, urne, encre indélébile, etc.)"
              ]
            }
          ],
          situationApprentissage: "À l'approche d'échéances électorales, les apprenants s'interrogent sur ce qu'est le droit de suffrage, les différentes élections au Togo et le déroulement concret d'un vote.",
          consignes: [
            "Définir les notions de droit de suffrage, élection, référendum, code électoral, et présenter le rôle du code électoral.",
            "Relever les différentes élections au Togo (présidentielle, législatives, locales, sénatoriales).",
            "Décrire les étapes d'une élection (les différentes phases et les activités correspondantes).",
            "Décrire le déroulement d'un vote (vérification de la carte d'électeur, isoloir, urne, encre indélébile, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée",
            "Simulation d'un vote en classe"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 15,
              contenu: "Rappel du principe démocratique de la République togolaise vu en 5e."
            },
            {
              phase: "Présentation",
              dureeMin: 20,
              contenu: "Présentation d'extraits du Code électoral et d'un exemple de bulletin de vote et de carte d'électeur."
            },
            {
              phase: "Appropriation",
              dureeMin: 65,
              contenu: "En petits groupes, discussion dirigée pour définir droit de suffrage, élection, référendum, code électoral et présenter son rôle."
            },
            {
              phase: "Exploration",
              dureeMin: 130,
              contenu: "Discussion dirigée pour relever les différentes élections au Togo et décrire les étapes d'une élection, puis simulation en classe du déroulement d'un vote (vérification, isoloir, urne)."
            },
            {
              phase: "Mise en commun",
              dureeMin: 40,
              contenu: "Retour sur la simulation de vote ; mise en commun des étapes identifiées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 50,
              contenu: "Trace écrite : notions clés du droit de suffrage, étapes d'une élection et déroulement d'un vote."
            },
            {
              phase: "Évaluation",
              dureeMin: 10,
              contenu: "Décrire, dans l'ordre, les étapes du déroulement d'un vote."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Le droit de suffrage et le code électoral",
              contenu: "Le droit de suffrage est le droit reconnu à un citoyen de participer aux élections, que ce soit pour voter ou pour se présenter comme candidat. Le code électoral est l'ensemble des règles qui encadrent l'organisation des élections et des référendums au Togo."
            },
            {
              titre: "2. Les différentes élections au Togo",
              contenu: "Au Togo, plusieurs types d'élections rythment la vie démocratique : l'élection présidentielle, les élections législatives, les élections locales et les élections sénatoriales. Chacune correspond à un niveau différent de représentation politique."
            },
            {
              titre: "3. Les étapes d'une élection",
              contenu: "Une élection suit un déroulement précis : la convocation du corps électoral, le dépôt des candidatures, la campagne électorale, le scrutin, le dépouillement des votes puis la proclamation des résultats."
            },
            {
              titre: "4. Le déroulement d'un vote",
              contenu: "Le jour du scrutin, l'électeur présente sa carte d'électeur pour être vérifié sur la liste électorale, se rend dans l'isoloir pour voter en toute discrétion, dépose son bulletin dans l'urne, puis se fait marquer le doigt à l'encre indélébile pour empêcher tout vote multiple."
            }
          ],
          evaluation: "Présentation du code électoral ; description des étapes d'une élection et du déroulement d'un vote.",
          devoirMaison: "Interroger un adulte de son entourage sur son souvenir de son premier vote et en rapporter les grandes étapes."
        } },
      { id: "3e-l7", numero: 7, competence: "Communiquer avec respect", theme: "Médias et lutte contre l'extrémisme violent", titre: "Médias", seances: 2, fiche: {
          competence: "Communiquer avec respect",
          theme: "Médias et lutte contre l'extrémisme violent",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 7"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples de journaux, émissions radio/télé et sites d'information togolais"
            }
          ],
          preRequis: [
            "Notion de démocratie vue en 5e"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter les caractéristiques des médias en démocratie",
              contenus: [
                "Notion de média",
                "Principaux médias (presse, affichage publicitaire, radio, télévision, internet, cinéma)",
                "Caractéristiques des médias en démocratie (indépendance, impartialité, liberté, etc.)"
              ]
            },
            {
              capacite: "Décrire le rôle des médias en démocratie",
              contenus: [
                "Rôle des médias en démocratie (information, éducation, formation, alerte, sensibilisation, incitation aux bonnes pratiques, etc.)"
              ]
            },
            {
              capacite: "Relever le rôle des médias dans la lutte contre l'extrémisme violent",
              contenus: [
                "Rôle des médias dans la lutte contre l'extrémisme violent (dénonciation des messages haineux, appel au discernement, promotion des valeurs sociales, éducation à la citoyenneté numérique, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants citent des médias qu'ils consultent ou écoutent régulièrement pour s'interroger sur leur rôle dans une démocratie et dans la lutte contre l'extrémisme violent.",
          consignes: [
            "Définir la notion de média, identifier les principaux médias et relever leurs caractéristiques en démocratie (indépendance, impartialité, liberté, etc.).",
            "Décrire le rôle des médias en démocratie (information, éducation, formation, alerte, sensibilisation, incitation aux bonnes pratiques, etc.).",
            "Relever le rôle des médias dans la lutte contre l'extrémisme violent (dénonciation des messages haineux, appel au discernement, promotion des valeurs sociales, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur les médias que les apprenants consultent régulièrement."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'exemples de journaux, d'émissions et de sites d'information togolais."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir le média, identifier les principaux médias et relever leurs caractéristiques en démocratie."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour décrire le rôle des médias en démocratie et relever leur rôle dans la lutte contre l'extrémisme violent."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des rôles des médias identifiés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : caractéristiques et rôles des médias en démocratie et dans la lutte contre l'extrémisme violent."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une caractéristique des médias en démocratie et un rôle des médias dans la lutte contre l'extrémisme violent."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les médias et leurs caractéristiques en démocratie",
              contenu: "Un média est un moyen de diffusion de l'information vers un large public : presse, affichage publicitaire, radio, télévision, internet ou cinéma. En démocratie, les médias doivent respecter des caractéristiques essentielles comme l'indépendance, l'impartialité et la liberté."
            },
            {
              titre: "2. Le rôle des médias en démocratie",
              contenu: "Les médias jouent un rôle central en démocratie : ils informent, éduquent, forment, alertent et sensibilisent les citoyens, tout en incitant aux bonnes pratiques dans la société."
            },
            {
              titre: "3. Leur rôle dans la lutte contre l'extrémisme violent",
              contenu: "Face à l'extrémisme violent, les médias ont un rôle actif à jouer : dénoncer les messages haineux, appeler les populations au discernement, et promouvoir les valeurs sociales par l'éducation à la citoyenneté numérique."
            },
            {
              titre: "4. À retenir",
              contenu: "Des médias libres et responsables sont un pilier essentiel d'une démocratie saine, à condition qu'ils respectent leur devoir d'indépendance et d'impartialité."
            }
          ],
          evaluation: "Présentation des caractéristiques des médias en démocratie ; description de leur rôle en démocratie et dans la lutte contre l'extrémisme violent.",
          devoirMaison: "Relever, dans un média consulté à la maison, un exemple d'information qui sensibilise à une bonne pratique."
        } },
      { id: "3e-l8", numero: 8, competence: "Communiquer avec respect", theme: "Médias et lutte contre l'extrémisme violent", titre: "Jeune et TIC", seances: 2, fiche: {
          competence: "Communiquer avec respect",
          theme: "Médias et lutte contre l'extrémisme violent",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 8"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples de réseaux sociaux et de moteurs de recherche utilisés par les apprenants (à des fins pédagogiques uniquement)"
            }
          ],
          preRequis: [
            "Notion de média vue en leçon 7"
          ],
          capacitesContenus: [
            {
              capacite: "Relever les dangers liés aux réseaux sociaux et aux sites non recommandables",
              contenus: [
                "Notion de réseau social",
                "Dangers liés aux réseaux sociaux et aux sites non recommandables (perversion, dépravation, radicalisation, aliénation, propension à l'intolérance, à la haine, à la violence, etc.)"
              ]
            },
            {
              capacite: "Utiliser les moteurs de recherche pour s'épanouir",
              contenus: [
                "Notion de moteur de recherche",
                "Utilisation des moteurs de recherche dans les études (approfondissement, formation, assistance, réseau d'étude, contrôle parental, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent sur leur usage des réseaux sociaux et des moteurs de recherche pour distinguer les dangers à éviter des usages qui favorisent leur épanouissement et leur réussite scolaire.",
          consignes: [
            "Définir la notion de réseau social et relever les dangers liés aux réseaux sociaux et aux sites non recommandables (perversion, dépravation, radicalisation, aliénation, intolérance, haine, violence, etc.).",
            "Définir la notion de moteur de recherche et montrer comment l'utiliser pour son propre épanouissement (approfondissement, formation, assistance, réseau d'étude, contrôle parental, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel de la notion de média vue à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Échange sur les réseaux sociaux et moteurs de recherche utilisés par les apprenants."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir le réseau social et relever ses dangers."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour définir le moteur de recherche et montrer comment l'utiliser pour s'épanouir dans ses études."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des dangers et des bons usages identifiés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : dangers des réseaux sociaux et bons usages des moteurs de recherche."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un danger lié aux réseaux sociaux et un bon usage d'un moteur de recherche."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les dangers des réseaux sociaux",
              contenu: "Un réseau social est une plateforme numérique qui permet aux internautes d'échanger et de partager du contenu. Mal utilisés, les réseaux sociaux et certains sites non recommandables peuvent exposer les jeunes à la perversion, la dépravation, la radicalisation, l'aliénation, ou favoriser l'intolérance, la haine et la violence."
            },
            {
              titre: "2. Bien utiliser les moteurs de recherche",
              contenu: "Un moteur de recherche est un outil qui permet de trouver de l'information sur internet. Bien utilisé, il peut aider le jeune à s'épanouir dans ses études : approfondir un sujet, se former, obtenir de l'assistance, rejoindre un réseau d'étude, tout en restant sous un contrôle parental adapté."
            },
            {
              titre: "3. À retenir",
              contenu: "Internet peut être une source de danger ou une ressource précieuse selon l'usage qui en est fait : le jeune citoyen doit apprendre à distinguer les sites et pratiques à risque des usages qui favorisent véritablement son épanouissement."
            }
          ],
          evaluation: "Relevé des dangers liés aux réseaux sociaux et aux sites non recommandables ; utilisation des moteurs de recherche pour s'épanouir.",
          devoirMaison: "Utiliser un moteur de recherche pour approfondir un sujet étudié en classe et noter ce qu'on y a trouvé d'utile."
        } },
      { id: "3e-l9", numero: 9, competence: "Développer de l'ambition et l'esprit d'initiative", theme: "Lutte contre la pauvreté", titre: "Formation professionnelle", seances: 2, fiche: {
          competence: "Développer de l'ambition et l'esprit d'initiative",
          theme: "Lutte contre la pauvreté",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 9"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Liste ou brochures de centres et écoles de formation professionnelle du Togo"
            }
          ],
          preRequis: [
            "Métier d'avenir vu en 6e (« Qui suis-je ? »)"
          ],
          capacitesContenus: [
            {
              capacite: "Montrer l'importance de la formation professionnelle",
              contenus: [
                "Notion de formation professionnelle",
                "Importance de la formation professionnelle (trouver rapidement une activité professionnelle, exceller dans ce qu'on aime, etc.)"
              ]
            },
            {
              capacite: "Présenter les centres et écoles de formation au Togo",
              contenus: [
                "Centres et écoles de formation au Togo (collèges d'enseignement technique, lycées techniques, écoles supérieures, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants s'interrogent sur les différentes voies qui s'offrent à eux après le collège pour se former à un métier, en lien avec leurs métiers d'avenir envisagés plus tôt dans leur scolarité.",
          consignes: [
            "Définir la notion de formation professionnelle.",
            "Montrer l'importance de la formation professionnelle (trouver rapidement une activité professionnelle, exceller dans ce qu'on aime, etc.).",
            "Présenter les centres et écoles de formation au Togo (collèges d'enseignement technique, lycées techniques, écoles supérieures, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des métiers d'avenir envisagés par les apprenants en 6e."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de brochures de centres et écoles de formation professionnelle du Togo."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la formation professionnelle et montrer son importance."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Exploitation de documents pour présenter les centres et écoles de formation au Togo."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des centres et écoles identifiés par chaque groupe, en lien avec leurs métiers d'avenir."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : importance de la formation professionnelle et centres/écoles de formation au Togo."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un centre ou une école de formation professionnelle au Togo."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qu'est-ce que la formation professionnelle",
              contenu: "La formation professionnelle est l'ensemble des enseignements et apprentissages qui préparent un individu à exercer un métier précis, en complément ou en alternative aux études générales."
            },
            {
              titre: "2. Son importance",
              contenu: "Elle permet de trouver plus rapidement une activité professionnelle après les études, tout en offrant la possibilité d'exceller dans un domaine que l'on apprécie particulièrement."
            },
            {
              titre: "3. Les centres et écoles de formation au Togo",
              contenu: "Le Togo dispose de plusieurs structures de formation professionnelle : les collèges d'enseignement technique, les lycées techniques et diverses écoles supérieures spécialisées, qui permettent aux jeunes de se former à de nombreux métiers."
            },
            {
              titre: "4. À retenir",
              contenu: "Choisir une formation professionnelle adaptée à ses talents et à ses centres d'intérêt (identifiés dès la 6e avec « Qui suis-je ? ») est une étape clé pour construire un avenir professionnel solide."
            }
          ],
          evaluation: "Explication de l'importance de la formation professionnelle ; présentation des centres et écoles de formation au Togo.",
          devoirMaison: "Se renseigner sur un centre ou une école de formation professionnelle proche de chez soi et le domaine qu'il propose."
        } },
      { id: "3e-l10", numero: 10, competence: "Développer de l'ambition et l'esprit d'initiative", theme: "Lutte contre la pauvreté", titre: "Genre et développement", seances: 2, fiche: {
          competence: "Développer de l'ambition et l'esprit d'initiative",
          theme: "Lutte contre la pauvreté",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 10"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Statistiques et exemples locaux sur la scolarisation des filles et des garçons"
            }
          ],
          preRequis: [
            "Notion de formation professionnelle vue en leçon 9"
          ],
          capacitesContenus: [
            {
              capacite: "Définir la notion de genre",
              contenus: [
                "Notion de genre"
              ]
            },
            {
              capacite: "Relever les causes de l'inégalité entre garçon et fille",
              contenus: [
                "Causes de l'inégalité entre garçon et fille (poids de la tradition, système économique injuste et sexiste, stéréotypes discriminatoires, etc.)"
              ]
            },
            {
              capacite: "Proposer des actions qui promeuvent l'égalité entre garçon et fille",
              contenus: [
                "Actions qui promeuvent l'égalité (scolarisation de la fille au même titre que le garçon, répartition équitable des tâches à la maison, mixité des filières et des métiers, encouragement des filles à prendre la parole, etc.)"
              ]
            },
            {
              capacite: "Dégager les avantages de l'équité et de l'égalité entre fille et garçon dans le développement socioéconomique",
              contenus: [
                "Avantages de l'équité et de l'égalité (juste rémunération du travail de la femme, atténuation des discriminations, accès aux postes de responsabilité, meilleur suivi de la scolarité des enfants, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent sur des exemples locaux de répartition des tâches ou de scolarisation entre filles et garçons pour comprendre la notion de genre et les inégalités qui peuvent en découler.",
          consignes: [
            "Définir la notion de genre.",
            "Relever les causes de l'inégalité entre garçon et fille (poids de la tradition, système économique injuste et sexiste, stéréotypes discriminatoires, etc.).",
            "Proposer des actions qui promeuvent l'égalité entre garçon et fille (scolarisation égale, répartition équitable des tâches, mixité des filières, encouragement des filles à s'exprimer, etc.).",
            "Dégager les avantages de l'équité et de l'égalité entre fille et garçon dans le développement socioéconomique."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur la répartition des tâches à la maison entre filles et garçons."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation d'exemples ou de statistiques locales sur la scolarisation des filles et des garçons."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir le genre et relever les causes de l'inégalité entre garçon et fille."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour proposer des actions qui promeuvent l'égalité et dégager les avantages de l'équité entre fille et garçon."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des causes, actions et avantages relevés par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : causes de l'inégalité, actions pour l'égalité et avantages de l'équité entre filles et garçons."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une cause de l'inégalité entre garçon et fille et une action pour promouvoir leur égalité."
            }
          ],
          resumeStructure: [
            {
              titre: "1. La notion de genre",
              contenu: "Le genre désigne les rôles, comportements et attributs que la société attribue différemment aux hommes et aux femmes, indépendamment de leurs différences biologiques."
            },
            {
              titre: "2. Les causes de l'inégalité entre garçon et fille",
              contenu: "Cette inégalité s'explique par plusieurs facteurs : le poids de la tradition, un système économique parfois injuste et sexiste, ainsi que des stéréotypes discriminatoires qui limitent les opportunités offertes aux filles."
            },
            {
              titre: "3. Des actions pour l'égalité",
              contenu: "Promouvoir l'égalité entre garçon et fille passe par une scolarisation égale pour les deux sexes, une répartition équitable des tâches à la maison, la mixité des filières et des métiers, et l'encouragement des filles à prendre la parole."
            },
            {
              titre: "4. Les avantages de l'égalité",
              contenu: "Cette égalité profite à toute la société : elle permet une juste rémunération du travail de la femme, atténue les discriminations, favorise l'accès aux postes de responsabilité et améliore le suivi de la scolarité des enfants."
            }
          ],
          evaluation: "Relevé des causes de l'inégalité entre garçon et fille ; proposition d'actions promouvant leur égalité.",
          devoirMaison: "Proposer une action concrète que sa famille pourrait adopter pour mieux répartir les tâches entre filles et garçons."
        } },
      { id: "3e-l11", numero: 11, competence: "Participer à la prévention et à la gestion des catastrophes naturelles", theme: "Risques de catastrophes naturelles", titre: "Catastrophes naturelles", seances: 2, fiche: {
          competence: "Participer à la prévention et à la gestion des catastrophes naturelles",
          theme: "Risques de catastrophes naturelles",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 11"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Exemples ou récits de catastrophes naturelles survenues au Togo (inondations, érosion côtière)"
            }
          ],
          preRequis: [
            "Pollution de l'environnement vue en 5e"
          ],
          capacitesContenus: [
            {
              capacite: "Relever les causes des catastrophes naturelles",
              contenus: [
                "Notion de catastrophe naturelle",
                "Causes des catastrophes naturelles (causes naturelles, causes anthropiques)"
              ]
            },
            {
              capacite: "Dégager les manifestations des catastrophes naturelles",
              contenus: [
                "Manifestations des catastrophes naturelles selon leur type (inondations, érosion côtière, vents violents, etc.)"
              ]
            },
            {
              capacite: "Déduire les conséquences des catastrophes naturelles",
              contenus: [
                "Conséquences des catastrophes naturelles (destructions matérielles, pertes de vies humaines, dégradation de l'environnement, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants échangent sur des catastrophes naturelles connues au Togo (inondations, érosion côtière) pour en comprendre les causes, les manifestations et les conséquences.",
          consignes: [
            "Définir la notion de catastrophe naturelle et relever ses causes (naturelles, anthropiques).",
            "Décrire les manifestations des catastrophes naturelles selon leur type.",
            "Déduire les conséquences des catastrophes naturelles (destructions matérielles, pertes de vies humaines, dégradation de l'environnement, etc.)."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Échange oral sur des catastrophes naturelles connues des apprenants au Togo."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation de récits ou d'exemples de catastrophes naturelles survenues au Togo."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour définir la catastrophe naturelle et relever ses causes."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour décrire les manifestations des catastrophes naturelles et en déduire les conséquences."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des causes, manifestations et conséquences relevées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : causes, manifestations et conséquences des catastrophes naturelles."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer une cause et une conséquence d'une catastrophe naturelle."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Qu'est-ce qu'une catastrophe naturelle",
              contenu: "Une catastrophe naturelle est un événement d'origine naturelle ou anthropique (liée à l'activité humaine) qui cause des dégâts importants à une population ou à un territoire."
            },
            {
              titre: "2. Ses manifestations",
              contenu: "Selon leur type, les catastrophes naturelles se manifestent différemment : inondations, érosion côtière, vents violents, entre autres phénomènes qui touchent régulièrement certaines régions du Togo."
            },
            {
              titre: "3. Ses conséquences",
              contenu: "Les catastrophes naturelles entraînent des conséquences lourdes : destructions matérielles, pertes de vies humaines et dégradation durable de l'environnement."
            },
            {
              titre: "4. À retenir",
              contenu: "Comprendre les causes et les manifestations des catastrophes naturelles est indispensable pour mieux s'en protéger, ce qui sera approfondi avec les mesures de prévention étudiées à la leçon suivante."
            }
          ],
          evaluation: "Relevé des causes des catastrophes naturelles ; description de leurs manifestations et de leurs conséquences.",
          devoirMaison: "Citer une catastrophe naturelle survenue récemment au Togo et en indiquer une conséquence."
        } },
      { id: "3e-l12", numero: 12, competence: "Participer à la prévention et à la gestion des catastrophes naturelles", theme: "Risques de catastrophes naturelles", titre: "Prévention et gestion des catastrophes naturelles", seances: 2, fiche: {
          competence: "Participer à la prévention et à la gestion des catastrophes naturelles",
          theme: "Risques de catastrophes naturelles",
          documentation: [
            "Programme officiel d'ECM, classe de 3e, Ministère des Enseignements Primaire et Secondaire (DPIP), août 2024",
            "Guide d'exécution du programme d'ECM, classe de 3e — Leçon 12"
          ],
          supportsDidactiques: [
            {
              type: "texte",
              contenu: "Présentation des services d'État togolais chargés des catastrophes (ANGE, ANPC, Direction de l'Environnement)"
            }
          ],
          preRequis: [
            "Causes et conséquences des catastrophes naturelles vues en leçon 11"
          ],
          capacitesContenus: [
            {
              capacite: "Présenter les différents services de l'État intervenant dans la réduction des risques de catastrophes",
              contenus: [
                "Différents services de l'État (ANGE, ANPC, Direction de l'Environnement, etc.)"
              ]
            },
            {
              capacite: "Relever les mesures de prévention des catastrophes",
              contenus: [
                "Mesures de prévention : systèmes d'alerte précoce (SAP) aux inondations, aux feux de végétation, aux vents violents, à l'érosion côtière, etc."
              ]
            },
            {
              capacite: "Partager les bonnes pratiques de réduction des risques de catastrophes naturelles",
              contenus: [
                "Bonnes pratiques communautaires (maîtrise des SAP, reboisement, construction de barrières, entretien des caniveaux, etc.)",
                "Bonnes pratiques individuelles (sensibilisation, utilisation de poubelles, remplacement des arbres coupés, etc.)"
              ]
            }
          ],
          situationApprentissage: "Les apprenants s'interrogent sur qui, au Togo, agit pour prévenir les catastrophes naturelles et sur ce que chacun peut faire, à son niveau, pour réduire ces risques.",
          consignes: [
            "Identifier les différents services de l'État qui interviennent dans la réduction des risques de catastrophes (ANGE, ANPC, Direction de l'Environnement, etc.).",
            "Relever les mesures de prévention des catastrophes, notamment les systèmes d'alerte précoce (SAP).",
            "Proposer de bonnes pratiques communautaires et individuelles de réduction des risques de catastrophes naturelles."
          ],
          strategiesPedagogiques: [
            "Travail en petits groupes",
            "Exploitation de documents",
            "Discussion dirigée"
          ],
          deroulement: [
            {
              phase: "Remobilisation",
              dureeMin: 10,
              contenu: "Rappel des causes et conséquences des catastrophes naturelles vues à la leçon précédente."
            },
            {
              phase: "Présentation",
              dureeMin: 10,
              contenu: "Présentation des services de l'État togolais chargés des catastrophes (ANGE, ANPC, Direction de l'Environnement)."
            },
            {
              phase: "Appropriation",
              dureeMin: 25,
              contenu: "En petits groupes, discussion dirigée pour identifier les services de l'État intervenant dans la réduction des risques."
            },
            {
              phase: "Exploration",
              dureeMin: 30,
              contenu: "Discussion dirigée pour relever les mesures de prévention (systèmes d'alerte précoce) et proposer de bonnes pratiques communautaires et individuelles."
            },
            {
              phase: "Mise en commun",
              dureeMin: 15,
              contenu: "Restitution des mesures et bonnes pratiques proposées par chaque groupe."
            },
            {
              phase: "Institutionnalisation / trace écrite",
              dureeMin: 15,
              contenu: "Trace écrite : services de l'État, mesures de prévention et bonnes pratiques de réduction des risques de catastrophes."
            },
            {
              phase: "Évaluation",
              dureeMin: 5,
              contenu: "Citer un service de l'État et une bonne pratique individuelle de réduction des risques de catastrophes."
            }
          ],
          resumeStructure: [
            {
              titre: "1. Les services de l'État impliqués",
              contenu: "Plusieurs services de l'État togolais interviennent dans la réduction des risques de catastrophes : l'Agence Nationale de Gestion de l'Environnement (ANGE), l'Agence Nationale de Protection Civile (ANPC), ou encore la Direction de l'Environnement."
            },
            {
              titre: "2. Les mesures de prévention",
              contenu: "Parmi les mesures de prévention figurent les systèmes d'alerte précoce (SAP), destinés à anticiper les inondations, les feux de végétation, les vents violents ou l'érosion côtière avant qu'ils ne causent des dégâts importants."
            },
            {
              titre: "3. Les bonnes pratiques communautaires et individuelles",
              contenu: "Au niveau communautaire, on peut citer la maîtrise des systèmes d'alerte précoce, le reboisement, la construction de barrières ou l'entretien régulier des caniveaux. Au niveau individuel, chacun peut sensibiliser son entourage, utiliser des poubelles et remplacer les arbres coupés."
            },
            {
              titre: "4. À retenir",
              contenu: "La prévention des catastrophes naturelles repose sur une action combinée de l'État, à travers ses services spécialisés, et de chaque citoyen, à travers de bonnes pratiques quotidiennes."
            }
          ],
          evaluation: "Identification des services de l'État intervenant dans la réduction des risques ; relevé des mesures de prévention et des bonnes pratiques.",
          devoirMaison: "Proposer une bonne pratique individuelle que l'on s'engage à adopter pour réduire les risques de catastrophes dans son quartier."
        } }
    ],
    integrations: [
      { id: "3e-i1", apresLeconId: "3e-l2", competence: "Adopter des comportements responsables", themesCouverts: [
          "Démocratie à l'école"
        ], leconsCouvertes: [
          "3e-l1",
          "3e-l2"
        ], seances: 3, fiche: {
          documentation: [
            "Guide d'exécution du programme d'ECM, classe de 3e — Situation d'intégration n°1"
          ],
          preRequis: [
            "Leçon 1 : Pratiques démocratiques à l'école",
            "Leçon 2 : Police des examens"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Pratiques démocratiques à l'école",
              capacites: [
                "Montrer comment s'exerce la démocratie à l'école",
                "Organiser l'élection du conseil de classe"
              ]
            },
            {
              lecon: "Police des examens",
              capacites: [
                "Présenter la police des examens",
                "Dégager les comportements de l'élève vis-à-vis de la police des examens"
              ]
            }
          ],
          situationComplexe: "À l'approche des évaluations trimestrielles, le collège de Kpogan organise l'élection de nouveaux délégués de classe et rappelle le règlement des examens à tous les candidats. Certains élèves de 3e, chargés d'animer une réunion d'information à l'intention des plus jeunes, doivent expliquer comment la démocratie s'exerce au collège et quels comportements adopter le jour des épreuves.",
          consignes: [
            "Présenter deux manifestations de la démocratie à l'école illustrées par l'élection des délégués de classe.",
            "Expliquer l'importance de la police des examens pour le bon déroulement des épreuves.",
            "Proposer trois comportements que les élèves candidats aux examens doivent adopter vis-à-vis de la police des examens."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation complexe, s'assure de sa compréhension, modélise avec les apprenants la démarche de résolution en mobilisant les ressources des leçons concernées.",
              activiteEleves: "Écoutent, posent des questions de clarification, participent activement à la modélisation collective de la démarche de résolution."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation d'intégration, observe et régule le travail individuel, apporte une aide ponctuelle sans se substituer aux apprenants.",
              activiteEleves: "Traitent individuellement la situation d'intégration par écrit, en mobilisant les ressources des leçons du palier."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Présente le corrigé type, anime la correction collective, identifie les erreurs récurrentes et propose des activités de remédiation ciblées.",
              activiteEleves: "Comparent leur production au corrigé type, s'auto-corrigent, participent à la remédiation collective."
            }
          ],
          corrigeType: {
            introduction: "La vie du collège de Kpogan illustre deux aspects essentiels de l'éducation civique et morale : l'exercice de la démocratie à l'école et le respect de la police des examens. Ces deux dimensions préparent les apprenants à devenir des citoyens responsables.",
            developpement: [
              {
                consigne: "Deux manifestations de la démocratie à l'école",
                reponse: "L'élection des délégués de classe manifeste la démocratie à l'école à travers l'exercice de la liberté d'expression (chaque élève peut se porter candidat et voter librement) et le respect des textes qui gouvernent le collège (respect du règlement intérieur et des modalités de vote fixées par l'établissement)."
              },
              {
                consigne: "Importance de la police des examens",
                reponse: "La police des examens garantit l'égalité de traitement entre tous les candidats, assure une gestion méthodique et organisée des épreuves, et dissuade les tentatives de fraude, ce qui préserve la valeur et la crédibilité des diplômes délivrés."
              },
              {
                consigne: "Trois comportements attendus des candidats",
                reponse: "Les candidats doivent faire preuve de maîtrise de soi durant les épreuves, respecter scrupuleusement les consignes de la police des examens (placement, matériel autorisé, silence), et fournir un effort personnel honnête sans recourir à la fraude."
              }
            ],
            conclusion: "L'élection démocratique des délégués et le respect de la police des examens montrent que la démocratie à l'école repose sur des règles partagées, dont le respect garantit à la fois la liberté et l'équité entre tous les élèves."
          },
          criteresEvaluation: [
            {
              critere: "Pertinence : la production répond à la situation et aux consignes",
              bareme: "6 points"
            },
            {
              critere: "Cohérence : les idées s'enchaînent logiquement",
              bareme: "4 points"
            },
            {
              critere: "Correction de la langue et présentation",
              bareme: "3 points"
            },
            {
              critere: "Perfectionnement (originalité, exemples personnels pertinents)",
              bareme: "2 points"
            }
          ]
        } },
      { id: "3e-i2", apresLeconId: "3e-l5", competence: "Respecter les normes et les lois de la République", themesCouverts: [
          "État et nation",
          "Décentralisation au Togo"
        ], leconsCouvertes: [
          "3e-l3",
          "3e-l4",
          "3e-l5"
        ], seances: 3, fiche: {
          documentation: [
            "Guide d'exécution du programme d'ECM, classe de 3e — Situation d'intégration n°2"
          ],
          preRequis: [
            "Leçon 3 : Constitution togolaise",
            "Leçon 4 : Hiérarchie des normes",
            "Leçon 5 : Juxtaposition des territorialités et répartition des compétences"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Constitution togolaise",
              capacites: [
                "Relever les différentes Constitutions togolaises",
                "Présenter la Constitution de la Cinquième République",
                "Déduire l'importance de la Constitution"
              ]
            },
            {
              lecon: "Hiérarchie des normes",
              capacites: [
                "Expliquer la hiérarchie des normes",
                "Réaliser le schéma de la hiérarchie des normes"
              ]
            },
            {
              lecon: "Juxtaposition des territorialités et répartition des compétences",
              capacites: [
                "Expliquer la notion de juxtaposition de territorialités",
                "Montrer comment les collectivités territoriales sont gérées sans conflit de compétences"
              ]
            }
          ],
          situationComplexe: "Un conseil municipal togolais adopte un arrêté qui contredit une disposition de la Constitution relative aux libertés locales. Des habitants de la commune, informés par un journal local, s'interrogent sur la validité de cet arrêté et sur le fonctionnement de leur commune, qui appartient à la fois à une région et à une collectivité territoriale.",
          consignes: [
            "Expliquer pourquoi l'arrêté municipal contredisant la Constitution ne peut pas être appliqué, en t'appuyant sur le principe de la hiérarchie des normes.",
            "Présenter brièvement la Constitution de la Cinquième République et son importance dans ce cas.",
            "Expliquer la notion de juxtaposition des territorialités en illustrant avec l'exemple de la commune concernée, et montrer comment les compétences sont réparties pour éviter les conflits."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation complexe, s'assure de sa compréhension, modélise avec les apprenants la démarche de résolution en mobilisant les ressources des leçons concernées.",
              activiteEleves: "Écoutent, posent des questions de clarification, participent activement à la modélisation collective de la démarche de résolution."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation d'intégration, observe et régule le travail individuel, apporte une aide ponctuelle sans se substituer aux apprenants.",
              activiteEleves: "Traitent individuellement la situation d'intégration par écrit, en mobilisant les ressources des leçons du palier."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Présente le corrigé type, anime la correction collective, identifie les erreurs récurrentes et propose des activités de remédiation ciblées.",
              activiteEleves: "Comparent leur production au corrigé type, s'auto-corrigent, participent à la remédiation collective."
            }
          ],
          corrigeType: {
            introduction: "Le cas de cet arrêté municipal contraire à la Constitution soulève trois questions essentielles : la hiérarchie des normes, l'importance de la Constitution et l'organisation territoriale togolaise.",
            developpement: [
              {
                consigne: "Invalidité de l'arrêté au regard de la hiérarchie des normes",
                reponse: "Selon le principe de la hiérarchie des normes, une norme inférieure (ici un arrêté municipal, situé à la base de la pyramide) ne doit jamais contredire une norme supérieure (la Constitution, au sommet). L'arrêté contraire à la Constitution est donc illégal et ne peut être appliqué ; il pourrait être annulé par un juge compétent."
              },
              {
                consigne: "Constitution de la Cinquième République et son importance",
                reponse: "La Constitution de la Cinquième République togolaise est la loi fondamentale qui organise les pouvoirs de l'État et garantit les droits des citoyens. Son importance réside dans le fait qu'elle garantit l'État de droit et protège les citoyens contre les décisions arbitraires des autorités, y compris locales."
              },
              {
                consigne: "Juxtaposition des territorialités et répartition des compétences",
                reponse: "La commune concernée relève à la fois d'une circonscription administrative (la région) et d'une collectivité territoriale (la commune elle-même) : c'est la juxtaposition des territorialités. Pour éviter les conflits, les compétences sont réparties entre compétences propres de la commune (voirie locale, état civil), compétences partagées avec l'État, compétences transférées par l'État, et compétences relevant exclusivement de l'État (défense, justice)."
              }
            ],
            conclusion: "Ce cas illustre concrètement que le respect de la hiérarchie des normes et une répartition claire des compétences territoriales sont indispensables pour garantir un État de droit cohérent, de la Constitution jusqu'aux décisions communales."
          },
          criteresEvaluation: [
            {
              critere: "Pertinence : la production répond à la situation et aux consignes",
              bareme: "6 points"
            },
            {
              critere: "Cohérence : les idées s'enchaînent logiquement",
              bareme: "4 points"
            },
            {
              critere: "Correction de la langue et présentation",
              bareme: "3 points"
            },
            {
              critere: "Perfectionnement (originalité, exemples personnels pertinents)",
              bareme: "2 points"
            }
          ]
        } },
      { id: "3e-i3", apresLeconId: "3e-l8", competence: "Communiquer avec respect", themesCouverts: [
          "Droit de suffrage",
          "Médias et lutte contre l'extrémisme violent"
        ], leconsCouvertes: [
          "3e-l6",
          "3e-l7",
          "3e-l8"
        ], seances: 3, fiche: {
          documentation: [
            "Guide d'exécution du programme d'ECM, classe de 3e — Situation d'intégration n°3"
          ],
          preRequis: [
            "Leçon 6 : Élections au Togo",
            "Leçon 7 : Médias",
            "Leçon 8 : Jeune et TIC"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Élections au Togo",
              capacites: [
                "Présenter le code électoral",
                "Décrire les étapes d'une élection",
                "Décrire le déroulement d'un vote"
              ]
            },
            {
              lecon: "Médias",
              capacites: [
                "Présenter les caractéristiques des médias en démocratie",
                "Décrire le rôle des médias en démocratie",
                "Relever le rôle des médias dans la lutte contre l'extrémisme violent"
              ]
            },
            {
              lecon: "Jeune et TIC",
              capacites: [
                "Relever les dangers liés aux réseaux sociaux et aux sites non recommandables",
                "Utiliser les moteurs de recherche pour s'épanouir"
              ]
            }
          ],
          situationComplexe: "À la veille d'une élection locale, une fausse information appelant à la violence circule sur les réseaux sociaux dans un quartier de Lomé. Des jeunes du quartier, inquiets, se demandent comment réagir face à cette rumeur et comment se préparer sereinement au vote qui approche.",
          consignes: [
            "Expliquer pourquoi cette information relayée sur les réseaux sociaux est dangereuse et proposer une attitude responsable face à elle.",
            "Décrire le rôle que les médias devraient jouer dans cette situation pour lutter contre l'extrémisme violent.",
            "Décrire les étapes de l'élection à venir et le déroulement du vote le jour du scrutin."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation complexe, s'assure de sa compréhension, modélise avec les apprenants la démarche de résolution en mobilisant les ressources des leçons concernées.",
              activiteEleves: "Écoutent, posent des questions de clarification, participent activement à la modélisation collective de la démarche de résolution."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation d'intégration, observe et régule le travail individuel, apporte une aide ponctuelle sans se substituer aux apprenants.",
              activiteEleves: "Traitent individuellement la situation d'intégration par écrit, en mobilisant les ressources des leçons du palier."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Présente le corrigé type, anime la correction collective, identifie les erreurs récurrentes et propose des activités de remédiation ciblées.",
              activiteEleves: "Comparent leur production au corrigé type, s'auto-corrigent, participent à la remédiation collective."
            }
          ],
          corrigeType: {
            introduction: "La circulation d'une fausse information appelant à la violence sur les réseaux sociaux, à la veille d'une élection, met en jeu à la fois la vigilance face aux dangers du numérique, le rôle des médias et le bon déroulement du processus électoral.",
            developpement: [
              {
                consigne: "Dangers de l'information et attitude responsable",
                reponse: "Cette information relève des dangers liés aux réseaux sociaux : elle peut inciter à l'intolérance et à la violence et relève de la désinformation. Une attitude responsable consiste à ne pas la partager, à vérifier son origine à l'aide d'un moteur de recherche fiable, et à la signaler aux autorités ou aux administrateurs de la plateforme."
              },
              {
                consigne: "Rôle des médias face à cette situation",
                reponse: "Les médias doivent, dans ce contexte, jouer leur rôle de dénonciation des messages haineux, appeler les populations au discernement, vérifier et rétablir les faits, et promouvoir les valeurs de paix et de tolérance pour lutter contre l'extrémisme violent."
              },
              {
                consigne: "Étapes de l'élection et déroulement du vote",
                reponse: "L'élection suit les étapes de convocation du corps électoral, dépôt des candidatures, campagne électorale, scrutin, dépouillement et proclamation des résultats. Le jour du vote, l'électeur présente sa carte d'électeur, est vérifié sur la liste électorale, vote à l'isoloir, dépose son bulletin dans l'urne puis fait marquer son doigt à l'encre indélébile."
              }
            ],
            conclusion: "Face à la désinformation, la vigilance individuelle, la responsabilité des médias et le respect des procédures électorales sont complémentaires pour garantir des élections apaisées et crédibles."
          },
          criteresEvaluation: [
            {
              critere: "Pertinence : la production répond à la situation et aux consignes",
              bareme: "6 points"
            },
            {
              critere: "Cohérence : les idées s'enchaînent logiquement",
              bareme: "4 points"
            },
            {
              critere: "Correction de la langue et présentation",
              bareme: "3 points"
            },
            {
              critere: "Perfectionnement (originalité, exemples personnels pertinents)",
              bareme: "2 points"
            }
          ]
        } },
      { id: "3e-i4", apresLeconId: "3e-l10", competence: "Développer de l'ambition et l'esprit d'initiative", themesCouverts: [
          "Lutte contre la pauvreté"
        ], leconsCouvertes: [
          "3e-l9",
          "3e-l10"
        ], seances: 3, fiche: {
          documentation: [
            "Guide d'exécution du programme d'ECM, classe de 3e — Situation d'intégration n°4"
          ],
          preRequis: [
            "Leçon 9 : Formation professionnelle",
            "Leçon 10 : Genre et égalité entre fille et garçon"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Formation professionnelle",
              capacites: [
                "Montrer l'importance de la formation professionnelle",
                "Présenter les centres et écoles de formation au Togo"
              ]
            },
            {
              lecon: "Genre et égalité entre fille et garçon",
              capacites: [
                "Relever les causes de l'inégalité entre garçon et fille",
                "Proposer des actions qui promeuvent l'égalité entre garçon et fille",
                "Dégager les avantages de l'équité et de l'égalité"
              ]
            }
          ],
          situationComplexe: "Dans un village togolais, les parents d'Afiwa, une brillante élève de 3e, envisagent de l'orienter uniquement vers les travaux ménagers après le collège, alors que son frère jumeau est encouragé à poursuivre une formation professionnelle en électricité. Afiwa souhaite, elle aussi, intégrer un centre de formation technique.",
          consignes: [
            "Relever deux causes qui expliquent la différence de traitement entre Afiwa et son frère.",
            "Proposer deux actions qui permettraient de promouvoir l'égalité entre Afiwa et son frère face à la formation professionnelle.",
            "Montrer l'importance, pour Afiwa, d'accéder comme son frère à un centre ou une école de formation professionnelle."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation complexe, s'assure de sa compréhension, modélise avec les apprenants la démarche de résolution en mobilisant les ressources des leçons concernées.",
              activiteEleves: "Écoutent, posent des questions de clarification, participent activement à la modélisation collective de la démarche de résolution."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation d'intégration, observe et régule le travail individuel, apporte une aide ponctuelle sans se substituer aux apprenants.",
              activiteEleves: "Traitent individuellement la situation d'intégration par écrit, en mobilisant les ressources des leçons du palier."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Présente le corrigé type, anime la correction collective, identifie les erreurs récurrentes et propose des activités de remédiation ciblées.",
              activiteEleves: "Comparent leur production au corrigé type, s'auto-corrigent, participent à la remédiation collective."
            }
          ],
          corrigeType: {
            introduction: "La situation d'Afiwa illustre une inégalité de traitement entre fille et garçon face à l'orientation professionnelle, un sujet essentiel du développement socioéconomique du Togo.",
            developpement: [
              {
                consigne: "Deux causes de la différence de traitement",
                reponse: "Cette différence s'explique par le poids de la tradition, qui réserve certains rôles aux filles (travaux ménagers) et d'autres aux garçons (métiers techniques), ainsi que par des stéréotypes discriminatoires qui considèrent, à tort, que les filles seraient moins aptes que les garçons à suivre une formation technique."
              },
              {
                consigne: "Deux actions pour promouvoir l'égalité",
                reponse: "Les parents pourraient scolariser et orienter Afiwa au même titre que son frère vers un centre de formation professionnelle de son choix, et répartir équitablement les tâches ménagères entre les deux enfants afin qu'Afiwa dispose du même temps que son frère pour se former."
              },
              {
                consigne: "Importance de l'accès à la formation pour Afiwa",
                reponse: "Comme pour tout apprenant, la formation professionnelle permettrait à Afiwa de trouver rapidement une activité et d'exceller dans un domaine qui lui plaît. Une égale opportunité pour Afiwa favoriserait aussi, plus largement, une juste rémunération du travail des femmes et une meilleure participation des femmes au développement économique du pays."
              }
            ],
            conclusion: "Offrir à Afiwa les mêmes chances de formation qu'à son frère jumeau, au-delà de sa réussite personnelle, contribue à l'égalité entre filles et garçons et au développement socioéconomique du Togo."
          },
          criteresEvaluation: [
            {
              critere: "Pertinence : la production répond à la situation et aux consignes",
              bareme: "6 points"
            },
            {
              critere: "Cohérence : les idées s'enchaînent logiquement",
              bareme: "4 points"
            },
            {
              critere: "Correction de la langue et présentation",
              bareme: "3 points"
            },
            {
              critere: "Perfectionnement (originalité, exemples personnels pertinents)",
              bareme: "2 points"
            }
          ]
        } },
      { id: "3e-i5", apresLeconId: "3e-l12", competence: "Participer à la prévention et à la gestion des catastrophes naturelles", themesCouverts: [
          "Risques de catastrophes naturelles"
        ], leconsCouvertes: [
          "3e-l11",
          "3e-l12"
        ], seances: 3, fiche: {
          documentation: [
            "Guide d'exécution du programme d'ECM, classe de 3e — Situation d'intégration n°5"
          ],
          preRequis: [
            "Leçon 11 : Causes, manifestations et conséquences des catastrophes naturelles",
            "Leçon 12 : Prévention et gestion des catastrophes naturelles"
          ],
          ressourcesMobilisees: [
            {
              lecon: "Causes, manifestations et conséquences des catastrophes naturelles",
              capacites: [
                "Relever les causes des catastrophes naturelles",
                "Dégager les manifestations des catastrophes naturelles",
                "Déduire les conséquences des catastrophes naturelles"
              ]
            },
            {
              lecon: "Prévention et gestion des catastrophes naturelles",
              capacites: [
                "Présenter les différents services de l'État intervenant dans la réduction des risques",
                "Relever les mesures de prévention des catastrophes",
                "Partager les bonnes pratiques de réduction des risques"
              ]
            }
          ],
          situationComplexe: "Chaque année, à la saison des pluies, le quartier de Baguida est envahi par des inondations qui endommagent les habitations et les récoltes des riverains, en partie à cause de caniveaux bouchés par des déchets. Un comité de jeunes du quartier veut organiser une campagne de sensibilisation et d'action avant la prochaine saison des pluies.",
          consignes: [
            "Relever une cause naturelle et une cause anthropique des inondations récurrentes à Baguida.",
            "Déduire deux conséquences de ces inondations pour les habitants du quartier.",
            "Proposer, pour le comité de jeunes, deux mesures de prévention ou bonnes pratiques (communautaires ou individuelles) et citer un service de l'État qui pourrait les appuyer."
          ],
          deroulement: [
            {
              phase: "Traitement de la situation avec les élèves (modélisation)",
              dureeMin: 55,
              activiteProf: "Présente la situation complexe, s'assure de sa compréhension, modélise avec les apprenants la démarche de résolution en mobilisant les ressources des leçons concernées.",
              activiteEleves: "Écoutent, posent des questions de clarification, participent activement à la modélisation collective de la démarche de résolution."
            },
            {
              phase: "Traitement individuel de la situation d'intégration",
              dureeMin: 55,
              activiteProf: "Distribue la situation d'intégration, observe et régule le travail individuel, apporte une aide ponctuelle sans se substituer aux apprenants.",
              activiteEleves: "Traitent individuellement la situation d'intégration par écrit, en mobilisant les ressources des leçons du palier."
            },
            {
              phase: "Correction et remédiation",
              dureeMin: 55,
              activiteProf: "Présente le corrigé type, anime la correction collective, identifie les erreurs récurrentes et propose des activités de remédiation ciblées.",
              activiteEleves: "Comparent leur production au corrigé type, s'auto-corrigent, participent à la remédiation collective."
            }
          ],
          corrigeType: {
            introduction: "Les inondations récurrentes à Baguida illustrent bien les causes, les conséquences et les possibilités de prévention des catastrophes naturelles étudiées en classe.",
            developpement: [
              {
                consigne: "Une cause naturelle et une cause anthropique",
                reponse: "La cause naturelle est l'abondance des pluies pendant la saison pluvieuse, qui dépasse la capacité d'écoulement des eaux. La cause anthropique est l'obstruction des caniveaux par des déchets jetés par les habitants, qui empêche l'évacuation normale de l'eau."
              },
              {
                consigne: "Deux conséquences pour les habitants",
                reponse: "Les inondations entraînent des destructions matérielles (habitations endommagées, récoltes perdues) et une dégradation de l'environnement du quartier (insalubrité, prolifération de maladies liées à l'eau stagnante)."
              },
              {
                consigne: "Mesures de prévention et service de l'État",
                reponse: "Le comité de jeunes pourrait organiser régulièrement l'entretien communautaire des caniveaux et sensibiliser les habitants à ne plus y jeter de déchets (bonne pratique individuelle : utilisation de poubelles). Il pourrait solliciter l'appui de l'Agence Nationale de Protection Civile (ANPC) pour la mise en place d'un système d'alerte précoce aux inondations dans le quartier."
              }
            ],
            conclusion: "En combinant la connaissance des causes des inondations, de bonnes pratiques communautaires et l'appui des services de l'État comme l'ANPC, le comité de jeunes de Baguida peut réellement réduire les risques de catastrophe dans son quartier."
          },
          criteresEvaluation: [
            {
              critere: "Pertinence : la production répond à la situation et aux consignes",
              bareme: "6 points"
            },
            {
              critere: "Cohérence : les idées s'enchaînent logiquement",
              bareme: "4 points"
            },
            {
              critere: "Correction de la langue et présentation",
              bareme: "3 points"
            },
            {
              critere: "Perfectionnement (originalité, exemples personnels pertinents)",
              bareme: "2 points"
            }
          ]
        } }
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

/* Fiche d'intégration de démonstration (aucun contenu ECM réel) — sert
   uniquement à valider le gabarit dédié aux séances d'intégration,
   y compris le corrigé type détaillé (introduction / développement /
   conclusion) et la grille de critères. */
const FICHE_INTEGRATION_DEMO = {
  documentation: ["[Exemple] Programme officiel ECM, guide d'exécution"],
  preRequis: ["[Exemple] Capacités des leçons du thème déjà acquises"],
  ressourcesMobilisees: [
    { lecon: "[Exemple] Leçon 1", capacites: ["[Exemple] Capacité 1", "[Exemple] Capacité 2"] },
    { lecon: "[Exemple] Leçon 2", capacites: ["[Exemple] Capacité 1"] }
  ],
  situationComplexe: "[Exemple] Contexte de la situation complexe d'intégration, mobilisant plusieurs capacités du thème.",
  consignes: [
    "[Exemple] Consigne 1 — identifier...",
    "[Exemple] Consigne 2 — expliquer...",
    "[Exemple] Consigne 3 — proposer..."
  ],
  deroulement: [
    { phase: "Traitement de la situation avec les élèves (modélisation)", dureeMin: 55, activiteProf: "[Exemple] Présente la situation, modélise la démarche de traitement au tableau avec la classe.", activiteEleves: "[Exemple] Observent, participent oralement à la modélisation." },
    { phase: "Traitement individuel de la situation d'intégration", dureeMin: 55, activiteProf: "[Exemple] Distribue la situation, circule, observe sans intervenir sur le fond.", activiteEleves: "[Exemple] Traitent individuellement la situation par écrit." },
    { phase: "Correction et remédiation", dureeMin: 55, activiteProf: "[Exemple] Corrige au tableau, relève les erreurs fréquentes, remédie.", activiteEleves: "[Exemple] Comparent leur production, s'auto-corrigent, posent des questions." }
  ],
  corrigeType: {
    introduction: "[Exemple] Phrase(s) d'introduction reformulant le contexte et annonçant les points traités.",
    developpement: [
      { consigne: "[Exemple] Consigne 1 — identifier...", reponse: "[Exemple] Réponse détaillée et complète attendue pour la consigne 1." },
      { consigne: "[Exemple] Consigne 2 — expliquer...", reponse: "[Exemple] Réponse détaillée et complète attendue pour la consigne 2." },
      { consigne: "[Exemple] Consigne 3 — proposer...", reponse: "[Exemple] Réponse détaillée et complète attendue pour la consigne 3." }
    ],
    conclusion: "[Exemple] Phrase(s) de conclusion résumant la réponse globale à la situation."
  },
  criteresEvaluation: [
    { critere: "[Exemple] Pertinence de la réponse", bareme: "[Exemple] /8 pts" },
    { critere: "[Exemple] Cohérence de la production", bareme: "[Exemple] /6 pts" },
    { critere: "[Exemple] Utilisation correcte des notions du thème", bareme: "[Exemple] /4 pts" },
    { critere: "[Exemple] Présentation / qualité de la langue", bareme: "[Exemple] /2 pts" }
  ]
};
