import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 text-2xl mb-4 mt-2.5">👋 Hi, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Rupali
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mt-4">
            Frontend Developer
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8 max-w-xl">
            I build beautiful responsive web applications using React, Tailwind
            CSS and Framer Motion.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-2xl text-lg font-semibold">
              Hire Me
            </button>

            <button className="border border-purple-500 px-8 py-3 rounded-2xl text-lg">
              Download CV
            </button>
          </div>

          <div className="flex gap-4 mt-10">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-purple-600 transition">
              <FaGithub />
            </div>

            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-purple-600 transition">
              <FaLinkedin />
            </div>

            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-purple-600 transition">
              <FaTwitter />
            </div>

            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-purple-600 transition">
              <FaInstagram />
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center mt-10 lg:mt-0"
        >
          <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-purple-500/40 animate-pulse"></div>

          <div className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full border border-purple-500/20"></div>

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt=""
            className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-cover rounded-full border-8 border-purple-500/20 relative z-10"
          />

          <div className="absolute bottom-5 right-0 bg-black/50 backdrop-blur-xl border border-white/10 p-4 rounded-3xl z-20">
            <p className="text-green-400 text-sm">● Available for</p>

            <h3 className="text-xl mt-1">Freelance</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
