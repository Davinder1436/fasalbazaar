import React, { useEffect, useState } from 'react';
import mainHomeImage from '../../assets/mainHome.png'; // Adjust the path based on your folder structure
import placeholderImage from '../../assets/placeholder1.avif'; // Replace with your image path

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = mainHomeImage; // Use the imported image path
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center pt-16"
      style={{
        backgroundImage: `url(${mainHomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Container */}
          <div className="flex-1 text-left mb-8 md:mb-0 md:mr-12">
            <h1
              className="font-bold text-[#ffffff] font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }} // Text shadow for lift effect
            >
              Discover the Power of Farming: Your Gateway to
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl mb-6">
              Explore sustainable farming practices and innovative agricultural solutions.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
          
          {/* Image Container */}
          <div className="flex-shrink-0 w-full md:w-2/5">
            {imageLoaded ? (
              <img
                src={placeholderImage} // Use the imported image path
                alt="Farming landscape"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ) : (
              <div className="w-full aspect-w-3 aspect-h-2 bg-gray-300 rounded-lg animate-pulse"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
