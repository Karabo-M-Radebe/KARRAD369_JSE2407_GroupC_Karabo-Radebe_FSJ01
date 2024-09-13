import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Store Name */}
      <h1 className="text-3xl font-bold ml-9">The Pantry</h1>

      {/* Navigation examples*/}
      <nav className="space-x-6">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/home" className="hover:underline">
          Products
        </a>
        <a href="/about" className="hover:underline">
          About
        </a>
      </nav>

      {/* Shopping Cart Icon */}
      <div className="relative">
        <div className="hover:text-gray-400 mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l3.6-8H6.4L5.3 5H3m4 8a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
);
};

export default Navbar