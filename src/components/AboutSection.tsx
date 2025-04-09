
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-grain-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">About Golden Harvest</h2>
          <p className="section-subtitle">
            A trusted name in Australian grain export since 1985, delivering quality crops worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Farmer inspecting crops" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold text-grain-green mb-4">
              Our Heritage and Commitment
            </h3>
            <p className="text-grain-earth-dark mb-6">
              Golden Harvest has been a cornerstone of Australian agriculture for over three decades. Our commitment to quality, sustainability, and fair trade practices has established us as leaders in the global grain market.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-grain-yellow-dark mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-grain-green">Quality Assurance</h4>
                  <p>Rigorous quality control from farm to export, ensuring premium products.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-grain-yellow-dark mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-grain-green">Sustainable Practices</h4>
                  <p>Environmentally conscious farming and operations throughout our supply chain.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-grain-yellow-dark mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-grain-green">Farmer Partnerships</h4>
                  <p>Working directly with over 200 Australian farmers to ensure fair compensation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-grain-yellow-dark mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-grain-green">Global Relationships</h4>
                  <p>Trusted partnerships with importers across Asia, Europe, and the Middle East.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
