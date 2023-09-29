import React from "react";
import { styles } from "./cartPement.style";
import Link from "next/link";

const CartPeyment = ({ data }) => {
  const sumDiscount = () => {
    const result = (
      data?.totalSellingPrices - data?.totalSellingPricesWithDiscount
    )?.toLocaleString();
    return result;
  };
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>اطلاعات پرداخت</h2>
      <div className={styles.totalPriceRow}>
        <p className={styles.title}>مبلغ کالاها</p>
        <p className={styles.totalPrice}>
          {data?.totalSellingPrices?.toLocaleString()} تومان
        </p>
      </div>
      <div className={styles.discountRow}>
        <p className={styles.title}>تخفیف</p>
        <p className={styles.discont}>{sumDiscount(data)} تومان</p>
      </div>
      <div className={styles.finalPriceRow}>
        <p className={styles.finalPriceTitle}>مبلغ نهایی</p>
        <p className={styles.finalPrice}>
          {data?.totalSellingPricesWithDiscount?.toLocaleString()} تومان
        </p>
      </div>
      <Link href="/checkout" className={styles.button}>
        ادامه فرآیند خرید
      </Link>
    </div>
  );
};

export default CartPeyment;
