"use client";

import React from "react";
import ArrowDown from "@/icons/ArrowDown";
import { styles } from "./selectBox.style";

const SelectBox = ({ label, menuItems, onChange, value, page }) => {
  return (
    <div className={styles.box}>
      {page && <label className={styles.label}>{label}</label>}
      <div className={styles.container}>
        <ArrowDown className={styles.icon} />
        <select
          defaultValue=""
          value={value}
          onChange={onChange}
          className={styles.select}
        >
          <option value="" disabled>
            {label}
          </option>
          {menuItems?.map((item) => (
            <option className={styles.option} key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
