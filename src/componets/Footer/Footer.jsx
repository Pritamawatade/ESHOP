import React from 'react';
import { Instagram, Facebook, Linkedin, Home, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-red-500 dark:text-red-400">ESHOP</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum
            </p>
            <p className="text-sm flex items-center gap-2">
              Made with <span className="text-red-500 dark:text-red-400">♥</span> by The Coding Journey
            </p>
            <button className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors">
              Visit our YouTube Channel
            </button>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Important Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer">
                <a href="#" className="flex items-center gap-2">
                  <Home className="w-4 h-4" /> Home
                </a>
              </li>
              <li className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer">
                <a href="#" className="flex items-center gap-2">About</a>
              </li>
              <li className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer">
                <a href="#" className="flex items-center gap-2">Contact</a>
              </li>
              <li className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer">
                <a href="#" className="flex items-center gap-2">Blog</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer">
                <a href="#" className="flex items-center gap-2">
                  <Home className="w-4 h-4" /> Home
                </a>
              </li>
              <li className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer">
                <a href="#" className="flex items-center gap-2">About</a>
              </li>
              <li className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer">
                <a href="#" className="flex items-center gap-2">Contact</a>
              </li>
              <li className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer">
                <a href="#" className="flex items-center gap-2">Blog</a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Noida, Uttar Pradesh
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 1234567890
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;