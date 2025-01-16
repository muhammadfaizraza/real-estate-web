import React from 'react';
import { Card } from 'react-bootstrap'; 
interface PropertyCardProps {
  title: string;
  price: string;
  location: string;
  image: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, price, location, image }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} alt={title} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{price}</Card.Text>
      <Card.Text>{location}</Card.Text>
    </Card.Body>
  </Card>
);

export default PropertyCard;
