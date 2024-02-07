// HomeComponents.tsx
import React from 'react';

const HomeComponents: React.FC = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      {
        Array(10).fill(0).map((item, index) => (
          <div key={index} className='w-4/5 shadow-md flex flex-col items-center min-h-500 p-4 bg-white rounded-md m-10'>
            <div className='mb-4 text-left w-full'>
              <h1 className='text-2xl font-bold'>Name of Authors</h1>
              <h1 className='text-lg'>Date of Publish</h1>
            </div>
            <div className='h-500 w-90 border-2 border-solid border-red-500 p-4 text-center'>
               <h1>hello words</h1>  
            </div>
            <div className='text-left w-full'>
              <button className='mt-4 p-2 bg-blue-500 text-white rounded-md'>Like</button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default HomeComponents;
