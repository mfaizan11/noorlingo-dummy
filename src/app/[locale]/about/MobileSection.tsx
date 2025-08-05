"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

function MobileSection() {
  const t = useTranslations("GetStarted");

  return (
    <>
      <div
        className="section-width sectionlayout overflow-hidden "
        data-aos="fade-up"
      >
        <h2
          className="text-[#F56A00] text-center mt-16 font-semibold leading-14"
          style={{ fontSize: "clamp(44px, 3.2vw, 64px)" }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {t('title')}
        </h2>

        <p
          className="text-[#3C3B3B] text-center mt-4 md:max-w-[72%] mx-auto w-full font-medium"
          style={{ fontSize: "clamp(18px, 1vw, 20px)" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t('text')}
        </p>

        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <button className="mt-8 md:text-[20px] border cursor-pointer text-white border-[#FF5A13] hover:text-[#FF5A13] bg-[#FF5A13] hover:bg-transparent transition-all ease-in-out duration-300 py-2 px-4 rounded-full">
            {t('downloadButton')}
          </button>
        </div>
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <div className="hidden md:block">
            <Image
              src="/About/diamond.png"
              alt="diamond"
              width={70}
              height={70}
              className="my-4 absolute left-32 top-20 hideen md:block"
              data-aos="fade-right"
              data-aos-delay="250"
            />
            <Image
              src="/About/cartoon1.png"
              alt="cartoon1"
              width={70}
              height={70}
              className="my-4 absolute right-32 top-32 hideen md:block"
              data-aos="fade-left"
              data-aos-delay="300"
            />
            <Image
              src="/About/coin.png"
              alt="coin"
              width={70}
              height={70}
              className="my-4 absolute right-32 bottom-32 hideen md:block"
              data-aos="fade-left"
              data-aos-delay="350"
            />
            <Image
              src="/About/image 16.png"
              alt="image 16"
              width={70}
              height={70}
              className="my-4 absolute left-32 bottom-32 hideen md:block"
              data-aos="fade-right"
              data-aos-delay="400"
            />
          </div>
          <div className="flex md:hidden justify-between md:w-[75%] mx-auto -mb-[30px]">
            <Image
              src="/About/diamond.png"
              alt="diamond"
              width={70}
              height={70}
              className="my-4"
              data-aos="fade-right"
              data-aos-delay="200"
            />
            <Image
              src="/About/cartoon1.png"
              alt="cartoon1"
              width={70}
              height={70}
              className="my-4 mr-4"
              data-aos="fade-left"
              data-aos-delay="250"
            />
          </div>

          <div
            className="flex justify-center  items-center z-30"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Image
              src="/Home/experience/Screen1.png"
              alt="Mobile App"
              width={397}
              height={802}
              className="max-h-[100vh] mt-10  object-cover "
            />
          </div>
          <div className="flex md:hidden z-50 -mt-[10px] md:-mt-[100px] justify-between md:w-[75%] mx-auto">
            <Image
              src="/About/coin.png"
              alt="coin"
              width={70}
              height={70}
              className="my-4"
              data-aos="fade-right"
              data-aos-delay="700"
            />
            <Image
              src="/About/cartoon2.png"
              alt="cartoon2"
              width={70}
              height={70}
              className="my-4 mr-4"
              data-aos="fade-left"
              data-aos-delay="350"
            />
          </div>
        </div>
      </div>
      <div
        className="relative w-full -mt-14 md:-mt-32 -z-10"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Image
          src="/About/belowbg.png"
          alt="background"
          width={1920}
          height={1080}
          className="w-full mt-10 max-h-[60vh] "
          style={{ objectFit: "fill" }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="bg-[#FF6E00] px-4 py-3 mt-20 md:mt-32  pointer-events-auto"
            data-aos="zoom-in"
            data-aos-delay="450"
          >
            <h4 className="font-extrabold text-white text-[16px] lg:text-[22px] text-center">
              {t('madeWithLove')}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileSection;