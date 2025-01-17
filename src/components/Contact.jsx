/* eslint-disable no-unused-vars */
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    alert("Sorry, this feature is still a work in progress. but you can use my email address to contact me. Sorry!");
  };

  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Contact Me</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        If you have any questions or need further information, feel free to reach out to me.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">
            You can contact me using the information below or by filling out the form.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-2" />
              <p>pakorn.work.011143@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-blue-600 dark:text-blue-400 mr-2" />
              <p>063 550 4776</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-2" />
              <p>306 RBAC Place, Soi Lat Phrao 107, Yaek 7, Khlong Chan Subdistrict, Bang Kapi District, Bangkok 10240</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
              <input className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400" type="text" id="name" name="name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
              <input className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400" type="email" id="email" name="email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400" id="message" name="message" rows="4"></textarea>
            </div>
            <button className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
