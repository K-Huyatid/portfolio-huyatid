import { useState } from 'react';
import './App.css';
import Header from './header';
import lightBackground from './assets/1699671232418586.png';
import darkBackground from './assets/641430.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Header Component */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Parallax Background Layer */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-fixed bg-cover bg-center z-0 background-transition`}
        style={{ backgroundImage: `url(${darkMode ? darkBackground : lightBackground})` }}>
      </div>

      {/* Main Content Layer */}
      <div className="relative min-h-screen flex flex-col">
        {/* Content Wrapper */}
        <div className="flex-1 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 text-gray-900 dark:text-gray-100 px-4 md:px-8 lg:px-12 mx-auto max-w-6xl pt-[80px]">
          {/* Profile Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Profile</h2>
            <p className="text-lg">
              {/* Add your profile content here */}
              Welcome to my portfolio! I am a [Your Profession] with experience in [Your Skills/Expertise]. 
              My work focuses on [Your Work Focus]. Feel free to explore my projects and certificates below.
            </p>
          </section>

          {/* Certificates Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Certificate 1</h3>
                <p className="text-sm">Details about Certificate 1.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Certificate 2</h3>
                <p className="text-sm">Details about Certificate 2.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Certificate 3</h3>
                <p className="text-sm">Details about Certificate 3.</p>
              </div>
              {/* Add more certificates as needed */}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-sm">Description of the project goes here.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p className="text-sm">Description of the project goes here.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p className="text-sm">Description of the project goes here.</p>
              </div>
              {/* Add more projects as needed */}
            </div>
          </section>
        </div>

        {/* Footer Banner */}
        <footer className="bg-gray-200 dark:bg-gray-800 p-5 text-center text-gray-900 dark:text-gray-100">
          <p>&copy; 2024 My Portfolio</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
