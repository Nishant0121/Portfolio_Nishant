import React from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";

export default function Profile() {
  return (
    <article className=" flex flex-col items-center justify-center mt-2">
      <div>
        <img src={profile} alt="" srcset="" />
      </div>
      <div className=" m-2 mb-0 text-white text-lg font-semibold">
        <h1>Nishant Patil</h1>
      </div>
      <div className=" mt-0 font-thin">
        <h2>Softwere Enginner</h2>
      </div>
      <div>
        <button className=" bg-blue p-2 m-2 px-7  rounded-xl text-black">
          Contact me
        </button>
      </div>
    </article>
  );
}
