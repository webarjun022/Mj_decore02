import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaInstagram, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import vinylImg from '../assets/vinyl.png';
import './MusicFloatingButton.css';

// Placeholder or real URL for "old music"
// You can replace this with a local file import if available
// Soft, silent/ambient acoustic guitar track (Royalty Free from Pixabay)
// Track: "Just Relax" - lighter and softer than the previous one
const MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/05/05/audio_13b6528756.mp3?filename=just-relax-11157.mp3";

const MusicFloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Initialize Audio
    useEffect(() => {
        audioRef.current = new Audio(MUSIC_URL);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.2; // Lower volume for "silent/soft" feel as requested

        // Attempt Auto-Play
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Auto-play started!
                setIsPlaying(true);
            }).catch(error => {
                // Auto-play was prevented.
                console.log("Autoplay prevented. Waiting for user interaction.");
                setIsPlaying(false);

                const enableAudio = () => {
                    audioRef.current.play().then(() => {
                        setIsPlaying(true);
                        document.removeEventListener('click', enableAudio);
                        document.removeEventListener('scroll', enableAudio);
                    }).catch(err => console.log("Still prevented:", err));
                };

                document.addEventListener('click', enableAudio);
                document.addEventListener('scroll', enableAudio);
            });
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const togglePlay = (e) => {
        e.stopPropagation(); // Prevent closing menu if helpful, or just toggle
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(err => console.error("Audio play failed:", err));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-floating-container">
            {/* Menu Options (Vertical Stack) */}
            <div className={`music-menu ${isOpen ? 'open' : ''}`}>

                {/* WhatsApp */}
                <a href="https://wa.me/917057472800" target="_blank" rel="noopener noreferrer" className="menu-item whatsapp" title="WhatsApp">
                    <FaWhatsapp />
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/mjevents_pune?igsh=Mm5oeXU1eW1peDNs" target="_blank" rel="noopener noreferrer" className="menu-item instagram" title="Instagram">
                    <FaInstagram />
                </a>

                {/* Volume Toggle */}
                <button className="menu-item volume" onClick={togglePlay} title={isPlaying ? "Mute" : "Play"}>
                    {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
                </button>
            </div>

            {/* Main Rotating Button */}
            <button
                className={`main-music-btn ${isPlaying ? 'rotating' : ''}`}
                onClick={toggleOpen}
                title="Music & Contact"
            >
                <img src={vinylImg} alt="Music" className="disc-image" />
            </button>
        </div>
    );
};

export default MusicFloatingButton;
