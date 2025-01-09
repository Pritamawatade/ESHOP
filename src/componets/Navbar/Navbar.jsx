import React from "react";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Darkmode from "./Darkmode";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky bg-gray-50 dark:bg-gray-800 top-0 shadow-md">
      <div className="bg-gray-50 dark:bg-gray-800 dark:text-white  duration-300 ">
        <div className="py-4">
          <nav className="flex items-center justify-around gap-4">
            <div className="logo">
              <a
                href="#"
                className="text-2xl text-red-600 tracking-widest font-semibold sm:text-3xl"
              >
              ESHOP
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="links flex items-center gap-3">
            <Link to="/">
                <li className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                  Home
                </li>
             </Link>
             <Link to="/about">
                <li className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                  About
                </li>
             </Link>
             <Link to="/contact">
              <li className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                Contact
              </li>
             </Link>
             <Link to="/login">
              <li className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                sign in
              </li>
             </Link>

              {/* dropdown */}
              <li className="relative group cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white"
                >
                  Quick Links
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>
                </a>


              <div className="absolute cursor-pointer z-[9999] group-hover:block w-[250px] text-gray-500 dark:text-white transition-all p-2 hidden duration-200 bg-white shadow-md dark:bg-gray-900 rounded-md  ">
                <ul className="space-y-2">
                    <li className="hover:bg-red-700 p-2 inline-block w-full text-gray-500 dark:hover:text-white hover:text-white duration-200">Trending products</li>
                    <li className="hover:bg-red-700 p-2 inline-block w-full text-gray-500 dark:hover:text-white hover:text-white duration-200">Best selling</li>
                    <li className="hover:bg-red-700 p-2 inline-block w-full text-gray-500 dark:hover:text-white hover:text-white duration-200">premium products</li>
                </ul>
              </div>
              </li>
            </ul>
          </div>

          {/* righ side navigation */}
          <div className="flex items-center justify-around gap-3">
            <div className="hidden relative group sm:block">
              <input type="search" name="" id="" className="search-bar" />
              <IoMdSearch className="text-xl group-hover:text-red-500 duration-200: absolute top-1/2 -translate-y-1/2  right-3 text-gray-600 dark:text-gray-400" />
            </div>

            <button className="relative p-3">
              <FaShoppingCart className="text-2xl text-gray-500 dark:text-gray-400" />
              <div className=" absolute w-4 h-4 rounded-full top-0 right-0 text-xs bg-red-600">
                4
              </div>
            </button>

            <Darkmode />
          </div>
        </nav>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
