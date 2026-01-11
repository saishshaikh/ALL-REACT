// App.jsx
import React from "react";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">MyLogo</div>

            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a
                href="#home"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-gray-200 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-gray-700">
          This is a simple page with a colored Tailwind navbar.
        </p>
      </div>
    </div>
  );
}

export default App;
