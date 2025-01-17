// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Modal from 'react-modal';

// ตั้งค่า Modal ให้อ่านค่าจาก root element เพื่อป้องกันปัญหาใน SSR (Server-Side Rendering)
Modal.setAppElement('#root');

const certificates = [

  { id: 1, name: 'Certificate Alpha', description: 'This certificate is awarded for excellence in project Alpha.', image: 'https://placehold.co/600x400' },
  { id: 2, name: 'Certificate Beta', description: 'This certificate is awarded for outstanding performance in project Beta.', image: 'https://placehold.co/600x400' },
  { id: 3, name: 'Certificate Alpha2', description: 'This certificate is awarded for excellence in project Alpha.', image: 'https://placehold.co/600x400' },
  { id: 4, name: 'Certificate Beta2', description: 'This certificate is awarded for outstanding performance in project Beta.', image: 'https://placehold.co/600x400' },
  { id: 5, name: 'Certificate Alpha3', description: 'This certificate is awarded for excellence in project Alpha.', image: 'https://placehold.co/600x400' },
  { id: 6, name: 'Certificate Beta3', description: 'This certificate is awarded for outstanding performance in project Beta.', image: 'https://placehold.co/600x400' },
  { id: 7, name: 'Certificate Alpha4', description: 'This certificate is awarded for excellence in project Alpha.', image: 'https://placehold.co/600x400' },
  { id: 8, name: 'Certificate Beta4', description: 'This certificate is awarded for outstanding performance in project Beta.', image: 'https://placehold.co/600x400' },

];

function Archive() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const certificatesPerPage = 6;

  const indexOfLastCertificate = currentPage * certificatesPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
  const currentCertificates = certificates.slice(indexOfFirstCertificate, indexOfLastCertificate);

  const totalPages = Math.ceil(certificates.length / certificatesPerPage);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Certificate Archive</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        Explore my archives to find certificates that you may have missed.
      </p>

      {/* Grid of certificate cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCertificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal(certificate)}
          >
            <img src={certificate.image} alt={certificate.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">{certificate.name}</h2>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`px-4 py-2 rounded-lg ${currentPage === number + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'} transition duration-300`}
          >
            {number + 1}
          </button>
        ))}
      </div>

      {/* Modal for certificate details */}
      {selectedCertificate && (
        <Modal
          isOpen={!!selectedCertificate}
          onRequestClose={closeModal}
          contentLabel="Certificate Details"
          className={`modal-content ${document.documentElement.classList.contains('dark') ? 'dark-modal-content' : ''}`}
          overlayClassName="modal-overlay"
        >
          <div className="p-4">
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-4">{selectedCertificate.name}</h2>
            <p className="text-lg">{selectedCertificate.description}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Archive;
