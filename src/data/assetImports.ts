// Production-ready asset imports for Vercel deployment
// All card images imported with proper Vite asset handling

// Card Back
import cardBack from "/cards/cards.back_1750608006666.jpg?url";

// Common Characters - Cultural Domain
import ballerina from "/cards/common-character-cultural- Ballerina Capuchina_1750608006670.jpg?url";
import bombrito from "/cards/common-character-cultural- Bombrito Bandito_1750608006672.jpg?url";
import boneca from "/cards/common-character-cultural- Boneca Ambalabu_1750608006673.jpg?url";
import bribri from "/cards/common-character-cultural- Bri Bri Bicus Dicus_1750608006674.jpg?url";
import capuchino from "/cards/common-character-cultural- Capuchino Assasino_1750608006675.jpg?url";
import frigo from "/cards/common-character-cultural- Frigo Camelo_1750608006677.jpg?url";
import spijuniro from "/cards/common-character-cultural- Spijuniro Golubiro_1750608006678.jpg?url";
import tralalero from "/cards/common-character-cultural- Tralalero Tralala_1750608006679.jpg?url";

// Common Characters - Mystical Domain
import brrbrr from "/cards/common-character-mystical- Brr Brr Patapim_1750608065771.jpg?url";
import lirili from "/cards/common-character-mystical- Lirili Larila_1750608065772.jpg?url";
import tumtum from "/cards/common-character-mystical- Tum Tum Sahur_1750608065773.jpg?url";

// Common Characters - Organic Domain
import burbaloni from "/cards/common-character-organic- Burbaloni Luliloni_1750608065774.jpg?url";
import chimpanzini from "/cards/common-character-organic- Chimpanzini Bananini_1750608065776.jpg?url";
import glorbo from "/cards/common-character-organic- Glorbo Fruttodrilo_1750608065777.jpg?url";
import trippi from "/cards/common-character-organic- Trippi Troppa_1750608065778.jpg?url";
import trulimero from "/cards/common-character-organic- Trulimero Trulicina_1750608065779.jpg?url";
import troppi from "/cards/common-character-organic-Troppi Trippa_1750608065780.jpg?url";

// Common Characters - Technoid Domain
import bombardiro from "/cards/common-character-technoid- Bombardiro Crocodilo_1750608065781.jpg?url";
import bombinarium from "/cards/common-character-technoid- Bombinarium Nerpinarium_1750608065782.jpg?url";
import bombombini from "/cards/common-character-technoid- Bombombini Gusini_1750608065783.jpg?url";

// Common Characters - Astral Domain
import giraffa from "/cards/common-character-astral- Giraffa Celeste_1750608006668.jpg?url";
import vaca from "/cards/common-character-astral- Vaca Saturno Saturnita_1750608006669.jpg?url";

// Common Objects
import slim from "/cards/common-object- Slim_1750608309979.jpg?url";
import sneakers from "/cards/common-object- Super Sneakers_1750608309981.jpg?url";
import clock from "/cards/common-object- Timeless Clock_1750608309983.jpg?url";

// Common Scenarios
import desert from "/cards/common-scenario- Endless Dessert_1750608309984.jpg?url";
import techCenter from "/cards/common-scenario- High-tech Centre_1750608309986.jpg?url";
import milkyWay from "/cards/common-scenario- Milky Way_1750608309987.jpg?url";

// Epic Characters
import epicChar1 from "/cards/Epic Character 1 _1750608450792.jpg?url";
import epicChar2 from "/cards/Epic Character 2 _1750608450794.jpg?url";
import epicChar3 from "/cards/Epic Character 3 _1750608450795.jpg?url";
import epicChar4 from "/cards/Epic Character 4 _1750608450796.jpg?url";
import epicChar5 from "/cards/Epic Character 5 _1750608450798.jpg?url";
import epicChar6 from "/cards/Epic Character 6 _1750608450800.jpg?url";

// Epic Scenario
import epicScenario1 from "/cards/Epic Scenario 1_1750608350858.jpg?url";

