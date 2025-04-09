
import React from 'react';

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="py-20 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Sustainable farming landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-grain-green opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-white mb-4">Our Commitment to Sustainability</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Pioneering sustainable agricultural practices for a better tomorrow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cards with glass effect */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-xl font-serif font-bold text-white mb-4">Regenerative Agriculture</h3>
            <p className="text-white/90">
              Supporting farming methods that rehabilitate ecosystems, enhance biodiversity, and capture carbon in soil.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-xl font-serif font-bold text-white mb-4">Water Conservation</h3>
            <p className="text-white/90">
              Implementing advanced irrigation systems and water recycling to minimize our environmental footprint.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-xl font-serif font-bold text-white mb-4">Carbon Reduction</h3>
            <p className="text-white/90">
              Actively reducing emissions through optimized logistics, renewable energy, and carbon offset programs.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="px-8 py-3 bg-white text-grain-green-dark rounded-md hover:bg-grain-beige transition-colors duration-300 font-medium inline-block">
            Learn More About Our Initiatives
          </a>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
