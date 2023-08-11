import CardVisi from "@/components/cardVisi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const VisiDanMisi = () => {
  const [shouldShowSwiper, setShouldShowSwiper] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShouldShowSwiper(false);
      } else {
        setShouldShowSwiper(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="section3"
      className="flex items-center justify-center bg-fixed bg-cover bg-center py-20  max-h-fit"
      style={{ backgroundImage: "url('/cover.jpg')" }}
    >
      <div className="flex flex-col space-y-8 px-4 lg:px-16 text-xs">
        <div className="flex justify-center">
          <div className="backdrop-opacity-80 w-full bg-gradient-to-r from-white/50 to-slate-200/50  p-6 rounded-2xl shadow flex flex-col justify-center items-center space-y-2">
            <div className="border-b-2 border-black w-fit lg:text-3xl text-xl">
              VISI & MISI SDS KRISTEN TABQHA
            </div>
          </div>
        </div>
        <div className="backdrop-blur-sm backdrop-opacity-80 bg-gradient-to-r from-white/50 to-slate-200/50 py-6 rounded-2xl shadow text-xl font-light flex flex-col justify-center items-center space-y-4">
          <div className="border-b-2 border-black px-4">
            VISI SDS KRISTEN TABQHA
          </div>
          <div className="text-lg px-4 flex text-center">
            “Terwujudnya Peserta Didik yang Cerdas, Unggul, dan Beriman Sesuai
            Dengan Nilai-Nilai Kristiani”
          </div>
          {shouldShowSwiper ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-4 lg:px-12">
              <div className="bg-white/70 p-4 rounded-xl flex flex-col items-center">
                <div className="mb-4">Cerdas</div>
                <CardVisi image="/cerdass.jpg" cerdas />
              </div>
              <div className="bg-white/70 p-4 rounded-xl flex flex-col items-center">
                <div className="mb-4">Unggul</div>
                <CardVisi image="/unggulans.jpg" unggulan />
              </div>
              <div className="bg-white/70 p-4 rounded-xl flex flex-col items-center md:col-start-1 md:col-end-3 xl:col-auto">
                <div className="mb-4">Beriman</div>
                <CardVisi image="/berimans.jpg" beriman />
              </div>
            </div>
          ) : (
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1440: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              mousewheel={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Keyboard, Mousewheel, Pagination, Navigation]}
              className="w-[380px] h-[400px] lg:w-[800px] lg:h-[300px] xl:w-[1200px] xl:h-[300px]"
            >
              <SwiperSlide className="flex bg-center bg-cover items-center justify-center rounded ">
                <div className="bg-white/70 p-4 rounded-xl flex flex-col items-center">
                  <div className="mb-4">Cerdas</div>
                  <CardVisi image="/cerdass.jpg" cerdas />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex bg-center bg-cover items-center justify-center rounded ">
                <div className="bg-white/70 p-4 rounded-xl flex flex-col items-center">
                  <div className="mb-4">Unggul</div>
                  <CardVisi image="/unggulans.jpg" unggulan />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex bg-center bg-cover items-center justify-center rounded ">
                <div className="bg-white/70 p-4 rounded-xl flex flex-col items-center md:col-start-1 md:col-end-3 xl:col-auto">
                  <div className="mb-4">Beriman</div>
                  <CardVisi image="/berimans.jpg" beriman />
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
        <div className="backdrop-blur-sm backdrop-opacity-80 bg-gradient-to-l from-white/50 to-slate-300/50 py-6 rounded-2xl shadow text-xl font-light flex flex-col justify-center items-center space-y-4">
          <div className="border-b-2 border-black px-4">
            MISI SDS KRISTEN TABQHA
          </div>
          <div className="px-4 md:px-12 lg:text-justify">
            <ul className="border text-ellipsis list-disc text-lg px-8 py-2 rounded-2xl bg-white/70">
              <li>
                Melaksanakan pembelajaran yang aktif, kreatif, inovatif, dan
                menyenangkan.
              </li>
              <li>
                Melaksanakan pembelajaran berbahasa Inggris untuk pengembangan
                berbahasa asing dalam mengikuti perkembangan globalisasi.
              </li>
              <li>
                Melaksanakan pembelajaran teknologi informasi dan komunikasi
                dalam pembelajaran sebagai pengembangan keterampilan peserta
                didik pada penguasaan teknologi digital.
              </li>
              <li>
                Melaksanakan pembelajaran membaca Alkitab secara
                berkesinambungan untuk membentuk karakter yang unggul sesuai
                nilai-nilai kristiani.
              </li>
              <li>
                Mengembangkan kegiatan ekstrakurikuler bidang akademik dan non
                akademik dalam upaya pengembangan diri peserta didik sesuai
                bakat dan minatnya.
              </li>
              <li>
                Mengembangkan fasilitas yang dibutuhkan untuk siswa dalam
                mengembangkan kegiatan penelitian dan penalaran.
              </li>
              <li>
                Memberikan teladan kepada seluruh siswa terhadap kebiasaan hidup
                bersih, peduli, terbuka, dan terpercaya.
              </li>
              <li>
                Mengembangkan kompetensi guru yang berkaitan dengan kompetensi
                dalam bidang studi, keterampilan mengajar, pembuatan karya
                ilmiah, dan soft skill.
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiDanMisi;
