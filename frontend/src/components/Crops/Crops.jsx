import React, { useState } from 'react';
import CropCard from "./CropCard";
import Wheat from "../../assets/wheat.jpg";
import Corn from "../../assets/corn.jpg";
import Rice from "../../assets/rice.jpg";
import Barley from "../../assets/Barley.jpg";
import Oats from "../../assets/oats.jpg";
import Soybeans from "../../assets/soyabean.jpg";
import Potatoes from "../../assets/potatoes.jpg";
import Tomatoes from "../../assets/tomatoes.jpg";
import Carrots from "../../assets/carrots.jpg";
import Lettuce from "../../assets/Lettuce.jpg";

const CROPS_PER_PAGE = 4; // Updated to load 4 crops initially

const Crops = () => {
  const [visibleCrops, setVisibleCrops] = useState(CROPS_PER_PAGE);

  // Mock data - replace with actual data fetching logic
  const allCrops = [
    { id: 1, name: "Wheat", image: Wheat },
    { id: 2, name: "Corn", image: Corn },
    { id: 3, name: "Rice", image: Rice },
    { id: 4, name: "Barley", image: Barley },
    { id: 5, name: "Oats", image: Oats },
    { id: 6, name: "Soybeans", image: Soybeans },
    { id: 7, name: "Potatoes", image: Potatoes },
    { id: 8, name: "Tomatoes", image: Tomatoes},
    { id: 9, name: "Carrots", image: Carrots },
    { id: 10, name: "Lettuce", image: Lettuce },
  ];

  const loadMore = () => {
    setVisibleCrops(prevVisible => Math.min(prevVisible + CROPS_PER_PAGE, allCrops.length));
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 sm:mb-8">Crops</h2>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {allCrops.slice(0, visibleCrops).map(crop => (
          <CropCard key={crop.id} name={crop.name} image={crop.image} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCrops < allCrops.length && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={loadMore}
            className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-black transition duration-300 ease-in-out"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Crops;