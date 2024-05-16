// DestinationList.js
import React from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  { id: 1, name: 'Paris', description: 'The City of Love', image: 'paris.jpg' },
  { id: 2, name: 'Tokyo', description: 'The City of Lights', image: 'tokyo.jpg' },
  // Add more destinations as needed
];

function DestinationList() {
  return (
    <div>
      <h2>Explore Destinations</h2>
      <ul>
        {destinations.map(destination => (
          <li key={destination.id}>
            <Link to={`/destination/${destination.id}`}>
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationList;
