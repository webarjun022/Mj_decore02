import React from 'react';
import './BigTextSection.css';

const BigTextSection = ({ subtitle, title, ctaText, ctaLink, align = 'center' }) => {
    return (
        <section className={`big-text-section ${align}`}>
            <div className="container">
                {subtitle && <span className="section-subtitle fade-up">{subtitle}</span>}
                <h2 className="big-title fade-up stagger-1" dangerouslySetInnerHTML={{ __html: title }}></h2>
                {ctaText && (
                    <div className="cta-wrapper fade-up stagger-2">
                        <a href={ctaLink || '#'} className="cta-button dark">{ctaText}</a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BigTextSection;
