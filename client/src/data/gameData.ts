// Game Rules and Information
export const gameRules = {
  en: {
    title: "Game Rules",
    subtitle: "Master the Art of Brainrot Dueling",
    sections: [
      {
        title: "Objective",
        content: [
          "Defeat your opponent by reducing his Aura points to 0.",
          "Use strategy to place your characters in a convenient order, also taking advantage of scenario and item cards.",
          "Collect, trade, and prepare the most competitive deck!"
        ]
      },
      {
        title: "Preparation",
        content: [
          "Select a deck of 20 character cards and a deck of 10 item and scenario cards.",
          "Shuffle, and deal 6 characters, choose 3 of them. Then shuffle the scenario and item decks, deal 3, and choose 1.",
          "Choose the order, from left to right, in which you will play each card (face down).",
          "Place the chosen scenario or object to the right (face down)."
        ]
      },
      {
        title: "Start of the Game",
        content: [
          "Both players turn over their first character, with the fastest player attacking first.",
          "After the main attack, the turn passes to the opponent, and aura points are subtracted after each attack.",
          "Use the characters' abilities on the turn of your choice.",
          "Use the item's or scenario's ability at any time during the game.",
          "Some abilities can be used more than once and some influence the entire game."
        ]
      },
      {
        title: "Character Cards",
        content: [
          "Each card has 3 basic stats: Aura, attack and speed.",
          "Common cards are separated into 5 elemental domains: Cultural, Technoid, Astral, Mystic, and Organic. These domains interact with the item and scenario cards.",
          "When the character's aura reaches 0, the next character is activated."
        ]
      },
      {
        title: "Object and Scenario Cards",
        content: [
          "These cards have an influence on character cards, they can passively or actively alter stats, turns, elemental domains, even some rarities."
        ]
      },
      {
        title: "Winning the Game",
        content: [
          "Each character defeated, activates the next card, until you reach the third and final card in your hand.",
          "After the last character is defeated, the game ends."
        ]
      }
    ]
  },
  es: {
    title: "Reglas del Juego",
    subtitle: "Domina el Arte del Duelo Brainrot",
    sections: [
      {
        title: "Objetivo",
        content: [
          "Derrota a tu oponente reduciendo sus puntos de Aura a 0.",
          "Usa estrategia para colocar tus personajes en un orden conveniente, también aprovechando las cartas de escenario y objeto.",
          "¡Colecciona, intercambia y prepara el mazo más competitivo!"
        ]
      },
      {
        title: "Preparación",
        content: [
          "Selecciona un mazo de 20 cartas de personaje y un mazo de 10 cartas de objeto y escenario.",
          "Baraja y reparte 6 personajes, elige 3 de ellos. Luego baraja los mazos de escenario y objeto, reparte 3 y elige 1.",
          "Elige el orden, de izquierda a derecha, en el que jugarás cada carta (boca abajo).",
          "Coloca el escenario u objeto elegido a la derecha (boca abajo)."
        ]
      },
      {
        title: "Inicio del Juego",
        content: [
          "Ambos jugadores voltean su primer personaje, con el jugador más rápido atacando primero.",
          "Después del ataque principal, el turno pasa al oponente, y los puntos de aura se restan después de cada ataque.",
          "Usa las habilidades de los personajes en el turno de tu elección.",
          "Usa la habilidad del objeto o escenario en cualquier momento durante el juego.",
          "Algunas habilidades se pueden usar más de una vez y algunas influyen en todo el juego."
        ]
      },
      {
        title: "Cartas de Personaje",
        content: [
          "Cada carta tiene 3 estadísticas básicas: Aura, ataque y velocidad.",
          "Las cartas comunes se separan en 5 dominios elementales: Cultural, Tecnoide, Astral, Místico y Orgánico. Estos dominios interactúan con las cartas de objeto y escenario.",
          "Cuando el aura del personaje llega a 0, se activa el siguiente personaje."
        ]
      },
      {
        title: "Cartas de Objeto y Escenario",
        content: [
          "Estas cartas tienen influencia sobre las cartas de personaje, pueden alterar pasiva o activamente las estadísticas, turnos, dominios elementales, incluso algunas rarezas."
        ]
      },
      {
        title: "Ganar el Juego",
        content: [
          "Cada personaje derrotado activa la siguiente carta, hasta llegar a la tercera y última carta en tu mano.",
          "Después de que el último personaje es derrotado, el juego termina."
        ]
      }
    ]
  }
};

// Social Media Links (Easy to update)
export const socialLinks = {
  discord: "https://discord.gg/74hfeVp6",
  instagram: "https://instagram.com/brainrotdueltz",
  twitter: "https://twitter.com/brainrotdueltz",
  youtube: "https://youtube.com/@brainrotdueltz",
  tiktok: "https://tiktok.com/@brainrotdueltz"
};

// Brand Assets Configuration
export const brandAssets = {
  logo: {
    main: "/assets/logo/brainrot-logo.png",
    alt: "/assets/logo/brainrot-logo-dark.png",
    svg: "/assets/logo/brainrot-logo.svg",
    svgDark: "/assets/logo/brainrot-logo-dark.svg",
    icon: "/assets/logo/brainrot-logo.png"
  },
  backgrounds: {
    hero: "/assets/backgrounds/hero-bg.jpg",
    about: "/assets/backgrounds/about-bg.jpg"
  }
};

// Site Configuration (Easy updates)
export const siteConfig = {
  name: "BRAINROT DUELTZ™",
  tagline: "The Ultimate Meme Card Game",
  version: "1.0.0",
  launchDate: "2025-03-15", // Update this for countdown
  contact: {
    email: "hello@brainrotdueltz.com",
    support: "support@brainrotdueltz.com"
  },
  features: {
    totalCharacters: 200,
    powerDomains: 5,
    rarityLevels: 4
  }
};