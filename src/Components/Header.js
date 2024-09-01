// src/Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-500 text-white p-4 flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <h1 className="text-xl font-bold">Logo</h1>
      {/* Add navigation links here */}
      <nav>
        <Link to="/" className="text-white hover:text-gray-200 px-4">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-200 px-4">About</Link>
        <Link to="/products" className="text-white hover:text-gray-200 px-4">Products</Link>
        <Link to="/clients" className="text-white hover:text-gray-200 px-4">Clients</Link>
        <Link to="/contact" className="text-white hover:text-gray-200 px-4">Contact</Link>
        <Link to="/testimonies" className="text-white hover:text-gray-200 px-4">Testimonies</Link>
      </nav>
    </div>
    <div className="flex items-center space-x-4">
      <Link to="/signin" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Sign In</Link>
      <Link to="/signup" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Sign Up</Link>
    </div>
  </header>
);

export default Header;
