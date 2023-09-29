import DescriptionIcon from "@/icons/DescriptionIcon";
import React from "react";
import { styles } from "./productDescription.style";
import Sanitize from "@/components/shared/sanitize/Sanitize";

const ProductDescription = ({ description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <DescriptionIcon className={styles.headerIcon} />
        <h2 className={styles.headerText}>توضیحات</h2>
      </div>
      <Sanitize>{description}</Sanitize>
    </div>
  );
};

export default ProductDescription;
