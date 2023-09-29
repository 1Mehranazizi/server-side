import React from "react";
import Link from "next/link";
import { styles } from "./productCard.style";
import ArrowDown from "@/icons/ArrowDown";
import { checkHasDiscount } from "@/utils/hasDiscount";
import { totalArrayNumber } from "@/utils/totalArrayNumber";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product._id}`}>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <div className={styles.colors}>
            {product?.colors ? (
              <>
                <span className={`${styles.color} bg-C`}></span>
                <span className={`${styles.color} bg-M`}></span>
                <span className={`${styles.color} bg-Y`}></span>
                <span className={`${styles.color} bg-K`}></span>
              </>
            ) : (
              <span className={`${styles.color} bg-${product.color}`}></span>
            )}
          </div>
          <Image
            src={product.primaryImage}
            alt={product.name}
            className={styles.image}
            width={366}
            height={244}
            quality={100}
          />
        </div>
        <div className={styles.body}>
          <h1 className={styles.title}>
            {product.name}
            {product?.partNumber && `-${product.partNumber}`}
          </h1>
          <p className={styles.brand}>{product.brand}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.prices}>
            {product.aggregation ? (
              <>
                {checkHasDiscount(
                  totalArrayNumber(product.sellingPrices),
                  totalArrayNumber(product.sellingPricesWithDiscount)
                ) && (
                  <span className={styles.Oldprice}>
                    {totalArrayNumber(product.sellingPrices)?.toLocaleString()}{" "}
                    تومان
                  </span>
                )}
                <span className={styles.price}>
                  {totalArrayNumber(
                    product.sellingPricesWithDiscount
                  )?.toLocaleString()}
                  تومان
                </span>
              </>
            ) : (
              <>
                {checkHasDiscount(
                  product.sellingPrice,
                  product.sellingPriceWithDiscount
                ) && (
                  <span className={styles.Oldprice}>
                    {product.sellingPrice.toLocaleString()} تومان
                  </span>
                )}
                <span className={styles.price}>
                  {product.sellingPriceWithDiscount.toLocaleString()} تومان
                </span>
              </>
            )}
          </div>
          <button className={styles.button}>
            <ArrowDown className={styles.iconButton} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
