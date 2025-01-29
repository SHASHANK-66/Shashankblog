// pages/Home1.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home1 = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-green-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Green🌿
            <span className="text-green-400"> Sustainable Living</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover eco-friendly solutions for a better tomorrow
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/Service" 
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all"
            >
              Our Services
            </Link>
            <Link 
              to="/About" 
              className="border-2 border-green-500 text-white px-8 py-3 rounded-full hover:bg-green-500 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {['Eco Solutions', 'Sustainable Living', 'Green Tech'].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-green-600">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home1; 