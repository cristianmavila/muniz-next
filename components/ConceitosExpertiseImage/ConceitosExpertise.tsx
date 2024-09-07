/* eslint-disable @next/next/no-img-element */
"use client";

// import Image from "next/image";
// import { imageKitLoader } from "@/libs/imageKit";

import React from "react";

const ConceitosExpertise = () => {
  return (
    // <Image
    //   loader={imageKitLoader}
    //   width={1250}
    //   height={500}
    //   src="CC-Conceitos-Expertise.png"
    //   alt="Conceitos Expertise"
    //   sizes="100vw"
    //   quality={100}
    //   priority={true}
    // />
    <img
      width={1250}
      height={500}
      src="https://ik.imagekit.io/tnm6pfork/CC-Conceitos-Expertise.png"
      alt="Conceitos Expertise"
      loading="lazy"
    />
  );
};

export default ConceitosExpertise;
