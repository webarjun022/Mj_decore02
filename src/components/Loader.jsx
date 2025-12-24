import React, { useEffect, useState } from 'react';
import './Loader.css';
import logo from '../assets/logo/11.png';

const Loader = ({ onLoaded }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading time or wait for window load
        const timer = setTimeout(() => {
            setLoaded(true);
            setTimeout(() => {
                onLoaded(); // Signal parent that animation is done
            }, 1000); // Wait for transition
        }, 1500);

        return () => clearTimeout(timer);
    }, [onLoaded]);

    return (
        <div className={`loader ${loaded ? 'loaded' : ''}`}>
            <img src={logo} alt="Austo Entertainment" className="loader-logo-image" />
        </div>
    );
};

export default Loader;
