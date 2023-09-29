"use client";

import React from "react";
import { styles } from "./drawer.style";

const Drawer = ({ open, setOpen, children }) => {
  return (
    <>
      <div
        className={`${styles.drawerContainer} ${
          open ? styles.drawerContainerOpen : styles.drawerContainerClose
        }`}
      >
        {children}
      </div>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      )}
    </>
  );
};

export default Drawer;
