import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Projects } from "../components/project";

export const Home = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const gocontact = () => {
    navigate("/contact");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-mono background">
      <Navbar />
      <Projects />
    </div>
  );
};
