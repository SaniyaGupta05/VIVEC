import React from 'react';

const features = [
  {
    title: 'MALLEABLE STUDY TIME',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes,',
    color: '#1e70b8',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
        <circle cx="12" cy="12" r="3" />
        <path d="m19 19-3-3" />
      </svg>
    )
  },
  {
    title: 'PLACEMENT ASSISTANCE',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes,',
    color: '#0b7e3e',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="18" cy="18" r="2" />
        <path d="m22 22-1.5-1.5" />
      </svg>
    )
  },
  {
    title: 'EASY TO ACCESS',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes,',
    color: '#e66e19',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'STUDY ON THE GO',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes,',
    color: '#e66e19',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    )
  },
  {
    title: 'UPDATED SYLLABUS',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes,',
    color: '#1e70b8',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
    )
  },
  {
    title: 'PRACTICAL & INTERACTIVE',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo Ligula Eget Dolor. Aenean Massa. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes,',
    color: '#0b7e3e',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4Z" />
        <path d="M16 8h2" />
        <path d="M16 12h2" />
        <path d="M8 8h4v8H8z" />
      </svg>
    )
  }
];

export default function FeatureGrid() {
  return (
    <section className="features-section-exact section-padding">
      <div className="container">
        <div className="features-grid-exact">
          {features.map((feat, index) => (
            <div className="feature-card-exact" key={index}>
              <div 
                className="feature-icon-wrapper-exact"
                style={{ backgroundColor: feat.color }}
              >
                {feat.icon}
              </div>
              <h3 className="feature-title-exact">{feat.title}</h3>
              <p className="feature-desc-exact">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
