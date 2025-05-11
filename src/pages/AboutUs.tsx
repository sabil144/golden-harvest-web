
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-grain-green">About Golden Harvest</h1>
            <p className="text-xl text-grain-earth-dark">
              A journey from Australian farms to global tables since 1985
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
                Golden Harvest began with a simple mission: to connect Australian grain farmers with global markets by offering fair prices and transparent trade practices. Founded by James Wilson in 1985, the company started as a small operation in rural Victoria.
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
                <p className="font-serif font-bold text-2xl text-grain-green">35+</p>
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
            Meet the team guiding our vision and operations
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James Wilson",
                title: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Sarah Thompson",
                title: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Chen",
                title: "Director of International Trade",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              }
            ].map((person, index) => (
              <div key={index} className="text-center group transform transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6 relative overflow-hidden rounded-lg">
                  <img 
                    src={person.image}
                    alt={person.name}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-grain-green opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-grain-green">{person.name}</h3>
                <p className="text-grain-earth">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;

