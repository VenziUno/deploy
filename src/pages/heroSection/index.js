import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="section1"
      className="h-screen relative flex flex-col items-center justify-center bg-fixed bg-cover bg-center space-y-2 font-family:"
      style={{ backgroundImage: "url('/cover.jpg')" }}
    >
      <Image loading="lazy" src={"/logo.png"} alt="image" width={350} height={350} />
      <div className="text-5xl">SDS KRISTEN TABQHA</div>
    </section>
  );
};

export default HeroSection;
