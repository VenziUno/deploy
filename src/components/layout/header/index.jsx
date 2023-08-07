import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpen = () => {
    setOpen(!open);
    if (open === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="fixed bg-white w-full shadow h-16 flex justify-between items-center mx-auto px-4 md:px-8  lg:px-16 xl:px-32  z-20">
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
      <div>
        <button className="lg:hidden block" onClick={handleOpen}>
          {open ? null : (
            <Image
              loading="lazy"
              src={"/hamburger.svg"}
              alt="facebook"
              width={25}
              height={25}
            />
          )}
        </button>
        {open ? (
          <div className="fixed left-0 top-0 w-full h-full bg-black/80 text-white">
            <div
              className="fixed top-5 right-10 text-2xl font-extrabold"
              onClick={handleOpen}
            >
              <Image
                loading="lazy"
                src={"/close.svg"}
                alt="facebook"
                width={30}
                height={30}
              />
            </div>
            <ul className="flex flex-col text-xl gap-8 h-full justify-center items-center p-20">
              <li>
                <Link href="#section2" legacyBehavior>
                  <a
                    onClick={(e) => {
                      handleClick(e, "section2");
                      handleOpen();
                    }}
                  >
                    Sekilas Info
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#section3" legacyBehavior>
                  <a
                    onClick={(e) => {
                      handleClick(e, "section3");
                      handleOpen();
                    }}
                  >
                    Visi dan Misi
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#section4" legacyBehavior>
                  <a
                    onClick={(e) => {
                      handleClick(e, "section4");
                      handleOpen();
                    }}
                  >
                    Struktur
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#section5" legacyBehavior>
                  <a
                    onClick={(e) => {
                      handleClick(e, "section5");
                      handleOpen();
                    }}
                  >
                    Galeri
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
        <div className="lg:block hidden">
          <ul className="flex text-xl gap-8">
            <li>
              <Link href="#section2" legacyBehavior>
                <a onClick={(e) => handleClick(e, "section2")}>Sekilas Info</a>
              </Link>
            </li>
            <li>
              <Link href="#section3" legacyBehavior>
                <a onClick={(e) => handleClick(e, "section3")}>Visi dan Misi</a>
              </Link>
            </li>
            <li>
              <Link href="#section4" legacyBehavior>
                <a onClick={(e) => handleClick(e, "section4")}>Struktur</a>
              </Link>
            </li>
            <li>
              <Link href="#section5" legacyBehavior>
                <a onClick={(e) => handleClick(e, "section5")}>Galeri</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
