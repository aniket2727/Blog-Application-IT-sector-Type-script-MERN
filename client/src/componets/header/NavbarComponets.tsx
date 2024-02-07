import React from 'react';

const NavbarComponents = () => {
    return (
        <div className='w-full h-300 bg-gray-500'>
            <div className='w-full h-90 flex items-center space-between p-4'>
                <div>
                    <h1 className='ml-2  text-white  font-bold p-3'>Dank Developers</h1>
                </div>
                <div>
                    <button className='ml-2 border border-white text-white rounded font-bold p-3'>Logout</button>
                    <button className='ml-2 border border-white text-white rounded font-bold p-3'>Account</button>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponents;
