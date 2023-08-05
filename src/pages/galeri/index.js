import CardGaleri from "@/components/cardGaleri";
import React, { useState } from "react";

const Galeri = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Function to toggle the value of 'isOpen'.
  };

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
                  id={1}
                  cover={"/galery/2/IMG_0787.jpg"}
                  title={"Bible Camp"}
                  date={"Selasa, 21 Juni 2024"}
                />
                <CardGaleri
                  id={2}
                  cover={"/galery/6/IMG_8242.jpg"}
                  title={"English Fun Day"}
                  date={"Selasa, 21 Juni 2024"}
                />
                <CardGaleri
                  id="3"
                  cover={"/galery/3/1.jpg"}
                  title={"Kegiatan Berenang"}
                  date={"Selasa, 21 Juni 2024"}
                />
              </div>
              <div className="flex gap-8">
                <CardGaleri
                  id="4"
                  cover={"/galery/1/20220923_082822.jpg"}
                  title={"Korseling"}
                  date={"Selasa, 21 Juni 2024"}
                />
                <CardGaleri
                  id="5"
                  cover={"/galery/9/IMG_5062.jpg"}
                  title={"Kunjungan Lembaga Alkitab Indonesia"}
                  date={"Selasa, 21 Juni 2024"}
                />
                <CardGaleri
                  id="6"
                  cover={"/galery/5/20220711_090620.jpg"}
                  title={"MPLS"}
                  date={"Selasa, 21 Juni 2024"}
                />
              </div>
              {isOpen ? (
                <div className="flex gap-8">
                  <CardGaleri
                    id="7"
                    cover={"/galery/8/IMG_2038.jpg"}
                    title={"Paskah"}
                    date={"Selasa, 21 Juni 2024"}
                  />
                  <CardGaleri
                    id="8"
                    cover={"/galery/7/3.jpg"}
                    title={"Perayaan Hari-Hari Besar"}
                    date={"Selasa, 21 Juni 2024"}
                  />
                  <CardGaleri
                    id="9"
                    cover={"/galery/4/1.jpg"}
                    title={"Senam Pagi"}
                    date={"Selasa, 21 Juni 2024"}
                  />
                </div>
              ) : <></>}
              <button
                className="border border-black rounded px-4 py-1"
                onClick={toggleOpen}
              >
                {isOpen ? "Less" : "More"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Galeri;
