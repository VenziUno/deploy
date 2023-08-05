import CardVisi from "@/components/cardVisi";
import Image from "next/image";
import React from "react";

const VisiDanMisi = () => {
  return (
    <section
      id="section3"
      className="flex min-h-screen items-center justify-center bg-fixed bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/cover.jpg')" }}
    >
      <div className="flex flex-col space-y-8 px-32 text-xs">
        <div className="flex justify-center">
          <div className="backdrop-opacity-80 px-32 w-full bg-gradient-to-r from-white/50 to-slate-200/50  p-6 rounded-2xl shadow text-3xl flex flex-col justify-center items-center space-y-2">
            <div className="border-b-2 border-black w-fit">
              VISI & MISI SDS KRISTEN TABQHA
            </div>
          </div>
        </div>
        <div className="backdrop-blur-sm backdrop-opacity-80 bg-gradient-to-r from-white/50 to-slate-200/50 py-6 rounded-2xl shadow text-xl  font-light flex flex-col justify-center items-center space-y-4">
          <div className="border-b-2 border-black px-4">
            VISI SDS KRISTEN TABQHA
          </div>
          <div className="text-lg px-4">
            “Terwujudnya Peserta Didik yang Cerdas, Unggul, dan Beriman Sesuai
            Dengan Nilai-Nilai Kristiani”
          </div>
          <div className="flex text-lg px-12 flex-row gap-8">
            <div className="w-full bg-white/70 p-4 rounded-xl flex flex-col">
              <div className="flex flex-col space-y-4 justify-center items-center">
                <div>Cerdas</div>
                <CardVisi image="/cerdass.jpg" cerdas />
              </div>
            </div>
            <div className="w-full bg-white/70 p-4 rounded-xl flex flex-col">
              <div className="flex flex-col space-y-4 justify-center items-center">
                <div>Unggul</div>
                <CardVisi image="/unggulans.jpg" unggulan />
              </div>
            </div>
            <div className="w-full bg-white/70 p-4 rounded-xl flex flex-col">
              <div className="flex flex-col space-y-4 justify-center items-center">
                <div>Beriman</div>
                <CardVisi image="/berimans.jpg" beriman />
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-sm backdrop-opacity-80 bg-gradient-to-l from-white/50 to-slate-300/50 py-6 rounded-2xl shadow text-xl font-light flex flex-col justify-center items-center space-y-4">
          <div className="border-b-2 border-black px-4">
            MISI SDS KRISTEN TABQHA
          </div>
          <div className="px-12 text-justify text-slate-600">
            <ul className="border text-justify list-disc text-lg px-8 py-2 rounded-2xl bg-white/70">
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
