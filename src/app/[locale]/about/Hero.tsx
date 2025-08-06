"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("AboutHero");

  return (
    <div className="section-width overflow-hidden">
      <div
        className="mt-10 relative flex flex-col justify-center items-center sectionlayout"
        data-aos="fade-up"
      >
        <h2
          className="text-[#F56A00] text-center font-semibold leading-14"
          style={{ fontSize: "clamp(44px, 3.2vw, 64px)" }}
          data-aos="fade-down"
        >
          {t('title')}
        </h2>
        <p
          className="text-medium text-center md:max-w-[70%] mt-4"
          style={{ fontSize: "clamp(20px,1.4vw,28px)" }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {t('subtitle')}
        </p>
        <button
          className="mt-8 mb-6 md:text-[22px] mx-auto border cursor-pointer hover:text-white border-[#FF5A13] text-[#FF5A13] hover:bg-[#FF5A13] bg-transparent transition-all ease-in-out duration-300 py-3 px-5 rounded-full"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {t('watchStory')}
        </button>
      </div>
      <div className="relative w-full h-[200px] md:h-[220px] lg:h-[700px] img md:mt-[-8vh] z-1">
        <Image
          src="/Home/hero.png"
          alt="Hero Illustration"
          fill
          style={{ objectFit: "contain" }}
          className="hero-img pointer-events-none select-none"
          priority
          sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 80vw,
                            70vw"
        />
      </div>
    </div>
  );
}

export default Hero;