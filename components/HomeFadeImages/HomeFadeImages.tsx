"use client";

import Image from "next/image";
import { useState } from "react";
import Image01 from "./Fundo-01-Horizontal-R98.png";
import Image02 from "./Fundo-02-Horizontal-R100.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Swiper dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

const HomeFadeImages = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
      <Swiper
        speed={500}
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        centeredSlides={true}
        direction="horizontal"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full !duration-1000"
      >
        <SwiperSlide className="!h-full">
          <Image
            src={Image01}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="Home image 01"
            sizes="100vw"
            quality={100}
            priority={true}
            className="object-cover"
            placeholder="blur"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-full">
          <Image
            src={Image02}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="Home image 01"
            sizes="100vw"
            quality={100}
            priority={true}
            className="object-cover"
            placeholder="blur"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeFadeImages;
