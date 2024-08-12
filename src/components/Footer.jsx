import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">Fresh Sri Lankan Cinnamon</h2>
            <p className="mt-4 max-w-md">
              Experience the pure essence of Sri Lankan Cinnamon. Our products are sourced directly from the heart of Sri Lanka, offering the finest quality to enhance your culinary creations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/home" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/products" className="hover:text-white transition">Products</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-0 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              123 Spice Lane, Colombo 10100, Sri Lanka
            </p>
            <p className="text-gray-400">
              Phone: +94 123 456 789
            </p>
            <p className="text-gray-400">
              Email: contact@freshecinnamon.lk
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex justify-center md:justify-end space-x-4">
              <FaFacebookF size={20} className="text-gray-400 hover:text-white transition"/>
              <FaTwitter size={20} className="text-gray-400 hover:text-white transition"/>
              <FaInstagram size={20} className="text-gray-400 hover:text-white transition"/>
              <FaLinkedinIn size={20} className="text-gray-400 hover:text-white transition"/>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Fresh Sri Lankan Cinnamon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
