import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { translations } from "@/data/translations";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2 bg-dark/40 hover:bg-dark/60 border-primary/30"
      onClick={toggleLanguage}
    >
      <Globe size={16} />
      <span>{translations[language].language.switch}</span>
    </Button>
  );
}