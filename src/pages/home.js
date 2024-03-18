import { Projects } from "../components/project";

import { Navbar } from "../components/navbar";
export const Home = () => {
  return (
    <div className="font-mono background">
      <Navbar />
      <Projects />
    </div>
  );
};
