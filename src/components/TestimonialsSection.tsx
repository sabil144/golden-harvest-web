
import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const Testimonial = ({ quote, name, title, company }: TestimonialProps) => (
  <div className="grain-card">
    <div className="mb-6">
      <svg className="h-8 w-8 text-grain-yellow-dark" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.352 4C4.56 7.456 1.657 13.325 1.657 18.72c0 5.607 3.763 9.227 8.533 9.227 4.497 0 8.028-3.415 8.028-7.866 0-4.261-3.02-7.46-6.92-7.46-.969 0-1.856.127-2.454.413.699-3.672 2.914-6.576 6.045-8.678L9.352 4zm16.304 0c-4.793 3.456-7.76 9.325-7.76 14.72 0 5.607 3.825 9.227 8.596 9.227 4.435 0 7.965-3.415 7.965-7.866 0-4.261-2.957-7.46-6.92-7.46-.906 0-1.792.127-2.39.413.699-3.672 2.851-6.576 6.044-8.678L25.656 4z" />
      </svg>
    </div>
    <blockquote className="text-lg italic text-grain-earth-dark mb-4">{quote}</blockquote>
    <div>
      <p className="font-bold text-grain-green">{name}</p>
      <p className="text-grain-earth text-sm">{title}, {company}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Golden Harvest has been our trusted supplier for over five years. Their consistent quality and reliability have been crucial to our operations.",
      name: "James Wilson",
      title: "Procurement Director",
      company: "European Grain Imports Ltd."
    },
    {
      quote: "The sustainability initiatives implemented by Golden Harvest align perfectly with our company values. A true partner in responsible trade.",
      name: "Mei Zhang",
      title: "CEO",
      company: "Asian Food Processing Co."
    },
    {
      quote: "Their logistics expertise and market insights have helped us navigate volatile market conditions with confidence.",
      name: "Ahmed Al-Farsi",
      title: "Operations Manager",
      company: "Middle East Flour Mills"
    }
  ];

  return (
    <section className="py-20 bg-grain-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">What Our Partners Say</h2>
          <p className="section-subtitle">
            Building lasting relationships through quality service and reliable delivery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
