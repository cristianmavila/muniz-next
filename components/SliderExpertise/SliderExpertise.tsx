/* eslint-disable @next/next/no-img-element */
"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Swiper dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

const SliderExpertise = () => {
  return (
    <div className="duration-300 animate-fadeIn">
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
      >
        <SwiperSlide>
          <img
            width={2500}
            height={1875}
            src="https://res.cloudinary.com/df2y7qdjr/image/upload/v1727215823/AA.Expertise_yd4b9u.jpg"
            alt="Expertise image 01"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={2500}
            height={1875}
            src="https://res.cloudinary.com/df2y7qdjr/image/upload/v1727215823/BB.Expertise_l0rvmb.jpg"
            alt="Expertise image 02"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={2500}
            height={1875}
            src="https://res.cloudinary.com/df2y7qdjr/image/upload/v1727215823/CC.Expertise_xaf5ps.jpg"
            alt="Expertise image 03"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
      <img
        width={2500}
        height={1877}
        alt="Expertise title image"
        loading="lazy"
        className="w-full mt-14 relative indent-[100%] whitespace-nowrap overflow-hidden lg:px-36 mx-auto hover:scale-[112%] duration-500 ease-in-out"
        src="https://res.cloudinary.com/df2y7qdjr/image/upload/v1727266473/Title-EXPERTISE_roffx2.png"
      />
    </div>
  );
};

export default SliderExpertise;
