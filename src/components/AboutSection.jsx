import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                {/* Header Section */}
                <div className="about-header fade-up">
                    <span className="about-subtitle">About Us</span>
                    <h2 className="about-title">
                        A brand you can <em>feel</em>,<br />
                        a team you can <em>trust.</em>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="about-grid">
                    <div className="about-image-col fade-up stagger-1">
                        <div className="about-image-wrapper">
                            {/* Using a high-quality team image from Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Austo Entertainment Team"
                            />
                        </div>
                    </div>

                    <div className="about-text-col fade-up stagger-2">
                        <div className="about-body">
                            <p>
                                We believe the most beautiful celebrations are built on care, creativity, and connection. That’s why families and couples trust us to understand the moment, set the perfect tone, and bring every detail together seamlessly from start to finish.
                            </p>
                            <p>
                                MJ Decore is a Pune-based event planning and décor company dedicated to making every celebration truly unforgettable. From weddings and baby showers to birthdays and corporate events, we bring an elegant yet heartfelt touch to celebrations across Maharashtra and beyond.
                            </p>
                        </div>
                        <div className="about-cta">
                            <button className="cta-button dark">Meet Our Team</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
