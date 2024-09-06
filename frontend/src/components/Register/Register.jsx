import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiPhone, FiMapPin, FiUpload } from 'react-icons/fi';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="name"
                className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="password"
                className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                id="confirm-password"
                className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {/* Contact Number Field */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <div className="relative">
              <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                id="contact"
                className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Enter your contact number"
              />
            </div>
          </div>

          {/* Address Field */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <div className="relative">
              <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="address"
                className="pl-10 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                placeholder="Enter your address"
              />
            </div>
          </div>

          {/* Avatar Upload Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Avatar
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="avatar"
                accept="image/*"
                className="hidden"
              />
              <label
                htmlFor="avatar"
                className="flex items-center justify-center w-full py-2 border border-green-600 rounded-md shadow-sm bg-white text-green-600 cursor-pointer hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300"
              >
                <FiUpload className="mr-2" />
                Choose File
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">Already have an account?</span>
          {' '}
          <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
