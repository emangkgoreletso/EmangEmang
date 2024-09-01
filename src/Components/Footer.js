// src/Components/Footer.js
import React from 'react';
//import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4">
    <div className="flex justify-center space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://wa.me" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a href="https://t.me" target="_blank" rel="noopener noreferrer">Telegram</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
    </div>
  </footer>
);

export default Footer;
