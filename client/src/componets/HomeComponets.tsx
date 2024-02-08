// HomeComponents.tsx
import React, { useEffect, useState } from 'react';
import { Getallblogs } from './handleapis/HandleBlogapi';

interface Blog {
  userName: string;
  userEmail: string;
  content: string;
  // Add other properties as needed
}

const HomeComponents: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await Getallblogs();
        setBlogs(result); // Assuming Getallblogs returns an array of blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      {blogs.map((blog, index) => (
        <div key={index} className='w-4/5 shadow-md flex flex-col items-center min-h-500 p-4 bg-white rounded-md m-10'>
          <div className='mb-4 text-left w-full'>
            <h1 className='text-2xl font-bold'>{blog.userName}</h1>
            {/* Add formatting for the date here */}
            <h1 className='text-lg'>{/* Date of Publish */}</h1>
          </div>
          <div className='h-500 w-90 border-2 border-solid border-red-500 p-4 text-center'>
            <h1>{blog.content}</h1>
          </div>
          <div className='text-left w-full'>
            <button className='mt-4 p-2 bg-blue-500 text-white rounded-md'>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeComponents;
