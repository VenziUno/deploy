import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardViewGaleri = ({ toggleOpenGaleri, id }) => {
  
  const data = [
    {
      4: {
        title: "/galery/1",
        image: [
          "20220910_175849.jpg",
          "20220913_085526.jpg",
          "20220913_085526.jpg",
          "20220923_080547.jpg",
          "20220923_082822.jpg",
          "20220923_083240.jpg",
          "20221005_100703.jpg",
          "20221019_092904.jpg",
          "20221019_092931.jpg",
          "20221025_140654.jpg",
          "20221025_141417.jpg",
          "IMG-20220909-WA0012.jpg",
          "IMG-20220909-WA0014.jpg",
          "WhatsApp Image 2022-08-03 at 13.17.37 (1).jpeg",
          "WhatsApp Image 2022-08-03 at 13.17.37.jpeg",
        ],
      },
      1: {
        title: "/galery/2",
        image: [
          "IMG_0778.jpg",
          "IMG_0781.jpg",
          "IMG_0782.jpg",
          "IMG_0784.jpg",
          "IMG_0785.jpg",
          "IMG_0786.jpg",
          "IMG_0787.jpg",
          "IMG_0788.jpg",
          "IMG_0789.jpg",
          "IMG_0790.jpg",
          "IMG_0791.jpg",
          "IMG_0794.jpg",
          "IMG_0796.jpg",
          "IMG_0800.jpg",
          "IMG_0801.jpg",
          "IMG_0802.jpg",
          "IMG_0807.jpg",
          "IMG_0813.jpg",
          "IMG_0814.jpg",
          "IMG_0816.jpg",
          "IMG_0821.jpg",
          "IMG_0822.jpg",
          "IMG_1030.jpg",
          "IMG_1066.jpg",
          "IMG_1067.jpg",
          "IMG_1094.jpg",
          "IMG_1117.jpg",
          "IMG_1128.jpg",
          "IMG_1132.jpg",
          "IMG_1156.jpg",
          "IMG_1158.jpg",
          "IMG_1172.jpg",
          "IMG_1210.jpg",
        ],
      },
      3: {
        title: "/galery/3",
        image: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg",
          "11.jpg",
          "12.jpg",
          "13.jpg",
          "14.jpg",
          "15.jpg",
          "16.jpg",
          "17.jpg",
          "18.jpg",
          "19.jpg",
          "20.jpg",
          "21.jpg",
          "22.jpg",
          "23.jpg",
          "24.jpg",
          "25.jpg",
          "26.jpg",
          "27.jpg",
          "28.jpg",
          "29.jpg",
          "30.jpg",
          "31.jpg",
          "32.jpg",
          "33.jpg",
          "34.jpg",
          "35.jpg",
          "36.jpg",
          "37.jpg",
          "38.jpg",
          "39.jpg",
          "40.jpg",
          "41.jpg",
          "42.jpg",
          "43.jpg",
          "44.jpg",
          "45.jpg",
        ],
      },
      9: {
        title: "/galery/4",
        image: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg",
          "11.jpg",
          "12.jpg",
          "13.jpg",
          "14.jpg",
          "15.jpg",
          "16.jpg",
          "17.jpg",
          "18.jpg",
          "19.jpg",
          "20.jpg",
          "21.jpg",
          "22.jpg",
          "23.jpg",
          "24.jpg",
          "25.jpg",
          "26.jpg",
          "27.jpg",
          "28.jpg",
          "29.jpg",
          "30.jpg",
          "31.jpg",
          "32.jpg",
          "33.jpg",
          "34.jpg",
          "35.jpg",
          "36.jpg",
          "37.jpg",
          "38.jpg",
          "39.jpg",
          "40.jpg",
          "41.jpg",
          "42.jpg",
          "43.jpg",
          "44.jpg",
          "45.jpg",
          "46.jpg",
          "47.jpg",
        ],
      },
      6: {
        title: "/galery/5",
        image: [
          "20220711_090446.jpg",
          "20220711_090620.jpg",
          "20220711_090653.jpg",
          "20220711_092346.jpg",
          "20220711_092409.jpg",
          "20220711_092440.jpg",
          "20220711_092607.jpg",
          "20220711_101850.jpg",
        ],
      },
      7: {
        title: "/galery/8",
        image: [
          "IMG_2015.jpg",
          "IMG_2025.jpg",
          "IMG_2038.jpg",
          "IMG_2048.jpg",
          "IMG_2051.jpg",
          "IMG_2057.jpg",
          "IMG_2058.jpg",
          "IMG_2066.jpg",
          "IMG_2068.jpg",
          "IMG_2071.jpg",
          "IMG_2080.jpg",
          "IMG_2151.jpg",
          "IMG_2168.jpg",
          "IMG_2188.jpg",
          "IMG_2226.jpg",
          "IMG_2229.jpg",
        ],
      },
      8: {
        title: "/galery/7",
        image: [
          "WhatsApp Image 2022-08-16 at 12.15.03.jpeg",
          "WhatsApp Image 2022-08-16 at 12.15.05.jpeg",
          "WhatsApp Image 2022-08-16 at 12.15.06.jpeg",
          "WhatsApp Image 2022-08-16 at 12.16.38.jpeg",
          "WhatsApp Image 2022-08-16 at 13.44.29.jpef",
          "WhatsApp Image 2022-08-16 at 13.44.30.jpeg",
          "WhatsApp Image 2022-08-16 at 13.44.31 (1).jpeg",
          "WhatsApp Image 2022-08-19 at 09.28.19.jpeg",
          "WhatsApp Image 2022-08-19 at 09.28.20.jpeg",
          "WhatsApp Image 2022-08-19 at 09.29.01.jpeg",
          "WhatsApp Image 2022-08-19 at 09.29.01.jpeg",
          "WhatsApp Image 2022-08-19 at 12.11.00.jpeg",
          "WhatsApp Image 2022-08-19 at 12.11.01.jpeg",
          "2022-08-16 at 4.20.56 PM.jpeg",
          "2022-08-16 at 4.21.50 PM.jpeg",
          "20220812_091013.jpg",
          "20220812_110516.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg",
          "11.jpg",
          "12.jpg",
          "13.jpg",
          "14.jpg",
          "15.jpg",
          "16.jpg",
          "17.jpg",
          "18.jpg",
          "19.jpg",
        ],
      },
      2: {
        title: "/galery/6",
        image: ["IMG_8236.jpg", "IMG_8239.jpg", "IMG_8242.jpg"],
      }, 
      5: {
        title: "/galery/9",
        image: ["IMG_5051.jpg", "IMG_5059.jpg", "IMG_5060.jpg", "IMG_5062.jpg"],
      },
    },
  ];

  const selectedGallery = data.find((item) => item[id]);
  const gallery = selectedGallery[id];

  return (
    <>
      <div className=" fixed z-40 left-0 flex justify-center items-center top-0 w-full h-full bg-black/80">
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
            className="w-[800px] h-[500px]"
          >
            {gallery.image.map((imageName, imageIndex) => (
              <SwiperSlide
                key={imageIndex}
                className="flex bg-center bg-cover items-center justify-center rounded "
              >
                <button
                  className="absolute top-12 z-50 right-16 text-white py-2"
                  onClick={toggleOpenGaleri}
                >
                  Close
                </button>
                <Image
                  loading="lazy"
                  src={`${gallery.title}/${imageName}`}
                  alt={`Image ${imageIndex}`}
                  width={800}
                  height={400}
                  className="w-full h-full block p-12 rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </>
  );
};

export default CardViewGaleri;
