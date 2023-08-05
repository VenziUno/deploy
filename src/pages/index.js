import Layout from "@/components/layout";
import Struktur from "./strucktur";
import VisiDanMisi from "./visidanmisi";
import Galeri from "./galeri";
import SekilasInfo from "./sekilasInfo";
import HeroSection from "./heroSection";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isOpenGaleri, setIsOpenGaleri] = useState(false);
  const toggleOpenGaleri = () => {
    setIsOpenGaleri((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="relative">
      <Head>
        {/* Page title */}
        <title>SDS Kristen Tabqha - Sekolah Dasar Kristen Tabqha</title>
        
        {/* Meta tags */}
        <meta name="description" content="Selamat datang di SDS Kristen Tabqha, sekolah dasar Kristen berkualitas yang memberikan pendidikan unggul dengan pendekatan holistik." />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="SDS Kristen Tabqha - Sekolah Dasar Kristen Tabqha" />
        <meta property="og:description" content="Selamat datang di SDS Kristen Tabqha, sekolah dasar Kristen berkualitas yang memberikan pendidikan unggul dengan pendekatan holistik." />
        <meta property="og:image" content="/path/to/og-image.jpg" />
        <meta property="og:url" content="https://www.sdskristentabqha.sch.id" />
        <meta name="google-site-verification" content="1IoMsnjXW83fFpZ0YlMFU9EBukvRQvLCXK0nFuXxlrI" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.sdskristentabqha.sch.id" />
      </Head>
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
