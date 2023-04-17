import React, { useState } from 'react';
import './home.styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="home-container">
      <h1 className="title">
        <Link to="/" className="title-link">
          DACHI-GIORGI GARUCHAVA
        </Link>
      </h1>
      <ul className={isMobileMenuVisible ? 'info-links show' : 'info-links'}>
        <li>Contact</li>
        <li>CV</li>
      </ul>
      <div className={isMobileMenuVisible ? 'mobile-menu visible' : 'mobile-menu'}>
        <button className="menu-button" onClick={toggleMobileMenu}>
          Menu
        </button>
        <ul className={isMobileMenuVisible ? 'project-links show' : 'project-links'}>
          <li>The Witness</li>
          <li>Invasive Modification</li>
          <li>STEPS</li>
          <li>Hyphen</li>
          <li>I Need Protection</li>
          <li>French Lessons</li>
          <li>Kids of the Pink Trash</li>
          <li>PSR</li>
          <li>In Luce Side</li>
          <li>Tide</li>
          <li>Bulbosa</li>
          <li>Barbed wire</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
