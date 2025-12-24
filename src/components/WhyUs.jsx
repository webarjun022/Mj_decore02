import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <section className="why-us-section">
            {/* Top Wave Separator - Color is Cream to match body background */}
            <div className="wave-divider top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

            <div className="why-us-content-wrapper">
                <div className="max-width-container">
                    <div className="why-us-layout">
                        <div className="why-us-label-col">
                            <span className="why-us-label">WHY US?</span>
                        </div>
                        <div className="why-us-text-col">
                            <h2 className="why-us-title">
                                More than planning, <br />
                                <span className="serif-italic">it’s about bringing hearts together.</span>
                            </h2>
                            <div className="why-us-desc-container">
                                <p className="why-us-desc">
                                    At MJ Decore, we don’t just plan events; we create moments that stay with you long after the celebration ends.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Separator */}
            <div className="wave-divider bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default WhyUs;
