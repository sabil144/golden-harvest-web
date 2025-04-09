
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
          <a href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-grain-green">Golden<span className="text-grain-yellow-dark">Harvest</span></span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block lg:hidden text-grain-green"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#sustainability">Sustainability</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="#contact" className="grain-button">Request Quote</a>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-grain-beige">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink href="#products" onClick={() => setIsMenuOpen(false)}>Products</MobileNavLink>
              <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="#sustainability" onClick={() => setIsMenuOpen(false)}>Sustainability</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              <a 
                href="#contact" 
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

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-grain-green hover:text-grain-orange transition-colors duration-200 font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-grain-green hover:text-grain-orange transition-colors duration-200 py-2 text-lg font-medium border-b border-grain-beige-light"
  >
    {children}
  </a>
);

export default Navbar;
