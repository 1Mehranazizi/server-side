import React from "react";
import Link from "next/link";
import HomeIcon from "@/icons/HomeIcon";
import ArrowDown from "@/icons/ArrowDown";
import { styles } from "./breadcumb.style";

const Breadcrumb = ({ links, button }) => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.home}>
        <HomeIcon className={styles.icon} />
      </Link>
      {links.map((item, index) => (
        <>
          <ArrowDown key={index} className={styles.arrow} />
          <Link href={item.path} key={index} className={styles.link}>
            {item.name}
          </Link>
        </>
      ))}
      <div className={styles.button}>{button}</div>
    </div>
  );
};

export default Breadcrumb;
