import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/data/translations";
import { scrollToElement } from "@/lib/utils";
import { brandAssets } from "@/data/gameData";
import { cardData } from "@/data/cardData";
import { useState } from "react";
import { getCardAsset } from "@/data/assetImports";

// Production-ready asset imports for Vercel
import packagingImage from "/packaging.png?url";


// Interactive Pack Opening Component
const PackOpeningComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  
  // Select 5 cards for pack opening: 3 common, 1 epic, 1 legendary
  const featuredCards = [
    // 3 Common cards
    cardData.find(card => card.name === "Ballerina Capuchina" && card.rarity === "Common"),
    cardData.find(card => card.name === "Tum Tum Sahur" && card.rarity === "Common"),
    cardData.find(card => card.name === "Milky Way" && card.rarity === "Common"),
    // 1 Epic card
    cardData.find(card => card.name === "Bombardiro Tralala" && card.rarity === "Epic"),
    // 1 Legendary card
    cardData.find(card => card.name === "Chimpanchino Assasino" && card.rarity === "Legendary")
  ].filter(Boolean);

  return (
    <motion.div 
      className="relative w-[600px] h-[600px] cursor-pointer mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsOpened(true)}
      onHoverEnd={() => setIsOpened(false)}
    >
      {/* Magical Background Glow Effects - Centered */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        animate={{
          scale: isOpened ? 1.3 : 1,
          opacity: isOpened ? 0.8 : 0.6,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-80 h-80">
          {/* Primary Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-purple-500/30 via-blue-500/20 to-transparent blur-xl" />
          
          {/* Secondary Pulsing Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-400/25 via-purple-600/15 to-transparent blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Rotating Energy Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-purple-400/40 via-cyan-400/40 to-purple-400/40 blur-sm"
            animate={{
              rotate: 360,
              scale: isOpened ? 1.1 : 1,
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.6, ease: "easeOut" }
            }}
            style={{
              background: 'conic-gradient(from 0deg, rgba(168, 85, 247, 0.4) 0%, rgba(34, 211, 238, 0.4) 50%, rgba(168, 85, 247, 0.4) 100%)',
              maskImage: 'radial-gradient(circle, transparent 70%, black 71%, black 73%, transparent 74%)',
              WebkitMaskImage: 'radial-gradient(circle, transparent 70%, black 71%, black 73%, transparent 74%)'
            }}
          />
          

        </div>
      </motion.div>

      {/* Floating Sparkle Effects */}
      <div className="absolute inset-0 z-5" style={{ pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${40 + (i * 4)}%`,
              top: `${40 + (i * 4)}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Card Pack - Centered */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        animate={{ 
          rotateY: isOpened ? 20 : 0,
          scale: isOpened ? 1.1 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-80 h-96">
          <img 
            src={packagingImage}
            alt="Card Pack"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
          
          {/* Enhanced Packaging Glow */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-400/20 rounded-xl"
            animate={{
              opacity: isOpened ? 0.7 : 0.4,
            }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Shimmer Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
            animate={{
              x: isOpened ? "100%" : "-100%",
              opacity: isOpened ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Cards revealing in circular formation around packaging - with rotation */}
      <motion.div 
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        animate={{ 
          rotate: isOpened ? [0, 360] : 0
        }}
        transition={{ 
          rotate: { duration: 12, repeat: Infinity, ease: "linear" }
        }}
      >
        {featuredCards.map((card, index) => {
          // Calculate positions in a perfect circle around the packaging
          const angle = (index * 360) / featuredCards.length;
          const radius = 260; // Match packaging circumference exactly
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={card?.id || index}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: 30 + index,
              }}
              initial={{ 
                scale: 0, 
                opacity: 0,
              }}
              animate={{ 
                scale: isOpened ? 1 : 0,
                opacity: isOpened ? 1 : 0,
                rotate: isOpened ? [0, -360] : 0, // Counter-rotate to keep cards vertically fixed
              }}
              transition={{ 
                scale: { 
                  duration: isOpened ? 0.8 : 0.4, 
                  delay: isOpened ? index * 0.15 : (4 - index) * 0.1, 
                  ease: "easeOut" 
                },
                opacity: { 
                  duration: isOpened ? 0.8 : 0.4, 
                  delay: isOpened ? index * 0.15 : (4 - index) * 0.1, 
                  ease: "easeOut" 
                },
                rotate: { duration: 12, repeat: Infinity, ease: "linear" }
              }}
                >
                  {card && (
                    <div className="relative">
                      {/* Card glow effect based on rarity */}
                      <motion.div
                        className="absolute inset-0 rounded-lg blur-sm"
                        style={{
                          background: card.rarity === 'Legendary' ? 
                            'linear-gradient(45deg, #F59E0B, #FCD34D)' : 
                            card.rarity === 'Epic' ? 
                            'linear-gradient(45deg, #8B5CF6, #A78BFA)' : 
                            'linear-gradient(45deg, #6B7280, #9CA3AF)',
                          opacity: 0.6
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.4,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Card image - Larger size similar to packaging */}
                      <motion.div
                        className="relative z-10 w-32 h-48 rounded-xl shadow-2xl border-2 overflow-hidden"
                        style={{ 
                          borderColor: card.rarity === 'Legendary' ? '#F59E0B' : 
                                      card.rarity === 'Epic' ? '#8B5CF6' : '#6B7280'
                        }}
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.6,
                          ease: "easeInOut"
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotateY: 15,
                          z: 50 
                        }}
                      >
                        <img
                          src={getCardAsset(card.image) || card.image}
                          alt={card.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
        })}
      </motion.div>

      {/* Hover hint */}
      <motion.div 
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-orbitron"
        animate={{ opacity: isOpened ? 0 : [0.6, 1, 0.6] }}
        transition={{ 
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        Hover to open pack
      </motion.div>
    </motion.div>
  );
};

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="relative min-h-screen bg-dark pt-24 overflow-hidden noise-bg">
      <div className="glitch-overlay">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-10"></div>
      </div>
      
      {/* Official Color Palette Background Effects - Behind text */}
      <motion.div 
        className="absolute h-56 w-56 rounded-full blur-[100px] top-20 left-20 z-0"
        style={{ background: "hsl(var(--dark-cornflower-blue) / 0.4)" }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute h-48 w-48 rounded-full blur-[100px] top-40 right-20 z-0"
        style={{ background: "hsl(var(--space-cadet) / 0.4)" }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7
        }}
      />
      <motion.div 
        className="absolute h-32 w-32 rounded-full blur-[80px] bottom-20 left-1/2 z-0"
        style={{ background: "hsl(var(--argent) / 0.2)" }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      />
      
      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left relative z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="block text-white font-orbitron" style={{ textShadow: '0 0 20px rgba(147, 51, 234, 0.8)' }}>{t.hero.title}</span>
              <span className="block text-primary font-orbitron" style={{ textShadow: '0 0 30px rgba(147, 51, 234, 0.9)' }}>
                {t.hero.highlight}
              </span>
              <motion.span 
                className="text-white text-xl md:text-2xl lg:text-3xl font-orbitron font-medium block mt-3"
                style={{ textShadow: '0 0 15px rgba(147, 51, 234, 0.6)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Collect. Duel. Evolve.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-300 font-orbitron leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t.hero.subtitle}
            </motion.p>
            
            <motion.div 
              className="flex justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                onClick={() => scrollToElement('preorder')}
                className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-8 rounded-lg font-orbitron text-lg btn-professional hover:shadow-lg hover:shadow-primary/50 animate-glow"
              >
                {t.hero.buttons.preorder}
              </Button>
              <Button 
                onClick={() => scrollToElement('cards')}
                variant="outline" 
                className="border-accent text-accent py-3 px-8 rounded-lg font-orbitron text-lg btn-professional hover:bg-accent/10"
              >
                {t.hero.buttons.viewCards}
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <PackOpeningComponent />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#6e00ff" fillOpacity="0.1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
