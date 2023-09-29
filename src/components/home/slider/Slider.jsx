"use client";

import React from "react";
import Image from "next/image";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { styles } from "./slider.style";
import Link from "next/link";

const Slider = ({ data }) => {
  return (
    <section className={styles.container}>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={true}
        className="banner-slider"
      >
        {data?.map((slider) => (
          <SwiperSlide key={slider._id}>
            <Link href={slider.link}>
              {slider.type === "image" ? (
                <Image
                  src={slider.location}
                  className={styles.image}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt={slider.alternativeText}
                />
              ) : (
                <video
                  src={slider.location}
                  className={styles.video}
                  alt={slider.alternativeText}
                  autoPlay
                  loop
                  muted
                ></video>
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
