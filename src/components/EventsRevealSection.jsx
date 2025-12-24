import React from 'react';
import { Link } from 'react-router-dom';
import './EventsRevealSection.css';

import imgHero1 from '../assets/hero/IMG_9190.jpg';
import imgHero2 from '../assets/hero/IMG_9191.jpg';
import imgHero3 from '../assets/hero/IMG_9193.jpg';
import imgReel1 from '../assets/work/reel1.png';
import imgReel2 from '../assets/work/reel2.png';
import imgReel3 from '../assets/work/reel3.png';

const EventsRevealSection = () => {
    // Using local assets as requested
    const images = [
        imgHero1,
        imgReel1,
        imgHero2,
        imgReel2,
        imgHero3,
        imgReel3,
        imgHero1, // Repeat to fill grid
        imgReel1  // Repeat to fill grid
    ];

    return (
        <section className="events-reveal-section" id="services">
            {/* Interactive Grid Layer - Items appear on hover */}
            <div className="events-image-grid">
                {images.map((src, index) => (
                    <div key={index} className="grid-item">
                        <img src={src} alt={`Event moment ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Static Text Layer */}
            <div className="events-text-layer">
                <h2 className="events-title">
                    From <em>first ideas</em> to<br />
                    <em>final moments</em>, we craft<br />
                    celebrations that feel like you.
                </h2>
                <div className="events-cta">
                    <Link to="/services" className="cta-button">Explore Services</Link>
                </div>
            </div>
        </section>
    );
};

export default EventsRevealSection;
