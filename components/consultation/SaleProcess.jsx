import Image from "next/image";
import React, { useState } from "react";

import { useRouter } from "next/router";
import lang from "@/utils/translations.util.js";
import Link from "next/link";

const SaleProcess = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1300px] w-full px-4 2xl:px-0 py-[64px]">
        <h2 className="text-[32px] md:text-[36px] font-semibold text-center mb-16">{t.saleProcess}</h2>
        <div className="flex justify-center">
          <div className="max-w-[900px] flex-wrap flex justify-center gap-20 items-start">
            <div className="w-[240px] flex items-center justify-center flex-col">
              <div className="w-[128px] mb-6 h-[128px] text-[48px]  bg-[#000000] rounded-3xl flex items-center justify-center">
                <Image src={'imgs/carIcon.svg'} alt="mrauto" width={48} height={48} />
              </div>
              <h5 className="text-xl mb-2 font-semibold text-center">{t.sale_chooseCar}</h5>
              <p className="text-center max-w-[200px] text-[rgba(0,0,0,.6)]">{t.sale_chooseCarDetail}</p>
            </div>
            <div className="w-[240px] flex items-center justify-center flex-col">
              <div className="w-[128px] mb-6 h-[128px] text-[48px]  bg-[#000000] rounded-3xl flex items-center justify-center">
                <Image src={'imgs/verifyIcon.svg'} alt="mrauto" width={48} height={48} />
              </div>
              <h5 className="text-xl mb-2 font-semibold text-center">{t.sale_check}</h5>
              <p className="text-center max-w-[200px] text-[rgba(0,0,0,.6)]">{t.sale_checkDetail}</p>
            </div>
            <div className="w-[240px] flex items-center justify-center flex-col">
              <div className="w-[128px] mb-6 h-[128px] text-[48px]  bg-[#000000] rounded-3xl flex items-center justify-center">
                <Image src={'imgs/depositIcon.svg'} alt="mrauto" width={48} height={48} />
              </div>
              <h5 className="text-xl mb-2 font-semibold text-center">{t.sale_chooseCar}</h5>
              <p className="text-center max-w-[200px] text-[rgba(0,0,0,.6)]">{t.sale_chooseCarDetail}</p>
            </div>
            <div className="w-[240px] flex items-center justify-center flex-col">
              <div className="w-[128px] mb-6 h-[128px] text-[48px]  bg-[#000000] rounded-3xl flex items-center justify-center">
                <Image src={'imgs/calendarIcon.svg'} alt="mrauto" width={48} height={48} />
              </div>
              <h5 className="text-xl mb-2 font-semibold text-center">{t.sale_time}</h5>
              <p className="text-center max-w-[200px] text-[rgba(0,0,0,.6)]">{t.sale_timeDetail}</p>
            </div>
            <div className="w-[240px] flex items-center justify-center flex-col">
              <div className="w-[128px] mb-6 h-[128px] text-[48px]  bg-[#000000] rounded-3xl flex items-center justify-center">
                <Image src={'imgs/walletIcon.svg'} alt="mrauto" width={48} height={48} />
              </div>
              <h5 className="text-xl mb-2 font-semibold text-center">{t.sale_invoice}</h5>
              <p className="text-center max-w-[200px] text-[rgba(0,0,0,.6)]">{t.sale_invoiceDetail}</p>
            </div>
            <div className="w-[240px] flex items-center justify-center flex-col">
              <div className="w-[128px] mb-6 h-[128px] text-[48px]  bg-[#000000] rounded-3xl flex items-center justify-center">
                <Image src={'imgs/locationIcon.svg'} alt="mrauto" width={48} height={48} />
              </div>
              <h5 className="text-xl mb-2 font-semibold text-center">{t.sale_surrender}</h5>
              <p className="text-center max-w-[200px] text-[rgba(0,0,0,.6)]">{t.sale_surrenderDetail}</p>
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default SaleProcess;
