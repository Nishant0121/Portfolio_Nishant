import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { FaHome } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { ModeContext } from "../contex";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className="nav z-30 sticky top-0 ">
      <div
        className={`navbar flex items-center justify-between ${
          isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <div className="design flex items-center ">
          <div className="oval mx-2 "></div>
          <div className="oval mx-2 "></div>
        </div>
        <Link to={"/contact"} className="contact-me mr-4">
          <button
            className="contact-me-btn p-2 rounded-lg bg-purple-700 hover:bg-purple-500 text-white
          "
            type="button"
          >
            Contact Me
          </button>
        </Link>

        <div className="hamburger">
          <div onClick={toggleMenu}>
            <IoClose
              size="44px"
              className={`navbar p-1 ${isOpen ? " block" : " hidden"}`}
            />
            <VscThreeBars
              size="44px"
              className={`navbar p-1 ${isOpen ? " hidden" : "block"}`}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`ham_menu h-svh  p-3 z-50 rounded-lg ${
            isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          <ul className="list-none  text-white">
            <li className="m-2 p-2 flex justify-start items-center text-lg">
              <FaHome />
              <h1 className="ml-2">Home</h1>
            </li>
            <li className="m-2 p-2 flex justify-start items-center text-lg">
              <FaPhone />
              <h1 className="ml-2">Contact</h1>
            </li>
            <li className="m-2 p-2 flex justify-start items-center text-lg">
              <IoVideocamOutline />
              <h1 className="ml-2">Videos</h1>
            </li>
            <li className="m-2 p-2 flex justify-start items-center text-lg">
              <label class="inline-flex items-center mb-5 cursor-pointer border rounded-full">
                <input
                  type="checkbox"
                  onClick={toggleMode}
                  class="sr-only peer"
                />
                <div class="relative w-9 h-5 bg-gray-200  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
