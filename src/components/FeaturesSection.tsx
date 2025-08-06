import React from "react";
import { MessageSquare, Code, Cloud, Users, GitBranch, Rocket } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Collaborate on everything",
      description: "From deployments to tasks, work with your team every step of the way.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Crafted for your favorite tools",
      description: "Connect your tools - we'll handle the rest. Many integrations, with more to come.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud-first approach",
      description: "Built for the modern cloud era with seamless deployments and scaling.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const integrations = [
    { name: "Railway", color: "bg-purple-500" },
    { name: "GitHub", color: "bg-gray-800" },
    { name: "Netlify", color: "bg-teal-500" },
    { name: "Google", color: "bg-blue-500" },
    { name: "Figma", color: "bg-red-500" },
    { name: "Vercel", color: "bg-black" }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Build software{" "}
            <span className="gradient-text">faster, together.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The most complete developer experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Chat Interface Preview */}
        <div className="glass-card rounded-2xl p-8 mb-20 animate-slide-in-left">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-sm font-semibold text-primary-foreground">T</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold text-foreground">Tejas</span>
                <span className="text-sm text-muted-foreground">1:14 PM</span>
              </div>
              <p className="text-foreground mb-3">
                Cool - have a few improvements in mind - here's a meet! 
                <span className="ml-2">🚀</span>
              </p>
              <div className="glass-card rounded-lg p-3 max-w-xs">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>Team meeting starting</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="text-center animate-slide-in-right">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Crafted for your favorite tools
          </h3>
          <p className="text-muted-foreground mb-12">
            Connect your tools - we'll handle the rest. Many integrations, with more to come.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={integration.name}
                className="glass-card rounded-lg p-4 hover:scale-105 transition-transform animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-12 h-12 rounded ${integration.color} flex items-center justify-center`}>
                  <span className="text-white font-semibold text-sm">
                    {integration.name.charAt(0)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-gradient-primary opacity-10 floating-animation blur-xl"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 rounded-full bg-gradient-secondary opacity-15 floating-delayed blur-lg"></div>
    </section>
  );
};

export default FeaturesSection;