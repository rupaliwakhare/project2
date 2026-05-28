const experience = [
  {
    company: "Google",
    role: "Frontend Developer",
    year: "2025 - Present",
  },
  {
    company: "Microsoft",
    role: "UI Developer",
    year: "2023 - 2025",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl font-bold text-center">Experience</h2>

        <div className="mt-20 space-y-10">
          {experience.map((item, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-3xl p-10 bg-white/5"
            >
              <h3 className="text-4xl font-bold">{item.company}</h3>

              <p className="text-purple-400 mt-3">{item.role}</p>

              <p className="text-gray-400 mt-2">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
