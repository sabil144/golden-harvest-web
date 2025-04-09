
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Get In Touch</h2>
          <p className="section-subtitle">
            Reach out to discuss your grain supply needs or request more information.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grain-card">
              <h3 className="text-xl font-serif font-bold text-grain-green mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-grain-orange mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-grain-green">Main Office</h4>
                    <p>123 Grain Drive, Melbourne, Victoria 3000, Australia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-grain-orange mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-grain-green">Phone</h4>
                    <p>+61 3 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-grain-orange mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-grain-green">Email</h4>
                    <p>info@goldenharvest.com.au</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-grain-orange mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-grain-green">Business Hours</h4>
                    <p>Monday-Friday: 8:30AM - 5:30PM AEST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grain-card">
              <h3 className="text-xl font-serif font-bold text-grain-green mb-4">Global Offices</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-bold">Singapore:</span> 50 Raffles Place, #30-00
                </li>
                <li>
                  <span className="font-bold">Dubai:</span> Jumeirah Lakes Towers, Cluster D
                </li>
                <li>
                  <span className="font-bold">Shanghai:</span> Pudong New Area, 200120
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
                className="grain-button w-full md:w-auto"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
