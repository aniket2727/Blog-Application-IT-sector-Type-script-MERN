const base_url = 'http://localhost:9009';
const token = 'your_jwt_token'; // Replace with your actual JWT token

interface BlogParams {
  userName: string;
  userEmail: string;
  content: string;
}

const Addblog = async ({ userName, userEmail, content }: BlogParams): Promise<any> => {
  try {
    const result = await fetch(`${base_url}/blog/blogs`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the headers
      },
      body: JSON.stringify({ userName, userEmail, content }),
    });

    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error in Addblog function:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

const Getallblogs = async (): Promise<any> => {
  try {
    const response = await fetch(`${base_url}/blog/blogs`, {
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the headers
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export { Addblog, Getallblogs };
