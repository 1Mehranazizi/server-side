import React from "react";
import { styles } from "./cart.page.style";
import CartItemSkelet from "@/components/cart/cartItem/CartItemSkelet";
import CartPeymentSkelet from "@/components/cart/cartPeyment/CartPeymentSkelet";


const CartPageLoading = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>سبد خرید</h1>
      <main className={styles.main}>
        <div className={styles.carts}>
          <CartItemSkelet />
          <CartItemSkelet />
          <CartItemSkelet />
          <CartItemSkelet />
        </div>
        <CartPeymentSkelet />
      </main>
    </div>
  );
};

export default CartPageLoading;
