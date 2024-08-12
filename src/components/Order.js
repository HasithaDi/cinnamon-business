import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Order() {
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct || {};

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(selectedProduct.price || 0);

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value, 10);
    setQuantity(qty);
    setTotalPrice(qty * (selectedProduct.price || 0));
  };

  return (
    <section id="order" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#5a3b2c] mb-8">
          Order Your Fresh Cinnamon
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Experience the rich aroma and unmatched flavor of the finest Sri Lankan Cinnamon. Complete the form below to place your order and bring the essence of Sri Lanka to your kitchen.
        </p>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a3b2c] transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a3b2c] transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Shipping Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a3b2c] transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Selected Product</label>
              <input
                type="text"
                value={selectedProduct.title || ''}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a3b2c] transition duration-300"
              />
            </div>
            <div className="flex flex-col gap-2 text-gray-700">
              <h3 className="text-lg font-medium">Price per Item: <span className="font-normal">${selectedProduct.price?.toFixed(2) || '0.00'}</span></h3>
              <h3 className="text-lg font-medium">Total Price: <span className="font-normal">${totalPrice.toFixed(2)}</span></h3>
            </div>
            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#5a3b2c] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3d2a20] transition duration-300"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Order;
