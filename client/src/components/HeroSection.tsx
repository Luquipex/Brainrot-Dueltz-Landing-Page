import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/data/translations";
import { scrollToElement } from "@/lib/utils";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="relative min-h-screen bg-dark pt-24 overflow-hidden noise-bg">
      <div className="glitch-overlay">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-10"></div>
      </div>
      
      <motion.div 
        className="absolute h-56 w-56 rounded-full bg-primary/30 blur-[100px] top-20 left-20"
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
        className="absolute h-48 w-48 rounded-full bg-secondary/30 blur-[100px] top-40 right-20"
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
      
      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
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
              <span className="block text-white text-shadow-md">{t.hero.title}</span>
              <span className="block text-primary text-shadow-lg">
                {t.hero.highlight}
              </span>
              <motion.span 
                className="text-light text-xl md:text-2xl lg:text-3xl font-medium block mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Collect. Duel. Evolve.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-300 font-inter leading-relaxed max-w-2xl"
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
            {/* Featured Character Card */}
            <motion.div 
              className="w-64 md:w-80 h-96 md:h-[32rem] rounded-xl relative shadow-xl shadow-primary/20"
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Card Front */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/90 to-secondary/90 p-1 shadow-2xl shadow-primary/30">
                <div className="h-full w-full rounded-lg overflow-hidden relative">
                  <img 
                    src="/assets/cards/legendary-card.jpg"
                    alt="Legendary Card"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient design if image fails
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="w-full h-full bg-card-texture bg-cover bg-center overflow-hidden relative" style={{ display: 'none' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark/90"></div>
                    <div className="absolute top-3 left-3 bg-accent/90 px-3 py-1 rounded-full text-xs font-orbitron">LEGENDARY</div>
                    
                    <div className="absolute bottom-0 w-full p-4">
                      <h3 className="text-xl font-orbitron font-bold text-white mb-1">Tralalero Tralala</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-primary/80 px-2 py-0.5 rounded text-xs">ASTRAL</span>
                        <span className="bg-accent/80 px-2 py-0.5 rounded text-xs">MYSTIC</span>
                      </div>
                      <p className="text-xs text-gray-200">The primordial entity that speaks in rhymes and riddles, existing beyond time and space.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Holographic Overlay */}
              <div className="absolute inset-0 rounded-xl holographic opacity-10"></div>
            </motion.div>
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
