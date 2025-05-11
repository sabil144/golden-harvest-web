import React from 'react';
import { CreditCard, TrendingUp, ShieldCheck } from 'lucide-react';

const GrowerCommitmentSection = () => {
  return (
    <section id="grower-commitment" className="py-20 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/983c50d8-ab4e-4d00-a607-3aa599bb727e.png" 
          alt="Farmers shaking hands in wheat field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-grain-green opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-white mb-4">Our Commitment to Growers</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Supporting Australian farmers with fair practices and reliable partnerships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cards with glass effect */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
            <div className="mb-4 flex justify-center">
              <CreditCard className="text-grain-yellow h-12 w-12" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">Prompt Payment</h3>
            <p className="text-white/90 text-center">
              We ensure farmers receive payment within agreed timeframes, typically within 14 days of delivery, maintaining cash flow security.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
            <div className="mb-4 flex justify-center">
              <TrendingUp className="text-grain-yellow h-12 w-12" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">Forward Buying</h3>
            <p className="text-white/90 text-center">
              Our forward contract options provide growers with financial security and the ability to plan ahead with guaranteed purchase agreements.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
            <div className="mb-4 flex justify-center">
              <ShieldCheck className="text-grain-yellow h-12 w-12" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">Best Return on Capital</h3>
            <p className="text-white/90 text-center">
              We offer competitive pricing structures and premium rates for quality crops, maximizing returns for our grower partners.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/contact" className="px-8 py-3 bg-white text-grain-green-dark rounded-md hover:bg-grain-beige transition-colors duration-300 font-medium inline-block hover-scale">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default GrowerCommitmentSection;
