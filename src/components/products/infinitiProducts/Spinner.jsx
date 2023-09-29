import React from "react";
import { styles } from "./styles";

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles.spinnerText}>درحال بارگزاری</p>
    </div>
  );
};

export default Spinner;
