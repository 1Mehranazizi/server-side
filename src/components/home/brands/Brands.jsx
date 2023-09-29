import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styles } from "./brands.style";
import ArrowDown from "@/icons/ArrowDown";

const Brands = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>برند های ما</h1>
        <small className={styles.subtitle}>Our Brands</small>
      </div>
      <div className={styles.brands}>
        <Link href="/" className={styles.brandItem}>
          <div className={styles.itemStart}>
            <Image
              src="/img/738415.png"
              width={60}
              height={60}
              alt="koniacal"
            />
            <h1 className={styles.brandName}>کونیکا مینولتای</h1>
          </div>
          <button className={styles.itenButton}>
            <span>محصولات</span>
            <ArrowDown className={styles.icon} />
          </button>
        </Link>
        <Link href="/" className={styles.brandItem}>
          <div className={styles.itemStart}>
            <Image
              src="/img/738415.png"
              width={60}
              height={60}
              alt="koniacal"
            />
            <h1 className={styles.brandName}>کونیکا مینولتای</h1>
          </div>
          <button className={styles.itenButton}>
            <span>محصولات</span>
            <ArrowDown className={styles.icon} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Brands;
