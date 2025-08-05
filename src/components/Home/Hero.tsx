"use client";
import React from "react";
import Image from "next/image";
import BlurText from "../Animations/BlurText";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  const handleAnimationComplete = () => {
    // console.log("All letters have animated!");
  };

  return (
    <section className="relative flex flex-col items-center justify-center md:min-h-[60vh] py-8 md:py-1 section-width mx-auto text-center md:!mb-10">
      <div className="w-full flex justify-center">
        <BlurText
          text={t('title')}
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-[#F56A00] text-[clamp(20px,3.5vw,42px)] px-6 mt-large font-bold leading-tight z-10 relative max-w-7xl mx-auto text-center flex justify-center items-center"
        />
      </div>
      <div className="w-full flex justify-center">
        <BlurText
          text={t('subtitle')}
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-black text-[clamp(14px,2vw,22px)] px-6 mt-4 md:mt-2 font-normal leading-tight z-10 relative max-w-7xl mx-auto text-center flex justify-center items-center"
        />
      </div>
      <div className="flex flex-row gap-6 mt-4 z-30">
        <button
          className="bg-[#F56A00] hover:bg-[#FF8C00] transition-colors duration-300 cursor-pointer text-[clamp(16px,2vw,24px)] p-2 px-4 rounded-full z-10 text-white text-center "
          data-aos="fade-down"
        >
          {t('downloadButton')}
        </button>
        <button
          className="text-[#F56A00] border-2 border-[#F56A00] hover:bg-[#F56A00] hover:text-white transition-colors duration-300 cursor-pointer rounded-full text-[clamp(16px,2vw,24px)] p-2 z-10  text-center "
          data-aos="fade-down"
        >
          {t('coursesButton')}
        </button>
      </div>

      <div
        className="relative w-full h-[200px] md:h-[220px] lg:h-[700px] img md:mt-[-10vh] z-0"
        data-aos="fade-down"
      >
        <Image
          src="/Home/noorlingo_new_heor_section.png"
          alt="Hero Illustration"
          fill
          style={{ objectFit: "contain" }}
          className="hero-img pointer-events-none select-none"
          priority
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 80vw,
                 7l0vw"
        />
      </div>
    </section>
  );
}