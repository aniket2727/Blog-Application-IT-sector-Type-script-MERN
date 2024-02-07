import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const [about, setAbout] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [birthdate, setBirthdate] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // Handle image upload logic
  const selectedImage = e.target.files?.[0] || null;
  setImage(selectedImage);
  console.log(image);
};


  const handleSubmit = () => {
    // Implement your create account logic here
  };

  const goToProfile = () => {
    navigate('/profile'); // Replace '/profile' with the actual URL of your profile page
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>

      <form className="max-w-md mx-auto">
        {/* Image Upload */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Profile Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* About */}
        <div className="mb-4">
          <label htmlFor="about" className="block text-sm font-medium text-gray-600">
            About
          </label>
          <textarea
            id="about"
            rows={3}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          ></textarea>
        </div>

        {/* Job Title */}
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-600">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* Birthdate */}
        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-sm font-medium text-gray-600">
            Birthdate
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create Account
        </button>

        {/* Go to Profile Button */}
        <button
          type="button"
          onClick={goToProfile}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 ml-4"
        >
          Go to Profile
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
