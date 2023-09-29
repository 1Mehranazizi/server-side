"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { styles } from "./table.style";
import Pagination from "./Pagination";

const Table = ({ tableItems, headers, total, page, setPage }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            {headers.map((item, index) => (
              <th className={styles.headerItem} key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item, index) => (
            <tr
              key={index}
              className={styles.bodyRow}
              onClick={() => router.push(`/profile/orders/${item.id}`)}
            >
              <td className={styles.item}>{item.date}</td>
              <td className={styles.item}>{item.serial}</td>
              <td className={styles.item}>{item.price}</td>
              <td className={styles.item}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {total > 5 && (
        <Pagination
          total={total}
          limit={5}
          activePage={page}
          setActivePage={setPage}
        />
      )}
    </div>
  );
};

export default Table;
