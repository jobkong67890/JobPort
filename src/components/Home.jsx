/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

function Home() {
  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Welcome to JobPort</h1>
      <p className="text-lg mb-10 text-center">
        Discover articles, insights, and stories on various topics. Enjoy exploring my content!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
          <p>Stay updated with my latest blog posts and articles on diverse topics.</p>
          <a href="/categories" className="text-blue-500 dark:text-blue-400 mt-4 inline-block">Explore Articles →</a>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>Learn more about the mission and team behind Sarissa Blog.</p>
          <a href="/about" className="text-blue-500 dark:text-blue-400 mt-4 inline-block">Learn More →</a>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p>Have any questions or suggestions? We'd love to hear from you!</p>
          <a href="/contact" className="text-blue-500 dark:text-blue-400 mt-4 inline-block">Contact Us →</a>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Explore Categories</h2>
          <p>Find content based on your interests by browsing through my categories.</p>
          <a href="/categories" className="text-blue-500 dark:text-blue-400 mt-4 inline-block">Browse Categories →</a>
        </div>

        {/* Card 5 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Archive</h2>
          <p>Looking for something specific? Explore my archive of all past posts.</p>
          <a href="/archive" className="text-blue-500 dark:text-blue-400 mt-4 inline-block">View Archive →</a>
        </div>

        {/* Card 6 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">MyProject</h2>
          <p>Explore the services we offer and how we can help you achieve your goals.</p>
          <a href="/MyProject" className="text-blue-500 dark:text-blue-400 mt-4 inline-block">View Services →</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
