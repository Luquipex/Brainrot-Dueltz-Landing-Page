// Card Database - Easy to update with new designs
export interface Card {
  id: number;
  name: string;
  power: number;
  defense: number;
  domain: "Chaos" | "Order" | "Void" | "Creation" | "Nonsense";
  rarity: "Common" | "Uncommon" | "Rare" | "Mythic" | "Brainrot";
  description: {
    en: string;
    es: string;
  };
  abilities?: {
    en: string[];
    es: string[];
  };
  image: string;
  artCredit?: string;
  serialNumber?: string;
}

export const cardData: Card[] = [
  {
    id: 1,
    name: "Cultural Guardian",
    power: 8,
    defense: 6,
    domain: "Creation",
    rarity: "Mythic",
    description: {
      en: "Protector of ancient wisdom and cultural heritage.",
      es: "Protector de la sabiduría ancestral y el patrimonio cultural."
    },
    abilities: {
      en: ["When played: All Cultural cards gain +2/+2", "Cultural cards cannot be destroyed by spells"],
      es: ["Al jugar: Todas las cartas Culturales ganan +2/+2", "Las cartas Culturales no pueden ser destruidas por hechizos"]
    },
    image: "/assets/cards/cultural-design.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#001/100"
  },
  {
    id: 2,
    name: "Epic Warrior",
    power: 7,
    defense: 5,
    domain: "Order",
    rarity: "Rare",
    description: {
      en: "A legendary fighter from the epic tales of old.",
      es: "Un luchador legendario de los cuentos épicos de antaño."
    },
    abilities: {
      en: ["When attacking: Deal 2 damage to all enemy cards", "Cannot be blocked by Common rarity cards"],
      es: ["Al atacar: Inflige 2 de daño a todas las cartas enemigas", "No puede ser bloqueado por cartas de rareza Común"]
    },
    image: "/assets/cards/epic-design.jpg",
    serialNumber: "#045/300"
  },
  {
    id: 3,
    name: "Mythic Entity",
    power: 9,
    defense: 8,
    domain: "Void",
    rarity: "Mythic",
    description: {
      en: "An otherworldly being of immense power and mystery.",
      es: "Un ser de otro mundo de inmenso poder y misterio."
    },
    abilities: {
      en: ["Cannot be targeted by enemy abilities", "When destroyed: Return to hand instead"],
      es: ["No puede ser objetivo de habilidades enemigas", "Al ser destruido: Regresa a la mano en su lugar"]
    },
    image: "/assets/cards/mythic-design.jpg",
    serialNumber: "#003/100"
  },
  {
    id: 4,
    name: "Object Manipulator",
    power: 5,
    defense: 4,
    domain: "Creation",
    rarity: "Uncommon",
    description: {
      en: "Master of transforming everyday objects into powerful artifacts.",
      es: "Maestro en transformar objetos cotidianos en artefactos poderosos."
    },
    abilities: {
      en: ["When played: Transform target card into an Object token", "Object tokens have +1/+1"],
      es: ["Al jugar: Transforma una carta objetivo en una ficha de Objeto", "Las fichas de Objeto tienen +1/+1"]
    },
    image: "/assets/cards/object-design.jpg",
    serialNumber: "#234/500"
  },
  {
    id: 5,
    name: "Organic Symbiote",
    power: 6,
    defense: 7,
    domain: "Nonsense",
    rarity: "Rare",
    description: {
      en: "A living organism that adapts and evolves with each battle.",
      es: "Un organismo vivo que se adapta y evoluciona con cada batalla."
    },
    abilities: {
      en: ["Gains +1/+1 for each Organic card in play", "Can merge with other Organic cards"],
      es: ["Gana +1/+1 por cada carta Orgánica en juego", "Puede fusionarse con otras cartas Orgánicas"]
    },
    image: "/assets/cards/organic-design.jpg",
    serialNumber: "#156/300"
  },
  {
    id: 6,
    name: "Technoid Construct",
    power: 4,
    defense: 8,
    domain: "Order",
    rarity: "Common",
    description: {
      en: "A mechanical being designed for efficiency and precision.",
      es: "Un ser mecánico diseñado para la eficiencia y precisión."
    },
    abilities: {
      en: ["Shield: Absorbs first 3 damage each turn", "Can repair other Technoid cards"],
      es: ["Escudo: Absorbe los primeros 3 de daño cada turno", "Puede reparar otras cartas Tecnoides"]
    },
    image: "/assets/cards/technoid-design.jpg",
    serialNumber: "#789/1000"
  }
];

// Helper functions for easy card management
export const getCardsByDomain = (domain: Card['domain']) => 
  cardData.filter(card => card.domain === domain);

export const getCardsByRarity = (rarity: Card['rarity']) => 
  cardData.filter(card => card.rarity === rarity);

export const getCardById = (id: number) => 
  cardData.find(card => card.id === id);

// Rarity configurations for styling
export const rarityConfig = {
  Common: {
    color: "#A0A0A0",
    gradient: "linear-gradient(135deg, #A0A0A0, #808080)",
    borderColor: "#A0A0A0"
  },
  Uncommon: {
    color: "#30B057",
    gradient: "linear-gradient(135deg, #30B057, #228B22)",
    borderColor: "#30B057"
  },
  Rare: {
    color: "#3083DB",
    gradient: "linear-gradient(135deg, #3083DB, #1E90FF)",
    borderColor: "#3083DB"
  },
  Mythic: {
    color: "#D4AF37",
    gradient: "linear-gradient(135deg, #D4AF37, #FFD700)",
    borderColor: "#D4AF37"
  },
  Brainrot: {
    color: "#FF6B35",
    gradient: "linear-gradient(135deg, #FF6B35, #FF4500)",
    borderColor: "#FF6B35"
  }
};
