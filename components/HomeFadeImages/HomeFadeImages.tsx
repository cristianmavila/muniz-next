/* eslint-disable @next/next/no-img-element */
"use client";

// import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Swiper dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
// import { imageKitLoader } from "@/libs/imageKit";
import { useTablet } from "@/hooks/useTabletOrMobile";
import { useEffect, useState } from "react";

const HomeFadeImages = () => {
  const [mounted, setMounted] = useState(false);
  const itsMobile = useTablet();

  // Doing this to avoid hydration warnings.
  useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 bg-black duration-300 animate-fadeIn">
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
        {!itsMobile ? (
          <>
            <SwiperSlide className="!h-full">
              {/* <Image
                loader={imageKitLoader}
                src={"01-home.webp"}
                fill
                alt="Home image 01"
                sizes="100vw"
                quality={100}
                priority={true}
                className="object-cover"
              /> */}
              <img
                loading="lazy"
                src={"https://ik.imagekit.io/tnm6pfork/01-home.webp"}
                alt="Home image 01"
                className="object-cover h-screen w-full"
              />
            </SwiperSlide>
            <SwiperSlide className="!h-full">
              {/* <Image
                loader={imageKitLoader}
                src={"02-home.webp"}
                fill
                alt="Home image 01"
                sizes="100vw"
                quality={100}
                className="object-cover"
              /> */}
              <img
                loading="lazy"
                src={"https://ik.imagekit.io/tnm6pfork/02-home.webp"}
                alt="Home image 2"
                className="object-cover h-screen w-full"
              />
            </SwiperSlide>

            <SwiperSlide className="!h-full">
              {/* <Image
                loader={imageKitLoader}
                src={"03-home.webp"}
                fill
                alt="Home image 01"
                sizes="100vw"
                quality={100}
                className="object-cover"
              /> */}
              <img
                loading="lazy"
                src={"https://ik.imagekit.io/tnm6pfork/03-home.webp"}
                alt="Home image 03"
                className="object-cover h-screen w-full"
              />
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide className="!h-full">
              {/* <Image
                loader={imageKitLoader}
                src={"01-home-mobile.webp"}
                fill
                alt="Home image 01"
                sizes="100vw"
                quality={100}
                priority={true}
                className="object-cover"
              /> */}
              <img
                loading="lazy"
                src={"https://ik.imagekit.io/tnm6pfork/01-home-mobile.webp"}
                alt="Home image 01"
                className="object-cover h-screen w-full"
              />
            </SwiperSlide>
            <SwiperSlide className="!h-full">
              {/* <Image
                loader={imageKitLoader}
                src={"02-home-mobile.webp"}
                fill
                alt="Home image 01"
                sizes="100vw"
                quality={100}
                className="object-cover"
              /> */}
              <img
                loading="lazy"
                src={"https://ik.imagekit.io/tnm6pfork/02-home-mobile.webp"}
                alt="Home image 02"
                className="object-cover h-screen w-full"
              />
            </SwiperSlide>
            <SwiperSlide className="!h-full">
              {/* <Image
                loader={imageKitLoader}
                src={"03-home-mobile.webp"}
                fill
                alt="Home image 01"
                sizes="100vw"
                quality={100}
                className="object-cover"
              /> */}
              <img
                loading="lazy"
                src={"https://ik.imagekit.io/tnm6pfork/03-home-mobile.webp"}
                alt="Home image 03"
                className="object-cover h-screen w-full"
              />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default HomeFadeImages;
