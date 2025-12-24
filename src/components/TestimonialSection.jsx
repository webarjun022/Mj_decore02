import React, { useState } from 'react';
import './TestimonialSection.css';

import client1 from '../assets/client/client1.jpg';
import client2 from '../assets/client/client2.jpg';
import client3 from '../assets/work/IMG_9213.jpg';

const testimonials = [
    {
        id: 1,
        image: client1,
        quote: "“MJ Decore made our 50th anniversary truly special. The décor was elegant, the arrangements were perfect, and every detail was handled with care. Our family and guests loved the celebration. Thank you for making this milestone so memorable.”",
        author: "Mr. Ramesh Kulkarni"
    },
    {
        id: 2,
        image: client2,
        quote: "“MJ Decore did a wonderful job for our baby shower. The décor was beautiful, thoughtful, and full of warmth. Everything was perfectly arranged, and our guests loved it. Thank you for making the day so special for us.”",
        author: "Mrs. Neha Patil"
    },
    {
        id: 3,
        image: client3,
        quote: "“Thank you, MJ Decore, for organizing such a lovely birthday celebration. The décor was vibrant, well-planned, and exactly what we wanted. Everyone enjoyed the party and appreciated the arrangements.”",
        author: "Mr. Amit Deshmukh"
    }
];

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    // We need to render the cards such that we assign them positions relative to the active index.
    // Positions: 0 (Front), 1 (Middle), 2 (Back). Others hidden.

    const getCardStyle = (index) => {
        // Calculate position in the cyclic queue
        // For a list of 4: [0, 1, 2, 3]
        // If active is 0: 0->Pos0, 1->Pos1, 2->Pos2, 3->Hidden
        // If active is 3: 3->Pos0, 0->Pos1, 1->Pos2, 2->Hidden

        let diff = (index - activeIndex + testimonials.length) % testimonials.length;

        // Use a data attribute for simpler CSS logic, or return style object
        if (diff === 0) return 0;
        if (diff === 1) return 1;
        if (diff === 2) return 2;
        return 'hidden';
    };

    return (
        <section className="testimonial-section">
            <div className="testimonial-header">
                <span className="testimonial-label">TESTIMONIALS</span>
                <h2 className="testimonial-title">
                    The <em>love</em> in<br />their words
                </h2>
            </div>

            <div className="card-stack">
                {testimonials.map((t, i) => (
                    <div
                        key={t.id}
                        className="t-card"
                        data-pos={getCardStyle(i)}
                    >
                        <div className="t-image-container">
                            <img src={t.image} alt="Event moment" className="t-image" />
                        </div>
                        <p className="t-quote">{t.quote}</p>
                        <span className="t-author">{t.author}</span>
                    </div>
                ))}

                {/* Button placed inside stack container to sit overlapping the bottom */}
                <button className="t-next-btn" onClick={handleNext}>
                    Next &rarr;
                </button>
            </div>
        </section>
    );
};

export default TestimonialSection;
