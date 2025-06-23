import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/data/translations';
import { brandAssets } from '@/data/gameData';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-lg border-b border-primary/40" : "bg-gray-900/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="h-10 w-auto mr-3">
              <img 
                src={brandAssets.logo.main}
                alt="BRAINROT DUELTZ™ Logo"
                className="h-full w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/assets/logo/brainrot-logo.svg";
                  e.currentTarget.onerror = () => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  };
                }}
              />
              <h1 
                className="text-xl font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden"
                style={{ display: 'none' }}
              >
                BRAINROT<span className="text-accent">DUELTZ™</span>
              </h1>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-200 hover:text-primary transition-colors duration-300 font-medium text-sm whitespace-nowrap"
            >
              {t.nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('cards')} 
              className="text-gray-200 hover:text-primary transition-colors duration-300 font-medium text-sm whitespace-nowrap"
            >
              {t.nav.cards}
            </button>
            <button 
              onClick={() => scrollToSection('rules')} 
              className="text-gray-200 hover:text-primary transition-colors duration-300 font-medium text-sm whitespace-nowrap"
            >
              {t.nav.rules}
            </button>
            <button 
              onClick={() => scrollToSection('community')} 
              className="text-gray-200 hover:text-primary transition-colors duration-300 font-medium text-sm whitespace-nowrap"
            >
              {t.nav.community}
            </button>
            <button 
              onClick={() => scrollToSection('collector')} 
              className="text-gray-200 hover:text-primary transition-colors duration-300 font-medium text-sm whitespace-nowrap"
            >
              {language === 'en' ? 'Collectors' : 'Coleccionistas'}
            </button>
          </div>

          {/* Right Section - Language Switcher and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button 
              className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-lg font-orbitron hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              onClick={() => scrollToSection('community')}
            >
              {t.nav.joinNow}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-primary/30 ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-left text-gray-200 hover:text-primary transition-colors duration-300 py-2"
          >
            {t.nav.about}
          </button>
          <button 
            onClick={() => scrollToSection('cards')} 
            className="text-left text-gray-200 hover:text-primary transition-colors duration-300 py-2"
          >
            {t.nav.cards}
          </button>
          <button 
            onClick={() => scrollToSection('rules')} 
            className="text-left text-gray-200 hover:text-primary transition-colors duration-300 py-2"
          >
            {t.nav.rules}
          </button>
          <button 
            onClick={() => scrollToSection('community')} 
            className="text-left text-gray-200 hover:text-primary transition-colors duration-300 py-2"
          >
            {t.nav.community}
          </button>
          <button 
            onClick={() => scrollToSection('collector')} 
            className="text-left text-gray-200 hover:text-primary transition-colors duration-300 py-2"
          >
            {t.nav.collector}
          </button>
          <div className="pt-4 border-t border-primary/30">
            <Button 
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-lg font-orbitron hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              onClick={() => scrollToSection('community')}
            >
              {t.nav.joinNow}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;