import React, { useState } from 'react';
import { Menu, X, Search, User, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const links = [
    { name: 'Home', href: '#home', hasDropdown: false },
    { name: 'About Us', href: '#about-vivec', hasDropdown: true },
    { name: 'Programs', href: '#courses', hasDropdown: true },
    { name: 'Admissions', href: '#admission', hasDropdown: false },
    { name: 'Resources', href: '#sectors', hasDropdown: true },
    { name: 'Contact Us', href: '#contact-us', hasDropdown: false }
  ];

  return (
    <header className="main-header">
      {/* Middle Header Row (White background) */}
      <div className="container header-top">
        {/* VIVEC Brand Logo */}
        <a href="/" className="logo-container">
          <div className="logo-top-row">
            <span className="logo-brand-title">VIVEC</span>
            <svg viewBox="0 0 100 100" width="30" height="30" className="logo-brand-sun">
              <circle cx="50" cy="50" r="22" fill="none" stroke="#e66e19" strokeWidth="4.5" />
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
                    strokeWidth="8" 
                    strokeLinecap="round" 
                  />
                );
              })}
              <circle cx="50" cy="50" r="14" fill="#ffffff" stroke="#e66e19" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="7" fill="#f1b418" />
            </svg>
          </div>
          
          <div className="logo-divider-line" />
          
          <div className="logo-brand-sub">
            Vivekanand Institute of Vocational<br />
            and Entrepreneurial Competence
          </div>
        </a>

        {/* Contact blocks and login buttons (Desktop) */}
        <div className="header-info-blocks">
          <div className="header-info-block">
            <span className="info-block-label">APPLY ONLINE</span>
            <a href="mailto:vivec@inquiry.org" className="info-block-value">vivec@inquiry.org</a>
          </div>

          <div className="header-info-divider" />

          <div className="header-info-block">
            <span className="info-block-label">CALL US</span>
            <a href="tel:123-456-789" className="info-block-value">123-456-789</a>
          </div>

          <div className="header-info-divider" />

          <div className="header-actions">
            <a href="#login" className="btn btn-outline-student">
              <User size={16} />
              <span>Student Login</span>
            </a>
            <a href="#donate" className="btn btn-solid-donate">DONATE</a>
          </div>
        </div>

        {/* Mobile controls: Search & hamburger menu inside white header */}
        <div className="mobile-header-controls">
          <button className="mobile-search-btn" aria-label="Search">
            <Search size={22} />
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Primary Green Navigation Bar */}
      <nav className="navbar">
        <div className="container nav-container">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link-item ${activeLink === link.name ? 'active' : ''}`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown size={14} className="nav-chevron" />}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-search-wrap">
            <button className="nav-search-btn" aria-label="Search">
              <Search size={18} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
