import React, { useState } from 'react';
import { Menu, X, Search, PhoneCall, MailOpen } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  const links = ['HOME', 'ABOUT VIVEC', 'COURSES', 'ADMISSION', 'SECTORS', 'CONTACT US'];

  return (
    <header className="main-header">
      {/* Header Info Area */}
      <div className="container header-top">
        <a href="/" className="logo-container">
          <div className="logo-icon">V</div>
          <div className="logo-text">
            <h1>VIVEC</h1>
            <span>Vocational Training Institute</span>
          </div>
        </a>

        <div className="header-info-blocks">
          <div className="info-block">
            <div className="info-block-icon">
              <PhoneCall size={18} />
            </div>
            <div className="info-block-text">
              <span>Call Us Today</span>
              <strong>+91 99042 55500</strong>
            </div>
          </div>

          <div className="info-block">
            <div className="info-block-icon">
              <MailOpen size={18} />
            </div>
            <div className="info-block-text">
              <span>Email Support</span>
              <strong>info@vivec.org</strong>
            </div>
          </div>

          <div className="header-actions">
            <a href="#register" className="btn btn-orange">Apply Now</a>
          </div>
        </div>
      </div>

      {/* Primary Green Navigation Bar */}
      <nav className="navbar">
        <div className="container nav-container">
          {/* Mobile hamburger button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className={activeLink === link ? 'active' : ''}
                  onClick={() => {
                    setActiveLink(link);
                    setIsOpen(false);
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button className="nav-search-btn" aria-label="Search">
            <Search size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
