import React from 'react';
import { Mail } from 'lucide-react';
import classroomImg from '../assets/about-classroom.png';
import classroomWideImg from '../assets/gallery-classroom-wide.png';
import graduationImg from '../assets/gallery-graduation.png';
import teamSuitsImg from '../assets/gallery-team-suits.jpg';

const FacebookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const YoutubeIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="9.7 15 9.7 9 15 12"/></svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const XIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to the VIVEC newsletter!');
  };

  return (
    <footer className="footer-new" id="contact-us">
      {/* Top Footer (Light Section) */}
      <div className="footer-top-light">
        <div className="container footer-top-grid">
          {/* Column 1: About Us */}
          <div className="footer-light-col">
            <h3>About Us</h3>
            <ul className="footer-light-links">
              <li><a href="#about-vivec">Overview Of The Trust</a></li>
              <li><a href="#about-vivec">Mission And Vision</a></li>
              <li><a href="#about-vivec">Campus Facilities</a></li>
              <li><a href="#about-vivec">Staff And Faculty Profiles</a></li>
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div className="footer-light-col programs-col">
            <h3>Programs</h3>
            <ul className="footer-light-links">
              <li><a href="#courses">Vivekananda Institute Of Vocational Training & Entrepreneurial Competence</a></li>
              <li><a href="#courses">Business Process Outsourcing Learning Center For Tribal Youths</a></li>
              <li><a href="#courses">Adult Literacy For Women</a></li>
              <li><a href="#courses">Youth Development Centers</a></li>
              <li><a href="#courses">School Support Program (SSP)</a></li>
            </ul>
          </div>

          {/* Column 3: Why VIVEC */}
          <div className="footer-light-col">
            <h3>Why VIVEC</h3>
            <ul className="footer-light-links">
              <li><a href="#about-vivec">Campus Activities</a></li>
              <li><a href="#about-vivec">Clubs And Organizations</a></li>
              <li><a href="#about-vivec">Student Services</a></li>
              <li><a href="#about-vivec">Career Services</a></li>
              <li><a href="#about-vivec">Alumni Network</a></li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div className="footer-light-col">
            <h3>Links</h3>
            <ul className="footer-light-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#admission">Admission</a></li>
              <li><a href="#sectors">Events</a></li>
              <li><a href="#sectors">Blog</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 5: Logo & Copyright Block */}
          <div className="footer-light-col logo-copyright-col">
            <div className="footer-brand-wrap">
              <span className="footer-brand-title">VIVEC</span>
              <svg viewBox="0 0 100 100" width="38" height="38" className="footer-brand-sun">
                <circle cx="50" cy="50" r="22" fill="none" stroke="#e66e19" strokeWidth="3.5" />
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 50 + 25 * Math.cos(angle);
                  const y1 = 50 + 25 * Math.sin(angle);
                  const x2 = 50 + 38 * Math.cos(angle);
                  const y2 = 50 + 38 * Math.sin(angle);
                  return (
                    <line 
                      key={i} 
                      x1={x1} 
                      y1={y1} 
                      x2={x2} 
                      y2={y2} 
                      stroke="#e66e19" 
                      strokeWidth="6.5" 
                      strokeLinecap="round" 
                    />
                  );
                })}
                <circle cx="50" cy="50" r="14" fill="#ffffff" stroke="#e66e19" strokeWidth="2" />
                <circle cx="50" cy="50" r="7" fill="#f1b418" />
              </svg>
            </div>
            
            <div className="footer-brand-sanskrit">
              तेजस्वि नावधीतमस्तु
            </div>

            <div className="footer-divider-line" />
            
            <div className="footer-brand-sub">
              Vivekanand Institute of Vocational<br />
              and Enterpreneurial Competence
            </div>

            <div className="footer-divider-line" />

            <div className="footer-copyright-text">
              © 2025 VIVEC.<br />
              All Rights Reserved
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer (Dark Section) */}
      <div className="footer-bottom-dark">
        <div className="container footer-bottom-grid">
          {/* Column 1: Connect With Us */}
          <div className="footer-bottom-col">
            <h3>Connect With Us</h3>
            <div className="social-icons-row">
              <a href="https://facebook.com" className="social-icon-circle" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon size={16} /></a>
              <a href="https://instagram.com" className="social-icon-circle" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={16} /></a>
              <a href="https://youtube.com" className="social-icon-circle" target="_blank" rel="noreferrer" aria-label="YouTube"><YoutubeIcon size={16} /></a>
              <a href="https://linkedin.com" className="social-icon-circle" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={16} /></a>
              <a href="https://twitter.com" className="social-icon-circle" target="_blank" rel="noreferrer" aria-label="X"><XIcon size={14} /></a>
            </div>
          </div>

          {/* Column 2: Subscribe With Us */}
          <div className="footer-bottom-col">
            <h3>Subscribe With Us</h3>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL" 
                className="subscribe-input"
                required 
              />
              <button type="submit" className="subscribe-btn" aria-label="Subscribe">
                <Mail size={16} />
              </button>
            </form>
          </div>

          {/* Column 3: Instagram */}
          <div className="footer-bottom-col">
            <h3>@Instagram</h3>
            <div className="instagram-row">
              <img src={classroomImg} alt="Instagram 1" className="instagram-thumb" />
              <img src={classroomWideImg} alt="Instagram 2" className="instagram-thumb" />
              <img src={graduationImg} alt="Instagram 3" className="instagram-thumb" />
              <img src={teamSuitsImg} alt="Instagram 4" className="instagram-thumb" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
