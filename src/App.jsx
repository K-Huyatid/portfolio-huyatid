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
  cheddeploy,
  compro1,
  compro2,
  compro3,
  compro4,
  hemis1,
  hemis2,
  hemis3,
  hemis4,
  jbr1,
  jbr2
} from './assets';

// Set app element for accessibility
Modal.setAppElement('#root');

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(null);

  const hemisImages = [hemis1, hemis2, hemis3, hemis4];
  const jbrImages = [jbr1, jbr2];
  const comproImages = [compro1, compro2, compro3, compro4];

  const openModal = (images, title, description) => {
    setModalImages(images);
    setModalTitle(title);
    setModalDescription(description);
    setCurrentImageIndex(0); // Start from the first image
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImages([]);
    setModalTitle('');
    setModalDescription('');
  };

  // Cycle through images for the modal
  useEffect(() => {
    let interval;
    if (modalIsOpen && modalImages.length > 0) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
      }, 10000); // Change image every 10 seconds
    }
    return () => clearInterval(interval); // Cleanup interval on unmount or modal close
  }, [modalIsOpen, modalImages]);

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
          <section id="profile" className="mb-5 text-center">
            <h2 className="text-4xl font-bold mb-4">Hello!</h2>
            <p className="text-lg md:text-xl font-medium">
              Welcome to my portfolio! I am Kyle Miguel Huyatid, an Information Technology student at the University of Mindanao. Here you'll find my achievements and the projects I've worked on throughout my academic career. You may contact me through the links below!
            </p>
          </section>

          <section className="mb-20 text-center">
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
          <section id="resume" className="mb-20 flex flex-col items-center">
          <div className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-4 border-2 ${darkMode ? 'border-white' : 'border-black'}`}>
  <h2 className="text-3xl font-bold mb-3">RESUME</h2>
</div>
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
          <section id="certifications" className="mb-20">
          <div className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-4 border-2 ${darkMode ? 'border-white' : 'border-black'}`}>
            <h2 className="text-3xl font-semibold mb-3">CERTIFICATIONS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal([certNetwork], 'IT Specialist in Networking')}>
                <img src={certNetwork} alt="Certificate 1" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">IT Specialist in Networking</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal([certSecu], 'IT Specialist in Network Security')}>
                <img src={certSecu} alt="Certificate 2" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">IT Specialist in Network Security</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal([certNC2], 'NC2 in Computer Systems Servicing')}>
                <img src={certNC2} alt="Certificate 3" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">NC2 in Computer Systems Servicing</h3>
              </div>
            </div>
          </section>

          {/* Certificates Section */}
          <section id="certificates" className="mb-20">
          <div className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-4 border-2 ${darkMode ? 'border-white' : 'border-black'}`}>
            <h2 className="text-3xl font-semibold mb-3">CERTIFICATES</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal([cert2024], '2024 UM 3rd Honors')}>
                <img src={cert2024} alt="Certificate 1" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">2024 UM 3rd Honors</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal([cert2022], '2022 UM 2nd Honors')}>
                <img src={cert2022} alt="Certificate 2" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">2022 UM 2nd Honors</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal([certcyf], 'Stacktrek Python Workshop')}>
                <img src={certcyf} alt="Certificate 3" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Stacktrek Python Workshop</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal([cheddeploy], 'CHED Deployment')}>
                <img src={cheddeploy} alt="Certificate 4" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">CHED Deployment</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal([chedaccept], 'CHED Acceptance')}>
                <img src={chedaccept} alt="Certificate 5" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">CHED Acceptance</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal([certpublic], 'Public Presentation')}>
                <img src={certpublic} alt="Certificate 6" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Public Presentation</h3>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20">
          <div className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-4 border-2 ${darkMode ? 'border-white' : 'border-black'}`}>
            <h2 className="text-3xl font-semibold mb-3">PROJECTS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" onClick={() => openModal(hemisImages, 'HEMISense', 'A Higher Education Management Information System created for the Commission on Higher Education Regional Office XI as my Capstone Research Project. The system is currently under patent processing.')}>
                <img src={hemis1} alt="Project 1" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">HEMISense</h3>
                <p className="text-sm">An Information Management System for CHEDRO XI.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer" 
              onClick={() => openModal(jbrImages, 'JBR Booking and Sales', 'A booking and sales system for Joan Beach Resort.')}>
                <img src={jbr1} alt="Project 2" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">JBR Booking and Sales</h3>
                <p className="text-sm">A booking and sales system for Joan Beach Resort.</p>
              </div>
              <div
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer"
                onClick={() => openModal(comproImages, 'CommutePro', 'A prototype for a commuting app. Check out the prototype <a href="https://www.figma.com/proto/Vjfo0C6gYnRljVazOIzdSa/Prototype" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">here</a>.')}
              >
                <img src={compro1} alt="Project 3" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">CommutePro</h3>
                <p className="text-sm">A prototype for a commuting app.</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="bg-gray-200 dark:bg-gray-800 p-5 text-center text-gray-900 dark:text-gray-100 mt-0">
          <p>&copy; 2024 Kyle Miguel Huyatid All Rights Reserved</p>
        </footer>
      </div>

      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Project Modal"
  className={`fixed inset-0 flex items-center justify-center z-60 ${darkMode ? 'dark' : ''}`}
  overlayClassName={`fixed inset-0 ${darkMode ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-50'}`}>
  <div ref={modalRef} className={`relative p-4 border shadow-lg rounded-lg max-w-3xl mx-auto max-h-screen overflow-auto ${darkMode ? 'bg-gray-900 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}>
    {/* Close button */}
    <button
      onClick={closeModal}
      className={`absolute top-2 right-2 p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} focus:outline-none z-50`}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    {/* Modal content */}
    <div className="relative">
      <img src={modalImages[currentImageIndex]} alt={modalTitle} className="w-full h-auto object-contain" />
      {modalImages.length > 1 && (
        <div className="absolute inset-0 flex justify-between items-center p-4">
          <button
            onClick={() => setCurrentImageIndex((currentImageIndex - 1 + modalImages.length) % modalImages.length)}
            className={`text-white ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} p-2 rounded-full`}>
            &lt;
          </button>
          <button
            onClick={() => setCurrentImageIndex((currentImageIndex + 1) % modalImages.length)}
            className={`text-white ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} p-2 rounded-full`}>
            &gt;
          </button>
        </div>
      )}
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-xl font-semibold">{modalTitle}</h3>
      <p className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: modalDescription }} />
    </div>
  </div>
</Modal>
    </div>
  );
}

export default App;
