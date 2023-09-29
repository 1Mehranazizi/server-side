"use client";

import React from "react";
import { styles } from "./addressBox.style";

const AddressBox = ({ address, setAddress, selectedAddress }) => {
  return (
    <div
      onClick={() => setAddress(address)}
      className={`${styles.container} ${
        selectedAddress._id === address._id
          ? styles.selectedAddress
          : styles.notSelected
      } `}
    >
      <p className={styles.address}>{address.fullAddress}</p>
      <div className={styles.addressFooter}>
        <p className={styles.addressFooterItem}>نام آدرس : {address.name}</p>
        <p className={styles.addressFooterItem}>
          کد پستی : {address.postalCode}
        </p>
      </div>
    </div>
  );
};

export default AddressBox;
