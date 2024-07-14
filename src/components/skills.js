import React from "react";
import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className=" my-3">
        <h1 className="text-white text-start text-xl font-bold">Skills</h1>
      </div>
      <div className=" grid  grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-3 ">
        <motion.div
          className="flex items-start flex-col justify-start min-h-fit border rounded-lg  p-6"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaReact className="text-4xl text-blue text-start" />
          <h1 className=" text-white text-start mt-2 text-2xl font-bold">
            React Js
          </h1>
          <h1 className="text-white text-start mt-2">5/4</h1>
        </motion.div>
        <motion.div
          className="flex items-start flex-col justify-start min-h-fit border rounded-lg  p-6"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaNodeJs className="text-4xl text-green-500 text-start" />
          <h1 className=" text-white text-start mt-2 text-2xl font-bold">
            Node Js
          </h1>
          <h1 className="text-white text-start mt-2">5/4</h1>
        </motion.div>
        <motion.div
          className="flex items-start flex-col justify-start min-h-fit border rounded-lg  p-6"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <IoLogoJavascript className="text-4xl text-yellow-300 text-start" />
          <h1 className=" text-white text-start mt-2 text-2xl font-bold">
            JavaScript
          </h1>
          <h1 className="text-white text-start mt-2">5/4</h1>
        </motion.div>
        <motion.div
          className="flex items-start flex-col justify-start min-h-fit border rounded-lg  p-6"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SiMongodb className="text-4xl text-green-700 text-start" />
          <h1 className=" text-white text-start mt-2 text-2xl font-bold">
            Mongo DB
          </h1>
          <h1 className="text-white text-start mt-2">5/4</h1>
        </motion.div>
        <motion.div
          className="flex items-start flex-col justify-start min-h-fit border rounded-lg  p-6"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaHtml5 className="text-4xl text-orange-500 text-start" />
          <h1 className=" text-white text-start mt-2 text-2xl font-bold">
            HTML5
          </h1>
          <h1 className="text-white text-start mt-2">5/4</h1>
        </motion.div>
      </div>
    </>
  );
}
