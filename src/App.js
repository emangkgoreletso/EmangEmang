import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import OurClientsPage from './Pages/OurClientsPage';
import ProductsPage from './Pages/ProductsPage';
import TestimoniesPage from './Pages/TestimoniesPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import CheckoutPage from './Pages/CheckOutPage'; // Import the CheckoutPage
import { CartProvider } from './contexts/CartContext'; // Import CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/clients" element={<OurClientsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/testimonies" element={<TestimoniesPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/checkout" element={<CheckoutPage />} /> {/* Add CheckoutPage route */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
