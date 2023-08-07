import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Galeri from "./galeri";
import HeroSection from "./heroSection";
import SekilasInfo from "./sekilasInfo";
import VisiDanMisi from "./visidanmisi";
import Struktur from "./strucktur";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <SekilasInfo />
        <VisiDanMisi />
        <Struktur />
        <Galeri />
      </Layout>
    </>
  );
}
