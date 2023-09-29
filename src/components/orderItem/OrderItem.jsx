import React from "react";
import Link from "next/link";
import { styles } from "./orderItes.style";

const category = {
  toner: "تونر",
  sparePart: "قطعات",
  developer: "دولوپر",
  unit: "درام یونیت",
};

const OrderItem = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.start}>
        <Link
          href={`/products/${
            data?.singleItemP?._id ?? data?.aggregateItemP?._id
          }`}
          className={styles.name}
        >
          {data.name} {data?.partNumber && `-${data.partNumber}`}
        </Link>
        <div className={styles.catRow}>
          <Link
            href={`/products/subCategory=${data.subCategory}`}
            className={styles.category}
          >
            {category[data.subCategory]}
          </Link>
          {data.itemType !== "AggregationItem" && (
            <span className={`${styles.color} bg-${data.color}`}></span>
          )}
        </div>
      </div>
      <div className={styles.end}>
        <p className={styles.price}>
          {data.totalWithDiscountOrderItem?.toLocaleString() ?? "-"} تومان
        </p>
        {data.itemType === "AggregationItem" ? (
          <div className={styles.aggregateQuantityContainer}>
            <div className={styles.aggregateQuantity}>
              <span className={`${styles.color} bg-C`}></span>
              <p className={styles.quantity}>
                {data.aggregateItemOrderedNumbers[0]} عدد
              </p>
            </div>
            <div className={styles.aggregateQuantity}>
              <span className={`${styles.color} bg-M`}></span>
              <p className={styles.quantity}>
                {data.aggregateItemOrderedNumbers[1]} عدد
              </p>
            </div>
            <div className={styles.aggregateQuantity}>
              <span className={`${styles.color} bg-Y`}></span>
              <p className={styles.quantity}>
                {data.aggregateItemOrderedNumbers[2]} عدد
              </p>
            </div>
            <div className={styles.aggregateQuantity}>
              <span className={`${styles.color} bg-K`}></span>
              <p className={styles.quantity}>
                {data.aggregateItemOrderedNumbers[3]} عدد
              </p>
            </div>
          </div>
        ) : (
          <p className={styles.quantity}>{data.singleItemOrderedNumber} عدد</p>
        )}
      </div>
    </div>
  );
};

export default OrderItem;
