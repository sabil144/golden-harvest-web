
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

interface ProductDetailProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
}

const ProductDetail = ({ title, description, features, image, imageAlt, reversed = false }: ProductDetailProps) => (
  <div className={`grid md:grid-cols-2 gap-10 items-center ${reversed ? 'md:flex-row-reverse' : ''} mb-16`}>
    <div className={`order-2 ${reversed ? 'md:order-1' : 'md:order-2'}`}>
      <div className="bg-white rounded-lg p-6 shadow-md overflow-hidden group">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-60 object-contain mb-4 transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
    </div>
    
    <div className={`order-1 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
      <h3 className="text-2xl font-serif font-bold text-grain-green mb-4 hover-border inline-block">
        {title}
      </h3>
      <p className="text-grain-earth-dark mb-6">
        {description}
      </p>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start group">
            <CheckCircle className="text-grain-yellow-dark mr-3 mt-1 transition-transform group-hover:scale-125 duration-300" size={20} />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Products = () => {
  const products = [
    {
      title: "Premium Wheat",
      description: "Our high-protein wheat varieties are perfect for bread, noodles, and pastries. Grown in Australia's premium wheat belt, our wheat meets the highest international quality standards.",
      features: [
        "High protein content (11-13%)",
        "Excellent milling quality",
        "Consistent batch quality",
        "Available in bulk or container shipments",
      ],
      image: "https://images.unsplash.com/photo-1467175281368-8ea735c1b30c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Premium wheat grains"
    },
    {
      title: "Barley",
      description: "Our malting and feed barley feature exceptional germination rates and high starch content, making them ideal for brewing and livestock applications worldwide.",
      features: [
        "Low moisture content (<12.5%)",
        "High germination rate for malting varieties",
        "Clean, uniform kernels",
        "Full traceability from farm to shipment",
      ],
      image: "https://images.unsplash.com/photo-1589435278793-62c056ff57a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Malting barley grains",
      reversed: true
    },
    {
      title: "Canola",
      description: "Our clean, high-oil canola seeds are ideal for crushing into premium cooking oils and protein-rich meal. Grown using sustainable practices in Australia's fertile soils.",
      features: [
        "Oil content 40-44%",
        "Low erucic acid content",
        "GMO and non-GMO varieties available",
        "Sustainable cultivation practices",
      ],
      image: "https://images.unsplash.com/photo-1595122444916-9bbdb4b93f3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Canola seeds"
    },
    {
      title: "Pulses & Legumes",
      description: "Our nutritious chickpeas, lentils, and field peas are grown in Australia's fertile soil with minimal processing, preserving their natural quality and nutritional benefits.",
      features: [
        "High protein content",
        "Cleaned and sorted to international standards",
        "Multiple varieties available",
        "Sustainably grown with natural fertilizers",
      ],
      image: "https://images.unsplash.com/photo-1611582589957-f24a39358a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Various pulses and legumes",
      reversed: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-grain-green">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Premium Australian grains cultivated to meet global quality standards.
          </p>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Premium Australian Grains</h2>
            <p className="section-subtitle">
              Discover our range of high-quality grain products grown in Australia's fertile soils.
            </p>
          </div>
          
          <div className="space-y-20">
            {products.map((product, index) => (
              <ProductDetail 
                key={index}
                title={product.title}
                description={product.description}
                features={product.features}
                image={product.image}
                imageAlt={product.imageAlt}
                reversed={product.reversed}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-grain-beige-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-grain-green mb-6">Ready to Order?</h2>
          <p className="text-lg text-grain-earth-dark mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific requirements, pricing, and delivery options.
          </p>
          <a href="/contact" className="grain-button inline-flex hover-scale">
            Request a Quote
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
