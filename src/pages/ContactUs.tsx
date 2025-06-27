
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import MapSection from '../components/MapSection';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-grain-green">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Reach out to our team for inquiries about grain exports, pricing, or partnership opportunities.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Information - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grain-card">
                <h3 className="text-xl font-serif font-bold text-grain-green mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <MapPin className="text-grain-orange mr-3 mt-1 group-hover:scale-125 transition-transform duration-300" size={20} />
                    <div>
                      <h4 className="font-bold text-grain-green">Main Office</h4>
                      <p>567 Commodity Plaza, Brisbane, Queensland 4000, Australia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <Phone className="text-grain-orange mr-3 mt-1 group-hover:scale-125 transition-transform duration-300" size={20} />
                    <div>
                      <h4 className="font-bold text-grain-green">Phone</h4>
                      <p>+61 7 3456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <Mail className="text-grain-orange mr-3 mt-1 group-hover:scale-125 transition-transform duration-300" size={20} />
                    <div>
                      <h4 className="font-bold text-grain-green">Email</h4>
                      <p>info@sunrisecommodities.com.au</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <Clock className="text-grain-orange mr-3 mt-1 group-hover:scale-125 transition-transform duration-300" size={20} />
                    <div>
                      <h4 className="font-bold text-grain-green">Business Hours</h4>
                      <p>Monday-Friday: 8:00AM - 6:00PM AEST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grain-card">
                <h3 className="text-xl font-serif font-bold text-grain-green mb-4">Global Offices</h3>
                <ul className="space-y-3">
                  <li className="hover:translate-x-1 transition-transform duration-200">
                    <span className="font-bold">Singapore:</span> 75 Robinson Road, #15-01
                  </li>
                  <li className="hover:translate-x-1 transition-transform duration-200">
                    <span className="font-bold">Dubai:</span> Business Bay, Bay Square, Building 7
                  </li>
                  <li className="hover:translate-x-1 transition-transform duration-200">
                    <span className="font-bold">Tokyo:</span> Shibuya, 2-24-12 Shibuya
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3 grain-card">
              <h3 className="text-xl font-serif font-bold text-grain-green mb-6">Send Us a Message</h3>
              
              <form>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-grain-earth-dark font-medium mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-grain-beige rounded-md focus:outline-none focus:ring-2 focus:ring-grain-yellow"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-grain-earth-dark font-medium mb-1">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-2 border border-grain-beige rounded-md focus:outline-none focus:ring-2 focus:ring-grain-yellow"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-grain-earth-dark font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-grain-beige rounded-md focus:outline-none focus:ring-2 focus:ring-grain-yellow"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-grain-earth-dark font-medium mb-1">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-grain-beige rounded-md focus:outline-none focus:ring-2 focus:ring-grain-yellow"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-grain-earth-dark font-medium mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-grain-beige rounded-md focus:outline-none focus:ring-2 focus:ring-grain-yellow"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-grain-earth-dark font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-grain-beige rounded-md focus:outline-none focus:ring-2 focus:ring-grain-yellow"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="grain-button w-full md:w-auto hover-scale"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      <Footer />
    </div>
  );
};

export default ContactUs;
