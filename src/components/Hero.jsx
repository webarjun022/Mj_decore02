import React from 'react';
import './Hero.css';
import PhotoFan from './PhotoFan';

const Hero = () => {
    return (
        <header className="hero">
            <div className="container hero-content text-center">
                <h1 className="hero-title fade-up">
                    <span className="line">Turning your</span>
                    <br />
                    <span className="line stagger-1"><em className="serif-italic">precious moments</em> into</span>
                    <br />
                    <span className="line stagger-2">lifelong <em className="serif-italic">memories.</em></span>
                </h1>

                {/* Photo Fan Layout as requested */}
                <PhotoFan />
            </div>
        </header>
    );
};

export default Hero;
