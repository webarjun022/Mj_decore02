import React, { useEffect } from 'react';
import './ServicesPage.css';

// Using existing assets for now (placeholders for specific categories)
import imgBirthday from '../assets/hero/IMG_9190.jpg';
import imgBaby from '../assets/work/IMG_9217.jpg';
import imgWedding from '../assets/work/wedding.jpg';
import imgFloral from '../assets/work/flora setup.jpg';

// Gallery Images from assets/work
import g1 from '../assets/work/reel1.png';
import g2 from '../assets/work/reel2.png';
import g3 from '../assets/work/reel3.png';
import img9190 from '../assets/work/IMG_9190.jpg';
import img9191 from '../assets/work/IMG_9191.jpg'; // Assuming valid from hero folder copy? No, list_dir showed IMG_9191.jpg in work folder too? 
// list_dir output: IMG_9190.jpg, IMG_9191.jpg, etc IN src/assets/work. Yes.
import img9192 from '../assets/work/IMG_9192.jpg';
import img9193 from '../assets/work/IMG_9193.jpg';
import img9194 from '../assets/work/IMG_9194.jpg';
import img9210 from '../assets/work/IMG_9210.jpg';
import img9212 from '../assets/work/IMG_9212.jpg';
import img9213 from '../assets/work/IMG_9213.jpg';
import img9217 from '../assets/work/IMG_9217.jpg';


const services = [
    {
        id: 1,
        title: "Birthday Parties",
        desc: "From first cakes to milestone celebrations, we create magical themes that spark joy.",
        image: imgBirthday
    },
    {
        id: 2,
        title: "Baby Showers",
        desc: "Welcoming new life with tender, elegant, and heartwarming decor setups.",
        image: imgBaby
    },
    {
        id: 3,
        title: "Wedding Decor",
        desc: "Transforming your big day into a breathtaking fairytale with bespoke designs.",
        image: imgWedding
    },
    {
        id: 4,
        title: "Floral Setup",
        desc: "Exquisite floral arrangements that add life, color, and fragrance to every corner.",
        image: imgFloral
    }
];

const galleryImages = [
    g1, g2, g3,
    img9190, img9192, img9194,
    img9210, img9212, img9213,
    img9217, img9191, img9193
];

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services-page page-enter">
            {/* Header Section */}
            <section className="services-hero">
                <div className="services-hero-content fade-up">
                    <span className="services-subtitle">What We Do</span>
                    <h1 className="services-title">Curating <em>Perfection</em></h1>
                    <p className="services-desc">
                        Every event is a story waiting to be told. We specialize in bringing those stories to life with precision, creativity, and love.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="services-list-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={service.id} className="service-card fade-up">
                                <div className="service-img-container">
                                    <img src={service.image} alt={`MJ Decore - ${service.title} Service`} loading="lazy" />
                                </div>
                                <div className="service-info">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="services-gallery-section">
                <div className="container">
                    <div className="center-header fade-up">
                        <span className="section-subtitle">Visual Diary</span>
                        <h2 className="gallery-title">A Glimpse of <em>Work</em></h2>
                    </div>

                    <div className="gallery-grid">
                        {galleryImages.map((src, index) => (
                            <div key={index} className="gallery-item">
                                <img src={src} alt={`MJ Decore Event Styling Sample ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
