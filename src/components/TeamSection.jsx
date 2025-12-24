import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    return (
        <section className="team-section" id="team">
            <div className="container team-content">
                <div className="team-image-col fade-up">
                    <div className="team-image-wrapper">
                        {/* Placeholder for the team image, styled to match the aspect ratio */}
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Austo Team" />
                    </div>
                </div>
                <div className="team-text-col fade-up stagger-1">
                    <div className="team-body">
                        <p>
                            We believe the best parties are built on care as much as sound.
                            That is why couples trust us to read the room, set the tone, and keep the floor alive from start to finish.
                        </p>
                        <p className="mt-4">
                            Austo Entertainment is an Orange County DJ team dedicated to making every celebration unforgettable.
                            We bring a premium yet approachable touch to weddings and events across Southern California and beyond.
                        </p>
                    </div>
                    <div className="team-cta">
                        <a href="#team" className="cta-button dark">Meet Our Team</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
