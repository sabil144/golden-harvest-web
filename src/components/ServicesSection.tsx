
import React from 'react';
import { Ship, TruckIcon, BarChart3, ShieldCheck, Leaf, GlobeIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="grain-card flex flex-col items-center text-center p-8">
    <div className="bg-grain-yellow/10 p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold text-grain-green mb-4">{title}</h3>
    <p className="text-grain-earth">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Global Shipping",
      description: "Efficient transport solutions with vessels dispatched to major ports worldwide.",
      icon: <Ship size={32} className="text-grain-yellow-dark" />
    },
    {
      title: "Logistics Management",
      description: "Complete supply chain management from farm to destination port.",
      icon: <TruckIcon size={32} className="text-grain-yellow-dark" />
    },
    {
      title: "Quality Control",
      description: "Rigorous testing and certification to meet international standards.",
      icon: <ShieldCheck size={32} className="text-grain-yellow-dark" />
    },
    {
      title: "Market Analysis",
      description: "Expert insights on global grain markets and price forecasting.",
      icon: <BarChart3 size={32} className="text-grain-yellow-dark" />
    },
    {
      title: "Sustainability Programs",
      description: "Support for farmers implementing environmentally friendly practices.",
      icon: <Leaf size={32} className="text-grain-yellow-dark" />
    },
    {
      title: "Import/Export Consulting",
      description: "Guidance on regulations, documentation, and trade requirements.",
      icon: <GlobeIcon size={32} className="text-grain-yellow-dark" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-grain-green/5 to-grain-yellow/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive grain export solutions tailored to your specific requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
