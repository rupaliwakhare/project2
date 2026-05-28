const skills = [
  {
    name: "React",
    level: "95%",
  },
  {
    name: "Tailwind CSS",
    level: "90%",
  },
  {
    name: "JavaScript",
    level: "92%",
  },
  {
    name: "Framer Motion",
    level: "88%",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl font-bold text-center">My Skills</h2>

        <div className="mt-20 space-y-10">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-3">
                <h3 className="text-2xl">{skill.name}</h3>

                <p>{skill.level}</p>
              </div>

              <div className="w-full h-4 bg-white/10 rounded-full">
                <div
                  style={{ width: skill.level }}
                  className="h-4 rounded-full bg-purple-600"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
