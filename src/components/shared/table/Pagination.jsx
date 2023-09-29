"use client";

import React from "react";
import ArrowDown from "@/icons/ArrowDown";
import { styles } from "./table.style";

const Pagination = ({ total, limit, setActivePage, activePage }) => {
  const pageinationCount = [];

  for (let index = 1; index <= Math.ceil(total / limit); index++) {
    pageinationCount.push(index);
  }

  const handleNewPage = (value) => {
    setActivePage(value);
  };

  const handlePrev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNext = () => {
    if (activePage < Math.ceil(total / limit)) {
      setActivePage(activePage + 1);
    }
  };
  return (
    <ul className={styles.paginationContainer}>
      <li className={styles.pageItemPrevNext} onClick={handlePrev}>
        <ArrowDown className={styles.pagPrev} />
      </li>
      {pageinationCount.map((item) => (
        <li
          className={activePage === item ? styles.activeItem : styles.pagItem}
          key={item}
          onClick={() => handleNewPage(item)}
        >
          <span>{item}</span>
        </li>
      ))}
      <li className={styles.pageItemPrevNext} onClick={handleNext}>
        <ArrowDown className={styles.pagNext} />
      </li>
    </ul>
  );
};

export default Pagination;
