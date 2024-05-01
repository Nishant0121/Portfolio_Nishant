import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ModeContext } from "../contex";
import { useContext } from "react";

export default function Menu() {
  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div>
      <div
        className={`menu h-svh mx-2  p-2  rounded-lg ${
          isDarkMode ? "bg-secondary text-light" : "bg-primary text-dark"
        }`}
      >
        <ul className="list-none  text-white">
          <motion.li
            className="m-2 p-2 flex justify-start items-center text-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to={"/"} className="flex justify-start items-center">
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                ></path>
              </svg>
              <h1 className="ml-2">Home</h1>
            </Link>
          </motion.li>
          <li className="m-2 p-2 flex justify-start items-center text-lg">
            <Link to="/contact" className="flex justify-start items-center">
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                ></path>
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
      </div>
    </div>
  );
}
