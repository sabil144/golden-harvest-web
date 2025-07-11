
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Ship, TruckIcon, BarChart3, ShieldCheck, Leaf, GlobeIcon, ChevronRight, Download } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/878a87ed-afc7-4aec-8a76-775e445314e8.png" 
            alt="Australian canola field" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-grain-green opacity-75"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">
              Comprehensive grain export solutions tailored to meet the needs of global markets
            </p>
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="section-title mb-6">Export Solutions</h2>
            <p className="text-lg text-grain-earth-dark max-w-4xl">
              At Sunrise Commodities, we offer end-to-end export solutions designed to meet the diverse needs of our international clients. From quality control and logistics to market analysis and consulting, our services ensure seamless grain export from Australian farms to global markets.
            </p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                title: "Global Shipping",
                description: "Our global shipping solutions ensure your grain arrives at its destination on time and in optimal condition. We work with trusted shipping partners to provide reliable ocean freight services to major ports worldwide.",
                details: [
                  "Bulk vessel chartering and management",
                  "Container shipping arrangements",
                  "Port coordination services",
                  "Real-time cargo tracking",
                  "Marine insurance coverage"
                ],
                icon: <Ship size={48} className="text-grain-yellow-dark" />,
                image: "/lovable-uploads/3de05b2b-eccd-462d-bf0f-e8ccb5bf134c.png"
              },
              {
                title: "Logistics Management",
                description: "Our comprehensive logistics services cover the entire journey of your grain, from Australian farms to international destinations. We manage all aspects of the supply chain to ensure efficiency and reliability.",
                details: [
                  "Domestic transport from farms to ports",
                  "Storage and handling at port facilities",
                  "Customs documentation and compliance",
                  "Container packing and fumigation",
                  "Integrated supply chain management"
                ],
                icon: <TruckIcon size={48} className="text-grain-yellow-dark" />,
                image: "/lovable-uploads/bdb24574-ad55-40ea-a40a-8a3ea6f5a52c.png"
              },
              {
                title: "Quality Control",
                description: "We maintain the highest standards of grain quality through rigorous testing and certification processes. Our quality control procedures ensure that every shipment meets international standards and client specifications.",
                details: [
                  "Independent laboratory testing",
                  "Quality certification documentation",
                  "Pre-shipment inspections",
                  "HACCP and GMP compliance",
                  "Contaminant screening and monitoring"
                ],
                icon: <ShieldCheck size={48} className="text-grain-yellow-dark" />,
                image: "/lovable-uploads/982ce716-5417-4440-a4d8-cbb760e2383f.png"
              },
              {
                title: "Market Analysis",
                description: "Stay ahead with our expert market analysis and price forecasting services. We provide valuable insights into global grain markets to help you make informed trading decisions.",
                details: [
                  "Commodity price trend analysis",
                  "Supply and demand forecasting",
                  "Regional market reports",
                  "Currency impact assessments",
                  "Customized market intelligence"
                ],
                icon: <BarChart3 size={48} className="text-grain-yellow-dark" />,
                image: "/lovable-uploads/8d68302b-5a64-4634-a39e-67628084b61a.png"
              },
            ].map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                  <div className="bg-grain-yellow/10 p-4 rounded-full inline-flex mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-grain-green mb-4">{service.title}</h3>
                  <p className="text-grain-earth-dark mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="text-grain-yellow-dark mr-2 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 bg-grain-beige-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">Additional Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-2 transition-transform">
              <div className="bg-grain-yellow/10 p-4 rounded-full inline-flex mb-6">
                <Leaf className="text-grain-green h-6 w-6" />
              </div>
              <div className="bg-grain-yellow px-4 py-2 rounded-md mb-4">
                <h3 className="text-xl font-serif font-bold text-grain-green-dark">Sustainability Programs</h3>
              </div>
              <p className="text-grain-earth mb-6">
                We support farmers in implementing environmentally friendly practices through our sustainability programs. These initiatives help reduce environmental impact while maintaining high crop yields.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="text-grain-yellow-dark mr-2 mt-1 flex-shrink-0" />
                  <span>Sustainable farming certification</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-grain-yellow-dark mr-2 mt-1 flex-shrink-0" />
                  <span>Carbon footprint reduction guidance</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-grain-yellow-dark mr-2 mt-1 flex-shrink-0" />
                  <span>Regenerative agriculture training</span>
                </li>
              </ul>
              <a href="#contact" className="grain-button-secondary inline-flex items-center mt-auto self-start">
                Learn More
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-2 transition-transform">
              <div className="bg-grain-yellow/10 p-4 rounded-full inline-flex mb-6">
                <GlobeIcon className="text-grain-green h-6 w-6" />
              </div>
              <div className="bg-grain-yellow px-4 py-2 rounded-md mb-4">
                <h3 className="text-xl font-serif font-bold text-grain-green-dark">Import/Export Consulting</h3>
              </div>
              <p className="text-grain-earth mb-6">
                Navigate the complexities of international grain trade with our expert consulting services. We provide guidance on regulations, documentation, and trade requirements to ensure smooth export processes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="text-grain-yellow-dark mr-2 mt-1 flex-shrink-0" />
                  <span>Trade agreement compliance</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-grain-yellow-dark mr-2 mt-1 flex-shrink-0" />
                  <span>Import regulation guidance</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-grain-yellow-dark mr-2 mt-1 flex-shrink-0" />
                  <span>Documentation preparation</span>
                </li>
              </ul>
              <a href="#contact" className="grain-button-secondary inline-flex items-center mt-auto self-start">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-grain-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Export with Sunrise Commodities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your grain export needs and discover how our services can help you access global markets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-white text-grain-green px-6 py-3 rounded-md font-medium hover:bg-grain-beige transition-colors duration-300 flex items-center justify-center">
              Contact Us
            </a>
            <a href="#" className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
              <Download size={18} className="mr-2" /> Download Service Brochure
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
