import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import classes from './Blog.module.css';
import BlogCard from '../components/BlogCard';
const Blog = () => {
  return (
    <Fragment>
      <div className={classes.blog_hero}>
        <h2> BLOG</h2>
      </div>
      <div className='centered'>
        <div className={classes.blog_container}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
