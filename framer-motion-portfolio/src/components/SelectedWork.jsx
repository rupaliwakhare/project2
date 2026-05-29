import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function SelectedWork() {
  const projects = [
    {
      title: "BloomCare - Mental Health App Landing Page",
      desc: "Emotional Engine for Your Personal Growth",
      studio: "Kumpin Studio",
      tag: "Landing Page",
      img: "/assets/bloomcare.png",
    },
    {
      title: "FragWater - Luxury Fragrance Landing Page",
      desc: "Premium Unisex Fragrance",
      studio: "Kumpin Studio",
      tag: "Landing Page",
      img: "/assets/fragwater.png",
    },
  ];

  return (
    <section className="relative w-[95%] m-auto py-24">
      <motion.h1
        initial={{ opacity: 0 }}
        // animate={{ opacity: 0.15 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
    absolute
    left-1/2
    top-12 md:top-10   // thoda niche shift
    -translate-x-1/2
    text-[120px]
    md:text-9xl
    font-extrabold
    text-gray-400      // thoda dark gray
    select-none
    pointer-events-none
    whitespace-nowrap
    z-0
  "
      >
        PORTFOLIO
      </motion.h1>

      <motion.h2
        // animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="text-center text-3xl md:text-6xl font-bold relative z-10 mb-12 mt-6"
      >
        /SELECTED WORK
      </motion.h2>

      <div className="flex justify-between items-center mb-12 relative z-10">
        <div className="flex gap-6 text-gray-600 font-medium">
          <button className="hover:text-black">All</button>
          <button className="hover:text-black">Real Project</button>
          <button className="hover:text-black">Exploration</button>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          View All Work
          <FiArrowUpRight className="text-white" />
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
           
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              ease:"easeOut"
              
            }}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-6">
              <span className="text-xs uppercase text-gray-400">
                {proj.tag}
              </span>
              <h3 className="text-xl font-semibold mt-2">{proj.title}</h3>
              <p className="text-gray-500 mb-2">{proj.desc}</p>
              <span className="text-sm text-gray-400">{proj.studio}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SelectedWork;
