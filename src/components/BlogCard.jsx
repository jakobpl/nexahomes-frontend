import React from 'react';
import classes from './BlogCard.module.css';
import img from '../assets/img1.jpg';
const BlogCard = () => {
  return (
    <div className={classes.blog_card}>
      <div className={classes.blog_img_container}>
        <img src={img} alt='big house' className={classes.blog_img} />
      </div>
      <div className={classes.blog_info}>
        <time className={classes.card_date}>2023-12-12</time>
        <p className={classes.blog_description}>
          10 Things You Should Know Before Buying A House 10 Things You Should
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
