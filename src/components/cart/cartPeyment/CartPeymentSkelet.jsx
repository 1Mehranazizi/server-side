import React from "react";
import { styles } from "./cartPement.style";

const CartPeymentSkelet = () => {
  return (
    <div className={styles.skeletContainer}>
      <h1 className={styles.skeletTitle}></h1>
      <p className={styles.skeletSubtitle1}></p>
      <p className={styles.skeletSubtitle2}></p>
      <p className={styles.skeletSubtitle3}></p>
      <p className={styles.skeletSubtitle4}></p>
    </div>
  );
};

export default CartPeymentSkelet;
