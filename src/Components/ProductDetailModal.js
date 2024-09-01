import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext'; // Use the custom hook to access context
import cartIcon from '../Assets/CartIcon.jpg'; // Import the cart icon

const ProductDetailModal = ({ product, onClose }) => {
  const { addToCart } = useCart(); // Access addToCart function from context
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Add the product with quantity to the cart
    onClose(); // Close the modal after adding to cart
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value)); // Update quantity state
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-lg font-bold mb-4">P{product.price.toFixed(2)}</p> {/* Updated currency symbol */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full p-2 border border-gray-300 rounded"
            min="1"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <img
            src={cartIcon}
            alt="Add to Cart"
            className="w-8 h-8 cursor-pointer"
            onClick={handleAddToCart}
            title="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
