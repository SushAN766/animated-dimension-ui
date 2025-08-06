import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "hero" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "hero", size = "md", children, ...props }, ref) => {
    const baseClasses = "relative overflow-hidden transition-all duration-300 group";
    
    const variantClasses = {
      hero: "bg-gradient-primary text-primary-foreground hover:shadow-glow-primary hover:scale-105 border-0",
      glass: "glass-card text-foreground hover:bg-white/10 border border-white/20",
      outline: "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <Button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };