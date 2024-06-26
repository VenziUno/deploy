import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Galeri from "./galeri";
import HeroSection from "./heroSection";
import SekilasInfo from "./sekilasInfo";
import VisiDanMisi from "./visidanmisi";
import Struktur from "./strucktur";
import Head from "next/head";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="1IoMsnjXW83fFpZ0YlMFU9EBukvRQvLCXK0nFuXxlrI"
        />
        <title>SDS Kristen Tabqha - Sekolah Dasar Kristen Tabqha</title>
        <meta name="author" content="SDS KriSten Tabqha"></meta>
        <meta
          name="description"
          content="Selamat datang di SDS Kristen Tabqha, sekolah dasar Kristen berkualitas yang memberikan pendidikan unggul dengan pendekatan holistik."
        />
        <meta
          property="og:title"
          content="SDS Kristen Tabqha - Sekolah Dasar Kristen Tabqha"
        />
        <meta property="og:site_name" content="SDS KriSten Tabqha" />
        <meta
          property="og:description"
          content="Selamat datang di SDS Kristen Tabqha, sekolah dasar Kristen berkualitas yang memberikan pendidikan unggul dengan pendekatan holistik."
        />
        <meta property="og:image" content="/path/to/og-image.jpg" />
        <meta property="og:url" content="https://www.sdskristentabqha.sch.id" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://www.sdskristentabqha.sch.id" />
      </Head>
      <Layout>
        <HeroSection />
        <SekilasInfo />
        <VisiDanMisi />
        <Struktur />
        <Galeri />
        <SpeedInsights />
      </Layout>
    </>
  );
}
