import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          {/* Footer Links */}
          <div className="space-y-4">
            <a href="/" className="hover:underline ml-10 mr-10">
              Home
            </a>
            <a href="/" className="hover:underline ml-10 mr-10">
              Contact
            </a>
            <a href="/" className="hover:underline ml-10 mr-10">
              About
            </a>
          </div>
  
          {/* Social Media Links */}
          <div className="mt-6 flex justify-center space-x-6">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M18 2h-3c-2.8 0-5 2.2-5 5v3H8v4h2v7h4v-7h3l1-4h-4V7c0-.6.4-1 1-1h3V2z"
                />
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1a10.66 10.66 0 01-8-4 4.48 4.48 0 001.38 6 4.48 4.48 0 01-2-.54v1a4.48 4.48 0 003.57 4.4A4.52 4.52 0 014 17a9 9 0 008.29 5.79A10.66 10.66 0 0024 13.36c0-.16 0-.32-.01-.47A7.72 7.72 0 0025 9.5a7.48 7.48 0 01-2.14.59 3.72 3.72 0 001.64-2.05"
                />
              </svg>
            </a>
          </div>
  
          {/* Copyright Information */}
          <div className="mt-6 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} The Pantry. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };

export default Footer