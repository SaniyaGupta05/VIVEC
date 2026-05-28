import React from 'react';
import campusWalking from '../assets/study-campus-walking.png';

const cards = [
  {
    title: 'Apply Now',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenea'
  },
  {
    title: 'Schedule A Visit',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenea'
  },
  {
    title: 'Contact Us',
    desc: 'Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenea'
  }
];

export default function StudyModes() {
  return (
    <section className="study-modes-exact section-padding">
      <div className="container">
        <div className="study-header-exact">
          <span className="study-subtitle-exact">THERE ARE MANY WAYS TO LEARN</span>
          <h2 className="study-title-exact">HOW DO YOU WANT TO STUDY?</h2>
        </div>

        <div className="study-grid-exact">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="study-card-exact"
              style={{ backgroundImage: `url(${campusWalking})` }}
            >
              <div className="study-card-overlay-exact">
                <div className="study-card-accent-exact" />
                <h3 className="study-card-title-exact">{card.title}</h3>
                <p className="study-card-desc-exact">{card.desc}</p>
                <div className="study-card-corner-exact" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
