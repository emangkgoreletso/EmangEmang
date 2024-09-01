import React from 'react';
import PropTypes from 'prop-types';

// Default product values in case product is not provided
const defaultProduct = {
  image: 'https://via.placeholder.com/150', // Placeholder image URL
  name: 'Default Product',
  price: 0.00,
  description: 'No description available'
};

const ProductCard = ({ product = defaultProduct, onClick }) => {
  // Ensure product is defined and has the necessary properties
  const { image, name, price, description } = product;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover rounded-lg" 
      />
      <div className="mt-2 text-center">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-lg text-gray-700 mb-2">P{price.toFixed(2)}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={onClick}
          className="bg-pink-600 text-white px-4 py-2 rounded mt-2 hover:bg-pink-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string
  }),
  onClick: PropTypes.func.isRequired
};

export default ProductCard;
