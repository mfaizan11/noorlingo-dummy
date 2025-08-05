'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcherMobile() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  interface Language {
    code: 'en' | 'ar';
    label: string;
    flag: string;
  }

  const switchLocale = (newLocale: Language['code']): void => {
    // Remove the current locale from pathname and add the new one
    const segments: string[] = pathname.split('/');
    if (segments[1] === 'ar' || segments[1] === 'en') {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath: string = segments.join('/');
    router.replace(newPath);
    setIsOpen(false);
  };

  const languages: Language[] = [
    { code: 'en', label: 'English', flag: 'US' },
    { code: 'ar', label: 'العربية', flag: 'UAE' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);
  const otherLanguages = languages.filter(lang => lang.code !== locale);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        className="flex items-center gap-1 p-1 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Image
          src="/world.svg"
          alt="Language Icon"
          width={34}
          height={34}
          className="cursor-pointer"
        />
        <span className="text-sm">{currentLanguage?.flag}</span>
        <svg
          className={`w-3 h-3 text-[#7E5005] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
            Language
          </div>
          {otherLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLocale(language.code)}
              className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 transition-colors"
            >
              <span className="text-base">{language.flag}</span>
              <span className="text-sm font-medium text-gray-700">{language.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}