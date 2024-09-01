// src/Pages/CheckoutPage.js
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const CheckoutPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [shippingCompany, setShippingCompany] = useState('');
  const [shippingDetails, setShippingDetails] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleCheckout = () => {
    // Handle checkout logic here
    alert('Checkout is not yet implemented.');
    clearCart(); // Clear the cart after checkout
  };

  // Calculate the total price with discount
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) - discount;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-4 flex justify-between items-center">
              <div>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</div>
              <button
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="shippingCompany">
            Shipping Company
          </label>
          <input
            type="text"
            id="shippingCompany"
            value={shippingCompany}
            onChange={(e) => setShippingCompany(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="shippingDetails">
            Shipping Details
          </label>
          <textarea
            id="shippingDetails"
            value={shippingDetails}
            onChange={(e) => setShippingDetails(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="paymentMethod">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Payment Method</option>
            <option value="paypal">PayPal</option>
            <option value="visa">Visa</option>
            <option value="card">Credit Card</option>
            <option value="voucher">Voucher</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="couponCode">
            Coupon Code
          </label>
          <input
            type="text"
            id="couponCode"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2"
            onClick={() => {
              // Example: apply a fixed discount for the sake of demonstration
              if (couponCode === 'DISCOUNT10') {
                setDiscount(10);
              } else {
                alert('Invalid coupon code');
              }
            }}
          >
            Apply Coupon
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Total Price: P{totalPrice.toFixed(2)}</h3>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleCheckout}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
