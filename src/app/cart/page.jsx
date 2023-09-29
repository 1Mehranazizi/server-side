"use client";

import CartItem from "@/components/cart/cartItem/CartItem";
import CartPeyment from "@/components/cart/cartPeyment/CartPeyment";
import React, { useContext, useEffect } from "react";
import { styles } from "./cart.page.style";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { checkLoggedin } from "@/utils/checkLoggeding";
import EmptyCart from "@/components/cart/emptyCart/EmptyCart";
import CartPageLoading from "./loading";

const CartPage = () => {
  const router = useRouter();
  const cart = useContext(CartContext);
  useEffect(() => {
    if (!checkLoggedin()) {
      router.push("/auth/login?backTo=cart");
    }
  }, [router]);

  if (cart?.loading) {
    return <CartPageLoading />;
  }

  if (!cart?.cart?.orderItems?.length > 0) {
    return <EmptyCart />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>سبد خرید</h1>
      <main className={styles.main}>
        <div className={styles.carts}>
          {cart?.cart?.orderItems?.map((item) => (
            <CartItem
              key={item._id}
              data={item}
              count={item.singleItemOrderedNumber}
            />
          ))}
        </div>
        <CartPeyment data={cart?.cart} />
      </main>
    </div>
  );
};

export default CartPage;
