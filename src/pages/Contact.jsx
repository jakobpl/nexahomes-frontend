import React, { Fragment } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import classes from './Contact.module.css';
const Contact = () => {
  return (
    <Fragment>
      <div className={classes.contact_content}>
        <div className={classes.contact_content_text}>
          <h2 className={classes.contact_section_title}>
            Get In <strong>Touch</strong>
          </h2>
          <p className={`${classes.contact_description} normal`}>
            Got a question about one of our listings, want to sell your house or
            just a question? Contact us and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <form className={classes.form} id='contact_form'>
          <div className={classes.field_container}>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              placeholder='Enter your name'
              className={classes.contact_input}
            />
          </div>
          <div className={classes.field_container}>
            <label htmlFor='contact_email'>Email Address</label>
            <input
              id='contact_email'
              placeholder='Enter your email address'
              className={classes.contact_input}
            />
          </div>
          <div className={classes.field_container}>
            <label htmlFor='phone'>Phone</label>
            <input
              id='phone'
              placeholder='Enter your phone number'
              className={classes.contact_input}
            />
          </div>
          <div className={classes.field_container}>
            <label htmlFor='message'>Message</label>
            <textarea
              className={classes.message_field}
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Enter your message'
            ></textarea>
          </div>
          <button type='submit' className={classes.contact_form_btn}>
            submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;
