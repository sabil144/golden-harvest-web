
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import ServicesSection from '../components/ServicesSection';
import GrowerCommitmentSection from '../components/GrowerCommitmentSection';
import MarketPricesSection from '../components/MarketPricesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import MapSection from '../components/MapSection';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.fade-in-up, .product-card, .grain-card');
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
          element.classList.add('animate-on-scroll');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <GrowerCommitmentSection />
      <MarketPricesSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
