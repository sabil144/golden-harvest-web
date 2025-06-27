
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
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
            <span className="text-2xl font-serif font-bold text-grain-green">Sunrise<span className="text-grain-yellow-dark">Commodities</span></span>
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
            <NavLink to="/" isActive={isActive("/")}>Home</NavLink>
            <NavLink to="/about" isActive={isActive("/about")}>About Us</NavLink>
            <NavLink to="/products" isActive={isActive("/products")}>Products</NavLink>
            <NavLink to="/services" isActive={isActive("/services")}>Services</NavLink>
            <NavLink to="/contact" isActive={isActive("/contact")}>Contact</NavLink>
            <a href="/contact" className="grain-button hover-scale">Request Quote</a>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-grain-beige">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <MobileNavLink to="/" isActive={isActive("/")} onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about" isActive={isActive("/about")} onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink to="/products" isActive={isActive("/products")} onClick={() => setIsMenuOpen(false)}>Products</MobileNavLink>
              <MobileNavLink to="/services" isActive={isActive("/services")} onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/contact" isActive={isActive("/contact")} onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              <a 
                href="/contact" 
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

const NavLink = ({ to, children, isActive = false }: { to: string; children: React.ReactNode, isActive?: boolean }) => (
  <Link 
    to={to} 
    className={`font-medium transition-colors duration-200 relative ${
      isActive ? 'text-grain-orange' : 'text-grain-green hover:text-grain-orange'
    } ${isActive ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-grain-yellow-dark' : ''}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children, isActive = false }: { to: string; onClick: () => void; children: React.ReactNode, isActive?: boolean }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`py-2 text-lg font-medium border-b border-grain-beige-light ${
      isActive ? 'text-grain-orange' : 'text-grain-green hover:text-grain-orange'
    } transition-colors duration-200`}
  >
    {children}
  </Link>
);

export default Navbar;
