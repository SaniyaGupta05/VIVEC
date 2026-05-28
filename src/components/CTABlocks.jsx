import React from 'react';

/* ─── SVG icons (white outline) ─── */
const MouseKeyboardIcon = () => (
  <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="9" y1="6" x2="9" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="5" y1="10" x2="13" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="19" y="8" width="14" height="22" rx="7" stroke="white" strokeWidth="2.5"/>
    <line x1="26" y1="8" x2="26" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M9 20 Q9 34 19 34" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const CloudDownloadIcon = () => (
  <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 30a8 8 0 10-15.5-2.6A6 6 0 1016 38h20a6 6 0 000-12z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <line x1="26" y1="22" x2="26" y2="38" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <polyline points="20,33 26,39 32,33" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CertificationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="6" width="28" height="36" rx="2" stroke="white" strokeWidth="2.5"/>
    <line x1="14" y1="14" x2="30" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="14" y1="20" x2="30" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="14" y1="26" x2="22" y2="26" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="36" cy="40" r="7" stroke="white" strokeWidth="2.5"/>
    <polyline points="32,40 35,43 40,37" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const cards = [
  {
    id: 'apply-online',
    colorClass: 'orange',
    Icon: MouseKeyboardIcon,
    title: 'APPLY ONLINE',
    desc: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
    href: '#register',
  },
  {
    id: 'downloads',
    colorClass: 'blue',
    Icon: CloudDownloadIcon,
    title: 'DOWNLOADS',
    desc: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
    href: '#prospectus',
  },
  {
    id: 'certification',
    colorClass: 'yellow',
    Icon: CertificationIcon,
    title: 'CERTIFICATION',
    desc: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
    href: '#certification',
  },
];

export default function CTABlocks() {
  return (
    <section className="ctab-section">
      <div className="ctab-container">
        {cards.map((card) => (
          <div key={card.id} className={`ctab-box ${card.colorClass}`}>
            {/* Icon */}
            <div className="ctab-icon">
              <card.Icon />
            </div>

            {/* Title & description */}
            <h3>{card.title}</h3>
            <p>{card.desc}</p>

            {/* Circle › button at bottom-centre */}
            <a href={card.href} className="ctab-btn" aria-label={card.title}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="3.5"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
