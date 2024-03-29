// RegisterComponents.tsx

import React, { useState } from 'react';
import { register } from '../handleapis/AuthApi';
import { useNavigate } from 'react-router-dom';
interface RegisterComponentsProps {
  // You can define props here if needed
}

const RegisterComponents: React.FC<RegisterComponentsProps> = () => {
  const navigate=useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    // You can add more complex password validation logic if needed

    // If all validations pass, call the register function
    register({ email, name, pass: password })
    .then((data) => {
      console.log('Registration successful:', data);
      if (data.message) {
          setTimeout(() => {
            navigate('/')
          }, 2000);
      }
    })
    .catch((error) => {
      console.error('Error during registration:', error);
      setErrorMessage('Registration failed. Please try again.');
    });
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='text center text-red-500 font-bold font-serif text-10vw '>
          <h1 className='text-4xl'>Register here</h1>
        </div>
        <div className='text-center mx-auto items-center justify-center w-1/2 h-700 border p-4 shadow-md'>
          {errorMessage && <p className='text-red-500 mb-4'>{errorMessage}</p>}
          <div className='mb-4'>
            <label className='inline-block text-left'>
              Name:
              <input type="text" value={name} onChange={handleNameChange} className="px-10 rounded-md border border-gray-300 p-3" />
            </label>
          </div>
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
            <button className='inline-block text-center mr-4 bg-green-500 text-white p-3 rounded-md cursor-pointer w-1/2' type="button" onClick={handleRegister}>
              Register
            </button>
            <button className='inline-block text-center mr-4 bg-green-500 text-white p-3 rounded-md cursor-pointer w-1/2' type="button" onClick={handleRegister}>
              Already Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComponents;
