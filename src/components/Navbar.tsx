
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300', 
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-grain-green">Golden<span className="text-grain-yellow-dark">Harvest</span></span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block lg:hidden text-grain-green"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <a href="/#products" className="text-grain-green hover:text-grain-orange transition-colors duration-200 font-medium">Products</a>
            <a href="/#sustainability" className="text-grain-green hover:text-grain-orange transition-colors duration-200 font-medium">Sustainability</a>
            <a href="/#contact" className="grain-button">Request Quote</a>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-grain-beige">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
              <a 
                href="/#products" 
                className="text-grain-green hover:text-grain-orange transition-colors duration-200 py-2 text-lg font-medium border-b border-grain-beige-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="/#sustainability" 
                className="text-grain-green hover:text-grain-orange transition-colors duration-200 py-2 text-lg font-medium border-b border-grain-beige-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Sustainability
              </a>
              <a 
                href="/#contact" 
                className="grain-button text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Quote
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-grain-green hover:text-grain-orange transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-grain-green hover:text-grain-orange transition-colors duration-200 py-2 text-lg font-medium border-b border-grain-beige-light"
  >
    {children}
  </Link>
);

export default Navbar;
