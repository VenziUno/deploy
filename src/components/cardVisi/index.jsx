import Image from "next/image";
import React from "react";

const CardVisi = ({ image, cerdas, unggulan, beriman }) => {
  return (
    <>
      <div className="group w-80 h-80 [prespective:0px]">
        <div className="relative h-full w-full rounded  transform-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute inset-0 bg-none w-80 h-80">
            <Image loading="lazy"
              src={image}
              alt="image"
              width={350}
              height={350}
              className=" opacity-80"
              prioritas="true"
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {cerdas ? (
              <ul className="text-sm text-justify list-disc px-4 space-y-2">
                <li>
                  Mewujudkan peserta didik yang cerdas dengan kemampuan
                  intelektual, emosional, dan spiritual
                </li>
                <li>
                  Mewujudkan peserta didik sebagai pribadi yang terampil, cepat,
                  tanggap, dan berkarakter mulia
                </li>
                <li>
                  Menyiapkan peserta didik yang cerdas, terampil, dan kreatif
                  sebagai bekal kemampuan dasar untuk hidup mandiri di masa
                  depan
                </li>
                <li>
                  Mewujudkan peserta yang berprestasi dalam bidang akademik dan
                  non kademik
                </li>
                <li>
                  Menyiapkan peserta didik agar mampu bersaing di era
                  globalisasi dan perkembangan teknologi yang dinamis
                </li>
              </ul>
            ) : unggulan ? (
              <ul className="text-sm text-justify list-disc px-4 space-y-2">
                <li>
                  Menyediakan proses pembelajaran dengan menerapkan Ilmu
                  Teknologi
                </li>
                <li>
                  Berorientasi ke depan dengan memperhatikan potensi kekinian
                </li>
                <li>
                  Unggul dalam penghayatan dan pengamalan ajaran agama yang
                  diyakini
                </li>
                <li>
                  Mewujudkan peserta didik yang memiliki jiwa patriotisme dan
                  cinta tanah air
                </li>
                <li>
                  Mewujudkan kepedulian terhadap sesama warga sekolah dan
                  lingkungan
                </li>
              </ul>
            ) : beriman? (
              <ul className="text-sm text-justify list-disc px-4 space-y-2">
                <li>
                  Mewujudkan peserta didik yang memiliki pribadi yang takut akan
                  Tuhan
                </li>
                <li>
                  Mewujudkan peserta didik yang rajin beribadah dan gemar
                  membaca firman Tuhan
                </li>
                <li>
                  Mewujudkan peserta didik yang mampu menerapkan nilai-nilai
                  kristiani dalam kehidupan sehari-hari
                </li>
                <li>
                  Mewujudkan peserta didik yang menghargai perbedaan dalam
                  keragaman
                </li>
              </ul>
            ): none}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardVisi;
