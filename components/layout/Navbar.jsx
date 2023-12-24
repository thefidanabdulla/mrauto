import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Language from "../language/Language";
import { FaBars } from "react-icons/fa";
import SidebarMenu from "../sidebarMenu/SidebarMenu";
import { useRouter } from "next/router";

import lang from '@/utils/translations.util.js';

const Navbar = () => {

  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  const [isOpenedSidebarMenu, setIsOpenedSidebarMenu] = useState(false)
  return (
    <div className="shadow-sm sticky top-0 left-0 bg-[#ffffff90]">
      <nav className="max-w-[1300px] w-full mx-auto px-4 2xl:px-0 py-8  flex items-center justify-between">
        <div className="h-[35px] overflow-hidden flex items-center ">
          <Link href={"/"}>
            <Image
              className=""
              src="/imgs/Untitled-1.png"
              width={150}
              height={50}
              alt="mrauto carfax "
            />
          </Link>
        </div>
        <div className="hidden items center gap-6 md:flex">
          <Link href={"/"}>
            <p className="md:text-lg text-base font-semibold transition-all hover:text-[#FF7A00]">{t.home}</p>
          </Link>
          <Link href={"/#ourDifferences"}>
            <p className="md:text-lg text-base font-semibold transition-all hover:text-[#FF7A00]">{t.aboutUs}</p>
          </Link>
          <Link href={"/#carfax"}>
            <p className="md:text-lg text-base font-semibold transition-all hover:text-[#FF7A00]">{t.carfax}</p>
          </Link>
          <Link href={"/#contact"}>
            <p className="md:text-lg text-base font-semibold transition-all hover:text-[#FF7A00]">{t.contact}</p>
          </Link>
        </div>
        <div className="md:block hidden">
          <Language />
        </div>
        <button onClick={() => setIsOpenedSidebarMenu(true)}  className="text-2xl md:hidden">
          <FaBars />
        </button>
      </nav>
      {
        isOpenedSidebarMenu && (
          <SidebarMenu 
            isOpenedSidebarMenu={isOpenedSidebarMenu} 
            setIsOpenedSidebarMenu={setIsOpenedSidebarMenu} 
          />
        )
      }
    </div>
  );
};

export default Navbar;
