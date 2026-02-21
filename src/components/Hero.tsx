export default function Hero() {
  return (
    <section className="hero-gradient py-24 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        <span className="gradient-text">Apps by Joey</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
        Desktop tools built with Rust, Tauri, and Swift — crafted for
        developers who value performance, privacy, and beautiful design.
      </p>
    </section>
  );
}
