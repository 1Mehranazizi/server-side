"use client";

import React, { useContext, useEffect, useState } from "react";
import { styles } from "./productFactor.style";
import { handleQuantity } from "@/utils/handleQuantityItem";
import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import BasketIcon from "@/icons/BasketIcon";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";
import { useParams, useRouter } from "next/navigation";
import { checkedItemAddedToCart } from "@/utils/chechItemAddedToCart";
import axiosInstance from "@/services/axiosInstance";
import { toastNoti } from "@/utils/toasNoti";
import { checkLoggedin } from "@/utils/checkLoggeding";

const AddToCart = ({
  setQuantity,
  quantity,
  maximumNumberToOrder,
  numberOfItemsAvailable,
}) => {
  const { id } = useParams();
  const cart = useContext(CartContext);
  const { refresh, setRefresh } = cart;
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowCart(checkedItemAddedToCart(id, cart?.cart));
  }, [cart?.cart, id]);

  const handleSingleItemAddToCart = async () => {
    if (checkLoggedin()) {
      setLoading(true);
      axiosInstance
        .put("/shop/myShoppingCart", {
          itemType: "SingleItem",
          singleItemId: id,
          singleItemOrderedNumber: quantity,
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

  return (
    <div className={styles.cartActions}>
      {showCart ? (
        <Link
          href="/cart"
          className="flex w-full items-center justify-center gap-2 fill-primaryColor text-primaryColor"
        >
          <span>مشاهده سبد خرید</span>
          <BasketIcon className="w-[20px] h-[20px]" />
        </Link>
      ) : (
        <>
          <button
            className={styles.button}
            disabled={numberOfItemsAvailable == 0 || cart.loading || loading}
            onClick={handleSingleItemAddToCart}
          >
            افزودن به سبدخرید
          </button>

          <div className={styles.manageQuantity}>
            <span
              onClick={() =>
                handleQuantity(
                  "increase",
                  maximumNumberToOrder,
                  numberOfItemsAvailable,
                  setQuantity,
                  quantity
                )
              }
            >
              <PlusIcon className={styles.add} />
            </span>
            <span>{quantity}</span>
            <span
              onClick={() =>
                handleQuantity(
                  "decrease",
                  maximumNumberToOrder,
                  numberOfItemsAvailable,
                  setQuantity,
                  quantity
                )
              }
            >
              <MinusIcon className={styles.remove} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
