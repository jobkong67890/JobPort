/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Set App element for accessibility
Modal.setAppElement('#root');

const projects = [
  { id: 1, name: 'Project test1', description: '3 รูปลิงค์ภายนอก', images: ['/IA/IA_1.jpg', 'https://placehold.co/600x400?text=Hello\nWorld', 'https://placehold.co/600x400/grey/white'], link: '/test-external-links' },
  { id: 2, name: 'Project test2', description: '1 รูปลิงค์ภายนอก', images: ['https://placehold.co/600x400'], link: '/test-external-links' },
  { id: 3, name: 'Project test3', description: '2 รูปลิงค์ภายนอก', images: ['https://placehold.co/600x400', 'https://placehold.co/600x400?font=roboto'], link: '/test-external-links' },
  { id: 4, name: 'Project Alpha2', description: 'Description of Project Alpha', images: ['https://placehold.co/600x400', 'https://placehold.co/600x400?text=Hello\nWorld', 'https://placehold.co/600x400/grey/white'], link: '/test-external-links' },
  { id: 5, name: 'Project Beta2', description: 'Description of Project Beta', images: ['https://placehold.co/600x400'], link: '/test-external-links' },
  { id: 6, name: 'Project Gamma2', description: 'Description of Project Gamma', images: ['https://placehold.co/600x400', 'https://placehold.co/600x400?font=roboto'], link: '/test-external-links' },
  { id: 7, name: 'Project Alpha3', description: 'Description of Project Alpha', images: ['https://placehold.co/600x400', 'https://placehold.co/600x400?text=Hello\nWorld', 'https://placehold.co/600x400/grey/white'], link: '/test-external-links' },
  { id: 8, name: 'Project Beta3', description: 'Description of Project Beta', images: ['https://placehold.co/600x400'], link: '/test-external-links' },
  { id: 9, name: 'Project Gamma3', description: 'Description of Project Gamma', images: ['https://placehold.co/600x400', 'https://placehold.co/600x400?font=roboto'], link: '/test-external-links' },




  // เพิ่มโปรเจคเพิ่มเติมตามต้องการ
];

function MyProject() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedLargeImage, setSelectedLargeImage] = useState(null); // เพิ่ม state สำหรับภาพขยาย
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to the first image
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setSelectedLargeImage(null); // รีเซ็ตภาพขยาย
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  const openLargeImage = (image) => {
    setSelectedLargeImage(image); // เปิดภาพขยาย
  };

  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img src={project.images[0]} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">{project.name}</h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === number + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="p-4">
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.name}
                className="w-full h-auto object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => openLargeImage(selectedProject.images[currentImageIndex])} // เปิดภาพขยายเมื่อคลิก
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
                  >
                    <FaArrowRight />
                  </button>
                </>
              )}
            </div>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
            <p className="text-lg mb-6">{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </Modal>
      )}

      {/* Modal แสดงภาพขยาย */}
      {selectedLargeImage && (
        <Modal
          isOpen={!!selectedLargeImage}
          onRequestClose={() => setSelectedLargeImage(null)}
          contentLabel="Large Image"
          className="modal-content-large"
          overlayClassName="modal-overlay"
        >
          <div className="flex justify-center items-center h-full">
            <img
              src={selectedLargeImage}
              alt="Large Preview"
              className="max-w-full max-h-screen object-cover rounded-lg"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default MyProject;