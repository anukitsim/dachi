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

  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   if(location.pathname === '/kidsofthepinktrash'){
  //     body.classList.add('kidsofthepinktrash-body');
  //   }else {
  //     body.classList.remove('kidsofthepinktrash-body');
  //   }
  // },  [location.pathname])

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
        <li><Link to='/thewitness' className={location.pathname === '/thewitness' ? 'project-link current-page' : 'project-link'}>The Witness</Link></li>
          <li><Link to='/invasive-modification' className={location.pathname === '/invasive-modification' ? 'project-link current-page' : 'project-link'}>Invasive Modification</Link></li>
          <li><Link to='/STEPS' className={location.pathname === '/STEPS' ? 'project-link current-page' : 'project-link'}>STEPS</Link></li>
          <li><Link to='/hyphen' className={location.pathname === '/hyphen' ? 'project-link current-page' : 'project-link'}>Hyphen</Link></li>
          <li><Link to='/i-need-protection' className={location.pathname === '/i-need-protection' ? 'project-link current-page' : 'project-link'}>I Need Protection</Link></li>
          <li><Link to='/obj' className={location.pathname === '/obj' ? 'project-link current-page' : 'project-link'}>.OBJ</Link></li>
          <li><Link to='/french-lessons' className={location.pathname === '/french-lessons' ? 'project-link current-page' : 'project-link'}>French Lessons</Link></li>
          <li><Link to='/kidsofthepinktrash' className={location.pathname === '/kidsofthepinktrash' ? 'project-link current-page' : 'project-link'}>Kids of the Pink Trash</Link></li>
          <li><Link to='/garbage-throne' className={location.pathname === '/garbage-throne' ? 'project-link current-page' : 'project-link'}>Garbage Throne</Link></li>
          <li><Link to='/broken-city' className={location.pathname === '/broken-city' ? 'project-link current-page' : 'project-link'}> Broken City</Link></li>
          <li><Link to='/dead-vase' className={location.pathname === '/dead-vase' ? 'project-link current-page' : 'project-link'}> Dead Vase</Link></li>
          <li><Link to='/in-luce-side' className={location.pathname === '/in-luce-side' ? 'project-link current-page' : 'project-link'}>in Luce Side</Link></li>
          <li><Link to='/psr' className={location.pathname === '/psr' ? 'project-link current-page' : 'project-link'}>PSR</Link></li>
          
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;

