import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, clearUserData } from '../redux/userSlice';

const NavbarComponents = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  console.log(userData);

  const handleLogout = () => {
    // Dispatch the action to clear user data
    dispatch(clearUserData());
  };

  return (
    <div className='w-full h-300 bg-gray-500'>
      <div className='w-full h-90 flex items-center space-between p-4'>
        <div>
          <h1 className='ml-2 text-white font-bold p-3'>dank coder</h1>

          {
            userData ?(
                <h1 className='ml-2 text-white font-bold p-3'>{userData.name}</h1>

            ):null
          }
        </div>
        <div>
          {userData.email ? (
            <div>
              <button className='ml-2 border border-white text-white rounded font-bold p-3' onClick={handleLogout}>
                Logout
              </button>
              <button className='ml-2 border border-white text-white rounded font-bold p-3'>Account</button>
        
            </div>
          ) : (
            <div>
              <button className='ml-2 border border-white text-white rounded font-bold p-3'>Login</button>
              <button className='ml-2 border border-white text-white rounded font-bold p-3'>Register</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
