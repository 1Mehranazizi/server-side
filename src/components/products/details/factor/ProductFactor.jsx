import React from "react";
import { styles } from "./productFactor.style";
import AddToCart from "./AddToCart";
import { checkHasDiscount } from "@/utils/hasDiscount";

const ProductFactor = ({
  sellingPrice,
  sellingPriceWithDiscount,
  numberOfItemsAvailable,
  maximumNumberToOrder,
  quantity,
  setQuantity,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={styles.title}>وضعیت</p>
        <p
          className={`${
            numberOfItemsAvailable > 0
              ? styles.status
              : styles.unavailableStatus
          }`}
        >
          {numberOfItemsAvailable > 0 ? "موجود" : "ناموجود"}
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles.title}>قیمت</p>
        <p
          className={
            checkHasDiscount(sellingPrice, sellingPriceWithDiscount)
              ? styles.oldPrice
              : styles.price
          }
        >
          {sellingPrice?.toLocaleString()}
          تومان
        </p>
      </div>
      {checkHasDiscount(sellingPrice, sellingPriceWithDiscount) && (
        <div className={styles.row}>
          <p className={styles.newPriceTitle}>قیمت با تخفیف</p>
          <p className={styles.newPrice}>
            {sellingPriceWithDiscount?.toLocaleString()}
            تومان
          </p>
        </div>
      )}
      <div className={styles.row}>
        <p className={styles.finalPriceTitle}>قیمت نهایی</p>
        <p className={styles.finalPrice}>
          {(sellingPriceWithDiscount * quantity)?.toLocaleString()}
          تومان
        </p>
      </div>
      <span className={styles.border}></span>
      <AddToCart
        quantity={quantity}
        setQuantity={setQuantity}
        numberOfItemsAvailable={numberOfItemsAvailable}
        maximumNumberToOrder={maximumNumberToOrder}
      />
    </div>
  );
};

export default ProductFactor;
