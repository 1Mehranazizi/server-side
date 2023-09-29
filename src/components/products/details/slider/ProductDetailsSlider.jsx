"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import AllMedia from "./AllMedia";
import { styles } from "./slider.styles";
const ProductDetailsSlider = ({ gallery }) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        style={{ width: "100%" }}
      >
        {gallery?.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <Image
                src={item.src}
                width={0}
                height={0}
                sizes="100vh"
                className={styles.activeImage}
                quality={100}
                alt="product"
              />
            ) : (
              <video
                src={item.src}
                className={styles.activeVideo}
                controls
              ></video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <AllMedia gallery={gallery} />
    </div>
  );
};

export default ProductDetailsSlider;
