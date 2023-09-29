"use client";

import React, { useState } from "react";
import { styles } from "./checkout.styles";
import axiosInstance from "@/services/axiosInstance";
import { toastNoti } from "@/utils/toasNoti";
import { useRouter } from "next/navigation";

const CheckoutCard = ({
  totalSellingPricesWithDiscount,
  totalSellingPrices,
  action,
  addressForDeliveryId,
  addressForFactorId,
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const sumDiscount = () => {
    const result = (
      totalSellingPrices - totalSellingPricesWithDiscount
    )?.toLocaleString();
    return result;
  };
  const handleSubmit = () => {
    if (addressForDeliveryId && addressForFactorId) {
      setLoading(true);
      axiosInstance
        .put("/shop/myShoppingCart/submit", {
          addressForDeliveryId,
          addressForFactorId,
        })
        .then(() => {
          toastNoti("success", "اطلاعات با موفقیت ثبت شد");
          router.push("/profile/orders");
        })
        .catch((err) => {
          toastNoti("error", err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toastNoti("error", "لطفا آدرس های ارسال و فاکتور را انتخاب کنید");
    }
  };
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>اطلاعات پرداخت</h2>
      <div className={styles.totalPriceRow}>
        <p className={styles.title}>مبلغ کالاها</p>
        <p className={styles.totalPrice}>
          {totalSellingPrices?.toLocaleString()} تومان
        </p>
      </div>
      <div className={styles.discountRow}>
        <p className={styles.title}>تخفیف</p>
        <p className={styles.discont}>{sumDiscount()} تومان</p>
      </div>
      <div className={styles.finalPriceRow}>
        <p className={styles.finalPriceTitle}>مبلغ نهایی</p>
        <p className={styles.finalPrice}>
          {totalSellingPricesWithDiscount?.toLocaleString()} تومان
        </p>
      </div>
      <div className={styles.acions}>
        <button
          className={styles.button}
          disabled={loading}
          onClick={handleSubmit}
        >
          ثبت سفارش
        </button>
        {action}
      </div>
    </div>
  );
};

export default CheckoutCard;
