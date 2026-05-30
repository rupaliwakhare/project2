import { motion } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import Service1 from "../assets/service1.jpg"
import Service2 from "../assets/service2.jpg"
import Service3 from "../assets/service3.jpg"

function Service() {
const services = [
  {
    title: "Full Stack Development",
    desc: "Building scalable MERN stack applications with modern UI and secure backend architecture.",
    img: Service1,
  },
  {
    title: "Frontend Development",
    desc: "Creating responsive React applications with Tailwind CSS and Framer Motion.",
    img: Service2,
  },
  {
    title: "Backend Development",
    desc: "Developing REST APIs, authentication systems, and database architecture using Node.js and MongoDB.",
    img: Service3,
  },
];

  return (
    <section className="relative w-[90%] m-auto py-24">
      <div className="relative">
        <h1
          className="
      text-left
      text-[70px]
      md:text-[80px]
      font-extrabold
      text-gray-300
      leading-none
      m-0
      select-none
      pointer-events-none
    "
        >
          PORTFOLIO
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
      text-start
      text-3xl
      md:text-5xl
      font-bold
      -mt-8
      relative
      z-10
    "
        >
          /SELECTED WORK
        </motion.h2>
      </div>
      {/* 
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full mt-10">
        {services.map((srv, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="
        group
        h-[400px]
        border
        border-gray-300
        px-8
        py-6
        hover:bg-black
        hover:text-white
        transition-all
        duration-500
        cursor-pointer
        overflow-hidden
        flex flex-col justify-center
        
      "
          >
            
            <h3 className="text-3xl font-semibold mb-2">{srv.title}</h3>

            <p className="text-sm leading-7 opacity-90 mb-6">{srv.desc}</p>

            {srv.img && (
              <img
                src={srv.img}
                alt={srv.title}
                className="
            w-[220px] h-[220px] mx-auto
            object-cover rounded-xl mb-6
            transition-transform duration-500
            group-hover:rotate-6 group-hover:scale-105
          "
              />
            )}

            <div className="flex justify-end mt-auto">
   
              <FiArrowUpRight
                className="
            text-2xl transition-opacity duration-500
            group-hover:opacity-0 absolute
          "
              />
             
              <FiX
                className="
            text-2xl opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          "
              />
            </div>
          </motion.div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full mt-10">
        {services.map((srv, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="
        group relative p-8 rounded-xl shadow transition
        bg-gray-900 text-white hover:bg-black
        cursor-pointer overflow-hidden
        flex items-center justify-between
      "
          >
            {/* Left side content */}
            <div className="flex-1 ">
              <h3 className="text-2xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-sm leading-7 opacity-80">{srv.desc}</p>
            </div>

            {/* Middle image */}
            {srv.img && (
              <img
                src={srv.img}
                alt={srv.title}
                className="
            w-[180px] h-[180px] mx-6
            object-cover rounded-xl
            transition-transform duration-500
            group-hover:rotate-6 group-hover:scale-105
          "
              />
            )}

            {/* Right side icon toggle */}
            <div className="relative">
              <FiArrowUpRight
                className="
            text-2xl transition-opacity duration-500
            group-hover:opacity-0 absolute
          "
              />
              <FiX
                className="
            text-2xl opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Service;


