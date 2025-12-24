import React, { useState, useEffect } from 'react';
import './PhotoFan.css';

import img1 from '../assets/hero/IMG_9190.jpg';
import img2 from '../assets/hero/IMG_9191.jpg';
import img3 from '../assets/hero/IMG_9217.jpg';

const PhotoFan = () => {
    // Images from src/assets/hero
    const photos = [img1, img2, img3];

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => prev - 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getPositionClass = (index) => {
        const numPhotos = 3;
        // We want to map the 3 items to positions: Left (2), Center (3), Right (4)
        const targetPositions = [2, 3, 4];

        // Cyclic index 0..2
        const posIndex = ((index + rotation) % numPhotos + numPhotos) % numPhotos;

        return `card-${targetPositions[posIndex]}`;
    };

    return (
        <div className="photo-fan-container fade-up stagger-2">
            <div className="photo-fan">
                {photos.map((src, index) => (
                    <div key={index} className={`fan-card ${getPositionClass(index)}`}>
                        <img src={src} alt={`Moment ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoFan;
