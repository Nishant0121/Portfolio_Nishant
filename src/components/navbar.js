import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { easeInOut, easeOut, motion, spring } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
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
        <motion.div
          className={`ham_menu h-svh  p-3 z-50 rounded-lg ${
            isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          transition={{ type: spring, ease: easeOut, duration: 0.2 }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
        >
          <ul className="list-none  text-white">
            <li className="m-2 p-2 flex justify-start items-center text-lg">
              <Link
                to={"/"}
                className="flex justify-start items-center"
                onClick={toggleMenu}
              >
                <FaHome />
                <h1 className="ml-2">Home</h1>
              </Link>
            </li>
            <li className="m-2 p-2 flex justify-start items-center text-lg">
              <Link
                to="/contact"
                className="flex justify-start items-center"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <h1 className="ml-2">Contact</h1>
              </Link>
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
        </motion.div>
      )}
    </nav>
  );
};
