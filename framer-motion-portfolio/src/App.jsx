// // App.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi"; 
// import heroImg from "./assets/hero.png"; 

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full top-0 z-50">
//         <div className="flex items-center shadow-md rounded-3xl space-x-2 p-4 ">
//           <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//           <span className="text-sm font-medium">Available for New Project</span>
//         </div>

//         <ul className="flex space-x-9 font-medium">
//           <li className="hover:text-primary cursor-pointer">Work</li>
//           <li className="hover:text-primary cursor-pointer">Service</li>
//           <li className="hover:text-primary cursor-pointer">Experience</li>
//           <li className="hover:text-primary cursor-pointer">Contact</li>
//         </ul>

//         <motion.a
//           href="#contact"
//           className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-3xl shadow-md hover:bg-gray-800 transition"
//           whileHover={{ scale: 1.05 }}
//         >
//           <span>Let’s Talk</span>
//           <FiArrowUpRight className="text-white" />
//         </motion.a>
//       </nav>

//       <section className="flex items-center justify-center min-h-[300px] pt-15">
//         <div className="bg-white  p-12 w-full ">
        
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="
//     text-center
//     mb-10
//     text-[40px]
//     md:text-[70px]
//     lg:text-[70px]
//     font-black
//     leading-none
//     whitespace-nowrap
//   "
//           >
//             <span className="text-transparent [-webkit-text-stroke:2px_black]">
//               RUPALI
//             </span>

//             <span className="ml-4 text-black">WAKHARE</span>
//           </motion.h1>

         
//           <div className="grid md:grid-cols-3 items-center gap-10">
           
//             <motion.div
//               initial={{ opacity: 0, x: -80 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5 }}
//               className="space-y-5"
//             >
//               <h2 className="text-2xl font-bold">Full-Stack Developer || MERN </h2>

//               <p className="text-gray-500 leading-8">
//                 I build beautiful responsive web applications using React,
//                 Tailwind CSS and Framer Motion.
//               </p>

//               <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full">
//                 Let's Collaborate
//                 <FiArrowUpRight />
//               </button>
//             </motion.div>

//             {/* Center Image */}
//             <motion.div
//               initial={{ opacity: 0, y: 120 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="flex justify-center"
//             >
//               <img
//                 src={heroImg}
//                 alt="hero"
//                 className="w-[200px] md:w-[300px] h-[300px] object-cover"
//               />
//             </motion.div>

//             {/* Right */}
//             <motion.div
//               initial={{ opacity: 0, x: 80 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.7 }}
//               className="flex flex-col items-end gap-4"
//             >
//               <button className="px-5 py-3 rounded-full border">GitHub</button>

//               <button className="px-5 py-3 rounded-full border">
//                 LinkedIn
//               </button>

//               <button className="px-5 py-3 rounded-full border">
//                 Instagram
//               </button>

//               <button className="px-5 py-3 rounded-full border">Twitter</button>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
