import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="text-xl font-bold">Logo</Link>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-pink-600">Home</Link>
        <Link to="/products" className="hover:text-pink-600">Our Products</Link>
        <Link to="/about" className="hover:text-pink-600">About Us</Link>
        <Link to="/contact" className="hover:text-pink-600">Contact Us</Link>
        <Link to="/clients" className="hover:text-pink-600">Our Clients</Link>
        <Link to="/testimonies" className="hover:text-pink-600">Testimonies</Link>
      </div>
      <button className="md:hidden text-xl">
        <span className="material-icons">menu</span>
      </button>
    </div>
  </nav>
);

export default Navbar;
