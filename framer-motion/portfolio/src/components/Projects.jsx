import { motion } from "framer-motion";

const projects = [
  {
    title: "Furniture Rental",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Ecommerce Website",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    title: "Modern Portfolio",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {projects.map((project, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10"
            >
              <img src={project.image} className="h-72 w-full object-cover" />

              <div className="p-8">
                <h3 className="text-3xl font-bold">{project.title}</h3>

                <button className="mt-6 bg-purple-600 px-6 py-3 rounded-xl">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
