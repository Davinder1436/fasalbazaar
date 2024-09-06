import React, { useState } from 'react';

const ProfileCard = () => {
  const [activeSection, setActiveSection] = useState('Gallery');

  const sections = ['Gallery', 'Past Contracts', 'Personal Details'];

  return (
    <div className="h-auto bg-white overflow-hidden">
      {/* Background Image */}
      <div className="h-48 bg-cover" style={{ backgroundImage: 'url(../src/assets/Barley.jpg)' }}></div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row mt-6">
        
        {/* Profile Section (Left Side) */}
        <div className="w-full lg:w-1/3 lg:border-r border-gray-200 p-4">
          <div className="flex flex-col text-center justify-center lg:items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-center -mt-32">
              <img
                src="../src/assets/farmerprofile.jpg"
                alt="Avatar"
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-white"
              />
              
            </div>

            {/* Profile Details */}
            <div className="text-center lg:text-center px-6 py-4">
          <h4 className='flex justify-center'>4.5/5<img src="../src/assets/star.png" className='h-10 w-10 -mt-2'></img></h4>
              <h2 className="text-xl font-semibold">Ram Prakash</h2>
              <p className="text-sm text-gray-600">Phulera , Uttar Pradesh</p>
              <p className="text-sm text-gray-400">Rice, Millets, Turnips</p>

              {/* Follower/Uploads Info */}
              <div className="flex justify-around lg:justify-center space-x-4 mt-4 text-sm text-gray-600">
                <span>32 Contracts</span>
                <span>42 Acres Land</span>
                <span>25 connections</span>
              </div>

              {/* Bio Section */}
              <p className="text-gray-700 text-sm mt-4">
                Hi! My name is Ram Prakash. I'm a farmer from Uttar Pradesh. I specialize in growing Rice, Millets, and Turnips.
              </p>
            </div>

            {/* Buttons: Connect and Message */}
            <div className="flex justify-center space-x-4 mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                Connect
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                Message
              </button>
            </div>
          </div>
        </div>
        
        {/* Section Content (Right Side) */}
        <div className="w-full lg:w-2/3 p-4">
        
          {/* Navigation Bar for Sections */}
          <div className="flex justify-start space-x-6 border-b border-gray-300">
            {sections.map(section => (
              <button
                key={section}
                className={`text-lg font-semibold pb-2 ${
                  activeSection === section
                    ? 'text-green-600 border-b-4 border-green-600'
                    : 'text-gray-600'
                } transition-all duration-300`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
            
          </div>
          
          {/* Section Content */}
          <div className="mt-6">
            {activeSection === 'Gallery' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 ">
                <img src="../src/assets/barley.jpg" alt="Gallery" className="w-full object-cover rounded-lg" />
                <img src="../src/assets/barley.jpg" alt="Gallery" className="w-full object-cover rounded-lg" />
                <img src="../src/assets/barley.jpg" alt="Gallery" className="w-full object-cover rounded-lg" />
                <img src="../src/assets/barley.jpg" alt="Gallery" className="w-full object-cover rounded-lg" />
                <img src="../src/assets/barley.jpg" alt="Gallery" className="w-full object-cover rounded-lg" />
                <img src="../src/assets/barley.jpg" alt="Gallery" className="w-full object-cover rounded-lg" />
              </div>
            )}

            {activeSection === 'Past Contracts' && (
              <div className="p-4">
                <h3 className="text-lg font-semibold">Farmer Past Contracts</h3>
                <p className="text-gray-600 mt-2">
                  Ram Prakash has been farming for over 20 years, specializing in the cultivation of grains such as rice, millets, and turnips. His farm is located in Uttar Pradesh, known for its fertile soil and quality produce.
                </p>
              </div>
            )}

            {activeSection === 'Personal Details' && (
              <div className="p-4">
                <h3 className="text-lg font-semibold">Personal Details</h3>
                <p className="text-gray-600 mt-2">
                  Ram Prakash lives in Uttar Pradesh with his family. He is deeply passionate about sustainable farming and ensuring that his produce reaches markets directly, offering fair pricing for both consumers and farmers.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
