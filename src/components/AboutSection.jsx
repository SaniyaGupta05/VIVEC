import React from 'react';
import aboutClassroom from '../assets/about-classroom.png';

export default function AboutSection() {
  return (
    <section className="about-section" id="about-vivec">
      <div className="container">
        <div className="about-grid">

          {/* Left: plain photo */}
          <div className="about-image-wrapper">
            <img
              src={aboutClassroom}
              alt="VIVEC Classroom Training"
              className="about-image-main"
            />
          </div>

          {/* Right: text */}
          <div className="about-content">
            <span className="about-subtitle">VOCATIONAL TRAINING COLLEGE</span>
            <h2 className="about-title">VIVEC</h2>
            <p className="about-desc">
              donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. nulla
              consequat massa quis enim. donec pede justo, fringilla vel, aliquet nec,
              vulputate eget, arcu. in enim justo, rhoncus ut, imperdiet a, venenatis
              vitae, justo. nullam dictum felis eu pede mollis pretium. integer tincidunt.
              cras dapibus. vivamus elementum
            </p>
            <a href="#about" className="about-know-more">
              KNOW MORE&nbsp;↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
