"use client";
import React, { useState } from "react";
import { styles } from "./pDropdown.style";
import ArrowDown from "@/icons/ArrowDown";
import Link from "next/link";
import TunerIcon from "@/icons/TunerIcon";
import SettingIcon from "@/icons/SettingIcon";
import UnitIcon from "@/icons/UnitIcon";
import PartsIcon from "@/icons/PartsIcon";

const ProductsDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={styles.dropDownContainer}
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <Link href="/products" className={styles.dropDownButton}>
        <span>محصولات</span>
        <ArrowDown className="w-[20px] h-[20px]" />
      </Link>
      <div
        className={`${styles.dropDownBox} ${
          open ? styles.dropDownBoxOpen : styles.dropDownBoxClose
        }`}
      >
        <h2 className={styles.title}>چاپ دیجیتال</h2>
        <div className={styles.linksContainer}>
          <Link href="/products?subCategory=toner" className={styles.linkItem}>
            <span className={styles.iconBox}>
              <TunerIcon className="w-[30px] h-[30px]" />
            </span>
            <span>تونر</span>
          </Link>
          <Link
            href="/products?subCategory=developer"
            className={styles.linkItem}
          >
            <span className={styles.iconBox}>
              <SettingIcon className="w-[30px] h-[30px]" />
            </span>
            <span>دولوپر</span>
          </Link>
          <Link href="/products?subCategory=unit" className={styles.linkItem}>
            <span className={styles.iconBox}>
              <UnitIcon className="w-[30px] h-[30px]" />
            </span>
            <span>درام یونیت</span>
          </Link>
          <Link href="/products?subCategory=sparePart" className={styles.linkItem}>
            <span className={styles.iconBox}>
              <PartsIcon className="w-[30px] h-[30px]" />
            </span>
            <span>قطعات</span>
          </Link>
        </div>
        <div className={styles.allProducts}>
          <Link href="/products" className={styles.allButton}>
            مشاهده همه
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;
