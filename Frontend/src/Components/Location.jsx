import React from 'react';
import parisImg from '../assets/images/paris.jpg';
import newYorkImg from '../assets/images/new-york.jpg';
import tokyoImg from '../assets/images/tokyo.jpg';

const destinations = [
  {
    id: 1,
    name: 'Paris',
    image: parisImg,
    description: 'The city of lights and romance'
  },
  {
    id: 2,
    name: 'New York',
    image: newYorkImg,
    description: 'The city that never sleeps'
  },
  {
    id: 3,
    name: 'Tokyo',
    image: tokyoImg,
    description: 'A blend of tradition and future'
  }
  // Add more destinations as needed
];

const Location = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <div key={dest.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={dest.image} 
              alt={dest.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
              <p className="text-gray-600">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
