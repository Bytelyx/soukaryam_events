import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BiryaniMenu from './pages/BiriyaniMenu.jsx';

// Scroll to top automatically when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfaf5] text-[#1a1f1e]">

      <ScrollToTop />

      {/* Primary Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex flex-grow flex-col">
        <AnimatePresence mode="wait">

          <Routes
            location={location}
            key={location.pathname}
          >

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* Services */}
            <Route
              path="/services"
              element={<Services />}
            />

            {/* ⭐ BIRIYANI MENU */}
            <Route
              path="/biriyani-menu"
              element={<BiryaniMenu />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* Fallback */}
            <Route
              path="*"
              element={<Home />}
            />

          </Routes>

        </AnimatePresence>
      </main>

      {/* Persistent Floating WhatsApp */}
      <WhatsAppFloat />

      {/* Footer */}
      <Footer />

    </div>
  );
}