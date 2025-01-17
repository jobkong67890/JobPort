/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaUser, FaInfoCircle, FaStar } from 'react-icons/fa';

function About() {
  return (
    <div className="text-gray-900 dark:text-white p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      
      {/* Section: Profile */}
      <div className="text-center mb-12">
        <img
          src="/images/pro.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-extrabold mb-2">Pakorn Khumkhet</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Computer Engineering Student at RBAC University</p>
      </div>

       {/* Section: Info */}
       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaInfoCircle className="mr-2" /> Info
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Full Name:</strong> Pakorn Khumkhet</li>
          <li><strong>Nickname:</strong> Job</li>
          <li><strong>Age:</strong> 24</li>
          <li><strong>Military Status:</strong> Completed</li>
        </ul>
      </div>

      {/* Section: About Me */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaUser className="mr-2" /> About Me
        </h2>
        <p>
          I am passionate about programming in both software and hardware. I am eager to explore and learn in various fields. I enjoy gaining real-world work experience, as I believe that facing 
          real-life situations offers countless lessons 
          waiting to be discovered.
        </p>
      </div>

      {/* Section: Interest */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaStar className="mr-2" /> Interest
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Preferred Internship Positions: Software Developer, IT Support, or related roles</li>
          <li>Looking to gain real-world work experience</li>
          <li>Minimum internship requirement: 400 hours</li>
          <li>Available to start internship: March 3, 2568</li>
          <li>Open to continued work or extended internship if required by the company</li>
        </ul>
      </div>
      
      {/* Section: Education */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaGraduationCap className="mr-2" /> Education
        </h2>
        <div>
          <h3 className="text-xl font-semibold">RBAC University</h3>
          <p className="text-gray-600 dark:text-gray-400">Bachelor of Engineering in Computer Engineering</p>
          <p>2065 - Present</p>
        </div>
        <div><hr></hr></div>
        <div>
          <h3 className="text-xl font-semibold">Suratthani Vocational College</h3>
          <p className="text-gray-600 dark:text-gray-400">Business Computer</p>
          <p>2562 - 2564</p>
        </div>
      </div>

      {/* Section: Skills */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaLaptopCode className="mr-2" /> Skills
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Languages used for building and styling websites:
            <ul className="list-disc ml-10">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </li>
          <li>Programming Languages:
            <ul className="list-disc ml-10">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Dart</li>
            </ul>
          </li>
          <li>Tools and Frameworks for Application Development:
            <ul className="list-disc ml-10">
              <li>Node.js</li>
              <li>React.js</li>
              <li>Flutter</li>
              <li>Expo</li>
            </ul>
          </li>
          <li>Tools for Managing and Developing Websites:
            <ul className="list-disc ml-10">
              <li>Git</li>
              <li>Android Studio</li>
              <li>AdobeXD</li>
              <li>Postman</li>
            </ul>
          </li>
        </ul>
        <p className="mt-4">
          I am proficient in general programs such as Microsoft Office and am eager to learn new software applications. I am capable of working as part of a team. Currently, I work part-time as a computer hardware sales associate, which has allowed me to gain some expertise in this field as well.
        </p>
      </div>

      {/* Section: Experience */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaBriefcase className="mr-2" /> Experience
        </h2>
        <div>
          <h3 className="text-xl font-semibold">IT Sales.</h3>
          <p className="text-gray-600 dark:text-gray-400">Speed Computer.</p>
          <p>2065</p>
          <ul className="list-disc list-inside space-y-2">
          <li>Sales and Customer Service:
            <ul className="list-disc ml-10">
              <li>Provide professional advice and recommendations to customers about computer equipment and accessories.</li>
              <li>Assist customers in choosing products that meet their needs.</li>
              <li>Handle sales transactions and issue receipts.</li>
            </ul>
          </li>
          <li>Stock Management:
            <ul className="list-disc ml-10">
              <li>Monitor and maintain inventory levels to ensure sufficient stock availability.</li>
              <li>Conduct regular stock checks and manage inventory records accurately.</li>
              <li>Coordinate with suppliers for stock replenishment and track delivery schedules.
              </li>
            </ul>
          </li>
          <li>Store Maintenance:
            <ul className="list-disc ml-10">
              <li>Organize and maintain a clean and welcoming store environment.</li>
              <li>Ensure products are displayed neatly and effectively to attract customer interest.</li>
            </ul>
          </li>
          <li>Administrative and Documentation Tasks:
            <ul className="list-disc ml-10">
              <li>Prepare and process necessary documents, such as purchase orders and invoices.</li>
              <li>Maintain accurate records for transactions, inventory, and other store-related data.</li>
              <li>Communicate and coordinate with stakeholders, including suppliers and service providers.</li>
            </ul>
          </li>
          <li>Technical Knowledge:
            <ul className="list-disc ml-10">
              <li>Stay updated on the latest computer technologies and trends.</li>
              <li>Provide troubleshooting advice to customers when needed.</li>
            </ul>
          </li>
          <li>Other Responsibilities:
            <ul className="list-disc ml-10">
              <li>Handle customer inquiries and complaints professionally.</li>
              <li>Work collaboratively with team members to achieve sales targets.</li>
            </ul>
          </li>
        </ul>
        </div>
      </div>

      
    </div>
  );
}

export default About;
