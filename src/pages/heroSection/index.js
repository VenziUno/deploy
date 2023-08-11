import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="section1"
      className="h-screen relative flex flex-col items-center justify-center bg-fixed bg-cover bg-center space-y-2 font-family:"
      style={{ backgroundImage: "url('/cover.jpg')" }}
    >
      <Image loading="lazy" src={"/logo.png"} alt="image" width={350} height={350} className="w-44 h-44 lg:w-96 lg:h-96" />
      <div className="text-3xl lg:text-5xl ">{process.env.SITE_NAME}</div>
    </section>
  );
};

export default HeroSection;
