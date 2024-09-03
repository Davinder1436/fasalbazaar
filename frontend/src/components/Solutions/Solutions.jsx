import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Wheat from "../../assets/wheat.jpg";

const Solutions = () => {
  const slides = [
    {
      index: 1,
      image: Wheat,
      date: "26 December 2019",
      title: "Car1",
      content: "jdhsfjksdkli;fj o ea animi?",
    },
    {
      index: 2,
      image: Wheat,
      date: "26 December 2019",
      title: "sadsjhkf",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
    {
      index: 3,
      image: Wheat,
      date: "26 December 2019",
      title: "ekaspreet",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-200 to-green-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 sm:mb-8 mt-6 text-white">
        Solutions we offer
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          spaceBetween={30}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,  // Adjusted delay for better user experience
            disableOnInteraction: false, // Changed to false so autoplay continues after interaction
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-green-500 opacity-75', // Adjusted opacity for better visibility
            bulletActiveClass: 'swiper-pagination-bullet-active bg-green-700',
          }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.index} className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 h-64 md:h-80 bg-gradient-to-r from-green-400 to-green-600 rounded-lg overflow-hidden shadow-md mb-6 md:mb-0">
                  <img
                    src={slide.image}
                    alt={slide.title} // Added alt attribute for better accessibility
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:ml-6 text-center md:text-left w-full md:w-1/2">
                  <span className="block text-gray-600 mb-2 text-sm">{slide.date}</span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 overflow-hidden">{slide.title}</h2>
                  <p className="text-gray-600 mb-4">{slide.content}</p>
                  <a 
                    href="#" 
                    className="inline-block bg-gradient-to-r from-green-400 to-green-600 py-2 px-6 rounded-full text-white font-medium transition-transform hover:scale-105 hover:shadow-lg"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Solutions;
