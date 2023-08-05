import Layout from "@/components/layout";
import React from "react";
import Galeri from "../galeri";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const DetailGaleri = () => {
  const data = [
    {
      id:1,
      title: "/galery/1",
      image: ["20221005_100703.jpg", "20221005_100703.jpg"],
    },
    {
      id:2,
      title: "/galery/2",
      image: ["20221005_100703.jpg", "20221005_100703.jpg"],
    },
    {
      id:3,
      title: "/galery/3",
      image: ["20221005_100703.jpg", "20221005_100703.jpg"],
    },
    {
      id:4,
      title: "/galery/4",
      image: ["20221005_100703.jpg", "20221005_100703.jpg"],
    },
    {
      id:5,
      title: "/galery/5",
      image: ["20221005_100703.jpg", "20221005_100703.jpg"],
    },
    {
      id:6,
      title: "/galery/6",
      image: ["20221005_100703.jpg", "20221005_100703.jpg"],
    },
    {
      id:7,
      title: "/galery/7",
      image: ["20221005_100703.jpg", "20221005_100703.jpg"],
    },
    {
      id:8,
      title: "/galery/8",
      image: ["20221005_100703.jpg", "20221005_100703.jpg"],
    },
    {
      id:9,
      title: "/galery/9",
      image: ["20221005_100703.jpg", "20221005_100703.jpg"],
    },
  ];

  return (
    <div className=" relative">
      <div className="absolute flex py-10 z-20 w-full h-full bg-black/80">
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
          {data.map((item, index) => (
            <>
              <SwiperSlide
                key={index}
                className="flex bg-center bg-cover items-center justify-center rounded "
              >
                {item.image.map((imageName, imageIndex) => (
                  <Image
                    key={imageIndex}
                    src={`${item.title}/${imageName}`}
                    alt=""
                    width={2000}
                    height={2000}
                    className="w-full h-full block p-12 rounded-xl"
                  />
                ))}
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
      <Layout>
        <Galeri />
      </Layout>
    </div>
  );
};

export default DetailGaleri;
