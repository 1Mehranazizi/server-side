import React from "react";
import { styles } from "./productSpecifications.style";
import ListIcon from "@/icons/ListIcon";

const ProductSpecifications = ({ specs }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ListIcon className={styles.headerIcon} />
        <h2 className={styles.headerText}>مشخصات محصول</h2>
      </div>
      <div className={styles.specsContainer}>
        {specs?.map((spec) => (
          <div className={styles.spceItem} key={spec._id}>
            <p className={styles.spceTitle}>{spec.key}</p>
            <p className={styles.specValue}>{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecifications;
