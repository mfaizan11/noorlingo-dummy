"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("AboutUsHome");
  return (
    <div className="min-h-[90vh] bg-[#FCFFDF] relative overflow-hidden md:mt-0 mt-40">
      <div className="section-width mx-auto">
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
          <Image
            src="/Home/bird.png"
            alt="bird"
            width={111}
            height={126}
            className="hidden md:block cursor-pointer w-16 h-18 md:w-20 md:h-24 lg:w-28 lg:h-32"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Header */}
          <div className="flex items-center justify-center py-8 md:py-12">
            <h1 className="text-[#F56A00] text-[clamp(28px,4vw,56px)] font-bold leading-tight text-center">
              {t('title')}
            </h1>
          </div>

          {/* Content with quotes */}
          <div className="relative max-w-7xl mx-auto mb-8 md:mb-12">
            {/* Opening quote */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 text-4xl md:text-6xl text-[#7E5005] font-serif z-10">
              &ldquo;
            </div>

            {/* Main text */}
            <p className="text-[clamp(16px,2vw,28px)] leading-relaxed text-center text-[#525252]  relative z-5">
              {t('text')}
            </p>

            {/* Closing quote */}
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 text-4xl md:text-6xl text-[#7E5005] font-serif z-10">
              &quot;
            </div>
          </div>

          {/* Learn More Button */}
          <div className="flex items-center justify-center mb-4">
            <button className="bg-[#F56A00] hover:bg-[#E55A00] cursor-pointer text-[clamp(14px,1.8vw,18px)] py-3 px-6  md:px-8 rounded-full text-white font-medium  transform hover:scale-105 transition-all duration-300">
              {t('learnMore')}
            </button>
          </div>
        </div>

        {/* Bottom Images */}
        <div className="relative w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-end justify-between px-4 lg:px-8 xl:px-16">
            {/* Camel - Left */}
            <div className="flex-shrink-0">
              <Image
                src="/Home/camel.png"
                alt="camel"
                width={192}
                height={381}
                className="cursor-pointer w-32 h-64 lg:w-48 lg:h-96"
                priority
              />
            </div>

            {/* Eagle - Center (positioned under Learn More button) */}
            <div className="flex-shrink-0 -mt-8">
              <Image
                src="/Home/eagle.png"
                alt="eagle"
                width={231}
                height={279}
                className="cursor-pointer w-40 h-48 lg:w-58 lg:h-70"
                priority
              />
            </div>

            {/* Girl - Right */}
            <div className="flex-shrink-0">
              <Image
                src="/Home/confidencegirl.png"
                alt="girl"
                width={267}
                height={401}
                className="cursor-pointer w-44 h-66 lg:w-67 lg:h-100"
                priority
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-4 px-4">
            <div className="flex items-end justify-center space-x-4">
              <Image
                src="/Home/camel.png"
                alt="camel"
                width={120}
                height={240}
                className="cursor-pointer"
                priority
              />
              <Image
                src="/Home/eagle.png"
                alt="eagle"
                width={140}
                height={170}
                className="cursor-pointer"
                priority
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Home/girl.png"
                alt="girl"
                width={160}
                height={240}
                className="cursor-pointer"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;