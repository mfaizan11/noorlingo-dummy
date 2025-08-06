"use client";
import React from "react";
import { useTranslations } from "next-intl";

const PolicyPage = () => {
  const t = useTranslations("ParentGuide");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t("section1Title")}</h2>
        <p>{t("section1Text")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t("section2Title")}</h2>
        <p className="mb-2">{t("section2Text1")}</p>
        <ul className="list-none list-inside mb-2">
          <li>
            <strong>C</strong> {t("cafeC")}
          </li>
          <li>
            <strong>A</strong> {t("cafeA")}
          </li>
          <li>
            <strong>F</strong> {t("cafeF")}
          </li>
          <li>
            <strong>E</strong> {t("cafeE")}
          </li>
        </ul>
        <p className="mb-2">{t("section2Text2")}</p>
        <p>{t("section2Text3")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t("section3Title")}</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>{t("step1")}</li>
          <li>{t("step2")}</li>
          <li>{t("step3")}</li>
          <li>{t("step4")}</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t("section4Title")}</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>{t("diff1")}</li>
          <li>{t("diff2")}</li>
          <li>{t("diff3")}</li>
          <li>{t("diff4")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t("section5Title")}</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>{t("safe1")}</li>
          <li>{t("safe2")}</li>
          <li>{t("safe3")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t("section6Title")}</h2>
        <p className="mb-2">{t("progress1")}</p>
        <p>{t("progress2")}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">{t("section7Title")}</h2>
        <div className="space-y-4">
          {/* FAQ 1 */}
          <details className="group border border-gray-200 rounded-lg transition hover:shadow-md">
            <summary className="flex justify-between items-center px-5 py-4 cursor-pointer font-medium text-gray-800">
              <span>{t("faq1q")}</span>
              <span className="transition group-open:rotate-45">+</span>
            </summary>
            <div className="px-5 pb-4 text-bold text-black">{t("faq1a")}</div>
          </details>

          {/* FAQ 2 */}
          <details className="group border border-gray-200 rounded-lg transition hover:shadow-md">
            <summary className="flex justify-between items-center px-5 py-4 cursor-pointer font-medium text-gray-800">
              <span>{t("faq2q")}</span>
              <span className="transition group-open:rotate-45">+</span>
            </summary>
            <div className="px-5 pb-4 text-bold text-black">{t("faq2a")}</div>
          </details>

          {/* FAQ 3 */}
          <details className="group border border-gray-200 rounded-lg transition hover:shadow-md">
            <summary className="flex justify-between items-center px-5 py-4 cursor-pointer font-medium text-gray-800">
              <span>{t("faq3q")}</span>
              <span className="transition group-open:rotate-45">+</span>
            </summary>
            <div className="px-5 pb-4 text-bold text-black">{t("faq3a")}</div>
          </details>

          {/* FAQ 4 */}
          <details className="group border border-gray-200 rounded-lg transition hover:shadow-md">
            <summary className="flex justify-between items-center px-5 py-4 cursor-pointer font-medium text-gray-800">
              <span>{t("faq4q")}</span>
              <span className="transition group-open:rotate-45">+</span>
            </summary>
            <div className="px-5 pb-4 text-bold text-black">{t("faq4a")}</div>
          </details>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t("section8Title")}</h2>
        <p className="mb-1">{t("supportText")}</p>
        <p>
          {t("emailLabel")}{" "}
          <a
            href="mailto:support@noorlingokids.com"
            className="text-blue-600 no-underline"
          >
            support@noorlingokids.com  
          </a>
        </p>
        <p>
          {t("phoneLabel")}{" "}
          <a href="tel:+971502389602" className="text-blue-600 no-underline" dir="ltr" >
            +971 50 238 9602
          </a>
        </p>
      </section>
    </div>
  );
};

export default PolicyPage;