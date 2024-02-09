// HandleUserApi.js (frontend)
const base_url = 'http://localhost:9009';
const token = 'your_jwt_token'; // Replace with your actual JWT token

const AdduserProfile = async (email, name, profilePhoto, about, jobTitle, companyName, birthdate) => {
  try {
    const response = await fetch(`${base_url}/profile/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the headers
      },
      body: JSON.stringify({
        email,
        name,
        profilePhoto,
        about,
        jobTitle,
        companyName,
        birthdate,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error adding user profile:', error);
    throw error;
  }
};

const Getuserprofile = async ({ email }) => {
  try {
    const response = await fetch(`${base_url}/profile/profile?email=${email}`, {
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the headers
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

export { AdduserProfile, Getuserprofile };
