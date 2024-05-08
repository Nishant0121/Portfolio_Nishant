import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function IKnow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 m-1">
      <div className="col-span-2 flex justify-center items-center">
        <div className=" grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 ">
          <motion.div
            className="flex items-center flex-col justify-start min-h-48 border rounded-lg  p-1"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className=" text-center font-bold text-lg">Frontend</p>
            <div className="flex flex-wrap mt-2">
              <div className="border rounded-lg  px-2 m-0.5">HTML</div>
              <div className="border rounded-lg  px-2 m-0.5">CSS</div>
              <div className="border rounded-lg  px-2 m-0.5">Tailwind Css</div>
              <div className="border rounded-lg  px-2 m-0.5">JavaScript</div>
              <div className="border rounded-lg  px-2 m-0.5">React Js</div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center flex-col justify-start min-h-48 border rounded-lg p-1"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className=" text-center font-bold text-lg">Backend</p>
            <div className="flex flex-wrap mt-2">
              <div className="border rounded-lg  px-2 m-0.5">Express Js</div>
              <div className="border rounded-lg  px-2 m-0.5">Node Js</div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center flex-col justify-start min-h-48 border rounded-lg p-1"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className=" text-center font-bold text-lg">Database</p>
            <div className="flex flex-wrap mt-2">
              <div className="border rounded-lg  px-2 m-0.5">MySQL</div>
              <div className="border rounded-lg  px-2 m-0.5">MogoDB</div>
              <div className="border rounded-lg  px-2 m-0.5">FireBase</div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center flex-col justify-start min-h-48 border rounded-lg p-1"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className=" text-center font-bold text-lg">Devops</p>
            <div className="flex flex-wrap mt-2">
              <div className="border rounded-lg  px-2 m-0.5">GIT</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3 font-bold text-xl">More Projects</span>
              </a>
            </li>
            <li>
              <Link
                to={"https://buget-manager.web.app/"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
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
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6 5.75A.75.75 0 0 1 6.75 5h6.5a.75.75 0 0 1 0 1.5h-2.127c.4.5.683 1.096.807 1.75h1.32a.75.75 0 0 1 0 1.5h-1.32a4.003 4.003 0 0 1-3.404 3.216l1.754 1.754a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 .53-1.28H8c1.12 0 2.067-.736 2.386-1.75H6.75a.75.75 0 0 1 0-1.5h3.636A2.501 2.501 0 0 0 8 6.5H6.75A.75.75 0 0 1 6 5.75Z"
                  ></path>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Budegt Tarcker
                </span>
                {/* <span className="inline-flex items-center justify-start px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
              </Link>
            </li>
            <li>
              <Link
                to={"https://weatherapp-three-ashy.vercel.app/"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  data-slot="icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M1 12.5A4.5 4.5 0 0 0 5.5 17H15a4 4 0 0 0 1.866-7.539 3.504 3.504 0 0 0-4.504-4.272A4.5 4.5 0 0 0 4.06 8.235 4.502 4.502 0 0 0 1 12.5Z"></path>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Weather App
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"https://fitness-app-91739.web.app/"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  data-slot="icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"></path>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Health App
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
