"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { useTranslations } from "next-intl";

function Footer() {
    const t = useTranslations("Footer");

  return (
    <>
      {/* first section */}
      <div className="section-width mx-auto !mt-20 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="text-[clamp(28px,3.5vw,64px)] text-[#7E5005] font-[700]">
              {t('followUs')}
            </h3>
            <div className="flex flex-row justify-center items-center gap-10">
              {/* Social links... */}
              <a href="https://www.instagram.com">
                <Image src="/Footer/instagram.svg" alt="Instagram" width={36} height={36} />
              </a>
              <a href="https://www.facebook.com">
                <Image src="/Footer/facebook.svg" alt="facebook" width={36} height={36} />
              </a>
              <a href="https://www.youtube.com">
                <Image src="/Footer/youtube.svg" alt="youtube" width={36} height={36} />
              </a>
              <a href="https://www.linkedin.com">
                <Image src="/Footer/linkedin.svg" alt="linkedin" width={36} height={36} />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col md:flex-row md:pe-4 justify-center items-center gap-6 md:gap-10 md:pb-0 pb-4 text-[clamp(18px,2.5vw,28px)] text-[#7E5005] font-[600]">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
            <div className="flex flex-col justify-center md:items-start items-center gap-6 ">
              <h3 className="text-[clamp(18px,2.5vw,28px)] text-[#7E5005] font-[600] ">
                {t('getAccess')}
              </h3>
              <form action="">
                <input
                  type="email"
                  id="newsletter"
                  name="email"
                  placeholder={t('enterEmail')}
                  className="border-2 border-[#F56A00] text-[clamp(16px,2.5vw,24px)] text-[#7E5005] border-e-0 rounded-e-none font-[500] p-3 rounded-xl bg-[#f56a0010]"
                />
                <button className="bg-[#F56A00] text-[clamp(18px,2.5vw,24px)] text-white border-s-0 rounded-s-none hover:bg-[#f59300] cursor-pointer transition duration-200 ease-in-out justify-center border-2 border-[#F56A00] items-center md:p-3 p-[10.5px] rounded-xl">
                  {t('submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="flex justify-center items-center w-full mx-auto ">
        <Image src="/Footer/footerg2.gif" alt="Gif" width={1802} height={70} style={{objectFit: "contain"}}/>
      </div>

      {/* last section */}
      <div className="section-width mx-auto px-6 !my-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col justify-center md:items-start items-center gap-4">
            <Link href="/">
              <Image src="/Logo.webp" alt="Logo" width={200} height={43} />
            </Link>
            <h3 className="text-[#7E5005] text-[clamp(16px,2vw,24px)] font-[600] max-w-[500px] text-center md:text-start">
                {t('tagline')}
            </h3>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 text-[#7E5005] text-[clamp(16px,2vw,24px)] font-[600] max-w-[500px]">
            <Link href="/">{t('terms')}</Link>
            <Link href="/">{t('privacy')}</Link>
            <Link href="/parentguide">{t('parentGuide')}</Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <p className="text-[#7E5005] text-[clamp(16px,2vw,24px)] font-[600] max-w-[500px]">{t('copyright')}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;