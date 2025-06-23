// Card Database - Organized by detailed rarity and type structure

// Card Back Design
export const CARD_BACK_IMAGE = "/cards/cards.back_1750608006666.jpg";

export interface Card {
  id: number;
  name: string;
  power?: number;
  defense?: number;
  type: "Character" | "Object" | "Scenario";
  subtype?: string; // For characters: Cultural, Tecnoide, Astral, Místico, Orgánico, Evolution, Fusion
  domain: "Cultural" | "Tecnoide" | "Astral" | "Místico" | "Orgánico" | "Evolution" | "Fusion" | "Common" | "Epic" | "Legendary";
  rarity: "Common" | "Rare" | "Epic" | "Legendary" | "Brainrot";
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
  available: boolean; // Track if card is available or coming soon
}

export const cardData: Card[] = [
  // COMMON CARDS - Characters: Cultural Domain
  {
    id: 1,
    name: "Ballerina Capuchina",
    power: 350,
    defense: 41,
    type: "Character",
    subtype: "Cultural",
    domain: "Cultural",
    rarity: "Common",
    description: {
      en: "A graceful coffee cup ballerina with the power to revive fallen allies.",
      es: "Una grácil bailarina de taza de café con el poder de revivir aliados caídos."
    },
    abilities: {
      en: ["Last Act: Revives Capuchino Assasino on death if previously played"],
      es: ["Último Acto: Revive a Capuchino Assasino al morir si se jugó previamente"]
    },
    image: "/cards/common-character-cultural- Ballerina Capuchina_1750608006670.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#001/500",
    available: true
  },
  {
    id: 2,
    name: "Bombrito Bandito",
    power: 480,
    defense: 37,
    type: "Character",
    subtype: "Cultural",
    domain: "Cultural",
    rarity: "Common",
    description: {
      en: "A mafia beaver that reduces all opponent attacks with criminal influence.",
      es: "Un castor mafioso que reduce todos los ataques del oponente con influencia criminal."
    },
    abilities: {
      en: ["Mafia: All opponent's attacks are reduced -200"],
      es: ["Mafia: Todos los ataques del oponente se reducen -200"]
    },
    image: "/cards/common-character-cultural- Bombrito Bandito_1750608006672.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#002/500",
    available: true
  },
  {
    id: 3,
    name: "Boneca Ambalabu",
    power: 640,
    defense: 55,
    type: "Character",
    subtype: "Cultural",
    domain: "Cultural",
    rarity: "Common",
    description: {
      en: "A tire-bodied frog that attacks first against flying opponents.",
      es: "Una rana con cuerpo de neumático que ataca primero contra oponentes voladores."
    },
    abilities: {
      en: ["Ground Speed: Attack first if the opponent is a flyer"],
      es: ["Velocidad Terrestre: Ataca primero si el oponente vuela"]
    },
    image: "/cards/common-character-cultural- Boneca Ambalabu_1750608006673.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#003/500",
    available: true
  },
  {
    id: 4,
    name: "Bri Bri Bicus Dicus",
    power: 170,
    defense: 50,
    type: "Character",
    subtype: "Cultural",
    domain: "Cultural",
    rarity: "Common",
    description: {
      en: "A Roman centurion bird that silences all enemy abilities.",
      es: "Un pájaro centurión romano que silencia todas las habilidades enemigas."
    },
    abilities: {
      en: ["Open Microphone: All active characters lose their skills"],
      es: ["Micrófono Abierto: Todos los personajes activos pierden sus habilidades"]
    },
    image: "/cards/common-character-cultural- Bri Bri Bicus Dicus_1750608006674.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#004/500",
    available: true
  },
  {
    id: 5,
    name: "Capuchino Assasino",
    power: 400,
    defense: 41,
    type: "Character",
    subtype: "Cultural",
    domain: "Cultural",
    rarity: "Common",
    description: {
      en: "A ninja coffee cup with viral sword techniques that grow stronger with cultural allies.",
      es: "Una taza de café ninja con técnicas de espada viral que se fortalecen con aliados culturales."
    },
    abilities: {
      en: ["Viral Sword: Inflicts 300 direct + 100 if another cultural card is active"],
      es: ["Espada Viral: Inflige 300 directo + 100 si otra carta cultural está activa"]
    },
    image: "/cards/common-character-cultural- Capuchino Assasino_1750608006675.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#005/500",
    available: true
  },
  {
    id: 6,
    name: "Frigo Camelo",
    power: 450,
    defense: 30,
    type: "Character",
    subtype: "Cultural",
    domain: "Cultural",
    rarity: "Common",
    description: {
      en: "A camel-refrigerator hybrid that can freeze opponents and attack again.",
      es: "Un híbrido camello-refrigerador que puede congelar oponentes y atacar de nuevo."
    },
    abilities: {
      en: ["Freezer: Freezes the opponent's turn, attacks again"],
      es: ["Congelador: Congela el turno del oponente, ataca de nuevo"]
    },
    image: "/cards/common-character-cultural- Frigo Camelo_1750608006677.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#006/500",
    available: true
  },
  {
    id: 7,
    name: "Spijuniro Golubiro",
    power: 180,
    defense: 36,
    type: "Character",
    subtype: "Cultural",
    domain: "Cultural",
    rarity: "Common",
    description: {
      en: "A spy pigeon photographer that reveals opponent's secrets when destroyed.",
      es: "Una paloma espía fotógrafa que revela los secretos del oponente cuando es destruida."
    },
    abilities: {
      en: ["Final Code: If destroyed, reveals the opponent's deck for 1 round"],
      es: ["Código Final: Si es destruido, revela la baraja del oponente por 1 ronda"]
    },
    image: "/cards/common-character-cultural- Spijuniro Golubiro_1750608006678.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#007/500",
    available: true
  },
  {
    id: 8,
    name: "Tralalero Tralala",
    power: 650,
    defense: 65,
    type: "Character",
    subtype: "Cultural",
    domain: "Cultural",
    rarity: "Common",
    description: {
      en: "A shark runner that copies opponent abilities when entering the game.",
      es: "Un tiburón corredor que copia habilidades del oponente al entrar al juego."
    },
    abilities: {
      en: ["Chaotic Remix: Copies the opponent's ability when entering the game"],
      es: ["Remix Caótico: Copia la habilidad del oponente al entrar al juego"]
    },
    image: "/cards/common-character-cultural- Tralalero Tralala_1750608006679.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#008/500",
    available: true
  },
  // COMMON CARDS - Characters: Astral Domain
  {
    id: 9,
    name: "Vaca Saturno Saturnita",
    power: 500,
    defense: 25,
    type: "Character",
    subtype: "Astral",
    domain: "Astral",
    rarity: "Common",
    description: {
      en: "A cosmic cow with Saturn rings that evades the first enemy attack every fight.",
      es: "Una vaca cósmica con anillos de Saturno que evade el primer ataque enemigo en cada pelea."
    },
    abilities: {
      en: ["Astral Mist: Evade the first enemy attack every fight"],
      es: ["Niebla Astral: Evade el primer ataque enemigo en cada pelea"]
    },
    image: "/cards/common-character-astral- Vaca Saturno Saturnita_1750353785881.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#009/500",
    available: true
  },
  {
    id: 10,
    name: "Giraffa Celeste",
    power: 500,
    defense: 25,
    type: "Character",
    subtype: "Astral",
    domain: "Astral",
    rarity: "Common",
    description: {
      en: "A celestial giraffe with watermelon body that transfers energy to allies when dying.",
      es: "Una jirafa celestial con cuerpo de sandía que transfiere energía a aliados al morir."
    },
    abilities: {
      en: ["Planetary Alignment: When dying, transfer 300 AURA to the next ally"],
      es: ["Alineación Planetaria: Al morir, transfiere 300 AURA al siguiente aliado"]
    },
    image: "/cards/common-character-cultural-Giraffa Celeste_1750353785889.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#010/500",
    available: true
  },
  // COMMON CARDS - Characters: Tecnoide Domain
  {
    id: 18,
    name: "Bombardiro Croccodilo",
    power: 800,
    defense: 60,
    type: "Character",
    subtype: "Tecnoide",
    domain: "Tecnoide",
    rarity: "Common",
    description: {
      en: "A mechanized crocodile plane that deals massive damage to itself and enemies.",
      es: "Un avión cocodrilo mecanizado que inflige daño masivo a sí mismo y enemigos."
    },
    abilities: {
      en: ["Final Blast: When attacking, inflicts 800 to enemy and 400 to himself"],
      es: ["Explosión Final: Al atacar, inflige 800 al enemigo y 400 a sí mismo"]
    },
    image: "/cards/common-character-technoid- Bombardiro Crocodilo_1750608065781.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#018/500",
    available: true
  },
  {
    id: 19,
    name: "Bombinarium Nerpinarium",
    power: 700,
    defense: 60,
    type: "Character",
    subtype: "Tecnoide",
    domain: "Tecnoide",
    rarity: "Common",
    description: {
      en: "A seal-plane hybrid that grows stronger with each round survived.",
      es: "Un híbrido foca-avión que se vuelve más fuerte con cada ronda que sobrevive."
    },
    abilities: {
      en: ["Overcharge System: Gains +100 attack for each round he remains alive"],
      es: ["Sistema de Sobrecarga: Gana +100 ataque por cada ronda que permanece vivo"]
    },
    image: "/cards/common-character-technoid- Bombinarium Nerpinarium_1750608065782.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#019/500",
    available: true
  },
  {
    id: 20,
    name: "Bombombini Gusini",
    power: 700,
    defense: 60,
    type: "Character",
    subtype: "Tecnoide",
    domain: "Tecnoide",
    rarity: "Common",
    description: {
      en: "A goose-plane that enhances technoid allies' damage output.",
      es: "Un ganso-avión que mejora la producción de daño de aliados tecnoides."
    },
    abilities: {
      en: ["Algorithmic Combo: If a technoid ally has already attacked, it deals +200 damage"],
      es: ["Combo Algorítmico: Si un aliado tecnoide ya atacó, inflige +200 daño"]
    },
    image: "/cards/common-character-technoid- Bombombini Gusini_1750608065783.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#020/500",
    available: true
  },
  // COMMON CARDS - Characters: Místico Domain
  {
    id: 21,
    name: "Brr Brr Patapim",
    power: 670,
    defense: 35,
    type: "Character",
    subtype: "Místico",
    domain: "Místico",
    rarity: "Common",
    description: {
      en: "A tree-footed mystic that regenerates AURA when inactive.",
      es: "Un místico con pies de árbol que regenera AURA cuando está inactivo."
    },
    abilities: {
      en: ["Cyclic Trance: Restores 600 AURA if inactive for one turn"],
      es: ["Trance Cíclico: Restaura 600 AURA si está inactivo por un turno"]
    },
    image: "/cards/common-character-mystical- Brr Brr Patapim_1750608065771.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#021/500",
    available: true
  },
  {
    id: 22,
    name: "Lirili Larila",
    power: 600,
    defense: 35,
    type: "Character",
    subtype: "Místico",
    domain: "Místico",
    rarity: "Common",
    description: {
      en: "A cactus-elephant that continues to inflict damage even after death.",
      es: "Un elefante-cactus que continúa infligiendo daño incluso después de la muerte."
    },
    abilities: {
      en: ["Timeless Damage: Inflicts half damage after death"],
      es: ["Daño Atemporal: Inflige la mitad del daño después de la muerte"]
    },
    image: "/cards/common-character-mystical- Lirili Larila_1750608065772.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#022/500",
    available: true
  },
  {
    id: 23,
    name: "Tum Tum Sahur",
    power: 750,
    defense: 30,
    type: "Character",
    subtype: "Místico",
    domain: "Místico",
    rarity: "Common",
    description: {
      en: "A mystical wooden figure that can foresee and rearrange opponent's moves.",
      es: "Una figura mística de madera que puede prever y reorganizar los movimientos del oponente."
    },
    abilities: {
      en: ["Immutable Omen: See and reorder the opponent's next card"],
      es: ["Presagio Inmutable: Ve y reordena la próxima carta del oponente"]
    },
    image: "/cards/common-character-mystical- Tum Tum Sahur_1750608065773.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#023/500",
    available: true
  },
  // COMMON CARDS - Characters: Orgánico Domain
  {
    id: 12,
    name: "Burbaloni Luliloli",
    power: 380,
    defense: 30,
    type: "Character",
    subtype: "Orgánico",
    domain: "Orgánico",
    rarity: "Common",
    description: {
      en: "A coconut capybara that absorbs opponent's energy each turn.",
      es: "Una capibara de coco que absorbe la energía del oponente cada turno."
    },
    abilities: {
      en: ["Vital Sponge: Absorbs 200 of the opponent's AURA each turn"],
      es: ["Esponja Vital: Absorbe 200 del AURA del oponente cada turno"]
    },
    image: "/cards/common-character-organic- Burbaloni Luliloni_1750608065774.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#012/500",
    available: true
  },
  {
    id: 13,
    name: "Chimpanzini Bananini",
    power: 620,
    defense: 40,
    type: "Character",
    subtype: "Orgánico",
    domain: "Orgánico",
    rarity: "Common",
    description: {
      en: "A banana monkey that returns damage to attackers.",
      es: "Un mono plátano que devuelve daño a los atacantes."
    },
    abilities: {
      en: ["Simian Counterattack: Returns 50% of the damage received"],
      es: ["Contraataque Simio: Devuelve el 50% del daño recibido"]
    },
    image: "/cards/common-character-organic- Chimpanzini Bananini_1750608065776.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#013/500",
    available: true
  },
  {
    id: 14,
    name: "Glorbo Fruttodrillo",
    power: 500,
    defense: 40,
    type: "Character",
    subtype: "Orgánico",
    domain: "Orgánico",
    rarity: "Common",
    description: {
      en: "A watermelon crocodile that recovers energy when defeating enemies.",
      es: "Un cocodrilo sandía que recupera energía al derrotar enemigos."
    },
    abilities: {
      en: ["Voracious Recovery: Recovers 300 AURA when defeating an enemy"],
      es: ["Recuperación Voraz: Recupera 300 AURA al derrotar un enemigo"]
    },
    image: "/cards/common-character-organic- Glorbo Fruttodrillo_1750608065777.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#014/500",
    available: true
  },
  {
    id: 15,
    name: "Trippi Troppi",
    power: 580,
    defense: 60,
    type: "Character",
    subtype: "Orgánico",
    domain: "Orgánico",
    rarity: "Common",
    description: {
      en: "A cat-shrimp hybrid that grows stronger with each enemy damaged.",
      es: "Un híbrido gato-camarón que se fortalece con cada enemigo dañado."
    },
    abilities: {
      en: ["Chaotic Fermentation: Gain +100 attack each time you damage an enemy"],
      es: ["Fermentación Caótica: Gana +100 ataque cada vez que dañas un enemigo"]
    },
    image: "/cards/common-character-organic- Trippi Troppa_1750608065778.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#015/500",
    available: true
  },
  {
    id: 16,
    name: "Troppa Trippa",
    power: 580,
    defense: 35,
    type: "Character",
    subtype: "Orgánico",
    domain: "Orgánico",
    rarity: "Common",
    description: {
      en: "A fish-monkey that can revive its companion before dying.",
      es: "Un pez-mono que puede revivir a su compañero antes de morir."
    },
    abilities: {
      en: ["Parallel Reality: If Trippi Troppi is in the deck, revive him before this one dies"],
      es: ["Realidad Paralela: Si Trippi Troppi está en la baraja, revívelo antes de que este muera"]
    },
    image: "/cards/common-character-organic-Troppi Trippa_1750608065780.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#016/500",
    available: true
  },
  {
    id: 17,
    name: "Trulimero Trulicina",
    power: 520,
    defense: 65,
    type: "Character",
    subtype: "Orgánico",
    domain: "Orgánico",
    rarity: "Common",
    description: {
      en: "A fish-cat that can revive with organic allies' help.",
      es: "Un pez-gato que puede revivir con la ayuda de aliados orgánicos."
    },
    abilities: {
      en: ["Fast Reproduction: Can revive with 500 AURA if another organic is active"],
      es: ["Reproducción Rápida: Puede revivir con 500 AURA si otro orgánico está activo"]
    },
    image: "/cards/common-character-organic- Trulimero Trulicina_1750608065779.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#017/500",
    available: true
  },
  // COMMON CARDS - Objects
  {
    id: 24,
    name: "Super Sneakers",
    type: "Object",
    domain: "Common",
    rarity: "Common",
    description: {
      en: "Futuristic sneakers that enhance cultural characters' speed and abilities.",
      es: "Zapatillas futuristas que mejoran la velocidad y habilidades de personajes culturales."
    },
    abilities: {
      en: ["Double the speed of your cultural characters. If a culture character died, and this card is in play, the next culture character may adopt both, the attack and speed, of his or her defeated partner."],
      es: ["Duplica la velocidad de tus personajes culturales. Si un personaje cultural murió y esta carta está en juego, el siguiente personaje cultural puede adoptar tanto el ataque como la velocidad de su compañero derrotado."]
    },
    image: "/cards/common-object- Super Sneakers_1750608309981.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#024/500",
    available: true
  },
  {
    id: 25,
    name: "Timeless Clock",
    type: "Object",
    domain: "Common",
    rarity: "Common",
    description: {
      en: "A surreal melting clock that manipulates time for mystical and organic characters.",
      es: "Un reloj surrealista que se derrite y manipula el tiempo para personajes místicos y orgánicos."
    },
    abilities: {
      en: ["Alters the turn of mystical or organic characters (once). Mystic characters attack twice if their Aura is halved (once)."],
      es: ["Altera el turno de personajes místicos u orgánicos (una vez). Los personajes místicos atacan dos veces si su Aura se reduce a la mitad (una vez)."]
    },
    image: "/cards/common-object- Timeless Clock_1750608309983.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#025/500",
    available: true
  },
  {
    id: 26,
    name: "Slim",
    type: "Object",
    domain: "Common",
    rarity: "Common",
    description: {
      en: "A mystical frog that provides protection and speed boost to mystical characters.",
      es: "Una rana mística que proporciona protección y aumento de velocidad a personajes místicos."
    },
    abilities: {
      en: ["If any version of Brr Brr Patapim is in play, avoid the last lethal attack received, then attacks and dies. If this card is in play, it increases by +10 the speed of all mystical characters in your hand."],
      es: ["Si cualquier versión de Brr Brr Patapim está en juego, evita el último ataque letal recibido, luego ataca y muere. Si esta carta está en juego, aumenta en +10 la velocidad de todos los personajes místicos en tu mano."]
    },
    image: "/cards/common-object- Slim_1750608309979.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#026/500",
    available: true
  },
  // COMMON CARDS - Scenarios
  {
    id: 27,
    name: "Endless Desert",
    type: "Scenario",
    domain: "Common",
    rarity: "Common",
    description: {
      en: "A vast desert landscape that provides mystical characters protection from organic attacks.",
      es: "Un vasto paisaje desértico que proporciona a los personajes místicos protección contra ataques orgánicos."
    },
    abilities: {
      en: ["All your mystic characters receive 200 less damage in Aura points from organic characters. If any version of Lirili Larila is active in the game, it always attack first."],
      es: ["Todos tus personajes místicos reciben 200 puntos menos de daño en Aura de personajes orgánicos. Si cualquier versión de Lirili Larila está activa en el juego, siempre ataca primero."]
    },
    image: "/cards/common-scenario- Endless Dessert_1750608309984.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#027/500",
    available: true
  },
  {
    id: 28,
    name: "High-tech Centre",
    type: "Scenario",
    domain: "Common",
    rarity: "Common",
    description: {
      en: "A futuristic facility that enhances all technoid characters' capabilities.",
      es: "Una instalación futurista que mejora las capacidades de todos los personajes tecnoides."
    },
    abilities: {
      en: ["All stats (Aura, attack, and speed), of all your active technoid characters are increased by 200."],
      es: ["Todas las estadísticas (Aura, ataque y velocidad) de todos tus personajes tecnoides activos aumentan en 200."]
    },
    image: "/cards/common-scenario- High-tech Centre_1750608309986.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#028/500",
    available: true
  },
  {
    id: 29,
    name: "Milky Way",
    type: "Scenario",
    domain: "Common",
    rarity: "Common",
    description: {
      en: "A cosmic scenario that gives astral characters priority in combat.",
      es: "Un escenario cósmico que da prioridad a los personajes astrales en combate."
    },
    abilities: {
      en: ["Your Astral characters attack first if your card is active. (Takes priority over other speed boost cards)."],
      es: ["Tus personajes Astrales atacan primero si tu carta está activa. (Tiene prioridad sobre otras cartas de aumento de velocidad)."]
    },
    image: "/cards/common-scenario- Milky Way_1750608309987.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#029/500",
    available: true
  },
  // EPIC CARDS - Evolution Characters
  {
    id: 30,
    name: "Sahur Evolution lvl3",
    power: 1700,
    defense: 50,
    type: "Character",
    subtype: "Evolution",
    domain: "Evolution",
    rarity: "Epic",
    description: {
      en: "The ultimate evolution of Sahur, a wooden warrior with merciless revenge abilities.",
      es: "La evolución definitiva de Sahur, un guerrero de madera con habilidades de venganza despiadada."
    },
    abilities: {
      en: ["Merciless Revenge: Destroy any Bombardiro or Bombombini with one hit"],
      es: ["Venganza Despiadada: Destruye cualquier Bombardiro o Bombombini de un golpe"]
    },
    image: "/cards/Epic Character 2 _1750608450794.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#201/100",
    available: true
  },
  {
    id: 31,
    name: "Gold Tum Tum Sahur",
    power: 1400,
    defense: 70,
    type: "Character",
    subtype: "Evolution",
    domain: "Evolution",
    rarity: "Epic",
    description: {
      en: "A golden evolution of Tum Tum Sahur with protective sacred powers.",
      es: "Una evolución dorada de Tum Tum Sahur con poderes sagrados protectores."
    },
    abilities: {
      en: ["Sacred Glow: Reduce epic card attacks by half"],
      es: ["Resplandor Sagrado: Reduce los ataques de cartas épicas a la mitad"]
    },
    image: "/cards/Epic Character 1 _1750608450792.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#202/100",
    available: true
  },
  // EPIC CARDS - Fusion Characters
  {
    id: 32,
    name: "Bombardiro Tralala",
    power: 1200,
    defense: 70,
    type: "Character",
    subtype: "Fusion",
    domain: "Fusion",
    rarity: "Epic",
    description: {
      en: "A fusion of crocodile and human athleticism with powerful aura manipulation.",
      es: "Una fusión de cocodrilo y atletismo humano con poderosa manipulación de aura."
    },
    abilities: {
      en: ["Aura Debaser: If your enemy has more aura, it removes 1000 aura (1 use)"],
      es: ["Degradador de Aura: Si tu enemigo tiene más aura, elimina 1000 aura (1 uso)"]
    },
    image: "/cards/Epic Character 3 _1750608450795.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#203/100",
    available: true
  },
  {
    id: 33,
    name: "Bombombini Larila",
    power: 1000,
    defense: 69,
    type: "Character",
    subtype: "Fusion",
    domain: "Fusion",
    rarity: "Epic",
    description: {
      en: "A cactus-plane fusion with advanced tactical card manipulation abilities.",
      es: "Una fusión cactus-avión con habilidades avanzadas de manipulación táctica de cartas."
    },
    abilities: {
      en: ["Air Control: Exchanges an opponent's card with one of your 3 active cards"],
      es: ["Control Aéreo: Intercambia una carta del oponente con una de tus 3 cartas activas"]
    },
    image: "/cards/Epic Character 4 _1750608450796.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#204/100",
    available: true
  },
  {
    id: 34,
    name: "Brr Brr Assasino",
    power: 900,
    defense: 55,
    type: "Character",
    subtype: "Fusion",
    domain: "Fusion",
    rarity: "Epic",
    description: {
      en: "An assassin fusion with powerful counter-attack capabilities.",
      es: "Una fusión asesina con poderosas capacidades de contraataque."
    },
    abilities: {
      en: ["Shadow King: If the attack he receives is more powerful, he returns it"],
      es: ["Rey de las Sombras: Si el ataque que recibe es más poderoso, lo devuelve"]
    },
    image: "/cards/Epic Character 5 _1750608450798.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#205/100",
    available: true
  },
  {
    id: 35,
    name: "Frigo Camelo Sahur",
    power: 800,
    defense: 50,
    type: "Character",
    subtype: "Fusion",
    domain: "Fusion",
    rarity: "Epic",
    description: {
      en: "A camel-refrigerator fusion with time manipulation powers.",
      es: "Una fusión camello-refrigerador con poderes de manipulación temporal."
    },
    abilities: {
      en: ["Freezer: Freezes an opponent's turn"],
      es: ["Congelador: Congela el turno de un oponente"]
    },
    image: "/cards/Epic Character 6 _1750608450800.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#206/100",
    available: true
  },
  // EPIC CARDS - Scenarios
  {
    id: 36,
    name: "Sahur Village",
    type: "Scenario",
    domain: "Epic",
    rarity: "Epic",
    description: {
      en: "A mystical village that protects organic characters and weakens technoid attacks.",
      es: "Una aldea mística que protege a los personajes orgánicos y debilita los ataques tecnoides."
    },
    abilities: {
      en: ["Inhibits all technoid attacks for the first two rounds. After that, technoid attacks deal 25% less damage while this scenario is active. If organic-type characters are in play, they regain 50 health per round while in the village."],
      es: ["Inhibe todos los ataques tecnoides durante las dos primeras rondas. Después de eso, los ataques tecnoides infligen 25% menos daño mientras este escenario esté activo. Si hay personajes tipo orgánico en juego, recuperan 50 de salud por ronda mientras estén en la aldea."]
    },
    image: "/cards/Epic Scenario 1_1750608350858.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#301/50",
    available: true
  },
  // LEGENDARY CARDS - Characters
  {
    id: 37,
    name: "Chimpanchino Assasino",
    power: 1700,
    defense: 50,
    type: "Character",
    subtype: "Fusion",
    domain: "Fusion",
    rarity: "Legendary",
    description: {
      en: "The ultimate fusion of coffee culture and primate agility with strategic card manipulation.",
      es: "La fusión definitiva de cultura cafetera y agilidad simia con manipulación estratégica de cartas."
    },
    abilities: {
      en: ["Aesthetic Triumph: Draw a card from the enemy deck and add it to your hand"],
      es: ["Triunfo Estético: Roba una carta de la baraja enemiga y agrégala a tu mano"]
    },
    image: "/cards/Legendary Character 2_1750608450805.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#401/25",
    available: true
  },
  {
    id: 38,
    name: "Mystical Chimera",
    power: 2000,
    defense: 45,
    type: "Character",
    subtype: "Fusion",
    domain: "Fusion",
    rarity: "Legendary",
    description: {
      en: "The ultimate chimera fusion combining multiple powerful entities with legendary defensive abilities.",
      es: "La quimera fusión definitiva que combina múltiples entidades poderosas con habilidades defensivas legendarias."
    },
    abilities: {
      en: ["Legendary Combo: Receives only 500 damage from enemy attacks. Summons any of the characters that compose it as 4th card"],
      es: ["Combo Legendario: Recibe solo 500 daño de ataques enemigos. Invoca cualquiera de los personajes que lo componen como 4ta carta"]
    },
    image: "/cards/Legendary Character 1_1750608450803.jpg",
    artCredit: "Brainrot Studios",
    serialNumber: "#402/25",
    available: true
  }
];

