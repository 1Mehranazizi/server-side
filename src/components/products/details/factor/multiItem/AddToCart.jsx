"use client";

import React, { useContext, useEffect, useState } from "react";
import { styles } from "./productFactor.style";
import { toastNoti } from "@/utils/toasNoti";
import { handleQuantity } from "@/utils/handleQuantityItem";
import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import { totalArrayNumber } from "@/utils/totalArrayNumber";
import axiosInstance from "@/services/axiosInstance";
import { useParams, useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { checkLoggedin } from "@/utils/checkLoggeding";
import { checkedItemAddedToCart } from "@/utils/chechItemAddedToCart";
import BasketIcon from "@/icons/BasketIcon";

const MultiAddToCart = ({
  maximumNumbersToOrder,
  numberOfItemsAvailable,
  sellingPricesWithDiscount,
}) => {
  const [countC, setCountC] = useState(0);
  const [countM, setCountM] = useState(0);
  const [countY, setCountY] = useState(0);
  const [countK, setCountK] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { id } = useParams();
  const cart = useContext(CartContext);
  const { refresh, setRefresh } = cart;
  const router = useRouter();

  useEffect(() => {
    setShowCart(checkedItemAddedToCart(id, cart?.cart));
  }, [cart?.cart, id]);

  const finalPrice = () => {
    const final =
      countC * sellingPricesWithDiscount[0] +
      countM * sellingPricesWithDiscount[1] +
      countY * sellingPricesWithDiscount[2] +
      countK * sellingPricesWithDiscount[3];
    return final?.toLocaleString();
  };

  const handleMultiItemAddToCart = async () => {
    if (checkLoggedin()) {
      setLoading(true);
      axiosInstance
        .put("/shop/myShoppingCart", {
          itemType: "AggregationItem",
          aggregateItemId: id,
          aggregateItemOrderedNumbers: [countC, countM, countY, countK],
        })
        .then((res) => {
          toastNoti("success", "محصول به سبد خرید اضافه شد");
          setShowCart(true);
          setRefresh(!refresh);
        })
        .catch((err) => {
          toastNoti("error", err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      router.push(`/auth/login?backTo=products/${id}`);
    }
  };

  if (showCart) {
    return (
      <Link
        href="/cart"
        className="flex w-full items-center justify-center gap-2 fill-primaryColor text-primaryColor"
      >
        <span>مشاهده سبد خرید</span>
        <BasketIcon className="w-[20px] h-[20px]" />
      </Link>
    );
  }

  return (
    <div className={styles.cartActions}>
      <div className={styles.quantityRow}>
        <div className={styles.colorStart}>
          <span className={`${styles.colorBox} bg-C`}></span>
          <p className={styles.priceColor}>
            {(sellingPricesWithDiscount[0] * countC)?.toLocaleString()} تومان
          </p>
        </div>
        <div className={styles.manageQuantity}>
          <span
            onClick={() =>
              handleQuantity(
                "increase",
                maximumNumbersToOrder[0],
                numberOfItemsAvailable[0],
                setCountC,
                countC
              )
            }
          >
            <PlusIcon className={styles.add} />
          </span>
          <span>{countC}</span>
          <span
            onClick={() =>
              handleQuantity(
                "decrease",
                maximumNumbersToOrder[0],
                numberOfItemsAvailable[0],
                setCountC,
                countC
              )
            }
          >
            <MinusIcon className={styles.remove} />
          </span>
        </div>
      </div>
      <div className={styles.quantityRow}>
        <div className={styles.colorStart}>
          <span className={`${styles.colorBox} bg-M`}></span>
          <p className={styles.priceColor}>
            {(sellingPricesWithDiscount[1] * countM)?.toLocaleString()} تومان
          </p>
        </div>
        <div className={styles.manageQuantity}>
          <span
            onClick={() =>
              handleQuantity(
                "increase",
                maximumNumbersToOrder[1],
                numberOfItemsAvailable[1],
                setCountM,
                countM
              )
            }
          >
            <PlusIcon className={styles.add} />
          </span>
          <span>{countM}</span>
          <span
            onClick={() =>
              handleQuantity(
                "decrease",
                maximumNumbersToOrder[1],
                numberOfItemsAvailable[1],
                setCountM,
                countM
              )
            }
          >
            <MinusIcon className={styles.remove} />
          </span>
        </div>
      </div>
      <div className={styles.quantityRow}>
        <div className={styles.colorStart}>
          <span className={`${styles.colorBox} bg-Y`}></span>
          <p className={styles.priceColor}>
            {(sellingPricesWithDiscount[2] * countY)?.toLocaleString()} تومان
          </p>
        </div>
        <div className={styles.manageQuantity}>
          <span
            onClick={() =>
              handleQuantity(
                "increase",
                maximumNumbersToOrder[2],
                numberOfItemsAvailable[2],
                setCountY,
                countY
              )
            }
          >
            <PlusIcon className={styles.add} />
          </span>
          <span>{countY}</span>
          <span
            onClick={() =>
              handleQuantity(
                "decrease",
                maximumNumbersToOrder[2],
                numberOfItemsAvailable[2],
                setCountY,
                countY
              )
            }
          >
            <MinusIcon className={styles.remove} />
          </span>
        </div>
      </div>
      <div className={styles.quantityRow}>
        <div className={styles.colorStart}>
          <span className={`${styles.colorBox} bg-K`}></span>
          <p className={styles.priceColor}>
            {(sellingPricesWithDiscount[3] * countK)?.toLocaleString()} تومان
          </p>
        </div>
        <div className={styles.manageQuantity}>
          <span
            onClick={() =>
              handleQuantity(
                "increase",
                maximumNumbersToOrder[3],
                numberOfItemsAvailable[3],
                setCountK,
                countK
              )
            }
          >
            <PlusIcon className={styles.add} />
          </span>
          <span>{countK}</span>
          <span
            onClick={() =>
              handleQuantity(
                "decrease",
                maximumNumbersToOrder[3],
                numberOfItemsAvailable[3],
                setCountK,
                countK
              )
            }
          >
            <MinusIcon className={styles.remove} />
          </span>
        </div>
      </div>
      <div className={styles.row}>
        <p className={styles.finalPriceTitle}>قیمت نهایی</p>
        <p className={styles.finalPrice}>{finalPrice()} تومان</p>
      </div>
      <button
        className={styles.button}
        onClick={handleMultiItemAddToCart}
        disabled={!totalArrayNumber(numberOfItemsAvailable) || loading}
      >
        افزودن به سبدخرید
      </button>
    </div>
  );
};

export default MultiAddToCart;
