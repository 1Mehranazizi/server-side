"use client";

import React from "react";
import ArrowDown from "@/icons/ArrowDown";
import BlogCard from "@/components/shared/blogCard/BlogCard";
import { styles } from "./blogs.styles";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Blogs = ({ blogs }) => {
  if (blogs?.length === 0) return <></>;

  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.header}>
          <div className={styles.headerTexts}>
            <h1 className={styles.title}>مطالب اخیر</h1>
            <p className={styles.subtitle}>Latest Blogs</p>
          </div>
          <a
            href={`${process.env.LANDING_URL}/articles`}
            className={styles.link}
          >
            <span>مشاهده همه</span>
            <ArrowDown className={styles.icon} />
          </a>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {blogs?.map((blog) => (
            <SwiperSlide key={blog._id}>
              <BlogCard data={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;
