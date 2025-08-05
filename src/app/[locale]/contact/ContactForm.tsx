"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function ContactForm() {
  const t = useTranslations("ContactForm");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  return (
    <div className="sectionlayout section-width overflow-hidden ">
      <h2
        className="text-[#F56A00] mt-12 text-center font-semibold"
        style={{ fontSize: "clamp(45px, 3.2vw, 64px)" }}
        data-aos="fade-down"
      >
        {t('title')}
      </h2>
      <p
        className="text-center text-[#3C3B3B] mt-2 mb-10 text-lg"
        data-aos="fade-up"
        data-aos-delay="30"
      >
        {t('subtitle')}
      </p>

      <div
        className="flex flex-col-reverse md:flex-row md:ps-12 md:mt-10 justify-between"
        data-aos="fade-up"
        data-aos-delay="60"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[65%] space-y-4"
          data-aos="fade-right"
          data-aos-delay="90"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm text-[#3C3B3B] font-medium text-start">{t('firstName')}</label>
              <input
                name="firstName"
                type="text"
                placeholder={t('firstNamePlaceholder')}
                className="w-full border border-gray-300 focus:outline-[#F56A00] px-4 py-3 rounded-md"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex-1">
              <label className="block mb-1 text-sm text-[#3C3B3B] font-medium text-start">{t('lastName')}</label>
              <input
                name="lastName"
                type="text"
                placeholder={t('lastNamePlaceholder')}
                className="w-full border border-gray-300 focus:outline-[#F56A00] px-4 py-3 rounded-md"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#3C3B3B] font-medium text-start">{t('email')}</label>
            <input
              name="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              className="w-full border border-gray-300 focus:outline-[#F56A00] px-4 py-3 rounded-md"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#3C3B3B] font-medium text-start">{t('message')}</label>
            <textarea
              name="message"
              placeholder={t('messagePlaceholder')}
              rows={5}
              maxLength={200}
              className="w-full border border-gray-300 focus:outline-[#F56A00] px-4 py-3 rounded-md resize-none"
              value={form.message}
              onChange={handleChange}
              required
            />
            <p className="text-xs text-end text-gray-500 mt-1">
              {t('maxChars')} <br /> {t('mandatory')}
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 border border-[#F56A00] text-[#F56A00] hover:bg-[#F56A00] hover:text-white transition px-20 cursor-pointer py-2 rounded-full text-lg font-semibold"
            >
              {t('send')}
            </button>
          </div>
        </form>

        <div
          className="mt-10 md:mt-0 md:w-[35%] mb-8 md:mb-0 flex justify-center items-start"
          data-aos="fade-left"
          data-aos-delay="160"
        >
          <Image
            src="/About/eagle 2.png"
            alt="Owl Reading Book"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;