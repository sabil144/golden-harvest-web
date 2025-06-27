
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const AboutSection = () => {
  const harvestingImages = [
    {
      url: "/lovable-uploads/5d52c5f1-0ee9-4609-9037-fd8f85f1a59f.png",
      alt: "Grain loading into truck with silos in background"
    },
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d73c5207fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Harvesting wheat with combine harvester"
    },
    {
      url: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Grain silos at sunset"
    }
  ];

  return (
    <section id="about" className="py-20 bg-grain-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">About Sunrise Commodities</h2>
          <p className="section-subtitle">
            A trusted name in Australian grain export since 1992, delivering quality crops worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl h-full">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {harvestingImages.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="p-1 h-full">
                      <div className="h-80 md:h-96">
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
                <CarouselNext className="relative static right-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold text-grain-green mb-4">
              Our Heritage and Commitment
            </h3>
            <p className="text-grain-earth-dark mb-6">
              Sunrise Commodities has been a cornerstone of Australian agriculture for over three decades. Our commitment to quality, sustainability, and fair trade practices has established us as leaders in the global grain market.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start group animate-on-scroll fade-in-up">
                <CheckCircle className="text-grain-yellow-dark mr-3 mt-1 transition-transform group-hover:scale-125 duration-300" />
                <div>
                  <h4 className="font-bold text-grain-green">Quality Assurance</h4>
                  <p>Rigorous quality control from farm to export, ensuring premium products.</p>
                </div>
              </div>
              
              <div className="flex items-start group animate-on-scroll fade-in-up">
                <CheckCircle className="text-grain-yellow-dark mr-3 mt-1 transition-transform group-hover:scale-125 duration-300" />
                <div>
                  <h4 className="font-bold text-grain-green">Sustainable Practices</h4>
                  <p>Environmentally conscious farming and operations throughout our supply chain.</p>
                </div>
              </div>
              
              <div className="flex items-start group animate-on-scroll fade-in-up">
                <CheckCircle className="text-grain-yellow-dark mr-3 mt-1 transition-transform group-hover:scale-125 duration-300" />
                <div>
                  <h4 className="font-bold text-grain-green">Farmer Partnerships</h4>
                  <p>Working directly with over 300 Australian farmers to ensure fair compensation.</p>
                </div>
              </div>
              
              <div className="flex items-start group animate-on-scroll fade-in-up">
                <CheckCircle className="text-grain-yellow-dark mr-3 mt-1 transition-transform group-hover:scale-125 duration-300" />
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
