// src/Pages/SignInPage.js
import React from 'react';

const SignInPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" className="w-full px-4 py-2 border rounded" />
        </div>
        <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Sign In</button>
      </form>
    </div>
  </div>
);

export default SignInPage;
