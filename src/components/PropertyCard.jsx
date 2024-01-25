import React from 'react';
import classes from './PropertyCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const el = <FontAwesomeIcon icon={faBath} className='fa-xl' />;
const PropertyCard = (props) => {
  // console.log(props);
  const price = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(props.price);
  return (
    <Link to={`/property/${props.id}`} className={classes.property_card}>
      <div className={classes.property_img_container}>
        <img
          className={classes.property_img}
          src={props.img}
          alt='an image of a house'
        />
        <span className={classes.property_status}>SALE</span>
        <span className={classes.property_price}>{price}</span>
      </div>
      <div className={classes.property_info}>
        <div className={classes.property_address}>
          <p>{props.address[0]}</p>
          <p>{props.address[1]}</p>
        </div>
        <div className={classes.property_amenities}>
          <span className={classes.property_amenities_item}>
            <ion-icon name='bed-outline'></ion-icon>
            <span className={classes.item_count}>{props.numBedrooms}</span>
            <div className={classes.item_divider}></div>
          </span>
          <span className={classes.property_amenities_item}>
            <span>{el}</span>
            <span className={classes.item_count}>{props.numBathrooms}</span>
            <div className={classes.item_divider}></div>
          </span>
          <span className={classes.property_amenities_item}>
            <ion-icon name='scan-outline'></ion-icon>
            <span className={classes.item_count}>{`${new Intl.NumberFormat(
              'en-us'
            ).format(props.squareFeet)}sqft`}</span>
            <div className={classes.item_divider}></div>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
