import React from 'react';
import aboutImg from '../assets/images/about-us.jpg';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img 
            src={aboutImg} 
            alt="About Us" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            Learn about our travel services and company mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
