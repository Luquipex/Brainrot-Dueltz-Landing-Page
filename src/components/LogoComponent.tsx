import { brandAssets } from "@/data/gameData";

interface LogoProps {
  variant?: "main" | "alt" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function LogoComponent({ variant = "main", size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-12 w-auto", 
    lg: "h-16 w-auto",
    xl: "h-24 w-auto"
  };

  const logoSrc = brandAssets.logo[variant];
  
  return (
    <img 
      src={logoSrc}
      alt="BRAINROT DUELTZ™ Logo"
      className={`${sizeClasses[size]} ${className}`}
      onError={(e) => {
        // Fallback to text logo if image fails to load
        e.currentTarget.style.display = 'none';
        const textLogo = e.currentTarget.nextElementSibling as HTMLElement;
        if (textLogo) {
          textLogo.style.display = 'block';
        }
      }}
    />
  );
}

// Text fallback component for when logo images aren't available
export function TextLogo({ size = "md", className = "" }: { size?: "sm" | "md" | "lg" | "xl", className?: string }) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl", 
    xl: "text-4xl"
  };

  return (
    <h1 className={`${sizeClasses[size]} font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${className}`}>
      BRAINROT<span className="text-accent">DUELTZ™</span>
    </h1>
  );
}