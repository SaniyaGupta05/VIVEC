import React from 'react';
import whyBg from '../assets/gallery-classroom-wide.png';

/* White SVG icons matching the reference */
const CertIcon = () => (
  <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="30" height="38" rx="2" stroke="white" strokeWidth="2.5"/>
    <line x1="12" y1="15" x2="30" y2="15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="12" y1="22" x2="30" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="12" y1="29" x2="22" y2="29" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="38" cy="42" r="7" stroke="white" strokeWidth="2.5"/>
    <polyline points="34,42 37,45 42,39" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GradIcon = () => (
  <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="26,8 48,18 26,28 4,18" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M14 23v10c0 5 6 9 12 9s12-4 12-9V23" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="48" y1="18" x2="48" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const BookIcon = () => (
  <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="6" width="32" height="40" rx="3" stroke="white" strokeWidth="2.5"/>
    <line x1="8" y1="38" x2="40" y2="38" stroke="white" strokeWidth="2.5"/>
    <line x1="16" y1="16" x2="36" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="16" y1="23" x2="36" y2="23" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const PersonIcon = () => (
  <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="14" r="8" stroke="white" strokeWidth="2.5"/>
    <path d="M10 44c0-9 7-16 16-16s16 7 16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="42" cy="22" r="5" stroke="white" strokeWidth="2"/>
    <line x1="42" y1="27" x2="42" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const stats = [
  { Icon: CertIcon,   number: '8,700+', label: 'SUCCESSFULLY TRAINED' },
  { Icon: GradIcon,   number: '294+',   label: 'STUDENTS PLACED' },
  { Icon: BookIcon,   number: '14+',    label: 'SKILL-ORIENTED COURSES' },
  { Icon: PersonIcon, number: '65%',    label: 'LITERACY CLASSES' },
];

export default function WhyChooseUs() {
  return (
    <section
      className="wcu-section"
      id="sectors"
      style={{ backgroundImage: `url(${whyBg})` }}
    >
      {/* green overlay */}
      <div className="wcu-overlay" />

      <div className="wcu-inner">
        {/* Header */}
        <div className="wcu-header">
          <span className="wcu-subtitle">THE NUMBER SAY IT ALL</span>
          <h2 className="wcu-title">WHY CHOOSE US</h2>
        </div>

        {/* Stats row */}
        <div className="wcu-stats">
          {stats.map((stat, i) => (
            <div className="wcu-stat" key={i}>
              <div className="wcu-stat-icon"><stat.Icon /></div>
              <div className="wcu-stat-number">{stat.number}</div>
              <div className="wcu-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
