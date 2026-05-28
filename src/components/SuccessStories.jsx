import React from 'react';
import inaugurationImg from '../assets/gallery-inauguration.jpg';
import classroomImg from '../assets/about-classroom.png';
import classroomWideImg from '../assets/gallery-classroom-wide.png';
import graduationImg from '../assets/gallery-graduation.png';
import teamSuitsImg from '../assets/gallery-team-suits.jpg';
import farmerLaptopImg from '../assets/gallery-farmer-laptop.png';
import greenhouseTabletImg from '../assets/gallery-greenhouse-tablet.png';
import corporateRuralImg from '../assets/gallery-corporate-rural.jpg';

const stories = [
  {
    title: 'VIVEC Lokarpan Plaque',
    tag: 'Heritage',
    image: inaugurationImg
  },
  {
    title: 'Advisory Board Meeting',
    tag: 'Campus Events',
    image: classroomImg
  },
  {
    title: 'Technical Classroom Sessions',
    tag: 'Student Labs',
    image: classroomWideImg
  },
  {
    title: 'Outdoor Stage Performance',
    tag: 'Cultural Events',
    image: graduationImg
  },
  {
    title: 'Corporate IT Training Group',
    tag: 'Student Placements',
    image: teamSuitsImg
  },
  {
    title: 'Rural Laptop Literacy Drive',
    tag: 'Outreach',
    image: farmerLaptopImg
  },
  {
    title: 'Agro-Vocational Workshop',
    tag: 'Specializations',
    image: greenhouseTabletImg
  },
  {
    title: 'Technical Advisory Consultations',
    tag: 'Consultations',
    image: corporateRuralImg
  }
];

export default function SuccessStories() {
  return (
    <section className="success-stories section-padding" id="admission">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR CAMPUS HAVE A LOT TO OFFER FOR OUR STUDENTS</span>
          <h2 className="section-title">OUR SUCCESS STORIES</h2>
        </div>

        <div className="gallery-grid">
          {stories.map((story, index) => (
            <div className="gallery-item" key={index}>
              <img 
                src={story.image} 
                alt={story.title} 
                className="gallery-item-img"
              />
              <div className="gallery-item-overlay">
                <h4>{story.title}</h4>
                <span>{story.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
