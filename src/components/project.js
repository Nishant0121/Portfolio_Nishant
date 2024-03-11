import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import { BsInstagram } from "react-icons/bs";
import Lottie from "lottie-react";
import profile from "../assets/profile.json";
import "../styles/style.css";
import Project from "./proinfo";
export const Projects = () => {
  return (
    <div className="project">
      <div className="menu h-svh bg-purple-950 p-3 m-3 rounded-lg">
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
        </ul>
      </div>
      <div className="content ">
        <div className="info flex justify-around items-center p-3 m-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Lottie className="profile" animationData={profile} loop={true} />
          <div className="name flex flex-col justify-centre">
            <h1 className="text-xl font-semibold">Nishant Patil</h1>
            <h1>@nishantpatil</h1>
          </div>
          <div className="insta  ">
            <button className="flex p-2 items-center rounded-lg bg-purple-800 text-white hover:bg-purple-800">
              <BsInstagram />
              <h1 className="ml-2">@nishantpatil</h1>
            </button>
          </div>
        </div>
        <Project />
      </div>
    </div>
  );
};