// Legendary Characters
import legendaryChar1 from "/cards/Legendary Character 1_1750608450803.jpg?url";
import legendaryChar2 from "/cards/Legendary Character 2_1750608450805.jpg?url";

// Asset mapping for card data - only includes current 39 cards
export const cardAssets: Record<string, string> = {
  // Card Back
  "cards.back_1750608006666.jpg": cardBack,
  
  // Common Characters - Cultural
  "common-character-cultural- Ballerina Capuchina_1750608006670.jpg": ballerina,
  "common-character-cultural- Bombrito Bandito_1750608006672.jpg": bombrito,
  "common-character-cultural- Boneca Ambalabu_1750608006673.jpg": boneca,
  "common-character-cultural- Bri Bri Bicus Dicus_1750608006674.jpg": bribri,
  "common-character-cultural- Capuchino Assasino_1750608006675.jpg": capuchino,
  "common-character-cultural- Frigo Camelo_1750608006677.jpg": frigo,
  "common-character-cultural- Spijuniro Golubiro_1750608006678.jpg": spijuniro,
  "common-character-cultural- Tralalero Tralala_1750608006679.jpg": tralalero,
  
  // Common Characters - Mystical
  "common-character-mystical- Brr Brr Patapim_1750608065771.jpg": brrbrr,
  "common-character-mystical- Lirili Larila_1750608065772.jpg": lirili,
  "common-character-mystical- Tum Tum Sahur_1750608065773.jpg": tumtum,
  
  // Common Characters - Organic
  "common-character-organic- Burbaloni Luliloni_1750608065774.jpg": burbaloni,
  "common-character-organic- Chimpanzini Bananini_1750608065776.jpg": chimpanzini,
  "common-character-organic- Glorbo Fruttodrilo_1750608065777.jpg": glorbo,
  "common-character-organic- Trippi Troppa_1750608065778.jpg": trippi,
  "common-character-organic- Trulimero Trulicina_1750608065779.jpg": trulimero,
  "common-character-organic-Troppi Trippa_1750608065780.jpg": troppi,
  
  // Common Characters - Technoid
  "common-character-technoid- Bombardiro Crocodilo_1750608065781.jpg": bombardiro,
  "common-character-technoid- Bombinarium Nerpinarium_1750608065782.jpg": bombinarium,
  "common-character-technoid- Bombombini Gusini_1750608065783.jpg": bombombini,
  
  // Common Characters - Astral
  "common-character-astral- Giraffa Celeste_1750608006668.jpg": giraffa,
  "common-character-astral- Vaca Saturno Saturnita_1750608006669.jpg": vaca,
  
  // Common Objects
  "common-object- Slim_1750608309979.jpg": slim,
  "common-object- Super Sneakers_1750608309981.jpg": sneakers,
  "common-object- Timeless Clock_1750608309983.jpg": clock,
  
  // Common Scenarios
  "common-scenario- Endless Dessert_1750608309984.jpg": desert,
  "common-scenario- High-tech Centre_1750608309986.jpg": techCenter,
  "common-scenario- Milky Way_1750608309987.jpg": milkyWay,
  
  // Epic Characters
  "Epic Character 1 _1750608450792.jpg": epicChar1,
  "Epic Character 2 _1750608450794.jpg": epicChar2,
  "Epic Character 3 _1750608450795.jpg": epicChar3,
  "Epic Character 4 _1750608450796.jpg": epicChar4,
  "Epic Character 5 _1750608450798.jpg": epicChar5,
  "Epic Character 6 _1750608450800.jpg": epicChar6,
  
  // Epic Scenario
  "Epic Scenario 1_1750608350858.jpg": epicScenario1,
  
  // Legendary Characters
  "Legendary Character 1_1750608450803.jpg": legendaryChar1,
  "Legendary Character 2_1750608450805.jpg": legendaryChar2,
};

// Function to get card asset with fallback
export function getCardAsset(imagePath: string): string {
  const fileName = imagePath.split('/').pop() || '';
  return cardAssets[fileName] || imagePath;
}