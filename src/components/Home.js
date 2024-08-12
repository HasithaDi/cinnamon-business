import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const backgroundImage = `url(/img/${images[imageIndex]})`;

  return (
    <div>
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        backgroundColor: 'lightgray',
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: 1 }}
      ></div>

      <div
        className="text-center relative z-10 max-w-4xl px-6 py-8"
        style={{
          color: 'white',
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
        }}
      >
        <h1 className="text-6xl font-extrabold mb-6">
          Fresh Sri Lankan Cinnamon
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          Fresh Sri Lankan Cinnamon is renowned for its rich aroma, delicate flavor, and superior quality. Harvested from the lush landscapes of Sri Lanka, this spice is carefully cultivated and hand-processed to preserve its natural essence. Whether used in culinary dishes or for its health benefits, our cinnamon adds a touch of warmth and authenticity to every experience.
        </p>
        <div className="mt-8">
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
     <About />
     <Services/>
     <Contact/>
    </div>
  );
}

export default Home;
