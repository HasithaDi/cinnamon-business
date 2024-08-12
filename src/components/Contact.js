import React from 'react';
import { FaLocationArrow, FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#5a3b2c] mb-8">Contact Us</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          We’d love to hear from you! Whether you have questions about our products or just want to say hello, feel free to reach out. We’re here to help.
        </p>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a3b2c] transition duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a3b2c] transition duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a3b2c] transition duration-300"
                rows="5"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#5a3b2c] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3d2a20] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-[#5a3b2c] mb-6">Visit Us</h3>
          <div className="flex flex-col items-center text-gray-700 space-y-4">
            <p className="text-lg flex items-center">
              <FaLocationArrow className="text-[#3d2a20] mr-3" size={24} /> 
              123 Spice Lane, Colombo 10100, Sri Lanka
            </p>
            <p className="text-lg flex items-center">
              <FaPhoneSquareAlt className="text-[#3d2a20] mr-3" size={24} /> 
              +94 123 456 789
            </p>
            <p className="text-lg flex items-center">
              <MdEmail className="text-[#3d2a20] mr-3" size={24} /> 
              contact@freshecinnamon.lk
            </p>
            <p className="text-lg text-center">
              We look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
