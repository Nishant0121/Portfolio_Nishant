import React from "react";
import profile from "../images/atlas.jpeg";

export default function Navbar() {
  return (
    <nav className="flex items-center  text-white h-12 p-2 justify-between border-b-2">
      <div className=" text-xl font-bold">Nishnat</div>
      <div className=" grid grid-cols-3 sm:grid-cols-4  h-12 text-white  gap-2">
        <div className=" flex justify-center items-center h-12">About</div>
        <div className=" flex justify-center items-center h-12">Project</div>
        <div className=" flex justify-center items-center h-12">Skills</div>
        <div className=" hidden sm:flex justify-center items-center h-12">
          <img
            className=" hidden sm:flex h-12 w-12 rounded-full"
            src={profile}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </nav>
  );
}
