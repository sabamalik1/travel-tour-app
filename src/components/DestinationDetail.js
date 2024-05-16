// DestinationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const destinations = [
  { id: 1, name: 'Paris', description: 'The City of Love', image: 'paris.jpg' },
  { id: 2, name: 'Tokyo', description: 'The City of Lights', image: 'tokyo.jpg' },
  // Add more destinations as needed
];

function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <h2>{destination.name}</h2>
      <img src={destination.image} alt={destination.name} />
      <p>{destination.description}</p>
    </div>
  );
}

export default DestinationDetail;
