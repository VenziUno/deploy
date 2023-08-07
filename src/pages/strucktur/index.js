import CardStrukur from "@/components/cardStrukur";
import React from "react";

export default function Struktur() {
  return (
    <section
      id="section4"
      className=" relative pt-20 flex items-center justify-center flex-col space-y-4"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl border-b-2 border-spacing-2 antialiased border-slate-500 font-light">
          BAGAN STRUKTUR ORGANISASI SDS KRISTEN TABQHA
        </div>
        <div className="flex flex-col pt-6 space-y-4 justify-center items-center">
          <div className="text-xl  border-b-2 border-spacing-2 antialiased border-slate-500 font-light">
            KEPALA YAYASAN SEKOLAH KRISTEN TABQHA
          </div>
          <div className="flex space-x-4 pt-4">
            <CardStrukur
              image={"/staff/avatars.jpg"}
              title={"KEPALA YAYASAN"}
            />
          </div>
        </div>
        <div className="flex flex-col pt-6 space-y-4 justify-center items-center">
          <div className="text-xl border-b-2 border-spacing-2 antialiased border-slate-500 font-light">
            KEPALA SDS KRISTEN TABQHA
          </div>
          <div className="flex space-x-4 pt-4">
            <CardStrukur
              image={
                "/staff/Lidia Lamhisa, S.Pd ( Kepala Sekolah SD )-fotor-bg-remover-20230802103726.png"
              }
              name="Lidia Lamhisa, S.Pd"
              title={"Kepala Sekolah"}
            />
          </div>
        </div>
        <div className="flex flex-col pt-6 space-y-4 justify-center items-center">
          <div className="text-xl border-b-2 border-spacing-2 antialiased border-slate-500 font-light">
            WAKIL KEPALA SDS KRISTEN TABQHA
          </div>
          <div className="flex space-x-4 ">
            <CardStrukur
              image={"/staff/avatars.jpg"}
              title={"Wakil Kepala Sekolah"}
            />
          </div>
        </div>
        <div className="flex flex-col pt-6 space-y-4 justify-center items-center">
          <div className="text-xl border-b-2 border-spacing-2 antialiased border-slate-500 font-light">
            STAFF SDS KRISTEN TABQHA
          </div>
          <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <CardStrukur
              image="/staff/Januari Wahandi Nababan, S.Kom (Bagian Kesiswaan )-fotor-bg-remover-20230802103621.png"
              name="Januari W.N., S.Kom"
              title="Staff Kesiswaan"
            />
            <CardStrukur
              image="/staff/Endang Ria Pulisa, S.S (Bagian Kesiswaan)-fotor-bg-remover-20230802101117.png"
              name="Endang Ria Pulisa, S.s"
              title="Bagian Kesiswaan"
            />
            <CardStrukur
              image="/staff/Victoria Silvia Kharolin S.Pd ( Bagian Kurikulum )-fotor-bg-remover-20230802104249.png"
              name="Victoria Silvia K., S.Pd"
              title="Bagian Kurikulum"
            />
            <CardStrukur
              image="/staff/Destiana Simangunsong, S.Pd( Bagian Kurikulum )-fotor-bg-remover-20230802101147.png"
              name="Destiana S., S.Pd"
              title="Bagian Kurikulum"
            />
            <CardStrukur
              image="/staff/Selestina Koli Bau, S.Pd (Koordinator English Kelas 1,2,3)-fotor-bg-remover-2023080210426.png"
              name="Selestina Koli B., S.Pd"
              title="Koordinator English"
            />
            <CardStrukur
              image="/staff/Riama Elisabet, S.S ( Koordinator English kls  4,5,6)-fotor-bg-remover-20230802104047.png"
              name="Riama Elisabet, S.S"
              title="Koordinator English"
              className="lg:col-end-5"
            />
            <CardStrukur
              image="/staff/Anjesmara Sinaga ( Staff Perpustakaan )-fotor-bg-remover-2023080210928.png"
              name="Anjesmara S."
              title="Staff Perpustakaan"
              className="lg:col-end-2 "
            />
            <CardStrukur
              image="/staff/Miranda Olivia Siregar, S.Ap ( Staff Admin )-fotor-bg-remover-20230802103834.png"
              name="Miranda Olivia S., S.Ap"
              title="Staff Admin"
            />
            <CardStrukur
              image="/staff/Frisicilia Cynthia Sagune, A.Md ( Staff Admin )-fotor-bg-remover-2023080210350.png"
              name="Frisicilia Cynthia S., A.Md"
              title="Staff Admin"
            />
            <CardStrukur
              image="/staff/Jerry Kristian, A.Md ( Staff Admin )-fotor-bg-remover-20230802103633.png"
              name="Jerry Kristian, A.Md"
              title="Staff Admin"
              className="lg:col-end-auto md:col-end-3"
            />
          </div>
        </div>
        <div className="flex flex-col pt-6 space-y-4 justify-center items-center">
          <div className="text-xl  border-b-2 border-spacing-2 antialiased border-slate-500 font-light">
            GURU SDS KRISTEN TABQHA
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <CardStrukur
              image={
                "/staff/Lenni Betsaulina Sijabat, S.Pd ( Wali Kelas 1A )-fotor-bg-remover-20230802103927.png"
              }
              name={"Lenni Betsaulina S., S.Pd"}
              title={"Wali Kelas 1A"}
            />
            <CardStrukur
              image={
                "/staff/Rohani Sembiring, S.Pd( Wali Kelas 1B)-fotor-bg-remover-20230802104134.png"
              }
              name={"Rohani Sembiring, S.Pd"}
              title={"Wali Kelas 1B"}
            />
            <CardStrukur
              image={
                "/staff/Denaris Rajagukguk, S.Pd (Wali Kelas 1C)-fotor-bg-remover-20230802101040.png"
              }
              name={"Denaris R., S.Pd"}
              title={"Wali Kelas 1C"}
            />
            <CardStrukur
              image="/staff/Anny Welmy Marbun, S.T( Wali Kelas 2A)-fotor-bg-remover-2023080210919.png"
              name="A. W. Marbun, S.T"
              title={"Wali Kelas 2 A"}
            />
            <CardStrukur
              image={
                "/staff/Rimta Uli Pandiangan. S.Pd (Wali Kelas 2B)-fotor-bg-remover-20230802104117.png"
              }
              name={"imta Uli P, S.Pd"}
              title={"Wali Kelas 2B"}
            />
            <CardStrukur
              image={
                "/staff/Sedina Manik, S.Pd (Wali Kelas 2C)-fotor-bg-remover-20230802104154.png"
              }
              name={"Sedina Manik, S.Pd"}
              title={"Wali Kelas 2C"}
            />
            <CardStrukur
              image={
                "/staff/Ivone Novriyanti Parhusip, S.Pd (Wali Kelas 3A)-fotor-bg-remover-20230802103613.png"
              }
              name={"Ivone Novriyanti P, S.Pd "}
              title={"Wali Kelas 3A"}
            />
            <CardStrukur
              image={
                "/staff/Polma Sumuang Sihite, S.Pdk (Wali Kelas 3B)-fotor-bg-remover-2023080210390.png"
              }
              name={"Polma Sumuang S., S.Pdk"}
              title={"Wali Kelas 3B"}
            />
            <CardStrukur
              image={
                "/staff/Rimta Uli Pandiangan. S.Pd ( Wali Kelas 3C)-fotor-bg-remover-2023080210411.png"
              }
              name={"Rimta Uli P. S.Pd"}
              title={"Wali Kelas 3C"}
            />
            <CardStrukur
              image={
                "/staff/Grace Rahmani Harrison, S.Pd.,B.Ed (Wali Kelas 4A)-fotor-bg-remover-20230802103514.png"
              }
              name={"Grace R.H., S.Pd., B.Ed"}
              title={"Wali Kelas 4A"}
            />
            <CardStrukur
              image={
                "/staff/Herdina Siboro, S.Pd(Wali Kelas 4B)-fotor-bg-remover-20230802103526.png"
              }
              name={"Herdina Siboro, S.Pd"}
              title={"Wali Kelas 4B"}
            />
            <CardStrukur
              image="/staff/Anggiat M Hutasoit, S.Pd ( Wali Kelas 4C)-fotor-bg-remover-2023080210942.png"
              name="A. M. Hutasoit, S.Pd"
              title="Wali Kelas 4 C"
            />
            <CardStrukur
              image={
                "/staff/Eltita Natalia, S.Pd(Wali Kelas 5A)-fotor-bg-remover-20230802101129.png"
              }
              name={"Eltita Natalia, S.Pd"}
              title={"Wali Kelas 5A"}
            />
            <CardStrukur
              image={
                "/staff/Maria Loretta Hutabarat, S.Pd (Wali Kelas 5B)-fotor-bg-remover-20230802103749.png"
              }
              name={"Maria Loretta H., S.Pd"}
              title={"Wali Kelas 5B"}
            />
            <CardStrukur
              image={
                "/staff/Esteria Sibarani, S.Pd (Wali Kelas 5C)-fotor-bg-remover-20230802101051.png"
              }
              name={"Esteria Sibarani, S.Pd"}
              title={"Wali Kelas 5C"}
            />
            <CardStrukur
              image={
                "/staff/Lisbet Juliana Girsang, S.Pd (Wali Kelas 6A)-fotor-bg-remover-20230802103733.png"
              }
              name={"Lisbet Juliana G., S.Pd"}
              title={"Wali Kelas 6A"}
            />
            <CardStrukur
              image={
                "/staff/Erni Mardina, S.Pd (Wali Kelas 6B)-fotor-bg-remover-2023080210116.png"
              }
              name={"Erni Maedina, S.Pd"}
              title={"Wali Kelas 6B"}
            />
            <CardStrukur
              image={
                "/staff/Tuti Kristiani, S.Si (Wali Kelas 6C)-fotor-bg-remover-20230802104240.png"
              }
              name={"Tuti Kristianti, S.Si"}
              title={"Wali Kelas 6C"}
            />
            <CardStrukur
              image={
                "/staff/Heru Setiawan Girsang, S.Pd ( Guru Bid. Studi Matematika _ IPAS )-fotor-bg-remover-20230802103536.png"
              }
              name={"Heru Seriawan G., S.Pd"}
              title={"Guru Bidang Studi"}
            />
            <CardStrukur
              image={
                "/staff/Reinchart Labang Kalang, S.Si.( Guru Bid. Studi Komputer )jpg-fotor-bg-remover-20230802104037.png"
              }
              name={"Rinchart Labang K., S.si"}
              title={"Guru Bidang Studi"}
            />
            <CardStrukur image={"/staff/avatars.jpg"} />
            <CardStrukur
              image={
                "/staff/Kembali Pardede, M.Min., M.Th (Guru Bid. Studi Agama)-fotor-bg-remover-20230802103913.png"
              }
              name={"Kembali P., M.Min., M.Th"}
              title={"Guru Bidang Studi"}
            />
            <CardStrukur
              image={
                "/staff/Odor Perak Simanjuntak, S.Pd ( Guru Bid. Studi Bhs. Indonesia _ PKN)-fotor-bg-remover-20230802103841.png"
              }
              name={"Odor Perak S., S.Pd"}
              title={"Guru Bidang Studi"}
            />
            <CardStrukur
              image={
                "/staff/Serdalina Limbong, S.Pd ( Guru Bid. Studi Bhs. Indonesia _ PKN)-fotor-bg-remover-20230802104014.png"
              }
              name={"Serdalina Limbong, S.Pd"}
              title={"Guru Bidang Studi"}
            />
            <CardStrukur image={"/staff/avatars.jpg"} />
            <CardStrukur
              image={
                "/staff/Rosmayanti Sinaga, S.Pd (Guru Bid. Studi Bhs. Indonesia _ PKN)-fotor-bg-remover-20230802104144.png"
              }
              name={"Rosmayanti Sinaga, S.Pd"}
              title={"Guru Bidang Studi"}
            />
            <CardStrukur image={"/staff/avatars.jpg"} className="xl:col-end-6"/>
            <CardStrukur
              image={
                "/staff/Pirmahot Junedi Tambunan, S.Pd ( Guru Bid. Studi PJOK )-fotor-bg-remover-20230802103851.png"
              }
              name={"Primahot Junedi T., S.Pd"}
              title={"Guru Bidang Studi"}
              className="md:col-end-3 lg:col-auto xl:col-end-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
