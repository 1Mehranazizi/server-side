import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styles } from "./emptyCart.styles";

const EmptyCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Image src="/img/empty.png" width={200} height={200} alt="empty-cart" />
        <h2 className={styles.title}>سبد خرید شما خالی است</h2>
        <Link href="/products" className={styles.button}>
          مشاهده محصولات
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
