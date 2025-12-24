import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import useScrollAnimation from './hooks/useScrollAnimation';
import MusicFloatingButton from './components/MusicFloatingButton';
import './App.css';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // Scroll to top on refresh
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    useScrollAnimation(!loading, location.pathname);

    return (
        <div className="app-main">
            <Loader onLoaded={() => setLoading(false)} />

            {/* Side Tree Videos - Persistent */}
            <div className="tree-container left">
                <video autoPlay loop muted playsInline className="tree-video">
                    <source src="https://pub-c17ec11a1b364b7b93210b8a31c6a989.r2.dev/tree-vp9.webm" type="video/webm" />
                    <source src="https://pub-c17ec11a1b364b7b93210b8a31c6a989.r2.dev/tree-hevc.mov" type="video/quicktime" />
                </video>
            </div>

            <div className="tree-container right">
                <video autoPlay loop muted playsInline className="tree-video">
                    <source src="https://pub-c17ec11a1b364b7b93210b8a31c6a989.r2.dev/tree-vp9.webm" type="video/webm" />
                    <source src="https://pub-c17ec11a1b364b7b93210b8a31c6a989.r2.dev/tree-hevc.mov" type="video/quicktime" />
                </video>
            </div>

            <div className="app-container">
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Routes>

                <MusicFloatingButton />
                <Footer />
            </div>
        </div>
    );
}

export default App;
