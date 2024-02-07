import React, { useState } from 'react';
import { useDispatch,  } from 'react-redux';
import { setUserData,  } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
const LoginComponents: React.FC = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const dummyName = 'John Doe';
    const dummyToken = 'dummyToken';
    dispatch(setUserData({ email, token: dummyToken, name: dummyName }));
    navigate('/home')
  };

  const handleCreateAccount = () => {
    console.log('Creating account...');
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='text center text-red-500 font-bold font-serif text-10vw '>
          <h1 className='text-4xl'>Login here </h1>
        </div>
        <div className='text-center mx-auto items-center justify-center w-1/2 h-700 border  p-4 shadow-md'>
          <div className='mb-4'>
            <label className='inline-block text-left'>
              Email:
              <input type="text" value={email} onChange={handleEmailChange} className="px-10 rounded-md border border-gray-300 p-3" />
            </label>
          </div>
          <div className='mb-4'>
            <label className='inline-block text-left'>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} className="px-10 rounded-md border border-gray-300 p-3" />
            </label>
          </div>
          <div className='flex'>
            <button className='inline-block text-center mr-4 bg-green-500 text-white p-3 rounded-md cursor-pointer w-1/2' type="button" onClick={handleSubmit}>
              Submit
            </button>
            <button className='inline-block text-center ml-4 bg-green-500 text-white p-3 rounded-md cursor-pointer w-1/2' type="button" onClick={handleCreateAccount}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponents;
