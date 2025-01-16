// src/pages/Home.tsx
import React from 'react';
import { useGetPropertiesQuery } from '../Features/API/propertApiSlice.ts';
import PropertyCard from '../Components/PropertyCard/PropertyCard.tsx';
import Loader from '../Components/Common/Loader.tsx';

const Home: React.FC = () => {
  const { data: properties, error, isLoading } = useGetPropertiesQuery();

  if (isLoading) {
    return (
        <Loader /> 
    
    );
  }  if (error) return <div>Error: Failed to load properties</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        {properties?.map((property, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <PropertyCard
              title={property.title}
              price={property.price}
              location={property.location}
              image={property.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
