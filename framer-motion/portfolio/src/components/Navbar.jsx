import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl text-purple-500">{"</>"}</span>

          <h1 className="text-3xl font-bold">
            Rupali
            <span className="text-purple-500">.dev</span>
          </h1>
        </div>

        <ul className="hidden md:flex gap-10 font-medium">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button className="hidden md:block bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl">
            Get In Touch
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
