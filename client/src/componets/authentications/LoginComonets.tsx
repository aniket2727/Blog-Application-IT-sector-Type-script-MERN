




import React, { useState } from 'react';

interface LoginComponentsProps {
  // You can define props here if needed
}

const LoginComponents: React.FC<LoginComponentsProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Implement your login logic here using 'email' and 'password'
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleCreateAccount = () => {
    // Implement your logic for creating an account
    console.log('Creating account...');
  };

  return (
    <div>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      <button type="button" onClick={handleCreateAccount}>
        Create Account
      </button>
    </div>
  );
};

export default LoginComponents;
