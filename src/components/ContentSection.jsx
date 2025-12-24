import React from 'react';
import './ContentSection.css';

const ContentSection = ({ title, subtitle, image, reverse, dark }) => {
    return (
        <section className={`content-section ${dark ? 'dark' : ''} ${reverse ? 'reverse' : ''}`} id="about">
            <div className="container section-inner">
                <div className="text-col fade-up">
                    {subtitle && <span className="subtitle">{subtitle}</span>}
                    <h2 className="section-title">{title}</h2>
                    <div className="section-body">
                        <p>
                            We believe that every event tells a story. Our goal is to craft the perfect
                            soundtrack that resonates with you and your guests. From intimiate gatherings
                            to grand celebrations, we bring passion and precision to every beat.
                        </p>
                    </div>
                    <button className="text-link">Learn More</button>
                </div>
                <div className={`image-col fade-up stagger-2`}>
                    <div className="image-wrapper">
                        {image ? (
                            <img src={image} alt={title} />
                        ) : (
                            <div className="placeholder-image"></div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
