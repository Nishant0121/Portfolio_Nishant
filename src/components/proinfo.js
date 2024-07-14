import React from "react";
import travelgo from "../images/travelgo.jpeg";
import atlas from "../images/atlas.jpeg";
import thegallery from "../images/The-Gallery.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

export default function Project() {
  return (
    <div>
      <h1 className="text-white text-start text-xl font-bold">Projects</h1>
      <div className="proinfo grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <motion.div
          className="card bg-base-100"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          whileHover={{
            scale: 1.05,
            zIndex: 25,
          }}
          transition={{
            duration: 0.3,
            stiffness: 400,
            damping: 10,
          }}
        >
          <>
            <figure className="">
              <img
                src={travelgo}
                alt="Travel Go"
                className="rounded-xl h-36 w-full object-cover"
              />
            </figure>
            <div className="items-center text-center">
              <h2 className="text-xl font-bold text-white text-start m-1">
                Travel Go
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="grid grid-cols-2">
                <Link
                  to={"https://travel-g0.vercel.app/"}
                  className="bg-blue rounded-xl px-2 text-black py-1 m-1"
                >
                  Visit
                </Link>
                <div className="dropdown dropdown-hover relative">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-blue rounded-xl px-2 text-black py-1 m-1"
                  >
                    Details
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content  menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow-gray-500 shadow border-t-2 border-l-2 border-blue absolute"
                  >
                    <div className=" flex items-center justify-center">
                      <FaReact className=" text-blue h-10 mx-2 text-3xl" />
                      <SiMongodb className=" text-green-700 h-10 mx-2 text-3xl" />
                      <FaNodeJs className=" text-green-400 h-10 mx-2 text-3xl" />
                      <SiExpress className=" text-sky-500 font-bold h-10 mx-2 text-3xl" />
                      <RiTailwindCssFill className=" text-sky-500 font-bold h-10 mx-2 text-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </motion.div>
        <motion.div
          className="card bg-base-100 shadow-xl"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          whileHover={{
            scale: 1.05,
            zIndex: 25,
          }}
          transition={{
            duration: 0.3,
            stiffness: 400,
            damping: 10,
          }}
        >
          <>
            <figure className="">
              <img
                src={atlas}
                alt="Atlas OS"
                className="rounded-xl h-36 w-full object-cover"
              />
            </figure>
            <div className="items-center text-center">
              <h2 className="text-xl font-bold text-white text-start m-1">
                Atlas OS
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="grid grid-cols-2">
                <Link
                  to={"https://atlas-os.vercel.app/"}
                  className="bg-blue rounded-xl px-2 text-black py-1 m-1"
                >
                  Visit
                </Link>
                <div className="dropdown dropdown-hover relative">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-blue rounded-xl px-2 text-black py-1 m-1"
                  >
                    Details
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow-gray-500 shadow border-t-2 border-l-2 border-blue absolute"
                  >
                    <div className=" flex items-center justify-center">
                      <FaReact className=" text-blue h-10 mx-2 text-3xl" />
                      <FaNodeJs className=" text-green-400 h-10 mx-2 text-3xl" />
                      <RiTailwindCssFill className=" text-sky-500 font-bold h-10 mx-2 text-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </motion.div>
        <motion.div
          className="card bg-base-100 shadow-xl"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          whileHover={{
            scale: 1.05,
            zIndex: 25,
          }}
          transition={{
            duration: 0.3,
            stiffness: 400,
            damping: 10,
          }}
        >
          <>
            <figure className="">
              <img
                src={thegallery}
                alt="The Gallery"
                className="rounded-xl h-36 w-full object-cover"
              />
            </figure>
            <div className="items-center text-center">
              <h2 className="text-xl font-bold text-white text-start m-1">
                The Gallery
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="grid grid-cols-2">
                <Link
                  to={"https://the-gallery-frontend.vercel.app/"}
                  className="bg-blue rounded-xl px-2 text-black py-1 m-1"
                >
                  Visit
                </Link>
                <div className="dropdown dropdown-hover relative">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-blue rounded-xl px-2 text-black py-1 m-1"
                  >
                    Details
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow-gray-500 shadow border-t-2 border-l-2 border-blue absolute"
                  >
                    <div className=" flex items-center justify-center">
                      <FaReact className=" text-blue h-10 mx-2 text-3xl" />
                      <SiMongodb className=" text-green-700 h-10 mx-2 text-3xl" />
                      <FaNodeJs className=" text-green-400 h-10 mx-2 text-3xl" />
                      <SiExpress className=" text-sky-500 font-bold h-10 mx-2 text-3xl" />
                      <RiTailwindCssFill className=" text-sky-500 font-bold h-10 mx-2 text-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </motion.div>
      </div>
    </div>
  );
}
