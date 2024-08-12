import React from 'react';

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#986544] mb-12">Our Services</h2>
        <div className="flex flex-wrap mt-8 -mx-4">
          
          <div className="w-full sm:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full hover:bg-[#fae9cf]">
              <img src="/img/img6.jpg" alt="Premium Cinnamon Supply" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
              <h3 className="text-2xl font-semibold text-center text-[#986544]">Premium Cinnamon Supply</h3>
              <p className="mt-4 text-center text-gray-600">
                We offer the highest quality Sri Lankan cinnamon, directly sourced from sustainable farms. Whether you need bulk orders for commercial use or smaller quantities for personal use, we've got you covered.
              </p>
            </div>
          </div>
          
          <div className="w-full sm:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full hover:bg-[#fae9cf]">
              <img src="/img/img7.jpg" alt="Custom Packaging Solutions" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
              <h3 className="text-2xl font-semibold text-center text-[#986544]">Custom Packaging Solutions</h3>
              <p className="mt-4 text-center text-gray-600">
                We provide custom packaging solutions tailored to your needs, ensuring that your cinnamon products are beautifully presented and preserved for maximum freshness.
              </p>
            </div>
          </div>
          
          <div className="w-full sm:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full hover:bg-[#fae9cf]">
              <img src="/img/img9.jpg" alt="Export Services" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
              <h3 className="text-2xl font-semibold text-center text-[#986544]">Export Services</h3>
              <p className="mt-4 text-center text-gray-600">
                With a strong network and logistical expertise, we export our premium cinnamon worldwide. Our services ensure that your orders are delivered on time, maintaining the highest quality standards.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap mt-8 -mx-4">    
          <div className="w-full sm:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full hover:bg-[#fae9cf]">
              <img src="/img/img8.jpg" alt="Consultation & Expertise" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
              <h3 className="text-2xl font-semibold text-center text-[#986544]">Consultation & Expertise</h3>
              <p className="mt-4 text-center text-gray-600">
                Our team of experts offers consultation services to help you understand the benefits and uses of Sri Lankan cinnamon. We provide guidance on selecting the right type of cinnamon for your needs.
              </p>
            </div>
          </div>
          
          <div className="w-full sm:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full hover:bg-[#fae9cf]">
              <img src="/img/img10.jpg" alt="Private Labeling" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
              <h3 className="text-2xl font-semibold text-center text-[#986544]">Private Labeling</h3>
              <p className="mt-4 text-center text-gray-600">
                We offer private labeling services for businesses looking to create their own brand of cinnamon products. Our team handles everything from sourcing to packaging, ensuring high-quality standards.
              </p>
            </div>
          </div>
          
          <div className="w-full sm:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full hover:bg-[#fae9cf]">
              <img src="/img/img11.jpg" alt="Educational Workshops" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
              <h3 className="text-2xl font-semibold text-center text-[#986544]">Educational Workshops</h3>
              <p className="mt-4 text-center text-gray-600">
                We host educational workshops that delve into the rich history, cultivation methods, and culinary uses of Sri Lankan cinnamon. Perfect for chefs, culinary students, and cinnamon enthusiasts.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Services;
