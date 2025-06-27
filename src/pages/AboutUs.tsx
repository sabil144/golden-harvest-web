
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, Users, Building2, Globe2, Trophy } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-32 bg-grain-beige">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/lovable-uploads/5e6bd70a-a0db-4495-814d-630bbb391d45.png" 
            alt="Golden wheat field with rural landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-grain-green">About Sunrise Commodities</h1>
            <p className="text-xl text-grain-earth-dark">
              A journey from Australian farms to global tables since 1992
            </p>
          </div>
        </div>
      </section>
      
      {/* Our story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <p className="text-lg text-grain-earth-dark mb-6">
                Sunrise Commodities began with a simple mission: to connect Australian grain farmers with global markets by offering fair prices and transparent trade practices. Founded by Scott Merson in 1992, the company started as a small operation in rural Victoria.
              </p>
              <p className="text-lg text-grain-earth-dark mb-6">
                Today, we've grown into one of Australia's most respected grain exporters, but our core values remain the same. We prioritize quality, sustainability, and building long-lasting relationships with farmers and international buyers.
              </p>
              <p className="text-lg text-grain-earth-dark">
                With operations in all major grain-growing regions across Australia, we export premium quality wheat, barley, canola, and pulses to over 40 countries worldwide.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/4acbcd32-9479-47e1-bc7c-7244c47c5457.png"
                alt="Combine harvester in a wheat field" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-grain-yellow p-6 rounded-lg shadow-lg">
                <p className="font-serif font-bold text-2xl text-grain-green">30+</p>
                <p className="text-grain-green-dark">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 bg-grain-beige-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-grain-yellow-light p-4 rounded-full inline-flex mb-6">
                <Check className="text-grain-green h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-grain-green mb-3">Quality</h3>
              <p className="text-grain-earth">We never compromise on the quality of our grain products, ensuring they meet the highest standards.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-grain-yellow-light p-4 rounded-full inline-flex mb-6">
                <Users className="text-grain-green h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-grain-green mb-3">Partnership</h3>
              <p className="text-grain-earth">We build lasting relationships with farmers and clients based on trust and mutual benefit.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-grain-yellow-light p-4 rounded-full inline-flex mb-6">
                <Globe2 className="text-grain-green h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-grain-green mb-3">Sustainability</h3>
              <p className="text-grain-earth">We are committed to environmentally responsible farming and business practices.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-grain-yellow-light p-4 rounded-full inline-flex mb-6">
                <Trophy className="text-grain-green h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-grain-green mb-3">Excellence</h3>
              <p className="text-grain-earth">We strive for excellence in everything we do, from farming to customer service.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Our Leadership</h2>
          <p className="section-subtitle text-center mb-16">
            Meet the visionary behind our success
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left order-2 md:order-1">
                <h3 className="text-3xl font-serif font-bold text-grain-green mb-2">Scott Merson</h3>
                <p className="text-grain-orange text-lg font-medium mb-4">Managing Director & Founder</p>
                <p className="text-grain-earth-dark mb-6">
                  Scott Merson was appointed to the GTA Board in October 2024 as a Merchant Association Director. 
                  As the Managing Director of Sunrise Commodities, Scott brings over 20 years of experience in 
                  agricultural production and marketing.
                </p>
                <p className="text-grain-earth-dark mb-6">
                  Scott has been involved with several projects for industry evolution and development by 
                  increasing competition and offering alternatives. He is a member of the Standards Committee 
                  and the Transport, Storage & Ports Committee.
                </p>
                <div className="bg-grain-beige-light p-4 rounded-lg">
                  <h4 className="font-bold text-grain-green mb-2">Education</h4>
                  <ul className="text-grain-earth-dark">
                    <li>• Diploma of Business</li>
                    <li>• Bachelor of Business (Accounting)</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center order-1 md:order-2">
                <div className="relative inline-block">
                  <img 
                    src="/lovable-uploads/ebf821de-f759-4666-bdf0-e20ca2f4ba4b.png"
                    alt="Scott Merson - Managing Director of Sunrise Commodities"
                    className="w-80 h-80 object-cover rounded-lg shadow-xl mx-auto"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-grain-yellow p-4 rounded-lg shadow-lg">
                    <p className="font-serif font-bold text-xl text-grain-green">20+</p>
                    <p className="text-grain-green-dark text-sm">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
