const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-center">Contact Me</h2>

        <form className="mt-20 space-y-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10"
          ></textarea>

          <button className="bg-purple-600 px-10 py-4 rounded-2xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
