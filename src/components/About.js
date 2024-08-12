import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#986544] mb-12">About Us</h2>
        
        <p className="text-gray-800 mb-6 leading-relaxed text-center text-xl font-semibold tracking-wide">
          <strong>
            At Fresh Sri Lankan Cinnamon, we are passionate about bringing the authentic taste of Sri Lankan cinnamon to your kitchen. Our journey began with a mission to deliver high-quality, sustainably sourced cinnamon that reflects the rich heritage and traditions of Sri Lanka.
          </strong>
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-8">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="h-full flex flex-col justify-between">
              <p className="text-lg text-gray-800 mb-6 leading-relaxed text-justify">
                <strong className="text-[#986544]">Our Story:</strong> Founded by a team of cinnamon enthusiasts and experts, our company is rooted in the lush landscapes of Sri Lanka. We work closely with local farmers who use traditional methods to cultivate and harvest our cinnamon. This hands-on approach ensures that every batch of our product maintains the highest standards of quality and flavor.
              </p>

              <p className="text-lg text-gray-800 mb-6 leading-relaxed text-justify">
                <strong className="text-[#986544]">Our Commitment:</strong> We are committed to sustainability and ethical practices. Our cinnamon is grown without harmful chemicals, and we support fair trade practices to ensure that our farmers are fairly compensated. By choosing our cinnamon, you are not only enhancing your culinary experience but also supporting a more sustainable and equitable food system.
              </p>

              <p className="text-lg text-gray-800 mb-6 leading-relaxed text-justify">
                <strong className="text-[#986544]">What Sets Us Apart:</strong> Our cinnamon stands out for its exceptional aroma and flavor. Unlike mass-produced cinnamon, ours is carefully hand-processed to preserve its natural essence. Whether you’re a professional chef or a home cook, you’ll notice the difference in every dish you prepare with our cinnamon.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed text-justify">
                Thank you for choosing Fresh Sri Lankan Cinnamon. We invite you to explore our products and experience the rich, authentic flavor of Sri Lanka in every bite.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 h-full flex items-center">
            <img 
              src="/img/img5.jpg" 
              alt="Cinnamon" 
              className="w-full h-auto max-h-screen object-cover rounded-lg shadow-lg border-2 border-[#986544]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
