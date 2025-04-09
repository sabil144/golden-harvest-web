
import React from 'react';

const MapSection = () => {
  return (
    <section className="py-16 bg-grain-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title mb-4">Our Global Reach</h2>
          <p className="section-subtitle">
            Golden Harvest exports premium Australian grains to key markets worldwide.
          </p>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-4">
            <img 
              src="/lovable-uploads/e89a3246-7e41-45d1-bb52-93d42920a7c6.png" 
              alt="Australian Grain Export Market Map"
              className="w-full h-auto rounded"
            />
            <p className="text-xs text-center text-white/70 mt-2">Source: Australian Department of Agriculture and Water Resources, ABARES</p>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="grain-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-bold text-grain-green">Key Export Markets</h3>
              <p className="text-sm text-grain-earth mt-2">
                Australia exports high-quality grains to major markets in Asia, Europe, and North America.
              </p>
            </div>
            
            <div className="grain-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-bold text-grain-green">Export Volume</h3>
              <p className="text-sm text-grain-earth mt-2">
                Total export value exceeds $20 billion annually, with significant growth in Asian markets.
              </p>
            </div>
            
            <div className="grain-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-bold text-grain-green">Global Partners</h3>
              <p className="text-sm text-grain-earth mt-2">
                Golden Harvest maintains strong relationships with importers across key regions worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
