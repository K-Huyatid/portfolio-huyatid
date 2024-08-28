import { useState } from 'react';
import './App.css';

const App = () => {
return (
  <div className="min-h-screen bg-gray-100">
    {/* Header */}
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800">My Portfolio</h1>
      </div>
    </header>

    {/* Main Content */}
    <main className="container mx-auto px-4 py-8">
      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600">
          I am a passionate web developer witgh experience in creating dynamic and responsive websites using modern technologies like React, Vite, and TailwindCSS.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
            <p className="text-gray-600">Description of the first project.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
            <p className="text-gray-600">Description of the second project.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Project 3</h3>
            <p className="text-gray-600">Description of the third project.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-600">Feel free to reach out via email at <a href="mailto:youremail@example.com" className="text-blue-500">youremail@example.com</a>.</p>
      </section>
    </main>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
);
}

export default App;
