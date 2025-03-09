import MainPic from "../MainPic";

export default function Gallery() {
  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Subtle glowing circle for depth */}
      <div className="absolute w-[35rem] h-[35rem] rounded-full bg-white/10 left-[30rem] -translate-x-1/2 blur-3xl animate-float" />
      <div className="flex gap-4 items-center">
        <div className="bg-white w-64 aspect-square" />
        <MainPic />
        <div className="bg-white w-64 aspect-square" />
      </div>
    </section>
  );
}
