import React from "react";
import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

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
          <h1 className="text-white text-start mt-2">4/5</h1>
          <motion.div
            className="w-full border-2 border-blue rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
          ></motion.div>
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
          <h1 className="text-white text-start mt-2">4/5</h1>
          <motion.div
            className="w-full border-2 border-blue rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
          ></motion.div>
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

          <h1 className="text-white text-start mt-2">4/5</h1>
          <motion.div
            className="w-full border-2 border-blue rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
          ></motion.div>
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
          <h1 className="text-white text-start mt-2">4/5</h1>
          <motion.div
            className="w-full border-2 border-blue rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
          ></motion.div>
        </motion.div>
        <motion.div
          className="flex items-start flex-col justify-start min-h-fit border rounded-lg  p-6"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <RiTailwindCssFill className="text-4xl text-sky-500 text-start" />
          <h1 className=" text-white text-start mt-2 text-2xl font-bold">
            Tailwind CSS
          </h1>
          <h1 className="text-white text-start mt-2">5/5</h1>
          <motion.div
            className="w-full border-2 border-blue rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
}
