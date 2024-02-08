




const base_url = 'http://localhost:9009';

interface BlogParams {
    userName:String,
    userEmail:String,
    content:String
}

const Addblog = async ({ userName, userEmail,content }: BlogParams): Promise<any> => {
  try {
    const result = await fetch(`${base_url}/blog/blogs`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, userEmail, content}),
    });

    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error in register function:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};



module.exports=Addblog;