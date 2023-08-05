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
    <footer className="dark:bg-gray-800 dark:text-gray-400">
      <div className="mx-auto px-32 gap-12 flex p-8 justify-between divide-gray-400">
        <div className="flex space-y-4 ">
          <div className="w-62 mt-4">
            <Image src="/logo.png" alt="logo" width={400} height={400} prioritas/>
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
            <button className="border w-fit px-4 py-2 rounded">
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
                <span>SD Kristen Tabgha, Kota Batam, Kepulauan Riau</span>
              </div>
              <div className="flex gap-4">
                {/* <IoCallSharp size={20} /> */}
                <span>(0778) 478988</span>
              </div>
              <div className="flex gap-4">
                {/* <HiMail size={20} />  */}
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
        <div className=" px-32 flex flex-col justify-between p-4 lg:flex-row divide-gray-400">
          <div>Copyright © 2023 - SDS Kristen Tabgha.</div>
          <div>
            <ul className="flex gap-6">
              <li>
                <a
                  href="https://www.facebook.com/kristen.tabgha.5"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tabgha.school/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/> </g> </svg>
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
