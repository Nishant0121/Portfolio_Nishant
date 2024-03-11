import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FaHome } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";

export const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const gocontact = () => {
    navigate("/contact");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="navbar flex items-center justify-between bg-purple-950">
        <div className="design flex items-center ">
          <div className="oval mx-2 "></div>
          <div className="oval mx-2 "></div>
        </div>
        <div className="contact-me mr-4">
          <button
            className="contact-me-btn p-2 rounded-lg bg-purple-700 hover:bg-purple-500 text-white
          "
            type="button"
            onClick={gocontact}
          >
            Contact Me
          </button>
        </div>
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
        <div className="ham_menu h-svh bg-purple-950 p-3 z-50 rounded-lg">
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
      )}
    </div>
  );
};
