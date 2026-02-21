export default function Hero() {
  return (
    <section className="hero-gradient py-28 px-4 text-center flex flex-col items-center justify-center">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-accent-cyan tracking-wide font-medium shadow-lg shadow-accent-cyan/10">
        Software Sandbox
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
        <span className="gradient-text drop-shadow-md">Joey's Workbench</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
        A collection of carefully crafted desktop utilities and tools. 
        Focused on native performance, privacy, and seamless user experiences.
      </p>
    </section>
  );
}
