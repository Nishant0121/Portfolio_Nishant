import { BsInstagram } from "react-icons/bs";
import Lottie from "lottie-react";
import profile from "../assets/profile.json";
import "../styles/style.css";
import Project from "./proinfo";
import { ModeContext } from "../contex";
import { Link } from "react-router-dom";
import { useContext } from "react";
import IKnow from "./iknow";
import Menu from "./menu";

export const Projects = () => {
  const { isDarkMode } = useContext(ModeContext);

  return (
    <div
      className={`project ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Menu />
      <div
        className={`content rounded-lg max-h-svh overflow-scroll ${
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
        <IKnow />
      </div>
    </div>
  );
};
