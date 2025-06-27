
import React from 'react';
import { CustomWorldMap } from './ui/custom-world-map';

const MapSection = () => {
  return (
    <section className="py-16 bg-grain-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title mb-4">Our Global Reach</h2>
          <p className="section-subtitle">
            Sunrise Commodities exports premium Australian grains to key Asian markets.
          </p>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto">
          <CustomWorldMap />
          
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="grain-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-bold text-grain-green">Asian Markets Focus</h3>
              <p className="text-sm text-grain-earth mt-2">
                Our primary export destinations include Japan, China, South Korea, and Southeast Asian countries.
              </p>
            </div>
            
            <div className="grain-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-bold text-grain-green">Regional Expertise</h3>
              <p className="text-sm text-grain-earth mt-2">
                Deep understanding of Asian market requirements and quality standards for Australian grains.
              </p>
            </div>
            
            <div className="grain-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-bold text-grain-green">Strategic Partnerships</h3>
              <p className="text-sm text-grain-earth mt-2">
                Long-term relationships with Asian importers ensuring reliable grain supply chains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
