"use client";

import React from "react";
import Link from "next/link";
import ArrowDown from "@/icons/ArrowDown";
import ProductCard from "@/components/shared/productCard/ProductCard";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { styles } from "./spcialOffers.style";

const SpecialOfferce = ({ data }) => {
  if (data?.length < 5) {
    return <></>;
  }
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.header}>
          <div className={styles.headerTexts}>
            <h1 className={styles.title}>
              پیشنهادات <span className={styles.boldTitle}>ویژه</span>
            </h1>
            <p className={styles.subtitle}>Special Offers</p>
          </div>
          <Link href="/" className={styles.link}>
            <span>مشاهده همه</span>
            <ArrowDown className={styles.icon} />
          </Link>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={true}
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            900: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
          }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item._id} style={{ height: "100%" }}>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SpecialOfferce;
