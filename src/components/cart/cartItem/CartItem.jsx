import React from "react";
import Link from "next/link";
import { styles } from "./cartItem.style";
import { checkHasDiscount } from "@/utils/hasDiscount";
import ManageQuantity from "./ManageQuantity";
import Image from "next/image";

const colorType = { C: "سایان", M: "مجنتا", Y: "زرد", K: "مشکی" };

const CartItem = ({ data, count }) => {
  return (
    <div className={styles.box}>
      <div className={styles.start}>
        <Image
          src={data?.primaryImage ?? "/img/no-img.png"}
          width={120}
          height={120}
          sizes="100vh"
          quality={100}
          className={styles.image}
          alt={data?.title}
        />
        <div className={styles.info}>
          <Link href={`/products/${data?._id}`} className={styles.title}>
            {data?.name}
            {data?.partNumber && `-${data.partNumber}`}
          </Link>
          {data?.itemType === "AggregationItem" ? (
            <div className={styles.colors}>
              <p className={styles.color}>
                <span className={`${styles.colorShape} bg-C`}></span>
                <span>{colorType.C}</span>
              </p>
              <p className={styles.color}>
                <span className={`${styles.colorShape} bg-M`}></span>
                <span>{colorType.M}</span>
              </p>
              <p className={styles.color}>
                <span className={`${styles.colorShape} bg-Y`}></span>
                <span>{colorType.Y}</span>
              </p>
              <p className={styles.color}>
                <span className={`${styles.colorShape} bg-K`}></span>
                <span>{colorType.K}</span>
              </p>
            </div>
          ) : (
            <p className={styles.color}>
              <span className={`${styles.colorShape} bg-${data?.color}`}></span>
              <span>{colorType[data?.color]}</span>
            </p>
          )}
        </div>
      </div>
      {data?.itemType === "AggregationItem" ? (
        <div className={styles.end}>
          {checkHasDiscount(
            data?.totalOrderItem,
            data?.totalWithDiscountOrderItem
          ) && (
            <p className={styles.oldPrice}>
              {data?.totalOrderItem?.toLocaleString()} تومان
            </p>
          )}
          <p className={styles.newPrice}>
            {data?.totalWithDiscountOrderItem?.toLocaleString()} تومان
          </p>
          <div className={styles.aggregateQuantityContainer}>
            <div className={styles.quantityBox}>
              <p>{colorType.C}</p>
              <ManageQuantity
                count={data?.aggregateItemOrderedNumbers[0]}
                id={data?._id}
                item={0}
                multi
                color="border-C"
                aggregateItemOrderedNumbers={data?.aggregateItemOrderedNumbers}
              />
            </div>
            <div className={styles.quantityBox}>
              <p>{colorType.M}</p>
              <ManageQuantity
                count={data?.aggregateItemOrderedNumbers[1]}
                id={data?._id}
                item={1}
                multi
                color="border-M"
                aggregateItemOrderedNumbers={data?.aggregateItemOrderedNumbers}
              />
            </div>
            <div className={styles.quantityBox}>
              <p>{colorType.Y}</p>
              <ManageQuantity
                count={data?.aggregateItemOrderedNumbers[2]}
                id={data?._id}
                item={2}
                multi
                color="border-Y"
                aggregateItemOrderedNumbers={data?.aggregateItemOrderedNumbers}
              />
            </div>
            <div className={styles.quantityBox}>
              <p>{colorType.K}</p>
              <ManageQuantity
                count={data?.aggregateItemOrderedNumbers[3]}
                id={data?._id}
                item={3}
                multi
                color="border-K"
                aggregateItemOrderedNumbers={data?.aggregateItemOrderedNumbers}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.end}>
          {checkHasDiscount(
            data?.totalOrderItem,
            data?.totalWithDiscountOrderItem
          ) && (
            <p className={styles.oldPrice}>
              {data?.totalOrderItem?.toLocaleString()} تومان
            </p>
          )}
          <p className={styles.newPrice}>
            {data?.totalWithDiscountOrderItem?.toLocaleString()} تومان
          </p>
          <ManageQuantity count={count} id={data?._id} />
        </div>
      )}
    </div>
  );
};

export default CartItem;
