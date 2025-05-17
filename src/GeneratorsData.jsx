// ... premières entrées précédemment définies

const GeneratorsData = [
  {
    id: 0,
    name: "Gribouilleur de Serviettes",
    description:
      "Dessine des idées pendant les réunions qui n'ont rien à voir.",
    upgradeName: "Gribouilleur de Nappes de Restaurant",
    baseCost: 10,
    baseInspirationPerSecond: 0.1,
    upgradeInspirationPerSecond: 0.2,
    quantity: 0,
    unlocked: false
  },
  {
    id: 1,
    name: "Stagiaire qui Brainstorm",
    description: "Propose 100 idées par minute, dont 98 sont inutiles.",
    upgradeName: "Stagiaire Caféiné qui Délire",
    baseCost: 30,
    baseInspirationPerSecond: 0.3,
    upgradeInspirationPerSecond: 0.5,
    quantity: 0,
    unlocked: false
  },
  {
    id: 2,
    name: "Post-it Possédé",
    description: "Colle des idées sur les murs... et sur les collègues.",
    upgradeName: "Post-it qui Chuchote la Vérité",
    baseCost: 60,
    baseInspirationPerSecond: 0.6,
    upgradeInspirationPerSecond: 1,
    quantity: 0,
    unlocked: false
  },
  {
    id: 3,
    name: "Machine à Cafés d'Idées",
    description: "Chaque café déclenche un éclair de génie. Ou pas.",
    upgradeName: "Distributeur d'Espresso Visionnaire",
    baseCost: 100,
    baseInspirationPerSecond: 1,
    upgradeInspirationPerSecond: 1.5,
    quantity: 0,
    unlocked: false
  },
  {
    id: 4,
    name: "Générateur de Slogans Absurdes",
    description: "Transforme chaque mot en concept marketing bancal.",
    upgradeName: "Générateur de Titres de Startup",
    baseCost: 180,
    baseInspirationPerSecond: 2,
    upgradeInspirationPerSecond: 3,
    quantity: 0,
    unlocked: false
  },
  {
    id: 5,
    name: "ToDo List Magique",
    description: "Raye les tâches avant même qu'elles existent.",
    upgradeName: "Agenda qui Anticipe tes Pensées",
    baseCost: 300,
    baseInspirationPerSecond: 4,
    upgradeInspirationPerSecond: 6,
    quantity: 0,
    unlocked: false
  },
  {
    id: 6,
    name: "Chat d'Agence Créative",
    description: "Ne code rien, mais critique tout. Miaou.",
    upgradeName: "Chat Directeur Artistique",
    baseCost: 500,
    baseInspirationPerSecond: 7,
    upgradeInspirationPerSecond: 10,
    quantity: 0,
    unlocked: false
  },
  {
    id: 7,
    name: "Carnet de Rêves Numérique",
    description: "Enregistre tes rêves et les vend à des start-ups.",
    upgradeName: "Journal Onirique Connecté",
    baseCost: 750,
    baseInspirationPerSecond: 11,
    upgradeInspirationPerSecond: 15,
    quantity: 0,
    unlocked: false
  },
  {
    id: 8,
    name: "Boîte à Idées Vivante",
    description: "Grince quand tu n’écoutes pas ses suggestions.",
    upgradeName: "Coffre Idéologique à Propulsion",
    baseCost: 1200,
    baseInspirationPerSecond: 16,
    upgradeInspirationPerSecond: 21,
    quantity: 0,
    unlocked: false
  },
  {
    id: 9,
    name: "Miroir à Pensées Profondes",
    description: "Réfléchit à ta place. Te juge aussi, parfois.",
    upgradeName: "Miroir qui Philosophe",
    baseCost: 1800,
    baseInspirationPerSecond: 23,
    upgradeInspirationPerSecond: 30,
    quantity: 0,
    unlocked: false
  },
  {
    id: 10,
    name: "Hamster sur Roue Philosophique",
    description: "Court vers des concepts métaphysiques sans fin.",
    upgradeName: "Hamster Méditant en Lévitation",
    baseCost: 2500,
    baseInspirationPerSecond: 33,
    upgradeInspirationPerSecond: 42,
    quantity: 0,
    unlocked: false
  },
  {
    id: 11,
    name: "Brainstormeur Anonyme",
    description: "Crée des idées en cachette. Beaucoup trop en fait.",
    upgradeName: "Brainstormeur Compulsif",
    baseCost: 3500,
    baseInspirationPerSecond: 45,
    upgradeInspirationPerSecond: 55,
    quantity: 0,
    unlocked: false
  },
  {
    id: 12,
    name: "Esprit de Synthèse",
    description: "Condense tout sauf ce qu'il faut vraiment retenir.",
    upgradeName: "Esprit de Synthèse Turbo",
    baseCost: 5000,
    baseInspirationPerSecond: 60,
    upgradeInspirationPerSecond: 72,
    quantity: 0,
    unlocked: false
  },
  {
    id: 13,
    name: "Générateur de Scénarios",
    description: "Crée 3 fins alternatives à chaque idée.",
    upgradeName: "Générateur de Sagas",
    baseCost: 7000,
    baseInspirationPerSecond: 80,
    upgradeInspirationPerSecond: 95,
    quantity: 0,
    unlocked: false
  },
  {
    id: 14,
    name: "Idéateur de l’Absurde",
    description: "Ses idées sont nulles. Et pourtant... on adore.",
    upgradeName: "Idéateur de Génie Incompréhensible",
    baseCost: 10000,
    baseInspirationPerSecond: 100,
    upgradeInspirationPerSecond: 120,
    quantity: 0,
    unlocked: false
  },
  {
    id: 15,
    name: "Éponge à Concepts",
    description: "Absorbe tout. Même les idées des autres.",
    upgradeName: "Éponge Inspirée",
    baseCost: 13000,
    baseInspirationPerSecond: 120,
    upgradeInspirationPerSecond: 140,
    quantity: 0,
    unlocked: false
  },
  {
    id: 16,
    name: "Cadenceur d'Épiphanies",
    description: "Produit des révélations à l'heure pile.",
    upgradeName: "Cadenceur de Génie",
    baseCost: 16000,
    baseInspirationPerSecond: 145,
    upgradeInspirationPerSecond: 170,
    quantity: 0,
    unlocked: false
  },
  {
    id: 17,
    name: "Réchauffeur d'Idées",
    description: "Recycle les anciennes idées, façon micro-ondes.",
    upgradeName: "Réchauffeur Créatif Nouvelle Génération",
    baseCost: 20000,
    baseInspirationPerSecond: 170,
    upgradeInspirationPerSecond: 200,
    quantity: 0,
    unlocked: false
  },
  {
    id: 18,
    name: "Moteur de Métaphores",
    description: "Transforme tout en fable absurde.",
    upgradeName: "Métaphoriseur Poétique",
    baseCost: 25000,
    baseInspirationPerSecond: 200,
    upgradeInspirationPerSecond: 240,
    quantity: 0,
    unlocked: false
  },
  {
    id: 19,
    name: "Orchestrateur de Synapses",
    description: "Connecte des idées comme des feux d'artifice.",
    upgradeName: "Chef d'Orchestre Cognitif",
    baseCost: 31000,
    baseInspirationPerSecond: 235,
    upgradeInspirationPerSecond: 280,
    quantity: 0,
    unlocked: false
  },

  {
    id: 20,
    name: "Hologramme Inspirateur",
    description: "Projette des idées en 3D, mais parfois à l'envers.",
    upgradeName: "Hologramme HD à Idées Lumineuses",
    baseCost: 38000,
    baseInspirationPerSecond: 275,
    upgradeInspirationPerSecond: 320,
    quantity: 0,
    unlocked: false
  },
  {
    id: 21,
    name: "Muse Quantique",
    description: "Inspire et désinspire à la fois.",
    upgradeName: "Muse Quantique Stabilisée",
    baseCost: 46000,
    baseInspirationPerSecond: 320,
    upgradeInspirationPerSecond: 370,
    quantity: 0,
    unlocked: false
  },
  {
    id: 22,
    name: "Fabrique à Eureka!",
    description: "Produit des ‘aha!’ en série.",
    upgradeName: "Usine à Eurêka Premium",
    baseCost: 55000,
    baseInspirationPerSecond: 370,
    upgradeInspirationPerSecond: 425,
    quantity: 0,
    unlocked: false
  },
  {
    id: 23,
    name: "Esprit Collectif Nébuleux",
    description: "Personne ne comprend comment, mais ça marche.",
    upgradeName: "Conscience Collective Clarté+",
    baseCost: 66000,
    baseInspirationPerSecond: 430,
    upgradeInspirationPerSecond: 490,
    quantity: 0,
    unlocked: false
  },
  {
    id: 24,
    name: "Oracle d’Inspiration",
    description: "Répète toujours la même idée, mais ça semble profond.",
    upgradeName: "Oracle d’Idées Prophétiques",
    baseCost: 78000,
    baseInspirationPerSecond: 500,
    upgradeInspirationPerSecond: 570,
    quantity: 0,
    unlocked: false
  },
  {
    id: 25,
    name: "Tourbillon d’Idées",
    description: "Tellement d'idées que ça donne le vertige.",
    upgradeName: "Cyclone Créatif",
    baseCost: 92000,
    baseInspirationPerSecond: 570,
    upgradeInspirationPerSecond: 650,
    quantity: 0,
    unlocked: false
  },
  {
    id: 26,
    name: "Usine à Concepts Surréalistes",
    description: "Crée des idées que même Dali trouverait bizarres.",
    upgradeName: "Mega-Fabrique Post-Réaliste",
    baseCost: 108000,
    baseInspirationPerSecond: 650,
    upgradeInspirationPerSecond: 740,
    quantity: 0,
    unlocked: false
  },
  {
    id: 27,
    name: "Bibliothèque d’Univers Alternatifs",
    description: "Chaque étagère est une dimension d’idées.",
    upgradeName: "Archive Intergalactique des Possibles",
    baseCost: 125000,
    baseInspirationPerSecond: 740,
    upgradeInspirationPerSecond: 840,
    quantity: 0,
    unlocked: false
  },
  {
    id: 28,
    name: "Machine à Réécrire la Réalité",
    description: "Change les règles du jeu quand elle s’ennuie.",
    upgradeName: "Réécriveuse de Multivers",
    baseCost: 143000,
    baseInspirationPerSecond: 840,
    upgradeInspirationPerSecond: 950,
    quantity: 0,
    unlocked: false
  },
  {
    id: 29,
    name: "Collectif d’Idées Transcendantes",
    description: "Parfois, l’idée pense à toi avant que tu la formules.",
    upgradeName: "Collectif Cosmique de Pensée Pure",
    baseCost: 162000,
    baseInspirationPerSecond: 950,
    upgradeInspirationPerSecond: 1070,
    quantity: 0,
    unlocked: false
  },
  {
    id: 30,
    name: "Sphère Créative Autonome",
    description:
      "Flotte, réfléchit, et parfois murmure ton prochain chef-d'œuvre.",
    upgradeName: "Sphère Omnidéique",
    baseCost: 182000,
    baseInspirationPerSecond: 1070,
    upgradeInspirationPerSecond: 1200,
    quantity: 0,
    unlocked: false
  },
  {
    id: 31,
    name: "Hyper-Mémoire d’Imagination",
    description:
      "Se souvient de toutes les idées... même celles que tu as rêvées.",
    upgradeName: "Ultra-Rétro-Processeur Créatif",
    baseCost: 203000,
    baseInspirationPerSecond: 1200,
    upgradeInspirationPerSecond: 1340,
    quantity: 0,
    unlocked: false
  },
  {
    id: 32,
    name: "Cortex Synthétique Déchaîné",
    description: "Ne dort jamais. Ne doute jamais. Idées à volonté.",
    upgradeName: "Cortex Fusionnel Inépuisable",
    baseCost: 225000,
    baseInspirationPerSecond: 1340,
    upgradeInspirationPerSecond: 1490,
    quantity: 0,
    unlocked: false
  },
  {
    id: 33,
    name: "Méta-Générateur de Conscience",
    description: "Il pense aux idées que les idées auraient eues.",
    upgradeName: "Hyper-Conscience Créative",
    baseCost: 248000,
    baseInspirationPerSecond: 1490,
    upgradeInspirationPerSecond: 1650,
    quantity: 0,
    unlocked: false
  },
  {
    id: 34,
    name: "Forge Cosmique d’Idées",
    description: "Martèle des pensées dans le vide stellaire.",
    upgradeName: "Forge de Concepts Étoilés",
    baseCost: 272000,
    baseInspirationPerSecond: 1650,
    upgradeInspirationPerSecond: 1820,
    quantity: 0,
    unlocked: false
  },
  {
    id: 35,
    name: "Trou Noir Créatif",
    description: "Aspire tout et recrache de la pure invention.",
    upgradeName: "Singularité Inspiratrice",
    baseCost: 297000,
    baseInspirationPerSecond: 1820,
    upgradeInspirationPerSecond: 2000,
    quantity: 0,
    unlocked: false
  },
  {
    id: 36,
    name: "Arche d’Inspiration Pure",
    description: "Protège et conserve les meilleures idées de l’univers.",
    upgradeName: "Arche d’Essence Créative",
    baseCost: 323000,
    baseInspirationPerSecond: 2000,
    upgradeInspirationPerSecond: 2190,
    quantity: 0,
    unlocked: false
  },
  {
    id: 37,
    name: "Entité Rêvante Multidimensionnelle",
    description: "Elle rêve donc elle crée. Et elle rêve beaucoup.",
    upgradeName: "Entité Visionnaire Totale",
    baseCost: 350000,
    baseInspirationPerSecond: 2190,
    upgradeInspirationPerSecond: 2390,
    quantity: 0,
    unlocked: false
  },
  {
    id: 38,
    name: "Volcan à Idées Liquides",
    description: "Éruption constante d’imagination bouillante.",
    upgradeName: "Supervolcan Conceptuel",
    baseCost: 378000,
    baseInspirationPerSecond: 2390,
    upgradeInspirationPerSecond: 2600,
    quantity: 0,
    unlocked: false
  },
  {
    id: 39,
    name: "Matrioshka de Concepts",
    description: "Chaque idée en contient mille autres.",
    upgradeName: "Mégamatrioshka Mentale",
    baseCost: 407000,
    baseInspirationPerSecond: 2600,
    upgradeInspirationPerSecond: 2820,
    quantity: 0,
    unlocked: false
  },
  {
    id: 40,
    name: "Dieu Païen de l’Idée Géniale",
    description: "On ne sait pas s’il existe. Mais ses idées oui.",
    upgradeName: "Divinité de l’Inspiration Absolue",
    baseCost: 437000,
    baseInspirationPerSecond: 2820,
    upgradeInspirationPerSecond: 3050,
    quantity: 0,
    unlocked: false
  },
  {
    id: 41,
    name: "Singularité Créative",
    description: "Toutes les idées. Une seule pensée.",
    upgradeName: "HyperSingularité des Concepts",
    baseCost: 468000,
    baseInspirationPerSecond: 3050,
    upgradeInspirationPerSecond: 3290,
    quantity: 0,
    unlocked: false
  },
  {
    id: 42,
    name: "Esprit Universel de l’Imagination",
    description: "Tu penses à lui, il t’a déjà imaginé.",
    upgradeName: "Esprit Multiversel Créatif",
    baseCost: 500000,
    baseInspirationPerSecond: 3290,
    upgradeInspirationPerSecond: 3540,
    quantity: 0,
    unlocked: false
  },
  {
    id: 43,
    name: "Mémoire Akashique Numérique",
    description: "Contient chaque idée jamais pensée. En cache.",
    upgradeName: "Archive Akashique Optimisée",
    baseCost: 533000,
    baseInspirationPerSecond: 3540,
    upgradeInspirationPerSecond: 3800,
    quantity: 0,
    unlocked: false
  },
  {
    id: 44,
    name: "Pensée Pure Informatique",
    description: "Un flux d’idées sans bugs. Ou presque.",
    upgradeName: "Équation d’Idée Parfaite",
    baseCost: 567000,
    baseInspirationPerSecond: 3800,
    upgradeInspirationPerSecond: 4070,
    quantity: 0,
    unlocked: false
  },
  {
    id: 45,
    name: "Origine des Concepts",
    description: "C’est ici que tout a commencé. Même toi.",
    upgradeName: "Big Bang des Idées",
    baseCost: 602000,
    baseInspirationPerSecond: 4070,
    upgradeInspirationPerSecond: 4350,
    quantity: 0,
    unlocked: false
  },
  {
    id: 46,
    name: "Big Bang Créatif",
    description: "L’idée initiale de toutes les idées.",
    upgradeName: "Big Crunch Conceptuel",
    baseCost: 638000,
    baseInspirationPerSecond: 4350,
    upgradeInspirationPerSecond: 4650,
    quantity: 0,
    unlocked: false
  }
];

export default GeneratorsData;
