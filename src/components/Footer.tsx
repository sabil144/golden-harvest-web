
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-grain-green text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Sunrise Commodities</h3>
            <p className="text-white/80 mb-4">
              Premium Australian grain exports for global markets, committed to quality and sustainability.
            </p>
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Sunrise Commodities. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-white/80 hover:text-white transition-colors">Our Products</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#sustainability" className="text-white/80 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Global Shipping</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Quality Control</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Logistics Management</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Export Consulting</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">
              Subscribe to receive market insights and company updates.
            </p>
            <form>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-grain-green"
                />
                <button 
                  type="submit"
                  className="bg-grain-yellow text-grain-green-dark px-4 py-2 rounded-r-md hover:bg-grain-yellow-dark transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            Quality Australian grain since 1992
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
