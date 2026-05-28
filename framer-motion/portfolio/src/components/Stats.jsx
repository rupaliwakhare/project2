import { FaSmile, FaProjectDiagram, FaHeart, FaCoffee } from "react-icons/fa";

const stats = [
  {
    icon: <FaSmile />,
    number: "2+",
    text: "Years Experience",
  },
  {
    icon: <FaProjectDiagram />,
    number: "20+",
    text: "Projects Completed",
  },
  {
    icon: <FaHeart />,
    number: "15+",
    text: "Happy Clients",
  },
  {
    icon: <FaCoffee />,
    number: "5+",
    text: "Technologies",
  },
];

const Stats = () => {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 border border-white/10 rounded-3xl p-10 bg-white/5 backdrop-blur-xl">
        {stats.map((item, i) => (
          <div key={i} className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center text-3xl text-purple-400">
              {item.icon}
            </div>

            <div>
              <h2 className="text-5xl font-bold">{item.number}</h2>

              <p className="text-gray-400 mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
