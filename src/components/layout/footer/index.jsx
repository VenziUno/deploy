import Image from "next/image";
import React from "react";
import Link from "next/link";
import Iframe from "react-iframe";
const Footer = () => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mx-auto sm:max-w-xl bg-gray-800 text-white md:max-w-full ">
      <div className="grid gap-4 row-gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-24 lg:px-32 items-center">
        <div className="sm:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <Image
              className="w-10 text-deep-purple-accent-400"
              loading="lazy"
              src="/logo.png"
              alt="logo"
              width={400}
              height={400}
              prioritas="true"
            />
            <div className="text-xl font-bold tracking-wide uppercase">
              SDS Kristen Tabqha
            </div>
          </div>
          <div className="text-sm text-justify">
            SD Kristen Tabqha adalah sebuah Sekolah Dasar swasta yang terletak
            di Batam, Provinsi Kepulauan Riau. Mirip dengan pola pendidikan SD
            pada umumnya di Indonesia, sekolah ini menawarkan program pendidikan
            selama enam tahun pelajaran, mulai dari Kelas I hingga Kelas VI.
          </div>
          <button className="transition ease-in delay-150 hover:-translate-y-1 hover:scale-105 duration-300 border w-full p-2 text-xs sm:w-fit sm:px-6 rounded">
            <Link href="section2" legacyBehavior>
              <a onClick={(e) => handleClick(e, "section2")}>MORE</a>
            </Link>
          </button>
        </div>
        <div className="space-y-2 space-x-4 text-sm">
          <p className="text-base font-bold tracking-wide ">Contacts</p>
          <div className="flex gap-2">
            <Image
              className="text-deep-purple-accent-400"
              loading="lazy"
              src="/phone.svg"
              alt="logo"
              width={25}
              height={25}
              prioritas="true"
            />
            <a
              href="tel:0778478988"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              (0778) 478988
            </a>
          </div>
          <div className="flex gap-2">
            <Image
              className="text-deep-purple-accent-400"
              loading="lazy"
              src="/mail.svg"
              alt="logo"
              width={25}
              height={25}
              prioritas="true"
            />
            <a
              href="mailto:sdskritentabgha@sdskritentabgha.sch.id"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              sdskritentabgha@sdskritentabgha.sch.id
            </a>
          </div>
          <div className="flex gap-2">
            <Image
              className="text-deep-purple-accent-400"
              loading="lazy"
              src="/map.svg"
              alt="logo"
              width={25}
              height={25}
              prioritas="true"
            />
            <a
              href="https://www.google.com/maps/place/SMP+Kristen+Tabqha/@1.1128096,104.0370385,17z/data=!3m1!4b1!4m6!3m5!1s0x31d9893aee6b118d:0xc85e507a07d06a80!8m2!3d1.1128096!4d104.0396134!16s%2Fg%2F11r7pxfdc?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              SD Kristen Tabgha, Kota Batam, Kepulauan Riau
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="flex items-center mt-1 space-x-3 justify-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MdfmUW-QFE8"
            />
          </div>
        </div>
      </div>
      <div className="border-t" />
      <div className="flex flex-col-reverse items-center gap-2 justify-between py-5 sm:flex-row px-2 md:px-24 lg:px-32">
        <p className="text-xs ">
          © Copyright 2023 SDS KRISTEN TABQHA. All rights reserved.
        </p>
        <ul className="flex justify-center gap-2 lg:mb-0 sm:space-y-0 sm:space-x-5 flex-row">
          <li>
            <a
              href="https://www.facebook.com/kristen.tabgha.5"
              rel="noreferrer"
              target="_blank"
              className="transition hover:opacity-75 text-white"
            >
              <span className="sr-only">Facebook</span>
              <Image
                loading="lazy"
                src={"/facebook-square.svg"}
                alt="facebook"
                width={25}
                height={25}
              />
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
              <Image
                loading="lazy"
                src={"/instagram-fill.svg"}
                alt="facebook"
                width={25}
                height={25}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
