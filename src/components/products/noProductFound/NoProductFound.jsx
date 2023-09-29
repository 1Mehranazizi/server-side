import React from "react";
import NoDataVector from "@/icons/NoDataVector";
import Link from "next/link";
import { styles } from "./noproductfont.style";

const NoProductFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <NoDataVector />
        <h1 className={styles.title}>در این دسته بندی کالایی وجود ندارد</h1>
        <Link href="/products" className={styles.button}>
          پاک کردن فیلترها
        </Link>
      </div>
    </div>
  );
};

export default NoProductFound;
