"use client";

import clsx from "clsx";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from "next-intl";

import LanguageSwitcher from './LanguageSwitcher'; 
import LanguageSwitcherMobile from './LanguageSwitcherMobile';

function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale(); 
  const pathname = usePathname(); 
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <>
      {/* Desktop navbar */}
      <div className="z-50 hidden md:flex flex-row justify-between items-center gap-6 p-4 section-width mx-auto mt">
        <Link href={`/${locale}`}>
          <Image
            src="/Logo.webp"
            alt="Logo"
            width={185}
            height={39}
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className="flex flex-row items-center gap-6 bg-[#F56A002E] p-4 px-8 rounded-full">
          {navLinks.map((link) => {
            const localizedHref = link.href === '/' 
              ? `/${locale}` 
              : `/${locale}${link.href}`;
            
            // Check for an exact match against the full pathname
            const isActive = pathname === localizedHref;

            return (
              <Link
                key={link.href}
                href={localizedHref} // Use the fully constructed path
                className={clsx(
                  "text-[#7E5005] font-[600] text-[clamp(15px,2vw,18px)] hover:text-[#FF8C00] px-6 p-1 rounded-full transition",
                  isActive && "bg-[#FFD962]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-row items-center gap-4">
            <Image
                src="/search.svg"
                alt="Search Icon"
                width={44}
                height={44}
                className="cursor-pointer"
            />
            <LanguageSwitcher /> 
            <button className="bg-[#F56A00] text-[clamp(15px,2vw,18px)] text-white p-2 px-6 rounded-3xl hover:bg-[#FF8C00] transition-colors duration-300">
                {t('getStarted')}
            </button>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="flex md:hidden flex-row justify-between items-center gap-6 p-4 section-width mx-auto mt-4">
        <Link href={`/${locale}`}>
          <Image
            src="/Logo.webp"
            alt="Logo"
            width={130}
            height={25}
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className="z-50 flex flex-row items-center gap-4">
          <Image
            src="/search.svg"
            alt="Search Icon"
            width={34}
            height={34}
            className="cursor-pointer"
          />
          <LanguageSwitcherMobile />
          <button aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="none"
              viewBox="0 0 24 24"
              className="text-[#7E5005]"
            >
              <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor"/>
              <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor"/>
              <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white/90 backdrop-blur flex flex-col items-end p-4 md:hidden"
          >
            <div className="w-full flex flex-col items-center gap-8 bg-[#F56A002E] rounded-3xl px-4 h-[100vh]">
              <div className="w-full flex justify-end">
                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="transition-opacity duration-300 ease-in-out"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#F56A00] mt-4">
                    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <Link href={`/${locale}`}>
                <Image
                  src="/Logo.webp"
                  alt="Logo"
                  width={185}
                  height={39}
                  className="cursor-pointer"
                  priority
                />
              </Link>
              <div className="flex flex-col justify-center items-center gap-6 mt-[14vh] w-full">
                {navLinks.map((link) => {
                  const localizedHref = link.href === '/' ? `/${locale}` : `/${locale}${link.href}`;
                  const isActive = pathname === localizedHref;
                  return (
                    <Link
                      key={link.href}
                      href={localizedHref}
                      className={clsx(
                        "text-center text-[#7E5005] font-[600] text-lg hover:text-[#FF8C00] px-8 py-3 rounded-full transition ",
                        isActive && "bg-[#FFD962]"
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <button className="bg-[#F56A00] mb-6 w-full text-lg text-white py-3 rounded-3xl hover:bg-[#FF8C00] transition-colors duration-300">
                  {t('getStarted')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;