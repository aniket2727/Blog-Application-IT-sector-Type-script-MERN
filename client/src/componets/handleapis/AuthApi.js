const base_url = 'http://localhost:9009';

interface RegisterParams {
  email: string;
  name: string;
  pass: string;
}

const register = async ({ email, name, pass }: RegisterParams): Promise<any> => {
  try {
    const result = await fetch(`${base_url}/register/register`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, pass }),
    });

    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error in register function:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

interface LoginParams {
  email: string;
  pass: string;
}

const login = async ({ email, pass }: LoginParams): Promise<any> => {
  try {
    const result = await fetch(`${base_url}/login/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, pass }),
    });

    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error in login function:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export { register, login };
