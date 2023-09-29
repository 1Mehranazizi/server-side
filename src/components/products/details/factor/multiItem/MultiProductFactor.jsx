import React from "react";
import { styles } from "./productFactor.style";
import AddToCart from "./AddToCart";
import { totalArrayNumber } from "@/utils/totalArrayNumber";

const MultiProductFactor = ({
  numberOfItemsAvailable,
  maximumNumbersToOrder,
  sellingPricesWithDiscount,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={styles.title}>وضعیت</p>
        <p
          className={`${
            totalArrayNumber(numberOfItemsAvailable) > 0
              ? styles.status
              : styles.unavailableStatus
          }`}
        >
          {totalArrayNumber(numberOfItemsAvailable) > 0 ? "موجود" : "ناموجود"}
        </p>
      </div>
      <span className={styles.border}></span>
      <AddToCart
        numberOfItemsAvailable={numberOfItemsAvailable}
        maximumNumbersToOrder={maximumNumbersToOrder}
        sellingPricesWithDiscount={sellingPricesWithDiscount}
      />
    </div>
  );
};

export default MultiProductFactor;
