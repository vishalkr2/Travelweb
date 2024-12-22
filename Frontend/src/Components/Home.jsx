import React from "react";
import heroImg from "../assets/images/hero-bg.jpg"; // Ensure this file exists
import parisImg from "../assets/images/paris.jpg"; // Ensure this file exists
import newYorkImg from "../assets/images/new-york.jpg"; // Ensure this file exists

function Home() {
  return (
    <div className="home">
      <div className="hero bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to TravelApp</h1>
            <p className="mb-5">Discover your next adventure with us. Explore the world's most beautiful destinations.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <figure><img src={parisImg} alt="Paris" /></figure>
            <div className="card-body">
              <h2 className="card-title">Paris</h2>
              <p>Experience the city of love and lights.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure><img src={newYorkImg} alt="New York" /></figure>
            <div className="card-body">
              <h2 className="card-title">New York</h2>
              <p>The city that never sleeps.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          {/* Add more destination cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default Home;
