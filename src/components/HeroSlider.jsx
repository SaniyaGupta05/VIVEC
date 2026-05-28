import React, { useState, useEffect, useCallback } from 'react';
import heroStudent from '../assets/hero-student.png';
import heroGraduation from '../assets/hero-graduation.png';
import heroCampus from '../assets/hero-campus.png';

const slides = [
  {
    id: 1,
    tag: 'VOCATIONAL TRAINING INSTITUTE',
    title: "GUJARAT'S LARGEST SKILL TRAINING INSTITUTE",
    desc: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'KNOW MORE',
    image: heroStudent,
    imgPosition: 'right top',
    theme: 'dark-left',      // dark gradient from left, white text on left
  },
  {
    id: 2,
    tag: 'WELCOME TO VIVEC',
    title: 'GET YOUR BEST CAREER & GET JOB WITH VIVEC',
    desc: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'KNOW MORE',
    image: heroCampus,
    imgPosition: 'center center',
    theme: 'dark-center',    // uniform dark overlay, centered text
  },
  {
    id: 3,
    tag: 'EMPOWERING DREAMS',
    title: 'BEST EDUCATION FOR THE FUTURE',
    desc: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'KNOW MORE',
    image: heroGraduation,
    imgPosition: 'left top',
    theme: 'light-right',    // light right overlay, dark navy text on right
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = useCallback((index) => {
    setCurrent((index + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="hero-slider" id="home">

      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero-slide hero-slide--${slide.theme} ${i === current ? 'active' : ''}`}
        >
          {/* Background image */}
          <img
            src={slide.image}
            alt="VIVEC"
            className="hero-image"
            style={{ objectPosition: slide.imgPosition }}
          />

          {/* Per-slide overlay */}
          <div className="hero-overlay" />

          {/* Content wrapper */}
          <div className="hero-inner">
            <div className={`hero-content hero-content--${slide.theme}`}>
              <span className="hero-tag">{slide.tag}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.desc}</p>
              <a href="#courses" className="btn btn-orange">{slide.buttonText}</a>
            </div>
          </div>
        </div>
      ))}

      {/* Prev Arrow */}
      <button className="hero-arrow hero-arrow--prev" onClick={() => goTo(current - 1)} aria-label="Previous">
        &#8249;
      </button>

      {/* Next Arrow */}
      <button className="hero-arrow hero-arrow--next" onClick={() => goTo(current + 1)} aria-label="Next">
        &#8250;
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
