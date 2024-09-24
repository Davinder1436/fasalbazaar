import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Wheat from '../../assets/wheat.jpg';
import Corn from "../../assets/corn.jpg";
import Rice from "../../assets/rice.jpg";

const Solutions = () => {
  const slides = [
    {
      title: "Wheat Processing",
      description: "We offer innovative solutions for wheat processing, from milling to packaging, ensuring the highest quality products.",
      image: Wheat,
    },
    {
      title: "Rice Processing",
      description: "Our rice processing solutions ensure efficient production, maintaining the nutritional value of rice while improving yield.",
      image: Rice,
    },
    {
      title: "Corn Milling",
      description: "From corn milling to starch production, our solutions help deliver high-quality corn products with advanced processing technologies.",
      image: Corn,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-200 to-green-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 sm:mb-8 mt-6 text-white">
        Solutions We Offer
      </h1>
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 h-80 md:h-96">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-button-prev !text-white !left-[-50px]"></div>
        <div className="swiper-button-next !text-white !right-[-50px]"></div>
      </div>
    </div>
  );
};

export default Solutions;