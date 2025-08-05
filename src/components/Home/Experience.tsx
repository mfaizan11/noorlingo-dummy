"use client";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("../Home/Carousel"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="container mx-auto my-[18vh] overflow-hidden">
      <Carousel />
    </div>
  );
}
