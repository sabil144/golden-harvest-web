
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => (
  <div className="grain-card flex flex-col">
    <div className="h-48 rounded-t-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-serif font-bold text-grain-green mb-2">{title}</h3>
      <p className="text-grain-earth">{description}</p>
    </div>
    <div className="p-6 pt-0">
      <a href="#contact" className="text-grain-orange font-medium hover:text-grain-orange-dark transition-colors">
        Learn more →
      </a>
    </div>
  </div>
);

const ProductsSection = () => {
  const products = [
    {
      title: "Premium Wheat",
      description: "High-protein wheat varieties perfect for bread, noodles, and pastries. Grown in Australia's premium wheat belt.",
      image: "https://images.unsplash.com/photo-1467175281368-8ea735c1b30c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Barley",
      description: "Malting and feed barley with exceptional germination and high starch content for brewing and livestock.",
      image: "https://images.unsplash.com/photo-1589435278793-62c056ff57a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Canola",
      description: "Clean, high-oil canola seeds ideal for crushing into premium cooking oils and protein-rich meal.",
      image: "https://images.unsplash.com/photo-1595122444916-9bbdb4b93f3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Pulses & Legumes",
      description: "Nutritious chickpeas, lentils, and field peas grown in Australia's fertile soil with minimal processing.",
      image: "https://images.unsplash.com/photo-1611582589957-f24a39358a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Our Premium Products</h2>
          <p className="section-subtitle">
            Delivering high-quality Australian grain products to meet global market demands.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="grain-button inline-flex items-center">
            Request Product Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
