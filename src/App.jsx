// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Categories from './components/Categories';
import Search from './components/Search';
import Archive from './components/Archive';
import Contact from './components/Contact';
import MyProject from './components/MyProject';
import ImageArchive from './components/ImageArchive';
import DownloadPage from './components/DownloadPage';

import ExternalLinksTest from './components/ExternalLinksTest';

function App() {
  return (
    <Router>
      <div className="flex justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      
      <Helmet>
        <title>JobPort</title>
      </Helmet>

        <div className="flex w-full max-w-5xl">
          {/* Sidebar/Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="w-full p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/search" element={<Search />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/MyProject" element={<MyProject />} />
              <Route path="/ImageArchive" element={<ImageArchive />} />
              <Route path="/download" element={<DownloadPage />} />

              <Route path="/test-external-links" element={<ExternalLinksTest />} />
              
              
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
