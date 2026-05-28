import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The hands-on training on actual CNC machines at VIVEC gave me the confidence I needed. Within two weeks of finishing my course, I got placed as a junior machinist at L&T!",
    name: "Amit Patel",
    info: "CNC Machinist Graduate (2025)"
  },
  {
    text: "I took the part-time electrical course while working during the day. The instructors were highly supportive and explained concepts practically, which made complex circuits easy to grasp.",
    name: "Rajesh Solanki",
    info: "Electrical & Industrial Systems Graduate (2024)"
  },
  {
    text: "VIVEC's computer IT training is updated with real industry skills. Their placement coordinators prepared us thoroughly for tech interviews, and now I work as an IT Support Associate.",
    name: "Neha Mehta",
    info: "Computers & IT Graduate (2025)"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">STUDENT VOICES</span>
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="testimonial-container">
          <span className="testimonial-quote-icon">“</span>
          
          <div className="testimonial-slider">
            {testimonials.map((test, index) => (
              <div 
                key={index} 
                className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <p className="testimonial-text">"{test.text}"</p>
                <div className="testimonial-author">
                  <h4>{test.name}</h4>
                  <span>{test.info}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-nav">
            <button 
              className="testimonial-nav-btn" 
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="testimonial-nav-btn" 
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
