"use client";

import { styles } from "./modal.style";

const Modal = ({ children, open, setOpen, maxWidth }) => {
  return open ? (
    <div className={styles.container}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div
        className={`${styles.card} ${maxWidth ? maxWidth : styles.maxWidth}`}
      >
        <div className={styles.childBox}>{children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
