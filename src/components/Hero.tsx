
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image - Canola field */}
      <div className="absolute inset-0 z-0 bg-grain-green">
        <img 
          src="/lovable-uploads/878a87ed-afc7-4aec-8a76-775e445314e8.png" 
          alt="Australian canola field with stormy sky" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Quality Australian Grain for Global Markets
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            Premium crop exports with sustainable farming and transparent supply chains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a href="/products" className="grain-button-secondary flex items-center justify-center hover-scale">
              Explore Products <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="/contact" className="grain-button flex items-center justify-center hover-scale">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
