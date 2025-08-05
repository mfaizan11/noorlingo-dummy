"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Confidence() {
  const t = useTranslations("Confidence");
  const data = [
    {
      title: t("card1Title"),
      desc: t("card1Desc"),
      img: "/Home/confidencecards/card1.png",
      color: "bg-[#CAFF75]",
    },
    {
      title: t("card2Title"),
      desc: t("card2Desc"),
      img: "/Home/confidencecards/card2.png",
      color: "bg-[#FD97A3]",
    },
    {
      title: t("card3Title"),
      desc: t("card3Desc"),
      img: "/Home/confidencecards/card3.svg",
      color: "bg-[#FFC719]",
    },
  ];

  return (
    <>
      <div className="section-width sectionlayout overflow-hidden">
        <h2 className="text-[clamp(26px,3.5vw,64px)] text-[#F56A00] text-center font-[700] md:px-40 px-6 py-6">
          {t('title')}
        </h2>
      </div>

      {/* orange main div */}
      <div className="relative md:h-[55vh] sm:h-[95vh] bg-[#F56A00] rounded-3xl mx-4 md:mx-6 lg:mx-10 xl:mx-10 flex items-center justify-center py-12">
        {/* Low opacity stars */}
        <Image
          src="/Home/lowopacitystars.svg"
          alt="stars"
          width={58}
          height={77}
          className="absolute top-4 md:flex hidden right-2 md:top-6 md:right-12"
        />
        <Image
          src="/Home/lowopacitystars.svg"
          alt="stars"
          width={50}
          height={69}
          className="absolute md:hidden flex top-4 right-2"
        />

        {/* Inner container for stars and text */}
        <div className="relative w-[80%] h-[70%] md:w-[85%] md:h-[75%] lg:w-[80%] lg:h-[80%] flex items-center justify-center">
          <Image
            src="/Home/yellowstar.svg"
            alt="stars"
            width={27}
            height={26}
            className="absolute hidden md:flex top-1 left-0 md:top-2 md:left-4"
          />
          <Image
            src="/Home/yellowstar.svg"
            alt="stars"
            width={20}
            height={19}
            className="absolute md:hidden flex top-1 left-0"
          />
          <Image
            src="/Home/yellowstar.svg"
            alt="stars"
            width={27}
            height={26}
            className="absolute md:flex hidden top-1 right-0 md:top-2 md:right-4"
          />
          <Image
            src="/Home/yellowstar.svg"
            alt="stars"
            width={20}
            height={19}
            className="absolute flex md:hidden top-10 right-0"
          />
          <Image
            src="/Home/whitestars.svg"
            alt="stars"
            width={58}
            height={77}
            className="absolute md:flex hidden top-1/2 left-2 transform -translate-y-1/2"
          />
          <Image
            src="/Home/whitestars.svg"
            alt="stars"
            width={30}
            height={49}
            className="absolute md:hidden flex top-2/3 left-0 transform -translate-y-1/2"
          />
          <Image
            src="/Home/whitestars.svg"
            alt="stars"
            width={58}
            height={77}
            className="absolute md:flex hidden top-1/2 right-20 transform -translate-y-1/2"
          />
          <Image
            src="/Home/yellowstar.svg"
            alt="stars"
            width={27}
            height={26}
            className="absolute hidden md:flex bottom-4 right-24"
          />
          <Image
            src="/Home/yellowstar.svg"
            alt="stars"
            width={27}
            height={26}
            className="absolute md:hidden flex bottom-10 right-24"
          />
          <Image
            src="/Home/yellowstar.svg"
            alt="stars"
            width={27}
            height={26}
            className="absolute bottom-4 left-18"
          />

          {/* Text content */}
          <div className="w-full max-w-6xl px-4 z-10 mb-30 md:mb-0">
            <h3 className="mx-4 md:mx-8 lg:mx-16 rounded-sm text-center bg-[#FFC719] p-4 font-[800] text-[clamp(20px,2vw,34px)]">
              {t('banner1')}
            </h3>
            <h3 className="md:mt-8 md:mx-8 lg:mx-16 rounded-sm text-center text-white p-4 font-[800] text-[clamp(16px,2vw,34px)]">
              {t('banner2')}
            </h3>
          </div>
        </div>

        {/* Girl image */}
        <Image
          src="/Home/confidencegirl.png"
          alt="confident girl with tablet"
          width={191}
          height={287}
          className="absolute md:flex hidden bottom-0 right-4 md:right-8 lg:right-12"
        />
        <Image
          src="/Home/confidencegirl.png"
          alt="confident girl with tablet"
          width={131}
          height={217}
          className="absolute md:hidden flex bottom-0 right-4 md:right-8 lg:right-12"
        />
        <Image
          src="/Home/lowopacitystars.svg"
          alt="stars"
          width={58}
          height={77}
          className="absolute bottom-4 left-12"
        />
      </div>

      {/* Three Cards */}
      <div className="mt-14 md:h-[40vh]  rounded-3xl mx-4 md:mx-6 lg:mx-10 xl:mx-10 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-12">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.color} flex flex-col rounded-xl md:h-[30vh] h-[35vh] relative overflow-hidden`}
            >
              <div className="flex-shrink-0 pt-8 pl-8">
                <h3 className="text-left text-[clamp(18px,2vw,24px)] font-[600]">
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row flex-1 ">
                <div className="flex flex-col pl-8 w-full sm:w-2/3 justify-start">
                  <p className="text-[clamp(16px,2vw,20px)] text-left">
                    {item.desc}
                  </p>
                </div>

                <div className="flex w-full sm:w-1/3 justify-end items-center">
                  <Image
                    src={item.img}
                    alt="illustration"
                    width={148}
                    height={222}
                    className="object-contain max-h-full mt-[6vh]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Confidence;