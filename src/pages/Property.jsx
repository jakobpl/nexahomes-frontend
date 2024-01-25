import React, { useContext } from 'react';
import classes from './Property.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PropertyContext from '../store/property-context';
import companyLogo from '../assets/real_estate_logo.png';
const Property = () => {
  const { properties, updateProperties } = useContext(PropertyContext);
  const propertyId = useParams().id;
  const API_URL =
    'https://mysterious-plateau-20346-04cd932d47cf.herokuapp.com/api/properties';
  // console.log(API_URL);
  let navigate = useNavigate();

  const convertBufferToImage = (buffer) => {
    const blob = new Blob([new Uint8Array(buffer.data)], {
      type: 'image/jpeg',
    });
    return URL.createObjectURL(blob);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      if (properties[propertyId] && !properties[propertyId].images) {
        try {
          const res = await fetch(`${API_URL}/${propertyId}`);
          if (!res.ok) {
            throw new Error('something unexpected happened...');
          }
          const propertyData = await res.json();
          const imgArray = propertyData.images.map((bufferObj) =>
            convertBufferToImage(bufferObj)
          );

          updateProperties({ ...properties[propertyId], images: imgArray });

          localStorage.setItem('properties', JSON.stringify(properties));
        } catch (error) {
          console.error('Error fetching images...', error);
        }
      }
    };
    fetchData();
  }, [properties, updateProperties]);

  const imageGallery = properties[propertyId]?.images?.map((img, index) => (
    <div key={index} className={classes.property_image_container}>
      <img src={img} alt='Property' className={classes.property_img} />
    </div>
  ));

  if (!properties[propertyId]) {
    return (
      <div className={classes.loading_screen}>
        <div className={classes.loading_screen_icon}>
          <img src={companyLogo} className={classes.loading_screen_icon} />
          <p className={classes.loading_text}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='centered'>
      <section className={classes.property_container}>
        <div className={classes.property_info_container}>
          <img
            src={properties[propertyId].thumbnail}
            alt='Property'
            className={classes.thumbnail}
          />
          <div className={classes.property_address_container}>
            <h2 className={classes.property_address_h2}>
              {properties[propertyId]['address'][0]}
            </h2>
            <h2 className={classes.property_address_h2}>
              {properties[propertyId]['address'][1]}
            </h2>
          </div>
          <p className={classes.property_description_sm}>
            A really cool description of your new property. A really cool
            description of your new property. A really cool description of your
            new property. A really cool description of your new property. new
            property. A really cool description of your new property. new
            property. A really cool description of your new property. new
            property. A really cool description of your new property.
          </p>
          <div className={classes.property_info_section}>
            <p className={classes.property_label}>Price</p>
            <strong className={classes.property_price}>
              {new Intl.NumberFormat('en-us', {
                style: 'currency',
                currency: 'usd',
              }).format(properties[propertyId]['price'])}
            </strong>
          </div>
          <div className={classes.property_info_section}>
            <p className={classes.property_label}>Bedooms</p>
            <span className={classes.property_content}>
              {properties[propertyId]['bedrooms']}
            </span>
          </div>
          <div className={classes.property_info_section}>
            <p className={classes.property_label}>Bathrooms</p>
            <span className={classes.property_content}>
              {properties[propertyId]['bathrooms']}
            </span>
          </div>
          <div className={classes.property_info_section}>
            <p className={classes.property_label}>Square Footage</p>
            <span
              className={classes.property_content}
            >{`${new Intl.NumberFormat('en-us').format(
              properties[propertyId]['sqft']
            )} sqft`}</span>
          </div>
          <div className={classes.property_info_section}>
            <p className={classes.property_label}>Description</p>
            <p className={classes.property_description_large}>
              {properties[propertyId]['description']}
            </p>
          </div>
          <div className={classes.property_info_section}>
            <p className={classes.property_label}>More about this property</p>
            <form action='' className={classes.property_form}>
              <input
                type='text'
                placeholder='Full name*'
                className={classes.form_input}
              />
              <input
                type='email'
                placeholder='Email*'
                className={classes.form_input}
              />
              <input
                type='tel'
                placeholder='Phone*'
                className={classes.form_input}
              />
              <textarea
                name=''
                id=''
                className={classes.form_textarea}
                defaultValue={`I am interested in ${properties[propertyId][
                  'address'
                ].join(', ')}`}
              ></textarea>
              <button
                type='submit'
                className={classes.form_submit}
                onClick={(e) => {
                  e.preventDefault();
                  alert('This is just a design, no email is actually sent.');
                }}
              >
                Email agent
              </button>
            </form>
          </div>
        </div>
        <div className={classes.property_gallery}>{imageGallery}</div>
      </section>
    </div>
  );
};

export default Property;

// this was previous to image gallery
// {
/* <div className={classes.property_image_container}>
            <img
              src={dummy_img}
              alt='a property'
              className={classes.property_img}
            />
          </div>
          <div className={classes.property_image_container}>
            <img
              src={dummy_img2}
              alt='a property'
              className={classes.property_img}
            />
          </div>
          <div className={classes.property_image_container}>
            <img
              src={dummy_img3}
              alt='a property'
              className={classes.property_img}
            />
          </div>
          <div className={classes.property_image_container}>
            <img
              src={dummy_img4}
              alt='a property'
              className={classes.property_img}
            />
          </div>
          <div className={classes.property_image_container}>
            <img
              src={dummy_img5}
              alt='a property'
              className={classes.property_img}
            />
          </div> */
// }
