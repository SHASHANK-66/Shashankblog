import React from 'react'
import { Link } from 'react-router-dom'
import { TbArrowBigRightLines } from "react-icons/tb";



const Banner = () => {
  return (
    <div className='bg-gray-900 flex justify-center px-10 py-10'>
        <div className='text-center mt-15'>
            <h1 className='text-5xl lg-7xl text-white font-bold leading-slug'>Welcome to Our Blog</h1>
            <p className="text-lg text-green-500 mt-4 lg:w-4/5 mb-7 mx-auto">
    Stay updated with the latest trends, tips, and insights in technology, health, and AI. 
    Explore articles, success stories, and in-depth discussions on projects like Smiles4Health 
    and innovations that aim to empower individuals toward healthier lives. 
    Join me on this exciting journey of discovery and growth!
</p>
<div>
<Link 
      to="/Blog" 
      className="text-white text-lg font-semibold hover:text-orange-400 inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
    >
      <span className="hover:underline">Learn more</span>
      <TbArrowBigRightLines className="transition-all duration-300 group-hover:translate-x-2" />
    </Link>
</div>
            

        </div>
    </div>
  )
}

export default Banner;