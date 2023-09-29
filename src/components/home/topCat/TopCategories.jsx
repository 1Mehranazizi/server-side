import React from "react";
import Link from "next/link";
import TunerIcon from "@/icons/TunerIcon";
import SettingIcon from "@/icons/SettingIcon";
import UnitIcon from "@/icons/UnitIcon";
import PartsIcon from "@/icons/PartsIcon";
import { styles } from "./topCat.styles";

const TopCategories = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>دسته بندی های مواد مصرفی</h1>
        <small className={styles.subtitle}>Categories</small>
      </div>
      <div className={styles.catItems}>
        <Link href="/products?subCategory=toner" className={styles.catItem}>
          <span className={styles.boxIcon}>
            <TunerIcon className={styles.icon} />
          </span>
          <span>تونر</span>
        </Link>
        <Link href="/products?subCategory=developer" className={styles.catItem}>
          <span className={styles.boxIcon}>
            <SettingIcon className={styles.icon} />
          </span>
          <span>دولوپر</span>
        </Link>
        <Link href="/products?subCategory=unit" className={styles.catItem}>
          <span className={styles.boxIcon}>
            <UnitIcon className={styles.icon} />
          </span>
          <span>درام یونیت</span>
        </Link>
        <Link href="/products?subCategory=sparePart" className={styles.catItem}>
          <span className={styles.boxIcon}>
            <PartsIcon className={styles.icon} />
          </span>
          <span>قطعات</span>
        </Link>
      </div>
    </section>
  );
};

export default TopCategories;
