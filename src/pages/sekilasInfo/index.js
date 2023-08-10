import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
const SekilasInfo = () => {
  return (
    <section
      id="section2"
      className=" py-20 flex items-center justify-center  max-h-fit px-8 lg:px-16 xl:px-32"
    >
      <div className="flex flex-col items-center max-w-[1440px] justify-center text-justify space-y-4">
        <h1 className="text-3xl font-semibold border-b-2 border-black px-4">SekilasInfo</h1>
        <p className="md:text-xl text-lg px-6">
          SD Kristen Tabqha adalah sebuah Sekolah Dasar swasta yang terletak di
          Batam, Provinsi Kepulauan Riau. Mirip dengan pola pendidikan SD pada
          umumnya di Indonesia, sekolah ini menawarkan program pendidikan selama
          enam tahun pelajaran, mulai dari Kelas I hingga Kelas VI. Dengan
          komitmen kuat terhadap kualitas pendidikan, SD Kristen Tabqha
          memberikan lingkungan belajar yang mendukung perkembangan akademis dan
          karakter siswa-siswinya. Melalui pendekatan yang holistik, sekolah ini
          tidak hanya fokus pada pencapaian akademis, tetapi juga mengedepankan
          pembentukan nilai-nilai moral dan etika dalam siswa, sehingga
          menghasilkan lulusan yang memiliki wawasan luas serta kualitas
          kepribadian yang baik.
        </p>
        <p className="md:text-xl text-lg px-6 hidden lg:block">
          Selain itu, SD Kristen Tabqha juga turut berperan aktif dalam kegiatan
          ekstrakurikuler dan pengembangan bakat siswa. Dengan beragam pilihan
          kegiatan di luar jam pelajaran, siswa memiliki kesempatan untuk
          mengembangkan minat dan potensi mereka di berbagai bidang, seperti
          seni, olahraga, dan ilmiah. Hal ini turut membantu meningkatkan rasa
          percaya diri dan kemampuan beradaptasi siswa terhadap berbagai
          tantangan di masa depan. Dengan komitmen terhadap pendidikan yang
          berkualitas dan pendekatan pembelajaran yang holistik, SD Kristen
          Tabqha terus berperan sebagai lembaga pendidikan yang berkontribusi
          dalam membentuk generasi muda yang cerdas, berintegritas, dan siap
          menghadapi tantangan global.
        </p>
        <div className="flex">
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
            modules={[Keyboard,Mousewheel, Pagination, Navigation]}
            className="w-[300px] h-[250px] sm:w-[400px] sm:h-[300px] lg:w-[800px] lg:h-[300px] xl:w-[1200px] xl:h-[300px]"
          >
            <SwiperSlide
              className="flex bg-center bg-cover items-center justify-center rounded "
            >
              <Image
                loading="lazy"
                src={"/cover.jpg"}
                alt=""
                width={2000}
                height={1000}
                className="w-full h-full block p-12 hover:animate-bounce cursor-pointer rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide
              className="flex bg-center bg-cover items-center justify-center rounded "
            >
              <Image
                loading="lazy"
                src={"/cover.jpg"}
                alt=""
                width={2000}
                height={1000}
                className="w-full h-full block p-12 hover:animate-bounce cursor-pointer rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide
              className="flex bg-center bg-cover items-center justify-center rounded "
            >
              <Image
                loading="lazy"
                src={"/cover.jpg"}
                alt=""
                width={2000}
                height={1000}
                className="w-full h-full block p-12 hover:animate-bounce cursor-pointer rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SekilasInfo;
