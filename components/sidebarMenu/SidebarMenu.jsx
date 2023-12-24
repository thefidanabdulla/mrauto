import Link from "next/link";
import React from "react";
import { GrClose } from "react-icons/gr";
import Language from "../language/Language";

const SidebarMenu = ({ setIsOpenedSidebarMenu, isOpenedSidebarMenu }) => {
  return (
    <div
      className={`fixed w-[300px] bg-white shadow-xl top-0 right-0 transition-all duration-500 ${
        isOpenedSidebarMenu ? "translate-x-0" : " translate-x-[500px]"
      } h-screen `}
    >
      <div className="flex justify-end px-10 pt-10">
        <button onClick={() => setIsOpenedSidebarMenu(false)} className="">
          <GrClose />
        </button>
      </div>
      <div className="mt-12 flex flex-col gap-3">
        <Link href={"/"}>
          <p className="md:text-lg py-4 px-10 text-base font-semibold transition-all hover:text-[#FF7A00]">
            Home
          </p>
        </Link>
        <Link href={"/#ourDifferences"}>
          <p className="md:text-lg py-4 px-10 text-base font-semibold transition-all hover:text-[#FF7A00]">
            About Us
          </p>
        </Link>
        <Link href={"/#carfax"}>
          <p className="md:text-lg py-4 px-10 text-base font-semibold transition-all hover:text-[#FF7A00]">
            Carfax
          </p>
        </Link>
        <Link href={"/#contact"}>
          <p className="md:text-lg py-4 px-10 text-base font-semibold transition-all hover:text-[#FF7A00]">
            Contact
          </p>
        </Link>
      </div>
      <div className="py-8 px-[28px]">
        <Language />
      </div>
    </div>
  );
};

export default SidebarMenu;
