"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ValueItem {
  title: string;
  para: string;
  img: string;
}

function MissionValues() {
  const t = useTranslations("MissionValues");
  const data: ValueItem[] = [
    {
      title: t("value1Title"),
      para: t("value1Text"),
      img: "/About/eagle.png",
    },
    {
      title: t("value2Title"),
      para: t("value2Text"),
      img: "/About/cultural.png",
    },
    {
      title: t("value3Title"),
      para: t("value3Text"),
      img: "/About/criticalthinking.png",
    },
    {
      title: t("value4Title"),
      para: t("value4Text"),
      img: "/About/heart.png",
    },
  ];

  return (
    <div className="sectionlayout section-width overflow-hidden justify-items-center mx-auto">
      <h2
        className="text-[#F56A00] text-center mt-20 font-semibold leading-14"
        style={{ fontSize: "clamp(44px, 3.2vw, 64px)" }}
        data-aos="fade-down"
      >
        {t('missionTitle')}
      </h2>

      <div
        className=" flex justify-center items-center md:space-x-20 md:ml-40 mt-10 space-x-0 md:flex-row flex-col-reverse"
        data-aos="fade-up"
      >
        <div className="w-full  md:w-[60%]">
          <h2
            className="text-[#F56A00]  md:tex-left text-center font-semibold leading-14"
            style={{ fontSize: "clamp(36px, 2.6vw, 49px)" }}
            data-aos="fade-right"
          >
            {t('whyWeExistTitle')}
          </h2>
          <p
            className="text-medium md:tex-left text-center text-[#3C3B3B] mt-4"
            style={{ fontSize: "clamp(20px,1.4vw,28px)" }}
            data-aos="fade-right"
            data-aos-delay="50"
          >
            {t('whyWeExistText')}
          </p>
        </div>
        <div className="md:w-[40%] w-full mb-6 md:mb-0" data-aos="fade-left">
          <Image
            src="/About/mission.png"
            alt="Mission"
            width={445}
            height={516}
            className=" object-contain"
          />
        </div>
      </div>

      <div className="mt-10">
        <h2
          className="text-[#F56A00] text-center font-semibold leading-14"
          style={{ fontSize: "clamp(44px, 3.2vw, 64px)" }}
          data-aos="fade-down"
        >
          {t('coreValuesTitle')}
        </h2>

        <p
          className="text-[#3C3B3B] text-center mt-4 md:max-w-[72%] mx-auto w-full font-medium"
          style={{ fontSize: "clamp(18px, 1vw, 20px)" }}
          data-aos="fade-up"
        >
          {t('coreValuesText')}
        </p>

        <div
          className="my-28 md:py-10 "
          style={{
            backgroundImage: `url('/About/bg.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-28 gap-x-8  mx-auto">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center bg-[#FFC1AC] rounded-[22px] shadow-md p-6 pt-16"
                data-aos="zoom-in"
                data-aos-delay={index * 10}
              >
                <div className="absolute -top-22 left-1/2 -translate-x-1/2">
                  <Image width={124} height={150} src={item.img} alt={item.title} className="mb-0" />
                </div>
                <h3 className="text-[clamp(20px,1.3vw,26px)] font-semibold text-[#3C3B3B] mb-2 mt-8">
                  {item.title}
                </h3>
                <p className="text-[#3C3B3B] text-base font-medium">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionValues;