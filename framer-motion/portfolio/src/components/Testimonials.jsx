const testimonials = [
  {
    name: "John",
    review: "Amazing frontend developer with modern UI skills.",
  },
  {
    name: "Sarah",
    review: "Delivered responsive and beautiful website.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center">Testimonials</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl bg-white/5 border border-white/10"
            >
              <p className="text-gray-400 text-lg leading-9">"{item.review}"</p>

              <h3 className="text-2xl font-bold mt-8">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
