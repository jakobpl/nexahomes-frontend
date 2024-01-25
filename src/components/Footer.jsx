import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <div className={classes.newsletter}>
        <div className={classes.newsletter_text}>
          <h2 className={classes.newsletter_title}>
            Join Our <strong>Network</strong>
          </h2>
          <p className='normal'>
            Keep up to date with the latest market trends and opportunities
          </p>
        </div>

        <form className={classes.newsletter_form}>
          <label htmlFor='email_input'>Email Address</label>
          <input
            className={classes.footer_input}
            placeholder='Enter your email address'
            id='email_input'
          />
          <button
            type='submit'
            className={classes.btn_newsletter}
            onClick={(e) => {
              e.preventDefault();
              alert(
                'This is just for design. Your email will not be stored nor will recieve any mail.'
              );
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <footer className={classes.footer}>
        <div className={classes.footer_logo_container}>
          <a href='#' className={classes.footer_logo}>
            Real Estate
          </a>
        </div>
        <ul className={classes.footer_ul}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Properties</a>
          </li>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Properties</a>
          </li>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Properties</a>
          </li>
        </ul>
        <div className={classes.bottom_divider}></div>
      </footer>
      <div className={classes.external_links}>
        <p className='small'>Built in react by jndev.io</p>
        <ul className={classes.external_links_ul}>
          <li className={classes.external_links_li}>
            <ion-icon name='logo-facebook'></ion-icon>
          </li>
          <li className={classes.external_links_li}>
            <ion-icon name='logo-twitter'></ion-icon>
          </li>
          <li className={classes.external_links_li}>
            <ion-icon name='logo-linkedin'></ion-icon>
          </li>
          <li className={classes.external_links_li}>
            <ion-icon name='logo-youtube'></ion-icon>
          </li>
          <li className={classes.external_links_li}>
            <ion-icon name='logo-instagram'></ion-icon>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
