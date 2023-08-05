import Layout from "@/components/layout";
import Struktur from "./strucktur";
import VisiDanMisi from "./visidanmisi";
import Galeri from "./galeri";
import SekilasInfo from "./sekilasInfo";
import HeroSection from "./heroSection";
import { useState } from "react";

export default function Home() {
  const [isOpenGaleri, setIsOpenGaleri] = useState(false);
  const toggleOpenGaleri = () => {
    setIsOpenGaleri((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="relative">
        {isOpenGaleri ? (
          <div className="absolute flex py-10 z-30 w-full h-full bg-black/80 overflow-y-hidden" />
        ) : (
        <></>
        )}
        <Layout>
          <HeroSection />
          <SekilasInfo />
          <VisiDanMisi />
          <Struktur />
          <Galeri toggleOpenGaleri={toggleOpenGaleri} isOpenGaleri={isOpenGaleri}/>
        </Layout>
      </div>
    </>
  );
}
