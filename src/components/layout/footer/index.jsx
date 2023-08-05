import Image from "next/image";
import React from "react";
// import "react-icons"
// import { ImLocation2 } from "react-icons/im";
// import { HiMail } from "react-icons/hi";
// import { IoCallSharp } from "react-icons/Io5";
// import { FaFacebookF } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
import YouTube from "react-youtube";
import Link from "next/link";
const Footer = () => {
  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
      mute: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto px-32 gap-12 flex p-8 justify-between divide-gray-400">
        <div className="flex space-y-4 items-center ">
          <div className="w-62 mt-4">
            <Image loading="lazy"
              src="/logo.png"
              alt="logo"
              width={400}
              height={400}
              prioritas="true"
            />
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold">Sekolah Kristen Tabgha </p>
            <div className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed
              ipsam, numquam quas modi laborum dicta iusto molestias, nulla,
              itaque laudantium. Aliquam harum, sunt dicta nostrum earum
              repudiandae iste ipsa!
              <span>...</span>
            </div>
            <button className="border w-fit px-6 py-2 rounded">
              <Link href="section2" legacyBehavior>
                <a onClick={(e) => handleClick(e, "section2")}>MORE</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="space-y-6">
            <div className="font-bold text-2xl">Contact Info</div>
            <div className="space-y-4 px-2">
              <div className="flex gap-4">
                {/* <ImLocation2 size={20} /> */}
                <Image loading="lazy" src={"/map.svg"} alt="facebook" width={25} height={25}/>
                <span>SD Kristen Tabgha, Kota Batam, Kepulauan Riau</span>
              </div>
              <div className="flex gap-4">
                {/* <IoCallSharp size={20} /> */}
                <Image loading="lazy" src={"/phone.svg"} alt="facebook" width={25} height={25}/>
                <span>(0778) 478988</span>
              </div>
              <div className="flex gap-4">
                {/* <HiMail size={20} />  */}
                <Image loading="lazy" src={"/mail.svg"} alt="facebook" width={25} height={25}/>
                <span>Sekolahkritentabgha@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <YouTube videoId={"h-PfBxoMq_4"} opts={opts} onReady={onReady} />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-400">
        <div className=" px-32 text-white flex flex-col justify-between p-4 lg:flex-row divide-gray-400">
          <div>Copyright © 2023 - SDS Kristen Tabgha.</div>
          <div>
            <ul className="flex gap-6">
              <li>
                <a
                  href="https://www.facebook.com/kristen.tabgha.5"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75 text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <Image loading="lazy" src={"/facebook-square.svg"} alt="facebook" width={25} height={25}/>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tabgha.school/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75 text-white"
                >
                  <span className="sr-only">Instagram</span>
                  <Image loading="lazy" src={"/instagram-fill.svg"} alt="facebook" width={25} height={25}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
