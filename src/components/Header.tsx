import React from "react";
import { AnimatedButton } from "./ui/animated-button";

const Header = () => {
  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary"></div>
            <span className="text-xl font-semibold text-foreground">Dimension</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </a>
            <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#changelog" className="text-muted-foreground hover:text-foreground transition-colors">
              Changelog
            </a>
          </nav>

          <AnimatedButton variant="glass" size="sm">
            Join waitlist
          </AnimatedButton>
        </div>
      </div>
    </header>
  );
};

export default Header;