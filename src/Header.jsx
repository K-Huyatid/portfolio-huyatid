import React from 'react';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`w-full bg-gray-100 dark:bg-gray-900 p-5 flex items-center shadow-lg fixed top-0 left-0 z-50 transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
      <h1 className="text-2xl font-extrabold tracking-tight">Huyatid</h1>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
        <a href="#profile" className="text-lg font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Profile</a>
        <a href="#resume" className="text-lg font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Resume</a>
        <a href="#certifications" className="text-lg font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Certifications</a>
        <a href="#certificates" className="text-lg font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Certificates</a>
        <a href="#projects" className="text-lg font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Projects</a>
      </nav>
      <div className="flex items-center space-x-4 ml-auto">
        <label htmlFor="theme-toggle" className="mr-3 text-sm font-medium cursor-pointer transition-colors duration-200">
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
