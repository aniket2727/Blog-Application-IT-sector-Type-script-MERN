import React from 'react';

const CreatePost = () => {
  return (
    <div className='main-a flex items-center justify-center h-screen'>
      <div className='sub-a w-3/5 p-8 bg-white rounded-md shadow-md'>
        <input
          style={{ verticalAlign: 'top' }}
          className='w-full h-32 px-2 py-2 border border-gray-300 rounded-md mb-4'
          type='text'
          placeholder='Write your blog...'
        />
        <button className='w-full bg-blue-500 text-white p-2 rounded-md'>
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