// Rarity configuration for styling and display
export const rarityConfig = {
  Common: {
    name: { en: "Common", es: "Común" },
    gradient: "linear-gradient(135deg, #6B7280, #9CA3AF)",
    borderColor: "#6B7280",
    glowColor: "#9CA3AF",
    bgColor: "bg-gray-600"
  },
  Rare: {
    name: { en: "Rare", es: "Rara" },
    gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)",
    borderColor: "#3B82F6",
    glowColor: "#60A5FA", 
    bgColor: "bg-blue-600"
  },
  Epic: {
    name: { en: "Epic", es: "Épica" },
    gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
    borderColor: "#8B5CF6",
    glowColor: "#A78BFA",
    bgColor: "bg-purple-600"
  },
  Legendary: {
    name: { en: "Legendary", es: "Legendaria" },
    gradient: "linear-gradient(135deg, #F59E0B, #FCD34D)",
    borderColor: "#F59E0B", 
    glowColor: "#FCD34D",
    bgColor: "bg-yellow-600"
  },
  Brainrot: {
    name: { en: "Brainrot", es: "Brainrot" },
    gradient: "linear-gradient(135deg, #EF4444, #F87171)",
    borderColor: "#EF4444",
    glowColor: "#F87171",
    bgColor: "bg-red-600"
  }
};

// Helper functions for card organization
export const getCardsByRarity = (rarity: Card['rarity']) => {
  return cardData.filter(card => card.rarity === rarity);
};

export const getCardsByType = (type: Card['type'], rarity?: Card['rarity']) => {
  return cardData.filter(card => {
    const matchesType = card.type === type;
    const matchesRarity = rarity ? card.rarity === rarity : true;
    return matchesType && matchesRarity;
  });
};

export const getCardsByDomain = (domain: Card['domain']) => {
  return cardData.filter(card => card.domain === domain);
};

export const getAvailableCards = () => {
  return cardData.filter(card => card.available);
};

export const getComingSoonCards = (rarity: Card['rarity']) => {
  return cardData.filter(card => card.rarity === rarity && !card.available);
};