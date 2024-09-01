import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../Components/HeroSection';
import ProductCard from '../Components/ProductCard';
import ProductDetailModal from '../Components/ProductDetailModal';

// Import images from src/assets
import product1 from '../Assets/product1.jpg';
import product2 from '../Assets/product2.jpg';
import product3 from '../Assets/product3.jpg';

const products = [
  {
    id: 1,
    image: product1,
    name: 'Product 1',
    price: 29.99,
    description: 'Aloe Gel',
  },
  {
    id: 2,
    image: product2,
    name: 'Product 2',
    price: 19.99,
    description: 'Gel Cleanser',
  },
  {
    id: 3,
    image: product3,
    name: 'Product 3',
    price: 39.99,
    description: 'Hydrating Cleanser',
  },
];

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <HeroSection title="Welcome to Emang's Beauty Corner" subtitle="Discover our range of beauty products." />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4">
        <section className="p-4">
          <h2 className="text-2xl font-bold text-center">Our Products</h2>
          <div className="flex space-x-4 overflow-x-auto mt-4 justify-center">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleOpenModal(product)}
              />
            ))}
          </div>
          <section className="p-4 text-center">
            <Link to="/products">
              <button className="bg-pink-300 text-black px-4 py-2 rounded-full hover:bg-black hover:text-pink-300 transition-colors duration-300">
                View All Products
              </button>
            </Link>
          </section>
        </section>
        <section className="p-4">
          <h2 className="text-2xl font-bold text-center">About Us</h2>
          <p className="text-center">
            Our products are the most effective you have ever used. Beauty lies in pampering yourself within our range of skin loving healthy products.
          </p>
        </section>
        <section className="p-4">
          <h2 className="text-2xl font-bold text-center">Our Clients</h2>
          <div className="flex space-x-4 overflow-x-auto mt-4 justify-center">
            <img src={product1} alt="Client" className="w-24 h-24 object-cover" />
            <img src={product2} alt="Client" className="w-24 h-24 object-cover" />
            <img src={product3} alt="Client" className="w-24 h-24 object-cover" />
          </div>
        </section>
        <section className="p-4">
          <h2 className="text-2xl font-bold text-center">Testimonies</h2>
          <p className="text-center">Read what our clients have to say about us!</p>
        </section>
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default HomePage;
