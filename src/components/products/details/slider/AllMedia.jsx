"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/components/shared/modal/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { styles } from "./slider.styles";

const AllMedia = ({ gallery }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.allMediaImageButtons}>
        {gallery
          ?.slice(0, 3)
          ?.map((item, index) =>
            item.type === "image" ? (
              <Image
                className={styles.allMediaImageButton}
                key={index}
                width={0}
                height={0}
                sizes="100vh"
                onClick={() => setOpen(true)}
                src={item.src}
                alt="product"
                quality={100}
              />
            ) : (
              <video
                className={styles.allMediaImageButton}
                key={index}
                onClick={() => setOpen(true)}
                src={item.src}
                alt="video"
              ></video>
            )
          )}
        {gallery?.length > 3 && (
          <span className={styles.moreButton} onClick={() => setOpen(true)}>
            <span>بیشتر</span>
          </span>
        )}
      </div>
      <Modal open={open} setOpen={setOpen}>
        <h1 className={styles.headerModal}>تصاویر و ویدیو های محصول</h1>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          style={{
            width: "100%",
          }}
          className="product-gallery-swiper"
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `
              <span class=" ${className} " style={top:30px;}>
              ${
                gallery[index]?.type === "image"
                  ? `<img draggable="false" class="product-image" src=${gallery[index]?.src} />`
                  : `<video draggable="false" class="product-image" src=${gallery[index]?.src}></video>`
              }
              </span>
              `;
            },
          }}
        >
          {gallery?.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === "image" ? (
                <Image
                  className={styles.allMediaImage}
                  width={0}
                  height={0}
                  sizes="100vh"
                  src={item.src}
                  alt="product"
                  quality={100}
                />
              ) : (
                <video
                  className={styles.allMediaImage}
                  src={item.src}
                  alt="product"
                  controls
                ></video>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </>
  );
};

export default AllMedia;
