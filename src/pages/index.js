import Layout from "@/components/layout";
import Struktur from "./strucktur";
import VisiDanMisi from "./visidanmisi";
import Galeri from "./galeri";
import SekilasInfo from "./sekilasInfo";
import HeroSection from "./heroSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
        <Head>
          <meta
            name="google-site-verification"
            content="1IoMsnjXW83fFpZ0YlMFU9EBukvRQvLCXK0nFuXxlrI"
          />
          <title>SDS Kristen Tabqha - Sekolah Dasar Kristen Tabqha</title>
          <meta
            name="description"
            content="Selamat datang di SDS Kristen Tabqha, sekolah dasar Kristen berkualitas yang memberikan pendidikan unggul dengan pendekatan holistik."
          />
          <meta
            property="og:title"
            content="SDS Kristen Tabqha - Sekolah Dasar Kristen Tabqha"
          />
          <meta
            property="og:description"
            content="Selamat datang di SDS Kristen Tabqha, sekolah dasar Kristen berkualitas yang memberikan pendidikan unggul dengan pendekatan holistik."
          />
          <meta property="og:image" content="/path/to/og-image.jpg" />
          <meta
            property="og:url"
            content="https://www.sdskristentabqha.sch.id"
          />
          <link rel="icon" type="image/x-icon" href="/logo.png"></link>
          <link rel="canonical" href="https://www.sdskristentabqha.sch.id" />
        </Head>
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
