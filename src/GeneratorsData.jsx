// ... premières entrées précédemment définies

const GeneratorsData = [
  // ... IDs 0 à 19 ici

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
