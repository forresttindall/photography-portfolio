import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, List, X } from "@phosphor-icons/react";
import './Navigation.css';

const Navigation = ({ textColor = 'white' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="navigation" style={{ '--nav-text-color': textColor }}>
      <div className="mobile-nav">
        <Link to="/" className="home-link desktop-home">
          <House size={24} weight="light" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          <List size={24} weight="light" />
        </button>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>
          <X size={24} weight="light" />
        </button>
        <Link to="/" className="home-link desktop-home">
          <House size={24} weight="light" />
        </Link>
        <Link to="/commercial" onClick={() => setIsMenuOpen(false)}>Commercial</Link>
        <Link to="/outdoor" onClick={() => setIsMenuOpen(false)}>Outdoor</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;