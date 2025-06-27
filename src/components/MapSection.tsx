
import React from 'react';
import { WorldMap } from './ui/world-map';

const MapSection = () => {
  return (
    <section className="py-16 bg-grain-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title mb-4">Our Global Reach</h2>
          <p className="section-subtitle">
            Sunrise Commodities exports premium Australian grains to key markets worldwide.
          </p>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-4">
            <WorldMap
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
                  end: { lat: 51.5074, lng: -0.1278 }, // UK (London)
                },
                {
                  start: { lat: -25.2744, lng: 133.7751 }, // Australia (center)
                  end: { lat: 52.3676, lng: 4.9041 }, // Netherlands (Amsterdam)
                }
              ]}
              lineColor="#D4AF37"
            />
            <p className="text-xs text-center text-white/70 mt-2">Australian Grain Export Routes - Major Trading Partners</p>
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
                Sunrise Commodities maintains strong relationships with importers across key regions worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
