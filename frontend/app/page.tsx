import MainPic from "@/components/MainPic";
import Gallery from "@/components/Sections/Gallery";
import Hero from "@/components/Sections/Hero";
import Submit from "@/components/Sections/Submit";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Submit />
    </main>
  );
}
