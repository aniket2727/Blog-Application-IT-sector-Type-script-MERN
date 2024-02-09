import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { Getuserprofile } from '../handleapis/HandleProfile.Api';

interface UserProfileData {
  username: string;
  profileImage: string;
  job: string;
  about: string;
}

const UserProfile: React.FC = () => {
  const userData = useSelector(selectUserData);
  const email = userData.email;
  const [profileData, setProfileData] = useState<UserProfileData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getuserprofiledata = async () => {
      try {
        const data = await Getuserprofile({ email });
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching user profile data:', error);
        // Handle error, e.g., redirect to an error page
      }
    };

    getuserprofiledata();
  }, [email]);

  if (!profileData) {
    // Loading state, you can replace this with a loading spinner or message
    return <p>Loading...</p>;
  }

  return (
    <div className='w-full h-screen bg-gray-200 p-4'>
      <div className='max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md mt-8'>
        <h2 className='text-2xl font-bold mb-4'>User Profile</h2>
        <div className='flex items-center'>
          <img
            src={profileData.profileImage || 'default_profile_image_url'}
            alt='Profile'
            className='w-16 h-16 rounded-full mr-4'
          />
          <div>
            <h3 className='text-xl font-bold'>{profileData.username}</h3>
            <p className='text-gray-600'>{profileData.job}</p>
          </div>
        </div>
        <div className='mt-4'>
          <h4 className='text-lg font-bold mb-2'>About Me</h4>
          <p>{profileData.about}</p>
        </div>

        <button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4' onClick={() => navigate('/handle')}>
          Add Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
