// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

function DownloadPage() {
  const files = [
    { id: 1, name: 'ResumeTH-EN', url: '/files/port/Resume_Pakorn_Khumkhet_TH-EN.pdf' },
    { id: 2, name: 'ResumeTH', url: '/files/port/Resume_Pakorn_Khumkhet_TH.pdf' },
    { id: 3, name: 'ResumeEN', url: '/files/port/Resume_Pakorn_Khumkhet_EN.pdf' },
  ];

  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Download Files</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        Here you can download or view files related to My Data. Click the buttons to take action.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <div>
              <h2 className="text-xl font-bold">{file.name}</h2>
              <p className="text-gray-700 dark:text-gray-300">Choose an action :</p>
            </div>
            <div className="flex space-x-4">
              {/* ปุ่มดูออนไลน์ */}
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
              >
                <FaEye className="mr-2" /> View Online
              </a>
              {/* ปุ่มดาวน์โหลด */}
              <a
                href={file.url}
                download
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                <FaDownload className="mr-2" /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownloadPage;
