import Image from "next/image";
import React from "react";

const CardStrukur = ({ hidden, image, name, title }) => {
  return (
    <>
      {hidden ? (
          <div className="h-60 w-48 relative rounded ">
        </div>
      ) : (
        <>
          <div className="w-48 h-60 rounded-lg relative ">
            <Image src={image} alt="image" width={200} height={200} className="rounded-lg h-60 w-48" />
            <div className="absolute px-2 text-white flex flex-col justify-center items-center bottom-0 h-16 w-full z-10">
              <h1 className="font-semibold text-xs">{name}</h1>
              <p className="font-bold text-xs">{title}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardStrukur;
