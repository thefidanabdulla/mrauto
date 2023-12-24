import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok, FaFacebookF } from "react-icons/fa";

import { useRouter } from "next/router";
import lang from '@/utils/translations.util.js';

const Footer = () => {

  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  return (
    <div className="w-full flex justify-center bg-[#222732] py-[100px]">
      <div className="max-w-[1300px] w-full px-4 2xl:px-0 ">
        <div className="flex gap-20 items-center flex-col md:flex-row md:gap-[200px] flex-wrap md:items-start">
          <div className="flex flex-col gap-4 items-start">
            <div className="h-[35px] overflow-hidden flex flex-col justify-center gap-3 items-center ">
              <Link href={"/"}>
                <Image
                  className=""
                  src="/imgs/Untitled-2.png"
                  width={150}
                  height={50}
                  alt="mrauto carfax "
                />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <a className="text-base text-white w-[32px] h-[32px] rounded-full bg-[#FF7A00] hover:bg-[#e8773f] transition-all flex justify-center items-center" href="mailto:mrautoaze@gmail.com"><GoMail /></a>
              <a className="text-base text-white w-[32px] h-[32px] rounded-full bg-[#FF7A00] hover:bg-[#e8773f] transition-all flex justify-center items-center" href="https://www.instagram.com/mrautoaze"><FaInstagram /></a>
              <a className="text-base text-white w-[32px] h-[32px] rounded-full bg-[#FF7A00] hover:bg-[#e8773f] transition-all flex justify-center items-center" href="https://www.tiktok.com/@mrautoaze"><FaTiktok /></a>
              <a className="text-base text-white w-[32px] h-[32px] rounded-full bg-[#FF7A00] hover:bg-[#e8773f] transition-all flex justify-center items-center" href="https://www.facebook.com/profile.php?id=100088763282009"><FaFacebookF /></a>
            </div>
          </div>
          <div className="flex flex-col gap-4  text-white">
            <Link href={"/"}>
              <p className="hover:underline">{t.home}</p>
            </Link>
            <Link href={"/#ourDifferences"}>
              <p className="hover:underline">{t.aboutUs}</p>
            </Link>
            <Link href={"/#carfax"}>
              <p className="hover:underline">{t.carfax}</p>
            </Link>
            <Link href={"/#contact"}>
              <p className="hover:underline">{t.contact}</p>
            </Link>
          </div>
          <div className="flex flex-col gap-4  text-white">
            <Link href={"/carfax"}>
              <p className="hover:underline">{t.vin}</p>
            </Link>
            <Link href={"/consultation"}>
              <p className="hover:underline">{t.consultation}</p>
            </Link>
          </div>
        </div>
        <div className="border-t border-[#ffffff50] mt-10 flex justify-center pt-10">
          <p className="text-center text-[#ffffff80]">Copyright © 2022. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
