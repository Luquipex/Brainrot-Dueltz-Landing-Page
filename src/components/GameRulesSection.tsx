import { useLanguage } from "../hooks/use-language";
import { gameRules } from "../data/gameData";

export function GameRulesSection() {
  const { language } = useLanguage();
  const rules = gameRules[language];

  return (
    <section id="rules" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
            <span className="relative">
              Rules of the <span className="text-primary">Game</span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-primary rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {rules.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {rules.sections.map((section, index) => (
            <div 
              key={index}
              className="bg-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/40 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                  {index + 1}
                </span>
                {section.title}
              </h3>
              
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <div className="bg-secondary/20 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {language === 'en' ? 'Ready to Start Playing?' : '¿Listo para Empezar a Jugar?'}
            </h3>
            <p className="text-white/90 mb-6">
              {language === 'en' 
                ? 'Download the official rulebook and start your journey into the Brainrot universe!' 
                : '¡Descarga el manual oficial de reglas y comienza tu viaje al universo Brainrot!'
              }
            </p>
            <button className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
              {language === 'en' ? 'Download Rulebook (PDF)' : 'Descargar Manual (PDF)'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}