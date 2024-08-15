"use client";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Swiper dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { imageKitLoader } from "@/libs/imageKit";
import { useTabletOrMobile } from "@/hooks/useTabletOrMobile";

const HomeFadeImages = () => {
  const itsMobile = useTabletOrMobile();
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
      <Swiper
        speed={100}
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        centeredSlides={true}
        direction="horizontal"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        <SwiperSlide className="!h-full">
          <Image
            loader={imageKitLoader}
            src={!itsMobile ? "01-home.webp" : "01-home-mobile.webp"}
            fill
            alt="Home image 01"
            sizes="100vw"
            quality={100}
            priority={true}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-full">
          <Image
            loader={imageKitLoader}
            src={!itsMobile ? "02-home.webp" : "02-home-mobile.webp"}
            fill
            alt="Home image 01"
            sizes="100vw"
            quality={100}
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-full">
          <Image
            loader={imageKitLoader}
            src={!itsMobile ? "03-home.webp" : "03-home-mobile.webp"}
            fill
            alt="Home image 01"
            sizes="100vw"
            quality={100}
            className="object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeFadeImages;
