import React from 'react';
import programVocational from '../assets/program-vocational.png';
import programBpo from '../assets/program-bpo.png';
import programClassroom from '../assets/program-classroom.png';

const courses = [
  {
    title: (
      <>
        VIVEKANANDA<br />
        INSTITUTE OF<br />
        VOCATIONAL<br />
        TRAINING &<br />
        ENTREPRENEURIAL<br />
        COMPETENCE
      </>
    ),
    duration: '2 YEAR COURSE',
    image: programVocational,
  },
  {
    title: (
      <>
        BUSINESS PROCESS<br />
        OUTSOURCING<br />
        LEARNING CENTER<br />
        FOR TRIBAL YOUTHS
      </>
    ),
    duration: '1 YEAR COURSE',
    image: programBpo,
  },
  {
    title: (
      <>
        ADULT LITERACY FOR<br />
        WOMEN
      </>
    ),
    duration: '1 YEAR COURSE',
    image: programClassroom,
  },
  {
    title: (
      <>
        YOUTH<br />
        DEVELOPMENT<br />
        CENTERS
      </>
    ),
    duration: '1 YEAR COURSE',
    image: programClassroom,
  }
];

const PlayIcon = () => (
  <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '1.5px' }}>
    <path d="M1 1.5L7 5L1 8.5V1.5Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export default function CourseGrid() {
  return (
    <section className="courses-section section-padding" id="courses">
      <div className="container">
        <div className="programs-header">
          <span className="programs-subtitle">UNIQUE FEATURES OF OUR PROGRAMS</span>
          <h2 className="programs-title">WHAT DO YOU WANT TO STUDY?</h2>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-card-image-wrap">
                <div 
                  className="course-card-bg"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
                <div className="course-card-overlay" />
                <div className="course-card-title-wrap">
                  <h3>{course.title}</h3>
                </div>
              </div>
              <div className="course-card-footer">
                <span className="course-card-duration">{course.duration}</span>
                <button className="course-card-play-btn" aria-label="Play video or view course details">
                  <PlayIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
