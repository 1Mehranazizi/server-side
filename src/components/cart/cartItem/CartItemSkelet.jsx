import React from "react";
import { styles } from "./cartItem.style";

const CartItemSkelet = () => {
  return (
    <div className={styles.cartItemSkeletContainer}>
      <div className={styles.imageSkelet}></div>
      <div className={styles.contentSkelet}>
        <h1 className={styles.titleSkelet}></h1>
        <p className={styles.subtitleSkelet}></p>
        <div className={styles.contentRowSkelet}>
          <p className={styles.contentRowItemSkelet}></p>
          <p className={styles.contentRowItemSkelet}></p>
          <p className={styles.contentRowItemSkelet}></p>
          <p className={styles.contentRowItemSkelet}></p>
          <p className={styles.contentRowItemSkelet}></p>
        </div>
        <div className={styles.contentSkeletEnd}>
          <h1 className={styles.contentSkeletEndTitle}></h1>
          <div className={styles.contentSkeletEndAction}></div>
        </div>
      </div>
    </div>
  );
};

export default CartItemSkelet;
