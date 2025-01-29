import React, { useEffect, useState } from 'react';
import Card from './Card';
import Sidebar from './Sidebar';



const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      let response = await fetch(`http://localhost:5000/Blogs`);
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlog();
  }, []); 
  return (
    <div className=' flex  flex-col lg:flex-row gap-12' >
     
     <div><Card blog={blogs}/></div>
     <div><Sidebar/></div>

    
    </div>
  );
};

export default BlogPage;
