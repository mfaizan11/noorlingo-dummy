"use client";
import React from "react";
import { useTranslations } from "next-intl";

function Founder() {
  const t = useTranslations("FounderMessage");
  return (
    <div className="mx-auto section-width flex justify-center items-center   !mt-20 px-4 sm:px-6 md:px-8">
      <div className="text-center w-full !mb-[20vh] mx-2 ">
        <h2 className="text-[clamp(26px,5vw,64px)] text-[#F56A00] font-[700] px-6 py-2 ">
          {t('title')}
        </h2>
        <div className="bg-[#FFFFFF] shadow-[#CCA76F40] shadow-xl text-left p-6 ">
          <h3 className="bg-[#F56A00] text-[clamp(16px,2vw,24px)] p-2 px-4 w-44 rounded-xl text-white shadow-lg my-6">
            {t('greeting')}
          </h3>

          <p className="text-[clamp(16px,2vw,24px)] font-[500] mb-6 w-full">
            {t('p1')} <br /> {t('p2')} <br />{t('p3')}
          </p>

          <p className="text-[clamp(16px,2vw,24px)] font-[500] mb-6 w-full" >{t('closing')}</p>
          <p className="text-[clamp(16px,2vw,24px)] font-[500] mb-6 w-full text-[#00000066]">
            {t('founderTitle').split(',')[0]}, <span className="text-[#F56A00]">{t('founderTitle').split(',')[1]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Founder;