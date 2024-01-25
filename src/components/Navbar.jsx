import React from 'react';
import classes from './Navbar.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/real_estate_logo.png';
const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <div className={classes.header_container}>
      <header className={classes.header}>
        <div className={classes.logo_container}>
          <Link to='/' className={classes.logo_link}>
            <img
              src={logoImg}
              alt='A blue and green logo for the real estate company'
              className={classes.navbar_logo_img}
            />
          </Link>
        </div>
        <nav
          className={`${classes.nav} ${
            displayMenu ? classes.display_menu : ''
          }`}
        >
          <ul className={classes.nav_ul}>
            <li className={classes.nav_li}>
              <Link
                to='/'
                className={classes.nav_link}
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                home
              </Link>
            </li>
            <li className={classes.nav_li}>
              <Link
                to='/about'
                className={classes.nav_link}
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                about
              </Link>
            </li>
            <li className={classes.nav_li}>
              <Link
                to='/blog'
                className={classes.nav_link}
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                blog
              </Link>
            </li>
            <li className={classes.nav_li}>
              <Link
                to='/contact'
                className={classes.nav_link}
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                contact
              </Link>
            </li>
            <li className={classes.nav_li}>
              <Link
                to='/listings'
                className={classes.nav_link__secondary}
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                view properties
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={classes.menu_icon}
          onClick={() => setDisplayMenu(!displayMenu)}
        >
          <ion-icon name='menu-outline'></ion-icon>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
