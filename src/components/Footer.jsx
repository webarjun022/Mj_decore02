import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">

                {/* 1. Main CTA Section */}
                <div className="footer-cta-section fade-up">
                    <h2 className="footer-cta-title">
                        Ready to make <em>memories</em><br />
                        that last a lifetime?
                    </h2>
                    <p className="footer-cta-text">
                        Reserve your date now and let’s turn your celebration into a memory that lasts.
                    </p>
                    <a href="https://wa.me/917057472800" target="_blank" rel="noopener noreferrer" className="footer-cta-btn">
                        Let's Create Magic
                    </a>
                </div>

                <div className="footer-divider fade-up stagger-1"></div>

                {/* 2. Main Navigation Grid */}
                <div className="footer-grid fade-up stagger-2">
                    {/* Column 1: Brand & Socials */}
                    <div className="footer-col brand-col">
                        <h3 className="footer-brand">MJ DECORE</h3>
                        <p className="footer-bio">
                            Pune's premier event planning and decor studio. We craft elegant, heartfelt celebrations tailored to your unique story.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.instagram.com/mjevents_pune?igsh=Mm5oeXU1eW1peDNs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                            <a href="#" aria-label="Facebook">Facebook</a>
                            <a href="#" aria-label="Pinterest">Pinterest</a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col explore-col">
                        <h4>Explore</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#work">Featured Work</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Weddings</a></li>
                            <li><a href="#">Baby Showers</a></li>
                            <li><a href="#">Corporate Events</a></li>
                            <li><a href="#">Birthday Parties</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="footer-col contact-col">
                        <h4>Get in Touch</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <span>Email</span>
                                <a href="mailto:mjdecorr25@gmail.com">mjdecorr25@gmail.com</a>
                            </li>
                            <li>
                                <span>Phone</span>
                                <a href="tel:+917057472800">+91 70574 72800</a>
                            </li>
                            <li>
                                <span>Studio</span>
                                <p>Talegaon Dahabade,<br />Pune, Maharashtra-410507</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3. Bottom Bar */}
                {/* 3. Bottom Bar */}
                <div className="footer-bottom fade-up stagger-3">
                    <div className="footer-copyright">
                        © 2025 MJ Decore
                    </div>

                    <div className="site-credit">
                        <a href="https://wa.me/919172182967" target="_blank" rel="noopener noreferrer" className="creator-link">
                            <span>Designed & Developed by</span>
                            <strong>codeharsh27</strong>
                            <FaHeart className="heart-icon" />
                        </a>
                    </div>

                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
