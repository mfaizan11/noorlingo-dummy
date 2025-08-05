"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function App() {
  const t = useTranslations("AppSection");
  const data = [
    {
      title: t("card1Title"),
      desc: t("card1Desc"),
      img: "/Home/appsection/card1.png",
      color: "bg-[#FFC1AC]",
      imgWidth: 130,
    },
    {
      title: t("card2Title"),
      desc: t("card2Desc"),
      img: "/Home/appsection/card2.png",
      color: "bg-[#FFE66A]",
      imgWidth: 190,
    },
    {
      title: t("card3Title"),
      desc: t("card3Desc"),
      img: "/Home/appsection/card3.png",
      color: "bg-[#FFE66A]",
      imgWidth: 130,
    },
    {
      title: t("card4Title"),
      desc: t("card4Desc"),
      img: "/Home/appsection/card4.png",
      color: "bg-[#FFC1AC]",
      imgWidth: 190,
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/Home/appsection/bg.png')`,
          backgroundSize: "clamp(60%, 4vw, 80%)",
          backgroundPosition: "center top 120px",
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#F56A00] font-bold leading-tight px-4 max-w-4xl mx-auto">
              {t('title')}
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {data.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] ${item.color}`}
              >
                {/* Image Container */}
                <div className="flex-shrink-0 mb-4 sm:mb-6">
                  <div className="relative">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={item.imgWidth}
                      height={217}
                      className="object-contain mx-auto drop-shadow-md"
                      sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 190px"
                      priority={index < 2}
                    />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-sm mx-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      </div>
    </section>
  );
}

export default App;