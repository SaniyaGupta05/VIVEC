import React from 'react';
import TopUtilityBar from './components/TopUtilityBar';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import CTABlocks from './components/CTABlocks';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import CourseGrid from './components/CourseGrid';
import StudyModes from './components/StudyModes';
import FeatureGrid from './components/FeatureGrid';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <TopUtilityBar />
      <Navbar />
      <HeroSlider />
      <CTABlocks />
      <AboutSection />
      <WhyChooseUs />
      <CourseGrid />
      <StudyModes />
      <FeatureGrid />
      <Testimonials />
      <Partners />
      <SuccessStories />
      <Footer />
    </div>
  );
}
