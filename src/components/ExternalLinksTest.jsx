// eslint-disable-next-line no-unused-vars
import React from 'react';

function ExternalLinksTest() {
  const externalLinks = [
    { id: 1, name: 'Google', url: 'https://www.google.com' },
    { id: 2, name: 'Facebook', url: 'https://www.facebook.com' },
    { id: 3, name: 'YouTube', url: 'https://www.youtube.com' },
    { id: 4, name: 'GitHub', url: 'https://github.com' },
  ];

  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Test External Links</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        This page is created for testing external links. Click the links below to ensure they work as expected.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {externalLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-bold text-center">{link.name}</h2>
            <p className="text-center mt-2 text-blue-500 hover:underline">Visit {link.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ExternalLinksTest;
