import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../Assets/hero1.webp'; // Import the hero image

const HeroSection = ({ title, subtitle }) => (
  <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${heroImage})` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative flex items-center justify-center h-full">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4">{subtitle}</p>
        <Link to="/products" className="mt-8 inline-block bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700">Buy Now</Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
