import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import FeaturedWorkSection from '../components/FeaturedWorkSection';
import AboutSection from '../components/AboutSection';
import EventsRevealSection from '../components/EventsRevealSection';
import TestimonialSection from '../components/TestimonialSection';

const HomePage = () => {
    useEffect(() => {
        // Ensure scroll to top when mounting home
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="page-enter">
            <Hero />
            <WhyUs />
            <FeaturedWorkSection />
            <AboutSection />
            <EventsRevealSection />
            <TestimonialSection />
        </main>
    );
};

export default HomePage;
