import React from 'react';
import './FeaturedWorkSection.css';
import reel1 from '../assets/work/reel1.png';
import reel2 from '../assets/work/IMG_9210.jpg';
import reel3 from '../assets/work/reel3.png';

const FeaturedWorkSection = () => {
    return (
        <section className="featured-work-section" id="work">
            <div className="container featured-content">
                <div className="center-header fade-up">
                    <span className="section-subtitle">Featured Work</span>
                    <h2 className="featured-title">Stories worth <br /><em>remembering</em></h2>
                </div>

                <div className="work-grid">
                    {/* Item 1: Vertical Portrait - Reel 1 (Decor/Ceremony) */}
                    <div className="work-item vertical fade-up stagger-1" onClick={() => window.open('https://www.instagram.com/reel/DPhDMsaE02r/?igsh=bjgybmJybnFzeWdp', '_blank')}>
                        <div className="work-image-slider">
                            <img src={reel1} alt="Theme Decor" />
                            <div className="img-overlay"></div>
                            <div className="work-info-overlay">
                                <span className="work-category">Ceremony</span>
                                <h3 className="work-title">Baby Shower Decor</h3>
                                <a
                                    href="https://www.instagram.com/reel/DPhDMsaE02r/?igsh=bjgybmJybnFzeWdp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-work-btn"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View all work
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Vertical Portrait - Reel 2 (Birthday) */}
                    <div className="work-item vertical fade-up stagger-2" onClick={() => window.open('https://www.instagram.com/reel/DQZnvjEDVkZ/?igsh=NjgzM2gzdDltaHZz', '_blank')}>
                        <div className="work-image-slider">
                            <img src={reel2} alt="Birthday Celebration" />
                            <div className="img-overlay"></div>
                            <div className="work-info-overlay">
                                <span className="work-category">Birthday</span>
                                <h3 className="work-title">Birthday Decor</h3>
                                <a
                                    href="https://www.instagram.com/reel/DQZnvjEDVkZ/?igsh=NjgzM2gzdDltaHZz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-work-btn"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View all work
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Wide Layout - Reel 3 (Wide Decor) */}
                    <div className="work-item wide fade-up stagger-3" onClick={() => window.open('https://www.instagram.com/mjevents_pune/', '_blank')}>
                        <div className="work-image-slider">
                            <img src={reel3} alt="Event Venue" />
                            <div className="img-overlay"></div> 
                            <div className="work-info-overlay">
                                <span className="work-category">Highlights</span>
                                <h3 className="work-title">Grand Ambience</h3>
                                <a
                                    href="https://www.instagram.com/mjevents_pune/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-work-btn"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View all work
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile View All Button */}
                <div className="mobile-view-all-container">
                    <a href="https://www.instagram.com/mjevents_pune/" target="_blank" rel="noopener noreferrer" className="view-work-btn mobile-main-btn">
                        View all work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorkSection;
