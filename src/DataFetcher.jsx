import { useContext, useEffect } from 'react';
import PropertyContext from './store/property-context';

const API_URL =
  'https://mysterious-plateau-20346-04cd932d47cf.herokuapp.com/api/properties';
const DataFetcher = () => {
  const { properties, updateProperties } = useContext(PropertyContext);

  const convertBufferToImage = (buffer) => {
    const blob = new Blob([new Uint8Array(buffer.data)], {
      type: 'image/jpeg',
    });
    return URL.createObjectURL(blob);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(properties).length === 0) {
        try {
          const res = await fetch(API_URL);
          const propertiesArray = await res.json();

          const processedProperties = propertiesArray.map((property) => {
            const thumbnailUrl = property.thumbnail
              ? convertBufferToImage(property.thumbnail)
              : null;
            return { ...property, thumbnail: thumbnailUrl };
          });
          processedProperties.forEach((property) => updateProperties(property));
          //save to local storage
          localStorage.setItem('properties', JSON.stringify(properties));
        } catch (error) {
          console.error('Error fetching data...', error);
        }
      }
    };

    fetchData();
  }, [properties, updateProperties]);

  return null;
};

export default DataFetcher;
