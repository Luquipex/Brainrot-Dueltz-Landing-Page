import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cardData, rarityConfig, getCardsByRarity, getCardsByType, CARD_BACK_IMAGE } from "@/data/cardData";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/data/translations";

// Enhanced Card Component with hover flip effect
const CardComponent = ({ card, language }: { card: typeof cardData[0], language: string }) => {
  return (
    <motion.div 
      className="card-container group cursor-pointer perspective-1000"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-flip relative w-full aspect-[3/4] transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
        {/* Card Front (default visible - clean design) */}
        <div className="card-front absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden">
          <img 
            src={card.image}
            alt={card.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        
        {/* Card Back (visible on hover) */}
        <div className="card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-lg overflow-hidden">
          <img 
            src={CARD_BACK_IMAGE}
            alt="Card Back"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

// Coming Soon Placeholder
const ComingSoonCard = ({ rarity, language }: { rarity: string, language: string }) => (
  <motion.div 
    className="coming-soon-card relative w-full aspect-[3/4] rounded-xl border-2 border-dashed border-gray-600 bg-gray-800/50 flex flex-col items-center justify-center text-center p-4"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-4xl mb-2">🔮</div>
    <h4 className="text-sm font-orbitron font-bold text-gray-300 mb-1">
      {language === 'en' ? 'Coming Soon' : 'Próximamente'}
    </h4>
    <p className="text-xs text-gray-400">
      {rarity} {language === 'en' ? 'Cards' : 'Cartas'}
    </p>
  </motion.div>
);

const CollectorSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Organize cards by rarity and availability
  const commonCards = getCardsByRarity("Common").filter(card => card.available);
  const rareCards = getCardsByRarity("Rare").filter(card => card.available);
  const epicCards = getCardsByRarity("Epic").filter(card => card.available);
  const legendaryCards = getCardsByRarity("Legendary").filter(card => card.available);
  const brainrotCards = getCardsByRarity("Brainrot").filter(card => card.available);

  // Common card categories
  const commonCharacterDomains = ["Cultural", "Tecnoide", "Místico", "Orgánico"] as const;
  const commonCharacters = commonCharacterDomains.map(domain => 
    commonCards.find(card => card.type === "Character" && card.domain === domain)
  ).filter((card): card is typeof cardData[0] => card !== undefined);
  const commonObjects = commonCards.filter(card => card.type === "Object");
  const commonScenarios = commonCards.filter(card => card.type === "Scenario");

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const RarityPreviewSection = ({ 
    rarity, 
    cards, 
    title, 
    titleColor, 
    available = true 
  }: { 
    rarity: string;
    cards: typeof cardData;
    title: string;
    titleColor: string;
    available?: boolean;
  }) => (
    <motion.div 
      className="mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-8">
        <span className={`${titleColor} text-glow`}>
          {title}
        </span>
        {!available && (
          <span className="text-gray-400 text-lg ml-3">
            ({language === 'en' ? 'Coming Soon' : 'Próximamente'})
          </span>
        )}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
        {available ? (
          <>
            {cards.slice(0, 4).map((card) => (
              <CardComponent key={`${card.id}-${language}`} card={card} language={language} />
            ))}
            {/* Fill remaining slots with coming soon cards if needed */}
            {Array.from({ length: Math.max(0, 4 - cards.length) }).map((_, index) => (
              <ComingSoonCard key={`${rarity}-coming-${index}`} rarity={rarity} language={language} />
            ))}
          </>
        ) : (
          Array.from({ length: 4 }).map((_, index) => (
            <ComingSoonCard key={`${rarity}-placeholder-${index}`} rarity={rarity} language={language} />
          ))
        )}
      </div>

      <div className="text-center">
        <Button 
          className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-8 rounded-lg font-orbitron text-sm hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          onClick={() => setSelectedRarity(rarity)}
        >
          {language === 'en' ? `View All ${rarity} Cards` : `Ver Todas las Cartas ${rarity === 'Common' ? 'Comunes' : rarity === 'Epic' ? 'Épicas' : rarity === 'Legendary' ? 'Legendarias' : rarity}`}
        </Button>
      </div>
    </motion.div>
  );

  const DetailedRarityView = ({ rarity }: { rarity: string }) => {
    const cards = getCardsByRarity(rarity as any);
    const availableCards = cards.filter(card => card.available);
    
    if (availableCards.length === 0) {
      return (
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-6">🔮</div>
          <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
            {rarity} {language === 'en' ? 'Cards Coming Soon!' : 'Cartas Próximamente!'}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            {language === 'en' 
              ? `We're working hard to bring you amazing ${rarity.toLowerCase()} cards. Stay tuned for updates!`
              : `Estamos trabajando duro para traerte increíbles cartas ${rarity.toLowerCase()}. ¡Mantente atento a las actualizaciones!`
            }
          </p>
          <Button 
            onClick={() => setSelectedRarity(null)}
            className="bg-gradient-to-r from-secondary to-primary text-white py-3 px-8 rounded-lg font-orbitron"
          >
            {language === 'en' ? 'Back to Collection' : 'Volver a la Colección'}
          </Button>
        </motion.div>
      );
    }

    // Special handling for Common cards with categories
    if (rarity === "Common") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
              {language === 'en' ? 'Common Cards Collection' : 'Colección de Cartas Comunes'}
            </h2>
            <Button 
              onClick={() => setSelectedRarity(null)}
              className="bg-gradient-to-r from-secondary to-primary text-white py-2 px-6 rounded-lg font-orbitron text-sm"
            >
              {language === 'en' ? 'Back to Overview' : 'Volver al Resumen'}
            </Button>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["all", "characters", "objects", "scenarios"].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {language === 'en' ? category : 
                  category === 'all' ? 'todos' :
                  category === 'characters' ? 'personajes' :
                  category === 'objects' ? 'objetos' : 'escenarios'
                }
              </Button>
            ))}
          </div>

          {/* Characters by domain */}
          {(selectedCategory === "all" || selectedCategory === "characters") && (
            <div className="mb-12">
              <h3 className="text-2xl font-orbitron font-bold text-center mb-8 text-blue-400">
                {language === 'en' ? 'Character Domains' : 'Dominios de Personajes'}
              </h3>
              {commonCharacterDomains.map((domain) => {
                const domainCards = commonCards.filter(card => card.type === "Character" && card.domain === domain);
                return domainCards.length > 0 && (
                  <div key={domain} className="mb-8">
                    <h4 className="text-xl font-orbitron text-center mb-4 text-accent">{domain}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                      {domainCards.map((card) => (
                        <CardComponent key={`${card.id}-${language}`} card={card} language={language} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Objects */}
          {(selectedCategory === "all" || selectedCategory === "objects") && commonObjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-orbitron font-bold text-center mb-8 text-green-400">
                {language === 'en' ? 'Common Objects' : 'Objetos Comunes'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {commonObjects.map((card) => (
                  <CardComponent key={`${card.id}-${language}`} card={card} language={language} />
                ))}
              </div>
            </div>
          )}

          {/* Scenarios */}
          {(selectedCategory === "all" || selectedCategory === "scenarios") && commonScenarios.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-orbitron font-bold text-center mb-8 text-orange-400">
                {language === 'en' ? 'Common Scenarios' : 'Escenarios Comunes'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {commonScenarios.map((card) => (
                  <CardComponent key={`${card.id}-${language}`} card={card} language={language} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      );
    }

    // Standard rarity view for Epic, Legendary, etc.
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
            {rarity} {language === 'en' ? 'Cards Collection' : 'Colección de Cartas'}
          </h2>
          <Button 
            onClick={() => setSelectedRarity(null)}
            className="bg-gradient-to-r from-secondary to-primary text-white py-2 px-6 rounded-lg font-orbitron text-sm"
          >
            {language === 'en' ? 'Back to Overview' : 'Volver al Resumen'}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {availableCards.map((card) => (
            <CardComponent key={`${card.id}-${language}`} card={card} language={language} />
          ))}
        </div>
      </motion.div>
    );
  };

  if (selectedRarity) {
    return (
      <section className="section-padding container-spacing bg-gradient-to-b from-dark via-gray-900 to-darker overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <DetailedRarityView rarity={selectedRarity} />
        </div>
      </section>
    );
  }

  return (
    <section id="collector" className="section-padding container-spacing bg-gradient-to-b from-dark via-gray-900 to-darker overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
            <span className="relative inline-block">
              {t.collector.title.split(' ').map((word, index) => (
                <span key={index} className={index === 1 ? 'text-primary' : ''}>
                  {word}{index < t.collector.title.split(' ').length - 1 ? ' ' : ''}
                </span>
              ))}
              <span className="text-primary">{t.collector.highlight}</span>
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
              ? "Discover our complete card collection organized by rarity and type. Each card features unique abilities and stunning artwork."
              : "Descubre nuestra colección completa de cartas organizadas por rareza y tipo. Cada carta presenta habilidades únicas y arte impresionante."
            }
          </motion.p>
        </motion.div>

        {/* Common Cards Preview */}
        <RarityPreviewSection
          rarity="Common"
          cards={commonCards}
          title={language === 'en' ? 'Common Cards' : 'Cartas Comunes'}
          titleColor="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent"
          available={true}
        />

        {/* Rare Cards Preview */}
        <RarityPreviewSection
          rarity="Rare"
          cards={rareCards}
          title={language === 'en' ? 'Rare Cards' : 'Cartas Raras'}
          titleColor="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent"
          available={false}
        />

        {/* Epic Cards Preview */}
        <RarityPreviewSection
          rarity="Epic"
          cards={epicCards}
          title={language === 'en' ? 'Epic Cards' : 'Cartas Épicas'}
          titleColor="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent"
          available={true}
        />

        {/* Legendary Cards Preview */}
        <RarityPreviewSection
          rarity="Legendary"
          cards={legendaryCards}
          title={language === 'en' ? 'Legendary Cards' : 'Cartas Legendarias'}
          titleColor="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
          available={true}
        />

        {/* Brainrot Cards Preview */}
        <RarityPreviewSection
          rarity="Brainrot"
          cards={brainrotCards}
          title={language === 'en' ? 'Brainrot Cards' : 'Cartas Brainrot'}
          titleColor="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent"
          available={false}
        />
      </div>
    </section>
  );
};

export default CollectorSection;