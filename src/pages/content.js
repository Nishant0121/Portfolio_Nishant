import "../styles/style.css";
import React from "react";
import Profile from "../components/profileInfo";
import Project from "../components/proinfo";
import Skills from "../components/skills";

export default function Content() {
  return (
    <div className=" flex flex-col justify-start items-center ">
      <div className=" w-85">
        <Profile />
        <Project />
        <Skills />
      </div>
    </div>
  );
}
