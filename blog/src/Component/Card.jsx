import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";

const Card = ({ blog }) => {
  const filteredBlogs = blog;

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-6 bg-gray-50">
      {filteredBlogs.map((val) => (
       
        <a href={`https://www.google.com/search?q=${encodeURIComponent(val.title)}`}
          key={val.id}
          className="block group"
          target="_blank"
          >
          {/* Card Container */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
            {/* Image */}
            
            <img
              src={val.image}
              alt={val.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {val.title}
              </h3>

              {/* Author */}
              <div className="flex items-center text-gray-600 mb-4">
                <IoPersonSharp className="mr-2 text-gray-500" />
                <span className="text-sky-600 font-medium">{val.author}</span>
              </div>

              {/* Published Date */}
              <p className="text-sm text-gray-500">
                Published: {val.published_date}
              </p>
            </div>
          </div>
          </a>
       
      ))}
    </div>
  );
};
export default Card;