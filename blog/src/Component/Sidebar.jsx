import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineFolder, // For categories
  AiOutlineFire, // For popular posts
  AiOutlineTag, // For tags
  AiOutlineMail, // For newsletter
} from 'react-icons/ai';

const BlogSidebar = () => {
  // Dummy data for categories, popular posts, and tags
  const categories = ['Technology', 'Lifestyle', 'Travel', 'Food', 'Health'];
  const popularPosts = [
    { id: 1, title: '10 Tips for Better Productivity' },
    { id: 2, title: 'Exploring the Mountains' },
    { id: 3, title: 'Healthy Eating Habits' },
  ];
  const tags = ['React', 'Travel', 'Food', 'Fitness', 'Tech', 'Lifestyle'];

  return (
    <div className="w-full md:w-64 p-6 bg-gray-50 border-l border-gray-200">
      {/* Categories Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <AiOutlineFolder className="mr-2" />
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              {/* <Link
                to={`/category/${category.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              > */}
                {category}
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <AiOutlineFire className="mr-2" />
          Popular Posts
        </h3>
        <ul className="space-y-2">
          {popularPosts.map((post) => (
            <li key={post.id}>
              {/* <Link
                to={`/blog/${post.id}`}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              > */}
                {post.title}
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <AiOutlineTag className="mr-2" />
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link
              key={index}
              to={`/tag/${tag.toLowerCase()}`}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <AiOutlineMail className="mr-2" />
          Newsletter
        </h3>
        <p className="text-gray-600 mb-4">
          Subscribe to our newsletter for the latest updates.
        </p>
        <form>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-3"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default BlogSidebar;