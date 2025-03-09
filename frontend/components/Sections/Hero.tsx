export default function Hero() {
  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Subtle glowing circle for depth */}
      <div className="absolute w-[35rem] h-[35rem] rounded-full bg-white/10 left-[30rem] -translate-x-1/2 blur-3xl animate-float" />

      {/* Main title with elegant styling */}
      <p className="font-semibold text-[8rem] text-white relative z-10 tracking-tighter leading-none">
        LEONARDO
        <span className="text-white/80">De</span>
        <span className="text-white/60">GPT</span>
      </p>
    </section>
  );
}
