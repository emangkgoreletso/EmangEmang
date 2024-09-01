// src/pages/TestimoniesPage.js
import React from 'react';

const TestimoniesPage = () => (
  <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">Testimonies</h1>
    <p>Read what our satisfied clients have to say about our products and services.</p>
    <div className="mt-4">
      {/* Example testimonies */}
      <blockquote className="border-l-4 border-pink-600 pl-4">
        <p>"These products have transformed my skin! I feel more confident than ever."</p>
        <footer>- Jane Doe</footer>
      </blockquote>
      <blockquote className="border-l-4 border-pink-600 pl-4 mt-4">
        <p>"Excellent quality and amazing results. I highly recommend them!"</p>
        <footer>- John Smith</footer>
      </blockquote>
    </div>
  </div>
);

export default TestimoniesPage;
