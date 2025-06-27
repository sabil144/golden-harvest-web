
import React from 'react';
import { GladstoneWorldMap } from './ui/gladstone-world-map';

const MapSection = () => {
  return (
    <section className="py-16 bg-grain-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title mb-4">Our Global Reach</h2>
          <p className="section-subtitle">
            Sunrise Commodities exports premium Australian grains from Gladstone to global markets.
          </p>
        </div>
        
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <GladstoneWorldMap lineColor="#D4AF37" />
            <p className="text-xs text-center text-gray-600 mt-2">Australian Grain Export Routes - Global Markets from Gladstone Hub</p>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="grain-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-bold text-grain-green">Global Markets Focus</h3>
              <p className="text-sm text-grain-earth mt-2">
                Our primary export destinations include Asia-Pacific, India, Russia, Middle East, and South America.
              </p>
            </div>
            
            <div className="grain-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-bold text-grain-green">Gladstone Hub</h3>
              <p className="text-sm text-grain-earth mt-2">
                Strategic location in Queensland provides efficient access to major shipping routes and global markets.
              </p>
            </div>
            
            <div className="grain-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-bold text-grain-green">Export Excellence</h3>
              <p className="text-sm text-grain-earth mt-2">
                Over 70 million tonnes of grain exports annually to diverse international markets worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
