import React from "react";

const TrustedBy = () => {
  const companies = [
    { name: "Million", logo: "M" },
    { name: "Tabler", logo: "T" },
    { name: "SolidJS", logo: "S" },
    { name: "Starship", logo: "⭐" },
    { name: "Astro", logo: "🚀" },
  ];

  return (
    <section className="py-16 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground">
            Join the maintainers and contributors to the largest open-source projects on our waitlist.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {companies.map((company, index) => (
            <div 
              key={company.name}
              className="flex items-center justify-center w-16 h-16 rounded-lg glass-card hover:opacity-100 transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <span className="text-2xl font-bold gradient-text">
                {company.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;