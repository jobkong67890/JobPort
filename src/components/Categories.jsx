/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaCode, FaBook, FaTools, FaGlobe, FaChartLine } from 'react-icons/fa';

function Categories() {
  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Section: Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Categories</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Browse throughmydiverse categories to find content that interests you. Whether you're looking for technical articles, career advice, or industry insights, we've got something for you.
        </p>
      </div>

      {/* Section: Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Category 1: Programming */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaCode className="text-blue-500 text-3xl mr-4" />
            <h2 className="text-2xl font-bold">Programming</h2>
          </div>
          <p>
            Dive into tutorials, best practices, and tips on various programming languages and development tools.
          </p>
        </div>

        {/* Category 2: Education */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaBook className="text-green-500 text-3xl mr-4" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <p>
            Explore articles on learning strategies, educational technologies, and ways to improve your study habits.
          </p>
        </div>

        {/* Category 3: Tools & Resources */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaTools className="text-red-500 text-3xl mr-4" />
            <h2 className="text-2xl font-bold">Tools & Resources</h2>
          </div>
          <p>
            Discover the tools and resources that can help you in your projects and career development.
          </p>
        </div>

        {/* Category 4: Global Perspectives */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaGlobe className="text-purple-500 text-xl mr-4" />
            <h2 className="text-2xl font-bold">Global Perspectives</h2>
          </div>
          <p>
            Read about global trends, cultural insights, and the impact of technology around the world.
          </p>
        </div>

        {/* Category 5: Career Growth */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-yellow-500 text-3xl mr-4" />
            <h2 className="text-2xl font-bold">Career Growth</h2>
          </div>
          <p>
            Get advice on career development, job search strategies, and ways to advance in your chosen field.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
