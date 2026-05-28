import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          className="rounded-3xl h-[75vh] w-2.5xl ml-10"
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 text-xl">About Me</p>

          <h2 className="text-4xl font-bold mt-4">
            Passionate Frontend Developer
          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-9">
            I create modern, responsive and animated web applications using
            React, Tailwind CSS and Framer Motion.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-10">
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
              <h3 className="text-4xl font-bold text-purple-400">20+</h3>

              <p className="mt-2 text-gray-400">Projects Completed</p>
            </div>

            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
              <h3 className="text-4xl font-bold text-purple-400">2+</h3>

              <p className="mt-2 text-gray-400">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
