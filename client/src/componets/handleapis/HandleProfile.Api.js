// HandleUserApi.js (frontend)
const base_url = 'http://localhost:9009';

const AdduserProfile = async (email, name, profilePhoto, about, jobTitle, companyName, birthdate) => {
  try {
    const response = await fetch(`${base_url}/profile/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    const response = await fetch(`${base_url}/profile/profile?email=${email}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

export { AdduserProfile, Getuserprofile };
