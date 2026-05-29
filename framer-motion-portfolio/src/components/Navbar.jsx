import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="flex items-center shadow-md rounded-3xl space-x-2 p-4 ">
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span className="text-sm font-medium">Available for New Project</span>
      </div>

      <ul className="flex space-x-9 font-medium">
        <li className="hover:text-primary cursor-pointer">Work</li>
        <li className="hover:text-primary cursor-pointer">Service</li>
        <li className="hover:text-primary cursor-pointer">Experience</li>
        <li className="hover:text-primary cursor-pointer">Contact</li>
      </ul>

      <motion.a
        href="#contact"
        className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-3xl shadow-md hover:bg-gray-800 transition"
        whileHover={{ scale: 1.05 }}
      >
        <span>Let’s Talk</span>
        <FiArrowUpRight className="text-white" />
      </motion.a>
    </nav>
  );
}

export default Navbar;
