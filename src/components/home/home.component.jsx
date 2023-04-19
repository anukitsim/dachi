import React, { useState, useEffect } from 'react';
import './home.styles.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Home = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const location = useLocation(); // import useLocation hook from react-router-dom

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (location.pathname === '/invasive-modification') {
      body.classList.add('invasive-modification-body');
    } else {
      body.classList.remove('invasive-modification-body');
    }
  }, [location.pathname]);

  return (
    <div className="home-container">
      <h1 className="title">
        <Link to="/" className="title-link">
          DACHI-GIORGI GARUCHAVA
        </Link>
      </h1>
      <div className={isMobileMenuVisible ? 'mobile-menu visible' : 'mobile-menu'}>
        <button className="menu-button" onClick={toggleMobileMenu}>
          Menu
        </button>
        <ul className={isMobileMenuVisible ? 'info-links show' : 'info-links'}>
          <li><Link to='/contact' className='info-link'>Contact</Link></li>
          <li><Link to='/cv' className='info-link'>CV</Link></li>
        </ul>
        <ul className={isMobileMenuVisible ? 'project-links show' : 'project-links'}>
          <li><Link to='/thewitness' className='project-link'>The Witness</Link></li>
          <li><Link to='/invasive-modification' className='project-link'>Invasive Modification</Link></li>
          <li><Link to='/STEPS' className='project-link'>STEPS</Link></li>
          <li><Link to='/hyphen' className='project-link'>Hyphen</Link></li>
          <li><Link to='/i-need-protection' className='project-link'>I Need Protection</Link></li>
          <li><Link to='/french-lessons' className='project-link'>French Lessons</Link></li>
          <li><Link to='/kidsofthepinktrash' className='project-link'>Kids of the Pink Trash</Link></li>
          <li><Link to='/bulbosa' className='project-link'>Bulbosa</Link></li>
          <li><Link to='/tide' className='project-link'>Tide</Link></li>
          <li><Link to='/in-luce-side' className='project-link'>in Luce Side</Link></li>
          <li><Link to='/psr' className='project-link'>PSR</Link></li>
          <li><Link to='/barbed-wire' className='project-link'>Barbed wire</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
