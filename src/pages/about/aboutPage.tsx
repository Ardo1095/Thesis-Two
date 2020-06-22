import React, { FC } from 'react';
import PageJumbotron from '../../components/pageJumbotron/pageJumbotron';
import aboutUsImage from '../../assets/aboutUsImage.jpg';
import AboutSection from './aboutSection/aboutSection';
import StatsSection from './statsSection/statsSection';
import Testimonials from './testimonials/testimonials';

const AboutPage: FC = () => (
  <>
    <PageJumbotron
      backgroundImage={aboutUsImage}
      title="About Us"
    />
    <AboutSection />
    <StatsSection />
    <Testimonials />
  </>
);

export default AboutPage;
