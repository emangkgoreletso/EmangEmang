// src/pages/ContactUsPage.js
import React from 'react';
import ContactForm from '../Components/ContactForm';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [ -24.6283, 25.9070 ]; // Replace with your coordinates

const ContactUsPage = () => (
  <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <ContactForm />
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-2">Our Location</h2>
      <div className="mb-4" style={{ height: '400px', width: '100%' }}>
        <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              Our office location.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <p className="mb-2">Our office is located at Molepolole, Reliance Complex.</p>
      <p className="mb-2">Floor 3, Office 8.</p>
      <p className="mb-2">Office Number: +267 591 1010.</p>
      <p>Cell Number: +267 74 747 747.</p>
    </div>
  </div>
);

export default ContactUsPage;
