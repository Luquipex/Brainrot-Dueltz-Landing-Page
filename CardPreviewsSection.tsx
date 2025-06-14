import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cardData, rarityConfig } from "@/data/cardData";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/data/translations";
const cardBackImage = "/assets/Reverse cards_1749407177141.jpeg";

const CardPreviewsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showAllCards, setShowAllCards] = useState(false);

  // Organize cards by categories
  const legendaryCards = cardData.filter(card => card.rarity === 'Mythic');
  const epicCards = cardData.filter(card => card.rarity === 'Rare');
  const commonCards = cardData.filter(card => card.rarity === 'Common' || card.rarity === 'Uncommon');
  
  // Group common cards by domain
  const commonCardsByDomain = {
    Chaos: commonCards.filter(card => card.domain === 'Chaos'),
    Order: commonCards.filter(card => card.domain === 'Order'),
    Void: commonCards.filter(card => card.domain === 'Void'),
    Creation: commonCards.filter(card => card.domain === 'Creation'),
    Nonsense: commonCards.filter(card => card.domain === 'Nonsense')
  };

  const showMoreCards = () => {
    console.log('Expanding cards view...');
    setShowAllCards(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const CardPlaceholder = ({ opacity = 1 }: { opacity?: number }) => (
    <motion.div 
      className="card cursor-pointer"
      variants={itemVariants}
      style={{ opacity }}
    >
      <div className="card-inner relative aspect-[3/4] w-full max-w-sm mx-auto">
        <div className="card-front absolute w-full h-full rounded-xl shadow-lg">
          <img 
            src={cardBackImage}
            alt="Card Back"
            className="w-full h-full object-contain bg-black rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );

  const CardComponent = ({ card }: { card: typeof cardData[0] }) => {
    const rarity = rarityConfig[card.rarity];
    return (
      <motion.div 
        className="card cursor-pointer"
        variants={itemVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        <div className="card-inner relative aspect-[3/4] w-full max-w-sm mx-auto">
          <div className="card-front absolute w-full h-full rounded-xl shadow-lg overflow-hidden">
            <img 
              src={card.image}
              alt={card.name}
              className="w-full h-full object-contain bg-black rounded-xl"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div 
              className="w-full h-full rounded-xl p-1 hidden"
              style={{ background: rarity.gradient }}
            >
              <div className="h-full w-full rounded-lg bg-card-texture bg-cover bg-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark/90"></div>
                <div className="absolute bottom-0 w-full p-4">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-1">{card.name}</h3>
                  <p className="text-xs text-gray-200">{card.description[language]}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-back absolute w-full h-full rounded-xl shadow-lg">
            <img 
              src={cardBackImage}
              alt="Card Back"
              className="w-full h-full object-contain bg-black rounded-xl"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/80 to-dark border border-primary/30 overflow-hidden relative flex-col items-center justify-center hidden">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                <span className="text-4xl font-orbitron font-bold">BD</span>
              </div>
              <h3 className="font-orbitron text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BRAINROT DUELTZ™
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                {language === 'en' ? 'Collect. Duel. Evolve.' : 'Colecciona. Duelo. Evoluciona.'}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="cards" className="section-padding container-spacing bg-gradient-to-b from-dark via-gray-900 to-darker overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-white relative">
            <span className="relative">
              {t.cards.title.split(' ').map((word, index) => (
                <span key={index} className={index === 1 ? 'text-primary' : ''}>
                  {word}{index < t.cards.title.split(' ').length - 1 ? ' ' : ''}
                </span>
              ))}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
            </span>
          </h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {language === 'en' 
              ? "Discover our collection of Common, Rare, Epic, Legendary, and Brainrot cards!"
              : "¡Descubre nuestra colección de cartas Comunes, Raras, Épicas, Legendarias y Brainrot!"
            }
          </motion.p>
        </motion.div>
        
        {/* Legendary Cards Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={`legendary-${showAllCards}`}
        >
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent text-glow">
              {language === 'en' ? 'Legendary Cards' : 'Cartas Legendarias'}
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {!showAllCards ? (
              <>
                {legendaryCards.slice(0, 1).map((card) => (
                  <CardComponent key={card.id} card={card} />
                ))}
                <CardPlaceholder opacity={0.7} />
                <CardPlaceholder opacity={0.7} />
              </>
            ) : (
              <>
                {legendaryCards.map((card) => (
                  <CardComponent key={card.id} card={card} />
                ))}
                {/* Add placeholder cards for missing legendary designs */}
                {Array.from({ length: Math.max(0, 6 - legendaryCards.length) }).map((_, index) => (
                  <CardPlaceholder key={`legendary-expanded-${index}`} opacity={0.6} />
                ))}
              </>
            )}
          </div>
        </motion.div>

        {/* Epic Cards Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={`epic-${showAllCards}`}
        >
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent text-glow">
              {language === 'en' ? 'Epic Cards' : 'Cartas Épicas'}
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {!showAllCards ? (
              <>
                {epicCards.slice(0, 1).map((card) => (
                  <CardComponent key={card.id} card={card} />
                ))}
                <CardPlaceholder opacity={0.7} />
                <CardPlaceholder opacity={0.7} />
              </>
            ) : (
              <>
                {epicCards.map((card) => (
                  <CardComponent key={card.id} card={card} />
                ))}
                {/* Add placeholder cards for missing epic designs */}
                {Array.from({ length: Math.max(0, 6 - epicCards.length) }).map((_, index) => (
                  <CardPlaceholder key={`epic-expanded-${index}`} opacity={0.6} />
                ))}
              </>
            )}
          </div>
        </motion.div>

        {/* Common Cards Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={`common-${showAllCards}`}
        >
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent text-glow">
              {language === 'en' ? 'Common Cards' : 'Cartas Comunes'}
            </span>
          </h3>
          
          {!showAllCards ? (
            // Show only one common card initially
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {commonCards.slice(0, 1).map((card) => (
                <CardComponent key={card.id} card={card} />
              ))}
              <CardPlaceholder opacity={0.7} />
              <CardPlaceholder opacity={0.7} />
            </div>
          ) : (
            // Show all cards organized by domain when expanded
            <div className="space-y-12">
              {Object.entries(commonCardsByDomain).map(([domain, cards]) => (
                <div key={domain} className="mb-12">
                  <h4 className="text-xl font-orbitron font-bold text-center mb-6">
                    <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                      {domain}
                    </span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cards.map((card) => (
                      <CardComponent key={card.id} card={card} />
                    ))}
                    {/* Add placeholder cards for missing designs */}
                    {Array.from({ length: Math.max(0, 9 - cards.length) }).map((_, index) => (
                      <CardPlaceholder key={`${domain}-placeholder-${index}`} opacity={0.6} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Rare Cards Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              <span className="text-secondary">Rare</span> Cards 
              <span className="text-gray-400 text-lg ml-3">(Coming Soon)</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {language === 'en' 
                ? "Discover rare cards with unique reverse designs and enhanced abilities."
                : "Descubre cartas raras con diseños de reverso únicos y habilidades mejoradas."
              }
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((index) => (
              <CardPlaceholder key={`rare-${index}`} opacity={0.7} />
            ))}
          </motion.div>
        </motion.div>

        {/* Brainrot Cards Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              <span className="text-accent">Brainrot</span> Cards 
              <span className="text-gray-400 text-lg ml-3">(Coming Soon)</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {language === 'en' 
                ? "The ultimate rarity tier featuring the most powerful and chaotic cards in the game."
                : "El nivel de rareza definitivo con las cartas más poderosas y caóticas del juego."
              }
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[1, 2].map((index) => (
              <CardPlaceholder key={`brainrot-${index}`} opacity={0.5} />
            ))}
          </motion.div>
        </motion.div>

        {!showAllCards && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              onClick={showMoreCards}
              className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-8 rounded-lg font-orbitron text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              {language === 'en' ? 'See More Cards' : 'Ver Más Cartas'}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CardPreviewsSection;