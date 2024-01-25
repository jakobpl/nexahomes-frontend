import React, { useEffect } from 'react';
import classes from './Listings.module.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
// import data from '../data';
import PropertyContext from '../store/property-context';
import { useContext } from 'react';
// const displayData = data.map((el, index) => {
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
const Listings = () => {
  const { properties, updateProperties } = useContext(PropertyContext);
  const displayData = Object.keys(properties).map((propertyId) => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h2 className={classes.featured_label}>
        <strong>Active </strong>Listings
      </h2>
      <div className='centered'>
        <div className={classes.listings_container}>{displayData}</div>
      </div>
    </div>
  );
};

export default Listings;
