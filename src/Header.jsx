import React from 'react';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`w-full bg-gray-200 dark:bg-gray-800 p-5 flex justify-between items-center shadow-lg fixed top-0 left-0 z-50 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="flex items-center space-x-4">
        <a
          href="./Resume.pdf" // Link to the PDF file in the public directory
          download
          className="text-sm font-semibold bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Download Resume
        </a>
        <label htmlFor="theme-toggle" className="mr-3 cursor-pointer">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </label>
        <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform transform checked:translate-x-6"
          />
          <label
            htmlFor="theme-toggle"
            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer dark:bg-gray-600 transition-colors duration-200 ease-in"
          ></label>
        </div>
      </div>
    </header>
  );
}

export default Header;
