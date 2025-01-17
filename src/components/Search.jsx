/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaSearch, FaQuestionCircle } from 'react-icons/fa';
import Modal from 'react-modal';

// ตั้งค่า Modal ให้อ่านค่าจาก root element
Modal.setAppElement('#root');

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isHelpOpen, setIsHelpOpen] = useState(false); // State สำหรับเปิด/ปิด Help Modal

  // Mock data สำหรับการค้นหา
  const data = [
    { id: 1, title: 'Learn React', description: 'A guide to learning React.js for beginners.' },
    { id: 2, title: 'JavaScript Basics', description: 'Understand the basics of JavaScript programming.' },
    { id: 3, title: 'CSS Styling Tips', description: 'Improve your web design with these CSS tips.' },
    { id: 4, title: 'React Router Guide', description: 'Learn how to use React Router for navigation.' },
    { id: 5, title: 'Advanced React Patterns', description: 'Master advanced patterns for React development.' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    // ค้นหาข้อมูลโดยกรองจากคำค้นหา
    const filteredResults = data.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);

    console.log(`Searching for: ${query}`);
  };

  const openHelp = () => setIsHelpOpen(true); // เปิด Help Modal
  const closeHelp = () => setIsHelpOpen(false); // ปิด Help Modal

  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Search</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        Use my search feature to quickly find the content you're looking for.
      </p>

      {/* Search Form */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Enter search terms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <FaSearch />
          </button>
          <button
            type="button"
            onClick={openHelp}
            className="ml-2 p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <FaQuestionCircle />
          </button>
        </form>
      </div>

      {/* Search Results */}
      <div className="mt-8 max-w-3xl mx-auto">
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((result) => (
              <li key={result.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">{result.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{result.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          query && <p className="text-center text-gray-500 dark:text-gray-400">No results found.</p>
        )}
      </div>

      {/* Help Modal */}
      <Modal
        isOpen={isHelpOpen}
        onRequestClose={closeHelp}
        contentLabel="Help Modal"
        className="modal-content bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto"
        overlayClassName="modal-overlay"
      >
        <h2 className="p-2 text-2xl font-bold mb-1 bg-gray-100 dark:bg-gray-700 rounded-md dark:text-white">Mock Data Information</h2>
        <h3 className="p-2 mb-6 ml-5 bg-gray-100 dark:bg-gray-700 rounded-md dark:text-white">Type something below or just type "d" and press enter. </h3>
        <ul className="space-y-2">
          {data.map((item) => (
            <li key={item.id} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md dark:text-white">
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
        <button
          onClick={closeHelp}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Search;
