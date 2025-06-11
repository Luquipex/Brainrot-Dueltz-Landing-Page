import { motion } from "framer-motion";
import { BadgeCheck, Crown, BarChart3 } from "lucide-react";

const CollectorSection = () => {
  const collectorFeatures = [
    {
      icon: <BadgeCheck className="h-10 w-10" />,
      title: "Early Releases",
      description: "Get exclusive access to cards before their official release. Early collectors receive special holographic variants.",
      gradientFrom: "primary/30",
      gradientTo: "secondary/30",
      iconColor: "text-primary"
    },
    {
      icon: <Crown className="h-10 w-10" />,
      title: "Limited Editions",
      description: "Ultra-rare cards with unique designs and special effects. Only available for a limited time to our most dedicated collectors.",
      gradientFrom: "secondary/30",
      gradientTo: "accent/30",
      iconColor: "text-secondary"
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Community Designs",
      description: "Vote on upcoming card designs and contribute your own ideas. Community-created cards receive special designation.",
      gradientFrom: "accent/30",
      gradientTo: "accent2/30",
      iconColor: "text-accent"
    }
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
    <section id="collector" className="section-padding bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-card-texture bg-cover bg-center opacity-5"></div>
      <motion.div
        className="absolute h-48 w-48 rounded-full bg-primary/20 blur-[100px] bottom-20 left-20"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-8 text-white">
              <span className="relative">
                Collector's <span className="text-primary">Corner</span>
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-primary rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Special releases, limited editions, and community-voted designs that collectors don't want to miss.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {collectorFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className={`bg-gray-800/80 border border-primary/50 p-6 rounded-xl hover:bg-gray-700/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/70`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className={`h-40 bg-gradient-to-br from-${feature.gradientFrom} to-${feature.gradientTo} rounded-lg mb-4 flex items-center justify-center`}>
                  <div className={`text-4xl ${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-orbitron font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectorSection;
