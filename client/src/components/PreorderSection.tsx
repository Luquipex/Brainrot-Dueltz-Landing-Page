import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PreorderSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown date to 30 days from now
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30);
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="preorder" className="section-padding bg-gradient-to-b from-dark/90 to-dark relative overflow-hidden glitch-overlay">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-2xl">
            <div className="bg-dark/95 rounded-2xl p-8 md:p-12">
              <motion.div 
                className="text-center"
                variants={containerVariants}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white"
                  variants={itemVariants}
                >
                  <span className="relative">
                    <span className="text-primary">Pre-order</span> Now
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></div>
                  </span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
                  variants={itemVariants}
                >
                  Be the first to secure your starter collection and exclusive early-backer rewards. Our Kickstarter campaign launches soon with limited edition cards available only during the campaign.
                </motion.p>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="bg-dark/70 border border-primary/30 p-4 rounded-lg"
                    variants={itemVariants}
                  >
                    <div className="text-3xl font-orbitron font-bold text-primary">
                      {String(timeLeft.days).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-400">Days</div>
                  </motion.div>
                  <motion.div 
                    className="bg-dark/70 border border-primary/30 p-4 rounded-lg"
                    variants={itemVariants}
                  >
                    <div className="text-3xl font-orbitron font-bold text-secondary">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-400">Hours</div>
                  </motion.div>
                  <motion.div 
                    className="bg-dark/70 border border-primary/30 p-4 rounded-lg"
                    variants={itemVariants}
                  >
                    <div className="text-3xl font-orbitron font-bold text-accent">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-400">Minutes</div>
                  </motion.div>
                  <motion.div 
                    className="bg-dark/70 border border-primary/30 p-4 rounded-lg"
                    variants={itemVariants}
                  >
                    <div className="text-3xl font-orbitron font-bold text-accent2">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-400">Seconds</div>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button className="bg-gradient-to-r from-primary to-secondary py-3 px-8 rounded-lg font-orbitron text-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                    Get Notified
                  </Button>
                </motion.div>
                
                <motion.p 
                  className="text-sm text-gray-400 mt-4"
                  variants={itemVariants}
                >
                  Be alerted when our campaign goes live and secure early-bird rewards.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreorderSection;
