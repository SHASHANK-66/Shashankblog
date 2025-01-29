// pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Green🌿</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Committed to creating a sustainable future through innovation and education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img 
              src="https://picsum.photos/800/600?random&nature&green" 
              alt="About us" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
            Our feature mission is to promote sustainability through innovative solutions, focusing on reducing carbon footprints, supporting eco-friendly practices, and fostering community education. We aim to empower individuals and organizations to adopt greener lifestyles for a cleaner, healthier planet. Together, we create lasting environmental impact for future generations.
            </p>
            <ul className="space-y-4">
              {['Sustainable Practices', 'Eco Innovation', 'Community Education'].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">✔️</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;