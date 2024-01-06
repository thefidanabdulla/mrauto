import React from "react";
import { useRouter } from "next/router";
import lang from "@/utils/translations.util.js";

const Contact = () => {
  //language
  const { locale } = useRouter();
  const { [locale]: t } = lang;
  return (
    <section className="flex justify-center homeContactGradient">
      <div
        className="max-w-[1300px] w-full  px-4 2xl:px-0 py-[100px]  flex items-center justify-between "
        id="contact"
      >
        <div className="flex flex-col md:flex-row gap-14 justify-center items-center  md:justify-between">
          <div>
            <h3 className="text-[48px] text-center md:text-start font-semibold text-white md:w-[80%]">{t.doYouWantToPartnerOrWorkWithUs}</h3>
          </div>
          <form className="flex flex-col gap-3">
            <input className="w-[300px] p-3 rounded-md bg-[rgba(255,255,255,0.3)] text-white placeholder:text-white outline-none border-none font-semibold" placeholder={t.fullname} />
            <input className="w-[300px] p-3 rounded-md bg-[rgba(255,255,255,0.3)] text-white placeholder:text-white outline-none border-none font-semibold" placeholder={t.email} type="email" />
            <input className="w-[300px] p-3 rounded-md bg-[#FF4605] text-white  outline-none border-none font-semibold cursor-pointer hover:bg-[#ff4805e7] transition-all" value={t.send} type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
