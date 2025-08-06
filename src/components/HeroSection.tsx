import React, { useState } from "react";
import { AnimatedButton } from "./ui/animated-button";
import { Input } from "./ui/input";
import heroImage from "@/assets/hero-bg.jpg";
import appPreview from "@/assets/app-preview.jpg";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-primary opacity-20 floating-animation blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-secondary opacity-20 floating-delayed blur-xl"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-gradient-primary opacity-30 floating-slow blur-lg"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Announcement Banner */}
        <div className="mb-8 animate-fade-in-down">
          <div className="inline-flex items-center px-6 py-2 rounded-full glass-card text-sm">
            <span className="text-muted-foreground">Announcing our $1.4M Fundraise</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-foreground">Dimension is the new</span>
            <br />
            <span className="gradient-text">standard for collaboration</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Chat, code, cloud, deployments, and more.
        </p>

        {/* Email Signup Form */}
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 glass-card border-white/20 text-foreground placeholder:text-muted-foreground"
              required
            />
            <AnimatedButton type="submit" variant="hero">
              {isSubmitted ? "You've joined!" : "Join waitlist"}
            </AnimatedButton>
          </form>
        </div>

        {/* App Preview */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-2 pulse-glow">
              <img 
                src={appPreview} 
                alt="Dimension app preview" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;