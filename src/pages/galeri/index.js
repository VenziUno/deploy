import CardGaleri from "@/components/cardGaleri";
import React, { useEffect, useState } from "react";

const Galeri = () => {
  const [visibleDataCount, setVisibleDataCount] = useState(3);
  const [showAll, setShowAll] = useState(false);
  const isOpen = false;
  const data = [
    {
      id: 1,
      cover: "/galery/2/IMG_0787.jpg",
      title: "Bible Camp",
      date: "Selasa, 21 Juni 2024",
    },
    {
      id: 2,
      cover: "/galery/6/IMG_8242.jpg",
      title: "English Fun Day",
      date: "Selasa, 21 Juni 2024",
    },
    {
      id: 3,
      cover: "/galery/3/1.jpg",
      title: "Kegiatan Berenang",
      date: "Selasa, 21 Juni 2024",
    },
    {
      id: 4,
      cover: "/galery/1/20220923_082822.jpg",
      title: "Korseling",
      date: "Selasa, 21 Juni 2024",
    },
    {
      id: 5,
      cover: "/galery/9/IMG_5062.jpg",
      title: "Kunjungan Lembaga Alkitab Indonesia",
      date: "Selasa, 21 Juni 2024",
    },
    {
      id: 6,
      cover: "/galery/5/20220711_090620.jpg",
      title: "MPLS",
      date: "Selasa, 21 Juni 2024",
    },
    {
      id: 7,
      cover: "/galery/8/IMG_2038.jpg",
      title: "Paskah",
      date: "Selasa, 21 Juni 2024",
    },
    {
      id: 8,
      cover: "/galery/7/3.jpg",
      title: "Perayaan Hari-Hari Besar",
      date: "Selasa, 21 Juni 2024",
    },
    {
      id: 9,
      cover: "/galery/4/1.jpg",
      title: "Senam Pagi",
      date: "Selasa, 21 Juni 2024",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newDataCount = screenWidth < 640 ? 2 : screenWidth < 1440 ? 4 : 6;

      setVisibleDataCount(newDataCount);
      setShowAll(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMoreLessClick = () => {
    const screenWidth = window.innerWidth;
    let newDataCount = visibleDataCount;
    if (showAll) {
      newDataCount = screenWidth < 640 ? 2 : screenWidth < 1440 ? 4 : 6;
      setShowAll(false);
    } else {
      newDataCount += screenWidth < 640 ? 2 : screenWidth < 1440 ? 4 : 6;
      if (newDataCount >= data.length) {
        setShowAll(true);
      }
    }
    setVisibleDataCount(newDataCount);
  };

  return (
    <>
      <div className="relative">
        <section
          id="section5"
          className="py-20 flex items-center justify-center max-h-fit"
        >
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center space-y-4">
              <div className="border-b-2 px-4 text-xl border-black w-fit">
                GALERI SDS KRISTEN TABQHA
              </div>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {data.slice(0, visibleDataCount).map((items, index) => (
                  <CardGaleri
                    key={index}
                    id={items.id}
                    cover={items.cover}
                    title={items.title}
                    date={items.date}
                  />
                ))}
              </div>
              <button
                onClick={handleMoreLessClick}
                className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                {showAll ? "Less" : "More"}
              </button>
              {isOpen && (
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                  {data.slice(visibleDataCount).map((items, index) => (
                    <CardGaleri
                      key={index}
                      id={items.id}
                      cover={items.cover}
                      title={items.title}
                      date={items.date}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Galeri;
