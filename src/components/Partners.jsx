import React from 'react';

const companies = ['L&T', 'LOREM', 'SFT', 'ALEMBIC'];

// Repeat the companies array to make sure we have enough items for a seamless marquee loop
const marqueeItems = [...companies, ...companies, ...companies, ...companies, ...companies, ...companies];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-header">
        <span className="partners-subtitle">ALUMNI</span>
        <h2 className="partners-title-text">WORKING WITH</h2>
      </div>
      
      <div className="partners-banner">
        <div className="partners-container">
          <div className="partners-arrow left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          
          <div className="partners-slider">
            <div className="partners-track">
              {marqueeItems.map((name, index) => (
                <div className="partner-box" key={index}>
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className="partners-arrow right">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
