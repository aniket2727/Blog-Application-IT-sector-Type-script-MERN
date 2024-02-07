import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, clearUserData } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const NavbarComponents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  console.log(userData);

  const handleLogout = () => {
    dispatch(clearUserData());
  };

  return (
    <div className='w-full h-300 bg-gray-500'>
      <div className='w-full h-90 flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <h1 className='ml-2 text-white font-bold p-3'>Dank Coder</h1>
          {userData ? (
            <h1 className='ml-2 text-white font-bold p-3'>{userData.name}</h1>
          ) : null}
        </div>
        <div className='flex items-center'>
          {userData.email ? (
            <div className='flex'>
              <button className='ml-2 border border-white text-white rounded font-bold p-3' onClick={handleLogout}>
                Logout
              </button>
              <button className='ml-2 border border-white text-white rounded font-bold p-3'>Account</button>
              <button className='ml-2 border border-white text-white rounded font-bold p-3' onClick={() => navigate('/create')}>
                Create Blog
              </button>
            </div>
          ) : (
            <div className='flex'>
              <button className='ml-2 border border-white text-white rounded font-bold p-3' onClick={() => navigate('/')}>
                Login
              </button>
              <button className='ml-2 border border-white text-white rounded font-bold p-3' onClick={() => navigate('/register')}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
