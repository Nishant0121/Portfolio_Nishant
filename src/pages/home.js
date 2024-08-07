import Navbar from "../components/navbar";
import Content from "./content";
import { motion, useScroll } from "framer-motion";

export const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar bg-blue z-50"
        style={{ scaleX: scrollYProgress }}
      />{" "}
      <Navbar />
      <Content />
    </>
  );
};
