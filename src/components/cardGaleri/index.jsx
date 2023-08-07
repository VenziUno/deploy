import Image from "next/image";
import React, { useState } from "react";
import CardViewGaleri from "./cardGaleriView";

const CardGaleri = ({ id, cover, title, date }) => {
  const [isOpenGaleri, setIsOpenGaleri] = useState(false);
  const toggleOpenGaleri = () => {
    setIsOpenGaleri((prevIsOpen) => !prevIsOpen);
    if (!isOpenGaleri) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <>
      <div className="relative">
        <div className="container ">
          <div className=" h-72 w-80 lg:w-96 lg:h-80 bg-white drop-shadow-lg rounded-xl ">
            <div className="flex flex-col ">
              <div className=" h-72 w-80 lg:w-96 lg:h-80">
                <div className="relative w-full">
                  <Image
                    loading="lazy"
                    src={cover}
                    alt="image"
                    width={500}
                    height={500}
                    className="rounded-t-xl h-52 object-cover w-80 lg:w-96"
                    prioritas="true"
                  />
                </div>
                <div className="flex flex-col border-slate-300 py-2 px-4">
                  <div className="text-lg font-semibold">
                    {title.length > 30 ? title.substring(0, 30) + "..." : title}
                  </div>
                  <div className="text-sm font-extralight flex justify-between items-center">
                    <div>{date}</div>
                    <button
                      className="border px-3 hover:border-pink-300 border-black rounded py-1"
                      onClick={toggleOpenGaleri}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpenGaleri ? (
          <CardViewGaleri id={id} toggleOpenGaleri={toggleOpenGaleri} />
        ) : null}
      </div>
    </>
  );
};

export default CardGaleri;
