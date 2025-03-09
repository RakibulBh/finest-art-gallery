import Input from "../Input";

export default function Submit() {
  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#282828]">
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-2xl px-4">
        {/* Title */}
        <h1
          className="font-semibold text-[4rem] text-white text-center tracking-tighter leading-none 
              [text-shadow:_0_2px_8px_rgba(0,0,0,0.3)]"
        >
          Do you have an idea?
        </h1>

        {/* Input field */}
        <Input />

        {/* Subtle instruction text */}
        <p className="text-white/50 text-lg mt-4">
          Be descriptive, creative, and wild. AI knows no limits.
        </p>
      </div>

      {/* Subtle particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
