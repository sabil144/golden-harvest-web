
import React from 'react';
import { RegionalMap } from './ui/regional-map';

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
        
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <RegionalMap
              dots={[
                {
                  start: { lat: -25.2744, lng: 133.7751 }, // Australia (center)
                  end: { lat: 35.6762, lng: 139.6503 }, // Japan (Tokyo)
                },
                {
                  start: { lat: -25.2744, lng: 133.7751 }, // Australia (center)
                  end: { lat: 39.9042, lng: 116.4074 }, // China (Beijing)
                },
                {
                  start: { lat: -25.2744, lng: 133.7751 }, // Australia (center)
                  end: { lat: 37.5665, lng: 126.9780 }, // South Korea (Seoul)
                },
                {
                  start: { lat: -25.2744, lng: 133.7751 }, // Australia (center)
                  end: { lat: 21.0285, lng: 105.8542 }, // Vietnam (Hanoi)
                },
                {
                  start: { lat: -25.2744, lng: 133.7751 }, // Australia (center)
                  end: { lat: 13.7563, lng: 100.5018 }, // Thailand (Bangkok)
                },
                {
                  start: { lat: -25.2744, lng: 133.7751 }, // Australia (center)
                  end: { lat: 28.6139, lng: 77.2090 }, // India (New Delhi)
                }
              ]}
              lineColor="#D4AF37"
            />
            <p className="text-xs text-center text-gray-600 mt-2">Australian Grain Export Routes - Asian Markets</p>
          </div>
          
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
