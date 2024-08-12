import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Cinnamon Sticks',
    description: 'Premium Sri Lankan cinnamon sticks with a rich, spicy aroma.',
    image: '/img/img12.jpg',
    price: 15.00,
  },
  {
    id: 2,
    title: 'Ground Cinnamon',
    description: 'Finely ground cinnamon powder for all your culinary needs.',
    image: '/img/img13.jpg',
    price: 10.00,
  },
  {
    id: 3,
    title: 'Cinnamon Powder Blend',
    description: 'A unique blend of ground cinnamon and other spices for a versatile flavor.',
    image: '/img/img14.jpg',
    price: 12.00,
  },
];

const ProductPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate('/order', { state: { selectedProduct: product } });
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover Our Premium Cinnamon Products</h1>
        <p className="text-lg leading-relaxed">
          Explore our range of high-quality Sri Lankan cinnamon products, each carefully crafted to bring an authentic and rich flavor to your dishes. Our cinnamon is sourced from the finest farms in Sri Lanka, ensuring premium quality and a superior taste.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
