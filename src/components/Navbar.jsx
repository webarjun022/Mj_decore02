import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo/11.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling DOWN
        setIsVisible(false);
      } else {
        // Scrolling UP
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  // Helper for hash links to work from other pages
  const getLink = (hash) => {
    return location.pathname === '/' ? hash : `/${hash}`;
  };

  return (
    <>
      <nav className={`navbar fade-up visible ${!isVisible ? 'hidden' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container navbar-content">
          <div className="nav-group left desktop-only">
            <a href={getLink('#work')} className="nav-link">Our Work</a>
            <a href={getLink('#about')} className="nav-link">About Us</a>
            <Link to="/services" className="nav-link">Our Services</Link>
          </div>

          <div className="nav-group center">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Austo Entertainment" className="nav-logo-image" />
            </Link>
          </div>

          <div className="nav-group right desktop-only">
            <a href="https://wa.me/917057472800" target="_blank" rel="noopener noreferrer" className="cta-button">Book Now</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="menu-label">MENU</span>
          <button className="close-menu-btn" onClick={toggleMenu}>&times;</button>
        </div>
        <div className="mobile-menu-links">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <a href={getLink('#work')} onClick={toggleMenu}>Our Work</a>
          <a href={getLink('#about')} onClick={toggleMenu}>About Us</a>
          <Link to="/services" onClick={toggleMenu}>Our Services</Link>
          <a href="https://wa.me/917057472800" target="_blank" rel="noopener noreferrer" className="mobile-cta" onClick={toggleMenu}>Book Now</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
