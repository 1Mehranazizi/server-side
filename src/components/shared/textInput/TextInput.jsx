"use client";

import React, { useState } from "react";
import { styles } from "./textInput.style";
import EyeIcon from "@/icons/EyeIcon";
import MedicalStar from "@/icons/MedicalStar";

const TextInput = ({
  label,
  name,
  onChange,
  value,
  defaultValue,
  type,
  english,
  ltr,
  onFocus,
  disable,
  required,
  multiline,
}) => {
  const [showPass, setShowPass] = useState(false);
  if (type === "password") {
    return (
      <div className={styles.container}>
        <div className={styles.labelRow}>
          {required && <MedicalStar className={styles.star} />}
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        </div>
        <div className={styles.box}>
          <input
            type={showPass ? "text" : type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            className={`${styles.input} ${english ? styles.english : ""}`}
            style={{ direction: ltr ? "ltr" : "rtl" }}
            onFocus={onFocus}
            disabled={disable}
          />
          <span onClick={() => setShowPass(!showPass)}>
            <EyeIcon className={styles.icon} />
          </span>
        </div>
      </div>
    );
  }
  if (multiline) {
    return (
      <div className={styles.container}>
        <div className={styles.labelRow}>
          {required && <MedicalStar className={styles.star} />}
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        </div>
        <textarea
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          className={`${styles.input} ${
            english ? styles.english : ""
          } resize-none`}
          onFocus={onFocus}
          disabled={disable}
          rows={4}
        ></textarea>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.labelRow}>
        {required && <MedicalStar className={styles.star} />}
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      </div>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        className={`${styles.input} ${english ? styles.english : ""}`}
        onFocus={onFocus}
        disabled={disable}
      />
    </div>
  );
};

export default TextInput;
