"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

function BelowSection() {
  const t = useTranslations("AboutPage");

  return (
    <div className="section-width sectionlayout overflow-hidden  mt-10">
      <h2
        className="text-[#F56A00] text-center font-semibold leading-14"
        style={{ fontSize: "clamp(44px, 3.2vw, 64px)" }}
      >
        {t('founderTitle')}
      </h2>

      <p
        className="text-[#3C3B3B] text-center mt-4 md:max-w-[72%] mx-auto w-full font-medium"
        style={{ fontSize: "clamp(18px, 1vw, 20px)" }}
      >
        {t('founderText')}
      </p>

      <div className="relative w-full bg-[#FFC100] mt-10 rounded-[30px] pt-16 pb-48 md:py-20 px-4  md:px-12 flex items-center justify-center ">
        {/* Left character */}
        <div className="absolute left-4 bottom-0">
          <Image
            src="/About/boy.png"
            alt="boy"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Right character */}
        <div className="absolute right-4 bottom-0">
          <Image
            src="/Home/confidencegirl.png"
            alt="girl"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        <div className="">
          <div className="flex justify-between ">
            <Image
              src="/About/orange star.png"
              alt="stars"
              width={20}
              height={20}
              className="my-4"
            />
            <Image
              src="/About/orange star.png"
              alt="stars"
              width={20}
              height={20}
              className="my-4 mr-4"
            />
          </div>
          <h3
            className="text-white text-center relative font-semibold z-10 px-4"
            style={{ fontSize: "clamp(20px, 2vw, 28px)" }}
          >
            <Image
              src="/About/Stars.png"
              alt="stars"
              width={30}
              height={30}
              className="mb-3"
            />
            {t('founderQuote')}
            <Image
              src="/About/Stars.png"
              alt="stars"
              width={30}
              height={30}
              className="absolute -bottom-6 right-4 "
            />
            <Image
              src="/About/transparent stars.png"
              alt="stars"
              width={30}
              height={30}
              className="absolute -bottom-6 left-4 "
            />
            <Image
              src="/About/transparent stars.png"
              alt="stars"
              width={30}
              height={30}
              className="absolute top-0 right-4  "
            />
          </h3>
          <div className="flex mt-8 justify-between ">
            <Image
              src="/About/orange star.png"
              alt="stars"
              width={20}
              height={20}
              className="my-3"
            />
            <Image
              src="/About/orange star.png"
              alt="stars"
              width={20}
              height={20}
              className="my-3 mr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BelowSection;