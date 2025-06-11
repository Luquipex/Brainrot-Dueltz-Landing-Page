import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/data/translations";
import { socialLinks } from "@/data/gameData";

const CommunitySection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setIsSubscribed(true);
      setEmail("");
      // In a real app, you would send this to your server
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

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
    <section id="community" className="section-padding bg-gradient-to-b from-dark/95 to-dark relative overflow-hidden noise-bg">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-accent/20 blur-[100px] top-20 right-20"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-orbitron font-bold mb-8 text-white"
            variants={itemVariants}
          >
            <span className="relative">
              <span className="text-primary">Join</span> the Community
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary rounded-full"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-12"
            variants={itemVariants}
          >
            {t.community.description}
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-dark/50 border border-primary/30 p-8 rounded-xl hover:bg-dark/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="text-primary text-5xl mb-6">
                <FaDiscord />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3">Join our Discord</h3>
              <p className="text-gray-300 mb-6">
                Connect with the most active Brainrot DUELTZ™ community. Share strategies, trade cards, and participate in exclusive events.
              </p>
              <Button 
                className="bg-gradient-to-r from-primary to-secondary py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                onClick={() => window.open(socialLinks.discord, '_blank')}
              >
                {t.community.social.discord}
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-dark/50 border border-accent/30 p-8 rounded-xl hover:bg-dark/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="text-accent text-5xl mb-6">
                <FaInstagram />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3">Follow on Instagram</h3>
              <p className="text-gray-300 mb-6">
                Get daily card reveals, behind-the-scenes looks at new designs, and community spotlights featuring the best collectors.
              </p>
              <Button 
                className="bg-gradient-to-r from-accent to-primary py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                onClick={() => window.open(socialLinks.instagram, '_blank')}
              >
                {t.community.social.instagram}
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
            variants={itemVariants}
          >
            <h3 className="text-xl font-orbitron font-bold mb-6">Stay Connected</h3>
            <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-dark/70 border border-primary/30 text-light py-3 px-6 rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50" 
                required
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 w-full md:w-auto"
              >
                Subscribe for Updates
              </Button>
            </form>
            {isSubscribed && (
              <motion.p 
                className="mt-4 text-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Thanks for subscribing! You'll receive the latest updates.
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
