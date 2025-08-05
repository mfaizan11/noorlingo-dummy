"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Screentime() {
  const t = useTranslations("ScreentimeSection");
  const data = [
    {
      title: t("card1Title"),
      desc: t("card1Desc"),
      img: "/Home/child1.png",
      color:"bg-[#FFB87F]",
    },
    {
      title: t("card2Title"),
      desc: t("card2Desc"),
      img: "/Home/child2.png",
      color: "bg-[#FFE9AE]",
    },
    {
      title: t("card3Title"),
      desc: t("card3Desc"),
      img: "/Home/child3.png",
      color: "bg-[#FFE66A]",
    },
    {
      title: t("card4Title"),
      desc: t("card4Desc"),
      img: "/Home/child4.png",
      color: "bg-[#D7FF96]",
    },
  ];

  return (
    <>
      <div className="section-width mx-auto !mb-6">
        <h2 className="text-[clamp(26px,3.5vw,64px)] text-[#F56A00] text-center font-[700] md:px-40 px-6 py-6">
          {t('title')}
        </h2>
      </div>
      <div className="min-h-[90vh] bg-[#FCFFDF] flex items-center justify-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center justify-center px-6 max-w-6xl">
          {data.map((item, index) => (
            <div key={index} className={`flex flex-col items-center justify-center text-center md:h-[472px] md:w-[483px] p-6 rounded-lg ${item.color}`}>
              <Image
                src={item.img}
                alt={item.title}
                width={217}
                height={252}
                className=" object-cover  mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-[clamp(16px,2vw,24px)]">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-[clamp(16px,2vw,18px)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Screentime;