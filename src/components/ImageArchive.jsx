// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Modal from 'react-modal';

// ตั้งค่า Modal ให้อ่านค่าจาก root element เพื่อป้องกันปัญหาใน SSR (Server-Side Rendering)
Modal.setAppElement('#root');

const images = [
  { id: 1, name: 'VR', description: 'This is My first VR Headset.', images: ['/IA/IA_1.jpg', '/IA/IA_2.jpg'] },
  { id: 2, name: 'My Life My misfortune', description: '"I know it will be a disaster, but I keep buying it anyway."', images: ['/IA/stpro.png', '/IA/stqr.png'] },
  { id: 3, name: 'Testรูป1', description: 'Testรูปไม่เท่ากัน 2 รูป.', images: ['https://placehold.co/900x400', 'https://placehold.co/600x400?text=Image+2-2'] },
  { id: 4, name: 'Testรูป2', description: 'Testรูปไม่เท่ากัน 3 รูป.', images: ['https://placehold.co/700x400', 'https://placehold.co/600x400?text=Image+3-2', 'https://placehold.co/500x400?text=Image+3-2'] },
  { id: 5, name: 'Testรูป3', description: 'Testรูปไม่เท่ากัน 4 รูป..', images: ['https://placehold.co/500x400', 'https://placehold.co/600x200?text=Image+4-2', 'https://placehold.co/900x800?text=Image+4-2', 'https://placehold.co/100x200?text=Image+4-2'] },
  { id: 6, name: 'Testรูป4', description: 'Testรูปเท่ากัน 4 รูป.', images: ['https://placehold.co/600x400', 'https://placehold.co/600x400?text=Image+5-2', 'https://placehold.co/600x400?text=Image+5-2', 'https://placehold.co/600x400?text=Image+5-2'] },
  { id: 7, name: 'Image 2', description: 'This is image 2.', images: ['https://placehold.co/600x400', 'https://placehold.co/600x400?text=Image+6-2'] },
  { id: 8, name: 'Image 3', description: 'This is image 3.', images: ['https://placehold.co/600x400', 'https://placehold.co/600x400?text=Image+7-2'] },
  
];

function ImageArchive() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLargeImage, setSelectedLargeImage] = useState(null);
  const imagesPerPage = 6;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedLargeImage(null);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openLargeImage = (image) => {
    setSelectedLargeImage(image);
  };

  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Image Archive</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        Explore my archives to view images in full size by clicking on them.
      </p>

      {/* Grid of images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentImages.map((image) => (
          <div
            key={image.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img src={image.images[0]} alt={image.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">{image.name}</h2>
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

      {/* Modal for image details */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          contentLabel="Image Details"
          className={`modal-content ${document.documentElement.classList.contains('dark') ? 'dark-modal-content' : ''}`}
          overlayClassName="modal-overlay"
        >
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">{selectedImage.name}</h2>
            <p className="text-lg mb-4">{selectedImage.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedImage.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedImage.name} ${idx + 1}`}
                  className="w-full h-auto object-cover rounded-lg cursor-pointer"
                  onClick={() => openLargeImage(img)}
                />
              ))}
            </div>
          </div>
        </Modal>
      )}

      {/* Modal for large image */}
      {selectedLargeImage && (
        <Modal
          isOpen={!!selectedLargeImage}
          onRequestClose={() => setSelectedLargeImage(null)}
          contentLabel="Large Image"
          className="modal-content-large"
          overlayClassName="modal-overlay"
        >
          <div className="p-4 flex justify-center">
            <img
              src={selectedLargeImage}
              alt="Large Preview"
              className="w-auto h-auto max-w-full max-h-screen object-cover rounded-lg"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ImageArchive;