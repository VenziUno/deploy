import CardGaleri from "@/components/cardGaleri";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Galeri = ({ toggleOpenGaleri, isOpenGaleri }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Function to toggle the value of 'isOpen'.
  };

  const data = [
    {
      title: "/galery/1",
      image: [
        "20221005_100703.jpg",
        "20220913_085526.jpg",
        "20220923_080547.jpg",
        "20220923_080547.jpg",
      ],
    },
  ];

  return (
    <>
      <div className="relative">
        <section
          id="section5"
          className="py-20 flex items-center justify-center "
        >
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center space-y-8">
              <div className="border-b-2 px-4 text-3xl border-black w-fit">
                GALERI SDS KRISTEN TABQHA
              </div>
              <div className="flex gap-8">
                <CardGaleri
                  id="1"
                  cover={"/galery/2/IMG_0787.jpg"}
                  title={"Bible Camp"}
                  date={"Selasa, 21 Juni 2024"}
                  toggleOpenGaleri={toggleOpenGaleri}
                />
                <CardGaleri
                  id="2"
                  cover={"/galery/6/IMG_8242.jpg"}
                  title={"English Fun Day"}
                  date={"Selasa, 21 Juni 2024"}
                  toggleOpenGaleri={toggleOpenGaleri}
                />
                <CardGaleri
                  id="3"
                  cover={"/galery/3/DSC09704.jpg"}
                  title={"Kegiatan Berenang"}
                  date={"Selasa, 21 Juni 2024"}
                  toggleOpenGaleri={toggleOpenGaleri}
                />
              </div>
              <div className="flex gap-8">
                <CardGaleri
                  id="4"
                  cover={"/galery/1/20220923_082822.jpg"}
                  title={"Korseling"}
                  date={"Selasa, 21 Juni 2024"}
                  toggleOpenGaleri={toggleOpenGaleri}
                />
                <CardGaleri
                  id="5"
                  cover={"/galery/9/IMG_5062.jpg"}
                  title={"Kunjungan Lembaga Alkitab Indonesia"}
                  date={"Selasa, 21 Juni 2024"}
                  toggleOpenGaleri={toggleOpenGaleri}
                />
                <CardGaleri
                  id="6"
                  cover={"/galery/5/20220711_090620.jpg"}
                  title={"MPLS"}
                  date={"Selasa, 21 Juni 2024"}
                  toggleOpenGaleri={toggleOpenGaleri}
                />
              </div>
              {isOpen ? (
                <div className="flex gap-8">
                  <CardGaleri
                    id="7"
                    cover={"/galery/8/IMG_2038.jpg"}
                    title={"Paskah"}
                    date={"Selasa, 21 Juni 2024"}
                    toggleOpenGaleri={toggleOpenGaleri}
                  />
                  <CardGaleri
                    id="8"
                    cover={"/galery/7/IMG_5797.jpg"}
                    title={"Perayaan Hari-Hari Besar"}
                    date={"Selasa, 21 Juni 2024"}
                    toggleOpenGaleri={toggleOpenGaleri}
                  />
                  <CardGaleri
                    id="9"
                    cover={"/galery/4/20220930_083538.jpg"}
                    title={"Senam Pagi"}
                    date={"Selasa, 21 Juni 2024"}
                    toggleOpenGaleri={toggleOpenGaleri}
                  />
                </div>
              ) : (
                ""
              )}
              <button
                className="border border-black rounded px-4 py-1"
                onClick={toggleOpen}
              >
                {isOpen ? "Less" : "More"}
              </button>
            </div>
          </div>
        </section>
        {isOpenGaleri ? (
          <div className="absolute flex top-0 py-20 z-40 w-full h-full overflow-y-hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="w-[1000px] h-[700px]"
            >
              <button
                className="absolute top-12 z-50 right-16 text-white py-2"
                onClick={toggleOpenGaleri}
              >
                Close
              </button>
              {data.map((item, index) => (
                <>
                  {item.image.map((imageName, imageIndex) => (
                    <SwiperSlide
                      key={index}
                      className="flex bg-center bg-cover items-center justify-center rounded "
                    >
                      <Image
                        key={imageIndex}
                        src={`${item.title}/${imageName}`}
                        alt=""
                        width={2000}
                        height={2000}
                        className="w-full h-full block p-12 rounded-xl"
                      />
                    </SwiperSlide>
                  ))}
                </>
              ))}
            </Swiper>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Galeri;
