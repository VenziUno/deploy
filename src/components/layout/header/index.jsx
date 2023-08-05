import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="fixed bg-white drop-shadow-xl w-full shadow shadow-black/20 h-16 flex justify-between items-center mx-auto px-32 z-20">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12">
          <Image src="/logo.png" alt="logo" width={200} height={200} prioritas/>
        </div>
        <div className="font-light text-2xl">SDS KRISTEN TABQHA</div>
      </div>
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
    </header>
  );
  x``;
};

export default Header;
