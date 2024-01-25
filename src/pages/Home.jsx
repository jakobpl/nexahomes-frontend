import React, { Fragment, useContext } from 'react';
import classes from './Home.module.css';
import PropertyCard from '../components/PropertyCard';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import data from '../data';
import PropertyContext from '../store/property-context';

// const displayData = data.slice(0, 6).map((el, index) => {
//   return (
//     <PropertyCard
//       key={index}
//       price={el.price}
//       address={el.address}
//       numBathrooms={el.numBathrooms}
//       numBedrooms={el.numBedrooms}
//       squareFeet={el.squareFeet}
//       img={el.img}
//       id={el.id}
//     />
//   );
// });

const Home = () => {
  // const { data, updateData } = useContext(PropertyContext);
  const { properties, updateProperties } = useContext(PropertyContext);
  const displayData = Object.keys(properties)
    .slice(0, 6)
    .map((propertyId) => {
      const property = properties[propertyId];
      return (
        <PropertyCard
          key={property._id}
          price={property.price}
          address={property.address}
          numBathrooms={property.bathrooms}
          numBedrooms={property.bedrooms}
          squareFeet={property.sqft}
          img={property.thumbnail}
          id={property._id}
        />
      );
    });
  return (
    <Fragment>
      <section className={classes.hero}>
        <h1 className={classes.hero_text}>NexaHomes</h1>
      </section>
      <section className={classes.featured}>
        <h2 className={classes.featured_label}>
          <strong>Featured </strong>Listings
        </h2>
        <div className={classes.property_container}>{displayData}</div>
        <Link to='/listings' className={classes.more_properties_btn}>
          View More Properties
        </Link>
      </section>
      <section className={classes.stats_container}>
        <div className={classes.stats}>
          <div className={classes.stats_text}>
            <p className={classes.stats_p}>OUR STATS</p>
            <h2 className={classes.stats_h2}>
              <strong>Why Work With Us</strong>
            </h2>
            <div className={classes.text_divider}></div>
          </div>

          <div className={classes.stats_numbers}>
            <div className={classes.stat_block}>
              <h4 className={classes.stats_number}>$100</h4>
              <p className={`${classes.stats_number_description} normal`}>
                sales since 2012
              </p>
              <div className={classes.stat_divider}></div>
            </div>
            <div className={classes.stat_block}>
              <h4 className={classes.stats_number}>$100</h4>
              <p className={`${classes.stats_number_description} normal`}>
                sales since 2012
              </p>
              <div className={classes.stat_divider}></div>
            </div>
            <div className={classes.stat_block}>
              <h4 className={classes.stats_number}>$100</h4>
              <p className={`${classes.stats_number_description} normal`}>
                sales since 2012
              </p>
              <div className={classes.stat_divider}></div>
            </div>
            <div className={classes.stat_block}>
              <h4 className={classes.stats_number}>$100</h4>
              <p className={`${classes.stats_number_description} normal`}>
                sales since 2012
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={classes.blog_container}>
        <section className={classes.blog}>
          <h2 className={classes.blog_label}>
            From Our <strong>Blog </strong>
          </h2>
          <div className={classes.blog_cards}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
