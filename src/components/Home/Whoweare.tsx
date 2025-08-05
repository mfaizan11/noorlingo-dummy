"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Whoweare() {
  const t = useTranslations("Whoweare");

  return (
    <section className="section-width mx-auto md:py-12">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Who we are */}
          <div className="flex flex-col justify-center items-center">
            <div className="w-full text-center">
              <div className="flex flex-col items-center mb-4 md:mb-8">
                <Image
                  src="/Home/whoweare.png"
                  alt="Who We Are"
                  width={204}
                  height={183}
                  priority
                />
                <h2 className="text-[#F56A00] text-[clamp(22px,2vw,32px)] font-semibold py-4">
                  {t('title1')}
                </h2>
              </div>
              <p className="text-[clamp(16px,2vw,24px)] font-semibold mb-4 md:text-left" data-aos="fade-down">
                {t('p1_1')}
              </p>
              <p className="text-[clamp(14px,2vw,20px)] font-normal mb-4  md:text-left" data-aos="fade-down">
                {t('p1_2')}
              </p>
              <p className="text-[clamp(14px,2vw,20px)] font-normal mb-4 md:text-left" data-aos="fade-down">
                {t('p1_3')}
              </p>
            </div>
          </div>

          {/* Why we do it */}
          <div className="flex flex-col justify-center items-center">
            <div className="w-full text-center">
              <div className="flex flex-col items-center mb-4" data-aos="fade-down">
                <Image
                  src="/Home/whywedoit.png"
                  alt="Why We Do It"
                  width={185}
                  height={170}
                  priority
                />
                <h2 className="text-[#F56A00] text-[clamp(22px,2vw,32px)] font-semibold py-4">
                  {t('title2')}
                </h2>
              </div>
              <p className="text-[clamp(16px,2vw,24px)] font-semibold mb-4  md:text-left" data-aos="fade-down">
                {t('p2_1')}
              </p>
              <p className="text-[clamp(14px,2vw,20px)] font-normal mb-4 md:text-left" data-aos="fade-down">
                {t('p2_2')}
              </p>
              <p className="text-[clamp(14px,2vw,20px)] font-normal md:text-left" data-aos="fade-down">
                {t('p2_3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whoweare;