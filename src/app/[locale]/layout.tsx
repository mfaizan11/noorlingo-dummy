import './globals.css';
// import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Baloo_2, Baloo_Bhaijaan_2 } from 'next/font/google';
import AosInitializer from '@/components/Animations/AosInitializer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: '--font-baloo'
});

const balooBhaijaan = Baloo_Bhaijaan_2({
  subsets: ['arabic'],
  weight: ["400", "700", "800"],
  variable: '--font-baloo-ar'
});

export const metadata = {
  title: 'NoorLingo – Learn English the Fun Way',
  description: 'An interactive English learning platform for kids in the UAE.'
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout(props: Props) {
  const { children } = props;
  const params = await props.params; // ✅ Await `params` safely

  const messages = await getMessages({ locale: params.locale });
  const fontClass = params.locale === 'ar' ? balooBhaijaan.variable : baloo.variable;
  const direction = params.locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={params.locale} dir={direction} suppressHydrationWarning>
      <head />
      <body className={`${fontClass} bg-white text-gray-900 min-h-screen flex flex-col`}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Navbar />
          <AosInitializer />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
