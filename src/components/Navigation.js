import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, X, House } from "@phosphor-icons/react";
import './Navigation.css';

const Navigation = ({ textColor = 'white' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="navigation" style={{ '--nav-text-color': textColor }}>
      <div className="mobile-nav">
        <Link to="/" className="home-link desktop-home" onClick={() => setIsMenuOpen(false)}>
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
        <Link to="/" className="home-link desktop-home" onClick={() => setIsMenuOpen(false)}>
          <House size={24} weight="light" />
        </Link>
          <Link to="/film" onClick={() => setIsMenuOpen(false)}>Film</Link>
        <Link to="/commercial" onClick={() => setIsMenuOpen(false)}>Commercial</Link>
        <Link to="/other" onClick={() => setIsMenuOpen(false)}>Other</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
      </div>
    </nav>
  );
};

export default Navigation;