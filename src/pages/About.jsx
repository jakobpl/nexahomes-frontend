import React, { Fragment } from 'react';
import classes from './About.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return (
    <Fragment>
      <div className={classes.about_container}>
        <div className={classes.about}>
          <div className={classes.about_story}>
            <h3>
              Our <strong>story</strong>
            </h3>
            <p className='normal'>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              dolore cillum minim tempor enim. Elit aute irure tem upidatatenim.
              Elit aute irure tempor cupidatat incididunt sint deserunt
              voluptate aute id deserunt nisi.
            </p>
            <p className='normal'>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              dolore cillum minim tempor enim. Elit aute irure tem upidatatenim.
              Elit aute irure tempor cupidatat incididunt sint deserunt
              voluptate aute id deserunt nisi.
            </p>
          </div>
          <div className={classes.about_img_container_top}></div>
          <div className={classes.about_mission}>
            <h3>
              Our <strong>mission</strong>
            </h3>
            <p className='normal'>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              dolore cillum minim tempor enim. Elit aute irure tem upidatatenim.
              Elit aute irure tempor cupidatat incididunt sint deserunt
              voluptate aute id deserunt nisi.
            </p>
            <p className='normal'>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              dolore cillum minim tempor enim. Elit aute irure tem upidatatenim.
              Elit aute irure tempor cupidatat incididunt sint deserunt
              voluptate aute id deserunt nisi.
            </p>
          </div>
          <div className={classes.about_img_container_bottom}></div>
        </div>
        <div className={classes.agents}></div>
      </div>
    </Fragment>
  );
};

export default About;
