import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { GameRulesSection } from "@/components/GameRulesSection";
import CommunitySection from "@/components/CommunitySection";
import CollectorSection from "@/components/CollectorSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-dark text-light font-inter overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CollectorSection />
      <GameRulesSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Home;
