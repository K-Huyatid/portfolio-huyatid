import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import './App.css';
import Header from './Header';
import { 
  githubLight, 
  githubDark, 
  linkedin, 
  gmail, 
  lightBackground, 
  darkBackground, 
  certNetwork, 
  certSecu, 
  certNC2,
  resume,
  cert2022,
  cert2024,
  certpublic,
  certcyf,
  chedaccept,
  cheddeploy
} from './assets';

// Set app element for accessibility
Modal.setAppElement('#root');

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const modalRef = useRef(null);

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage('');
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }
    if (modalIsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalIsOpen]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-fixed bg-cover bg-center z-0 background-transition`}
        style={{ backgroundImage: `url(${darkMode ? darkBackground : lightBackground})` }}>
      </div>

      <div className="relative min-h-screen flex flex-col">
        <div className="flex-1 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 text-gray-900 dark:text-gray-100 px-4 md:px-8 lg:px-12 mx-auto max-w-6xl pt-[80px]">
          <section className="mb-10 text-center">
            <h2 className="text-4xl font-bold mb-4">Hello!</h2>
            <p className="text-lg md:text-xl font-medium">
              Welcome to my portfolio! I am Kyle Miguel Huyatid, an Information Technology student of the University of Mindanao.
            </p>
          </section>

          <section className="mb-10 text-center">
            <div className="flex justify-center gap-4 py-2">
              <a href="https://github.com/K-Huyatid" target="_blank" rel="noopener noreferrer">
                <img src={darkMode ? githubLight : githubDark} alt="GitHub" className="w-10 h-10 rounded-full cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/kyle-huyatid-850059325/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-10 h-10 rounded-full cursor-pointer" />
              </a>
              <a href="mailto:huyatidkyle@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={gmail} alt="Gmail" className="w-10 h-10 rounded-full cursor-pointer" />
              </a>
            </div>
          </section>

          {/* Resume Section */}
          <section className="mb-10 flex flex-col items-center">
            <div className="w-6/12 max-w-screen-lg border-4 border-gray-300 dark:border-gray-600 shadow-lg rounded-lg overflow-hidden">
              <img src={resume} alt="Resume" className="w-full h-auto object-contain" />
            </div>
            <div className="mt-4 flex space-x-4">
              <a
                href="./Resume.pdf" // Link to the PDF file in the public directory
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
              >
                View Resume
              </a>
              <a
                href="./Resume.pdf" // Link to the PDF file in the public directory
                download
                className="text-sm font-semibold bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Download Resume
              </a>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(certNetwork)}>
                <img src={certNetwork} alt="Certificate 1" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">IT Specialist in Networking</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(certSecu)}>
                <img src={certSecu} alt="Certificate 2" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">IT Specialist in Network Security</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(certNC2)}>
                <img src={certNC2} alt="Certificate 3" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">NC2 in Computer Systems Servicing</h3>
              </div>
            </div>
          </section>

          {/* Certificates Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(cert2024)}>
                <img src={cert2024} alt="Certificate 1" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">2024 UM 3rd Honors</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(cert2022)}>
                <img src={cert2022} alt="Certificate 2" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">2022 UM 2nd Honors</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(certcyf)}>
                <img src={certcyf} alt="Certificate 3" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Stacktrek Python Workshop</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(cheddeploy)}>
                <img src={cheddeploy} alt="Certificate 4" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">CHED Deployment</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(chedaccept)}>
                <img src={chedaccept} alt="Certificate 5" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">CHED Acceptance</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(certpublic)}>
                <img src={certpublic} alt="Certificate 6" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Public Presentation</h3>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(certNetwork)}>
                <img src={certNetwork} alt="Project 1" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-sm">Description of the project goes here.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(certSecu)}>
                <img src={certSecu} alt="Project 2" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p className="text-sm">Description of the project goes here.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(certNC2)}>
                <img src={certNC2} alt="Project 3" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p className="text-sm">Description of the project goes here.</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="bg-gray-200 dark:bg-gray-800 p-5 text-center text-gray-900 dark:text-gray-100 mt-10">
          <p>&copy; 2024 Kyle Miguel Huyatid All Rights Reserved</p>
        </footer>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Modal"
        className="fixed inset-0 flex items-center justify-center z-60" // Ensure z-index is higher
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div ref={modalRef} className="relative bg-white dark:bg-gray-900 p-4 border border-gray-300 dark:border-gray-600 shadow-lg rounded-lg max-w-3xl mx-auto max-h-screen overflow-auto">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <img src={modalImage} alt="Certificate" className="max-w-full max-h-screen object-contain" />
        </div>
      </Modal>
    </div>
  );
}

export default App;
