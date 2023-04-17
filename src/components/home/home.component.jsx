import React, { useState } from 'react';
import './home.styles.css';
import { Link, Outlet} from 'react-router-dom';

const Home = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };



  return (
    <div className="home-container">
      <div className="home-content">
        
      </div>
     
      <h1 className="title">
        <Link to="/" className="title-link">
          DACHI-GIORGI GARUCHAVA
        </Link>
      </h1>
      <ul className={isMobileMenuVisible ? 'info-links show' : 'info-links'}>
        <li><Link to='/contact' className='info-link'>Contact</Link></li>
        <li><Link to='/cv' className='info-link'>CV</Link></li>
      </ul>
      <div className={isMobileMenuVisible ? 'mobile-menu visible' : 'mobile-menu'}>
        <button className="menu-button" onClick={toggleMobileMenu}>
          Menu
        </button>
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
