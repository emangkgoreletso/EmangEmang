import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import ProductDetailModal from '../Components/ProductDetailModal';

// Import images from src/assets
import product1 from '../Assets/product1.jpg';
import product2 from '../Assets/product2.jpg';
import product3 from '../Assets/product3.jpg';
import product4 from '../Assets/product4.jpg';
import product5 from '../Assets/product5.jpg';
import product6 from '../Assets/product6.jpg';
import product7 from '../Assets/product7.jpg';
import product8 from '../Assets/product8.jpg';
import product9 from '../Assets/product9.jpg';
import product10 from '../Assets/product10.jpg';
import product11 from '../Assets/product11.jpg';
import product12 from '../Assets/product12.jpg';

const products = [
  { id: 1, name: 'Aloe Gel', image: product1, price: 29.99, description: 'Natural skin rejuvenating Face cleansing Gel.' },
  { id: 2, name: 'Gel Cleanser', image: product2, price: 39.99, description: 'Gel Cleanser For deliocate SKin' },
  { id: 3, name: 'Hydrating Cleanser', image: product3, price: 49.99, description: 'Hydrating Cleanser For dry skin' },
  { id: 4, name: 'Musk', image: product4, price: 19.99, description: 'Musk up with Extra face cleansing' },
  { id: 5, name: 'Handwash', image: product5, price: 24.99, description: 'Soothing Handwash with Aloe extract' },
  { id: 6, name: 'Toner', image: product6, price: 34.99, description: 'Keeps your skin evenly Toned' },
  { id: 7, name: 'Product 7', image: product7, price: 44.99, description: 'Marine Mask' },
  { id: 8, name: 'Product 8', image: product8, price: 54.99, description: 'Toothpaste' },
  { id: 9, name: 'Product 9', image: product9, price: 64.99, description: 'Aloe Drink' },
  { id: 10, name: 'Product 10', image: product10, price: 74.99, description: 'Lotion' },
  { id: 11, name: 'Product 11', image: product11, price: 84.99, description: 'Face Cream' },
  { id: 12, name: 'Product 12', image: product12, price: 94.99, description: 'Kids Vitamins' },
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleOpenModal(product)}
            />
          ))}
        </div>
      </section>

      {isModalOpen && selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProductsPage;
