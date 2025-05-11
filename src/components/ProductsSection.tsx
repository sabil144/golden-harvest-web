
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => (
  <div className="grain-card flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="h-48 rounded-t-lg overflow-hidden bg-white p-4 flex items-center justify-center">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-125" 
      />
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-serif font-bold text-grain-green mb-2">{title}</h3>
      <p className="text-grain-earth">{description}</p>
    </div>
    <div className="px-6 pb-6 mt-auto">
      <a 
        href={`/products#${title.toLowerCase().replace(/\s+/g, '-')}`} 
        className="text-grain-orange font-medium hover:text-grain-orange-dark transition-colors hover-border inline-flex items-center"
      >
        View Details
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>
  </div>
);

const ProductsSection = () => {
  const products = [
    {
      title: "Premium Wheat",
      description: "High-protein wheat varieties perfect for bread, noodles, and pastries. Grown in Australia's premium wheat belt.",
      image: "/lovable-uploads/9843c61d-01d2-440f-bdff-b1e68bc1430f.png"
    },
    {
      title: "Barley",
      description: "Malting and feed barley with exceptional germination and high starch content for brewing and livestock.",
      image: "/lovable-uploads/dfb2ce1c-cd55-4e6f-8012-e7d7a68f36f5.png"
    },
    {
      title: "Canola",
      description: "Clean, high-oil canola seeds ideal for crushing into premium cooking oils and protein-rich meal.",
      image: "/lovable-uploads/3c32d7ff-f633-420d-b40b-df333f3d4ab2.png"
    },
    {
      title: "Pulses & Legumes",
      description: "Nutritious chickpeas, lentils, and field peas grown in Australia's fertile soil with minimal processing.",
      image: "/lovable-uploads/a9820ee6-d16b-4d8c-9fcd-b8cddd986c2a.png"
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
          <a href="/products" className="grain-button inline-flex items-center hover-scale">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
