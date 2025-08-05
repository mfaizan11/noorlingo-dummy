"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useTranslations } from "next-intl";

const settings = {
  draggable: true,
  infinite: true, // Enable looping for smooth transitions
  arrows: false, // Remove arrows for better design
  autoplay: false, // Enable autoplay
  dots: false, // Disable dots as it's not in the design
  speed: 700,
  slidesToShow: 4, // Default to 1 slide on mobile
  slidesToScroll: 4,
  pauseOnHover: true, // Pause autoplay on hover
  centerMode: false, // Center the active item
  focusOnSelect: false, // Allow selecting slides by clicking
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};

function Experience() {
  const t = useTranslations("Carousel");

  const data = [
    {
      img: "/Home/experience/Screen1.png",
      title: t("slide1"),
    },
    {
      img: "/Home/experience/Screen2.png",
      title: t("slide2"),
    },
    {
      img: "/Home/experience/Screen3.png",
      title: t("slide3"),
    },
    {
      img: "/Home/experience/Screen4.png",
      title: t("slide4"),
    },
    {
      img: "/Home/experience/Screen5.png",
      title: t("slide5"),
    },
    {
      img: "/Home/experience/Screen6.png",
      title: t("slide6"),
    },
    {
      img: "/Home/experience/Screen7.png",
      title: t("slide7"),
    },
    {
      img: "/Home/experience/Screen8.png",
      title: t("slide8"),
    },
    {
      img: "/Home/experience/Screen9.png",
      title: t("slide9"),
    },
    {
      img: "/Home/experience/Screen10.png",
      title: t("slide10"),
    },
    {
      img: "/Home/experience/Screen11.png",
      title: t("slide11"),
    },
    {
      img: "/Home/experience/Screen12.png",
      title: t("slide12"),
    },
  ];

  return (
    <div className="mx-auto flex justify-center items-center  md:mt-8 px-4 sm:px-6 md:px-8">
      <div className="text-center w-full">
        <h2 className="text-[clamp(26px,5vw,64px)] text-[#F56A00] font-[700] px-6 py-2 pb-10">
          {t('title')}
        </h2>
        <div className="w-full">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center px-4 sm:px-6 md:px-8"
              >
                <div className="w-full h-[550px]  lg:h-[630px] mb-6 rounded-md overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="responsive"
                    width={500} 
                    height={500} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#7E5005]">
                  {item.title}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Experience;