import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../redux/userSlice';
import Addblog from '../handleapis/HandleBlogapi';

const CreatePost: React.FC = () => {
  const [blogContent, setBlogContent] = useState<string>('');
  const userData = useSelector(selectUserData);

  const userName = userData.name;
  const userEmail = userData.email;

  const handleBlogChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBlogContent(e.target.value);
    console.log(blogContent)
  };

  const handleCreateBlog = () => {
    Addblog({ userName, userEmail, content: blogContent })
      .then((data) => {
        console.log('Blog created successfully:', data);
        setBlogContent('')
      })
      .catch((error) => {
        console.error('Error creating blog:', error);
      });
  };

  return (
    <div className='main-a flex items-center justify-center h-screen'>
      <div className='sub-a w-3/5 p-8 bg-white rounded-md shadow-md'>
        <textarea
          style={{ resize: 'none' }}
          className='w-full h-32 px-2 py-2 border border-gray-300 rounded-md mb-4'
          placeholder='Write your blog...'
          value={blogContent}
          onChange={handleBlogChange}
        />
        <button
          className='w-full bg-blue-500 text-white p-2 rounded-md'
          onClick={handleCreateBlog}
        >
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
