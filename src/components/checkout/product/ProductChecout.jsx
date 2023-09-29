import React from "react";
import Link from "next/link";
import { checkHasDiscount } from "@/utils/hasDiscount";
import { styles } from "./productCheckout.styles";
import Image from "next/image";

const ProductChecout = ({ product }) => {
  return (
    <Link href={`/products/${product._id}`} className={styles.card}>
      <div className={styles.start}>
        <Image
          src={product.primaryImage ?? "/img/no-img.png"}
          className={styles.image}
          alt={product.name}
          sizes="100vh"
          quality={100}
          width={120}
          height={120}
        />
        <div className={styles.info}>
          <h1 className={styles.name}>
            {product.name}
            {product?.partNumber && `-${product.partNumber}`}
          </h1>
          {product.itemType === "SingleItem" ? (
            <div className={styles.colors}>
              <span className={`${styles.color} bg-${product.color}`}></span>
              <p className={styles.quantity}>
                {product.singleItemOrderedNumber} عدد
              </p>
            </div>
          ) : (
            <div className={styles.colors}>
              <div className={styles.colors}>
                <span className={`${styles.color} bg-C`}></span>
                <p className={styles.quantity}>
                  {product.aggregateItemOrderedNumbers[0]} عدد
                </p>
              </div>
              <div className={styles.colors}>
                <span className={`${styles.color} bg-M`}></span>
                <p className={styles.quantity}>
                  {product.aggregateItemOrderedNumbers[1]} عدد
                </p>
              </div>
              <div className={styles.colors}>
                <span className={`${styles.color} bg-Y`}></span>
                <p className={styles.quantity}>
                  {product.aggregateItemOrderedNumbers[2]} عدد
                </p>
              </div>
              <div className={styles.colors}>
                <span className={`${styles.color} bg-K`}></span>
                <p className={styles.quantity}>
                  {product.aggregateItemOrderedNumbers[3]} عدد
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.end}>
        {checkHasDiscount(
          product.totalOrderItem,
          product.totalWithDiscountOrderItem
        ) && (
          <p className={styles.oldPrice}>
            {product.totalOrderItem?.toLocaleString()} تومان
          </p>
        )}
        <p className={styles.newPrice}>
          {product.totalWithDiscountOrderItem?.toLocaleString()} تومان
        </p>
      </div>
    </Link>
  );
};

export default ProductChecout;
