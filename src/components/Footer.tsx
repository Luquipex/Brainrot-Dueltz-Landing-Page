import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaInstagram, FaDiscord, FaTwitter, FaTiktok } from "react-icons/fa";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/data/translations";
import { brandAssets } from "@/data/gameData";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="border-t border-primary/30 section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--vampire-black)) 0%, hsl(var(--dark-jungle-blue)) 100%)" }}>
      <div className="absolute inset-0 bg-card-texture bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <img 
              src={brandAssets.logo.argent}
              alt="BRAINROT DUELTZ™"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6">
              {t.hero.subtitle}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <FaDiscord className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <FaTiktok className="text-2xl" />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-orbitron font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cards')} 
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {t.nav.cards}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('community')} 
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {t.nav.community}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('collector')} 
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {t.nav.collector}
                </button>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-orbitron font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">FAQ</a></li>
              <li><a href="mailto:Brainrotdueltzz@gmail.com" className="text-gray-400 hover:text-primary transition-colors duration-300">Brainrotdueltzz@gmail.com</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Terms & Conditions</a></li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-primary/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            {t.footer.copyright}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {t.footer.tagline}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
