import React from "react";
import { useRouter } from "next/router";
import lang from "@/utils/translations.util.js";
import Image from "next/image";
import Link from "next/link";

const Carfax = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;
  return (
    <div className="max-w-[1300px] w-full mx-auto px-4 2xl:px-0 py-8  flex items-center justify-between">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 homeCarfaxGradient">
        <Image src={"/imgs/dodge.svg"} width={600} height={400} />
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-2xl font-semibold text-center w-[80%]">
            {t.homeCarfax}
          </h3>
          <p className="text-center">{t.homeCarfaxDesc}</p>
          <Link href={'/carfax'}>
            <button className="bg-black text-white px-10 py-3 rounded-md">
              {t.check}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carfax;
