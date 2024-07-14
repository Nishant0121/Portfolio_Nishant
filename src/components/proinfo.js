import React from "react";
import travelgo from "../images/travelgo.jpeg";
import atlas from "../images/atlas.jpeg";
import thegallery from "../images/The-Gallery.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <div>
      <h1 className="text-white text-start text-xl font-bold">Projects</h1>
      <div className="proinfo grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <motion.div
          className="card bg-base-100 "
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          whileHover={{
            scale: 1.05,
            zIndex: 25,
            boxShadow: "0 7px 10px rgba(31, 207, 231, 0.414)",
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
                alt="Shoes"
                className="rounded-xl h-36 w-full object-cover"
              />
            </figure>
            <div className=" items-center text-center">
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
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-blue rounded-xl px-2 text-black py-1 m-1"
                  >
                    Details
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-gray-500 shadow border-t-2 border-l-2 border-blue"
                  >
                    <li>
                      <h1>Item 1</h1>
                    </li>
                    <li>
                      <h1>Item 2</h1>
                    </li>
                  </ul>
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
            boxShadow: "0 7px 10px rgba(31, 207, 231, 0.414)",
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
                alt="Shoes"
                className="rounded-xl h-36 w-full object-cover"
              />
            </figure>
            <div className=" items-center text-center">
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
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-blue rounded-xl px-2 text-black py-1 m-1"
                  >
                    Details
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-gray-500 shadow border-t-2 border-l-2 border-blue"
                  >
                    <li>
                      <h1>Item 1</h1>
                    </li>
                    <li>
                      <h1>Item 2</h1>
                    </li>
                  </ul>
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
            boxShadow: "0 7px 10px rgba(31, 207, 231, 0.414)",
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
                alt="Shoes"
                className="rounded-xl h-36 w-full object-cover"
              />
            </figure>
            <div className=" items-center text-center">
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
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-blue rounded-xl px-2 text-black py-1 m-1"
                  >
                    Details
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-gray-500 shadow border-t-2 border-l-2 border-blue"
                  >
                    <li>
                      <h1>Item 1</h1>
                    </li>
                    <li>
                      <h1>Item 2</h1>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        </motion.div>
      </div>
    </div>
  );
}
