import React from "react";
import { styles } from "./header.style";
import Image from "next/image";
import Link from "next/link";
import Drawer from "@/components/shared/drawer/Drawer";
import MobileNav from "./MobileNav";
import BasketIcon from "@/icons/BasketIcon";
import UserIcon from "@/icons/UserIcon";
import ProductsDropdown from "./ProductsDropdown";
import Search from "@/components/search/Search";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <div className={styles.startRow}>
          <Link href="/">
            <Image src="/img/logo.jpg" width={80} height={60} alt="logo" />
          </Link>
          <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
              <ProductsDropdown />
              <li className={styles.navbarItem}>
                <a href={`${process.env.LANDING_URL}/devices`}>تجهیزات</a>
              </li>
              <li className={styles.navbarItem}>
                <a href={`${process.env.LANDING_URL}/articles`}>
                  اخبار و آموزش
                </a>
              </li>
              <li className={styles.navbarItem}>
                <a href={`${process.env.LANDING_URL}/services`}>
                  خدمات پس از فروش
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.endRow}>
          <Search />
          <div className={styles.headerButtonContainer}>
            <Link href="/cart" className={styles.headerButton}>
              <BasketIcon className="w-[26px] h-[26px]" />
            </Link>
            <Link href="/profile/personal-info" className={styles.headerButton}>
              <UserIcon className="w-[23px] h-[23px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mobileStyle}>
        <MobileNav />
        <div className={styles.headerMobileButtonContainer}>
          <Link href="/cart" className={styles.headerButton}>
            <BasketIcon className="w-[26px] h-[26px]" />
          </Link>
          <Link href="/profile/personal-info" className={styles.headerButton}>
            <UserIcon className="w-[23px] h-[23px]" />
          </Link>
        </div>
      </div>
      <Drawer />
    </header>
  );
};

export default Header;
