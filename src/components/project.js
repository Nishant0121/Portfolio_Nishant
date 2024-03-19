import { FaHome } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import Lottie from "lottie-react";
import profile from "../assets/profile.json";
import "../styles/style.css";
import Project from "./proinfo";
import { ModeContext } from "../contex";
import { Link } from "react-router-dom";
import { useContext } from "react";
export const Projects = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div
      className={`project ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div
        className={`menu h-svh mx-3  p-3  rounded-lg ${
          isDarkMode ? "bg-secondary text-light" : "bg-primary text-dark"
        }`}
      >
        <ul className="list-none  text-white">
          <li className="m-2 p-2 flex justify-start items-center text-lg">
            <FaHome />
            <h1 className="ml-2">Home</h1>
          </li>
          <li className="m-2 p-2 flex justify-start items-center text-lg">
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
      <div
        className={`content rounded-lg ${
          isDarkMode ? "bg-secondary text-light" : "bg-primary text-dark"
        } `}
      >
        <div
          className={`info flex justify-around items-center bg-gradient-to-r p-3 m-3 rounded-lg ${
            isDarkMode
              ? "bg-gradient-to-r from-blue to-light_blue"
              : " bg-gradient-to-r from-light_blue to-blue"
          }`}
        >
          <Lottie className="profile z-0" animationData={profile} loop={true} />
          <div className="name flex flex-col justify-centre">
            <h1 className="text-xl font-semibold">Nishant Patil</h1>
            <h1>@nishantpatil</h1>
          </div>
          <div className="insta  ">
            <button className="flex p-2 items-center rounded-lg bg-purple-800 text-white hover:bg-purple-800">
              <BsInstagram />
              <Link
                to="https://www.instagram.com/nishant_0121_/"
                target="_blank"
                className="ml-2"
              >
                @nishantpatil
              </Link>
            </button>
          </div>
        </div>
        <Project />
      </div>
    </div>
  );
};
