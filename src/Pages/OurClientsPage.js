// src/Pages/OurClientsPage.js
import React from 'react';

// Import images from src/assets
import client1 from '../Assets/product1.jpg';
import client2 from '../Assets/product2.jpg';
import client3 from '../Assets/product3.jpg';
import client4 from '../Assets/product4.jpg';
import client5 from '../Assets/product5.jpg';
import client6 from '../Assets/product6.jpg';

// Store images in an array
const clientImages = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
];

const OurClientsPage = () => (
  <div className="min-h-screen bg-gray-100">
    <main className="max-w-6xl mx-auto px-4">
      <section className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Our Clients</h1>
        <div className="flex space-x-6 overflow-x-auto mt-4 justify-center">
          {clientImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Client ${index + 1}`}
              className="w-24 h-24 object-cover rounded-full"
            />
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default OurClientsPage;
