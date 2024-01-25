import React, { useState } from 'react';
import PropertyContext from './property-context';

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState({});

  const updateProperties = (property) => {
    const propertyId = property._id;
    setProperties((prevProperties) => ({
      ...prevProperties,
      [propertyId]: property,
    }));
  };

  return (
    <PropertyContext.Provider value={{ properties, updateProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};
