import { motion } from "framer-motion";
import { User, Diamond, Orbit } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Card Types",
      items: ["Characters", "Items", "Scenarios"],
      colorClass: "text-primary",
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Rarities",
      items: ["Common", "Rare", "Epic", "Legendary", "Brainrot"],
      colorClass: "text-secondary",
    },
    {
      icon: <Orbit className="w-8 h-8" />,
      title: "Domains",
      items: ["Organic", "Technoid", "Cultural", "Mystic", "Astral"],
      colorClass: "text-accent",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <motion.div
        className="absolute h-56 w-56 rounded-full bg-primary/20 blur-[100px] -top-20 right-20"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-orbitron font-bold mb-8 text-white"
            variants={itemVariants}
          >
            <span className="relative">
              About the <span className="text-primary">Game</span>
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-body mb-8 text-gray-200 font-inter max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Brainrot DUELTZ™ is a revolutionary trading card game born from the chaotic creativity of the AI universe. Featuring community-created lore, unique card mechanics, and rarity-based collections, it's where digital surrealism meets physical gameplay.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="card-modern p-6 group"
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className={`text-4xl mb-4 ${feature.colorClass}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2">{feature.title}</h3>
                <ul className="text-gray-300 space-y-1">
                  {feature.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
