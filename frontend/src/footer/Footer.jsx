import React from "react";
import Wheat from "../assets/wheat.jpg"; // Ensure the path to the image is correct

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3"
            >
              <img
                src={Wheat} // Using the imported image here
                className="h-8"
                alt="FarmBazar Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">
                FarmBazar
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-600 sm:text-center">
            © 2024{" "}
            <a href="#" className="hover:underline">
              FarmBazar™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
