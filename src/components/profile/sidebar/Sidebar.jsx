"use client";

import React, { useContext } from "react";
import NoAvatar from "@/icons/NoAvatar";
import Link from "next/link";
import UserIcon from "@/icons/UserIcon";
import OrderIcon from "@/icons/OrderIcon";
import AddressIcon from "@/icons/AddressIcon";
import LogoutIcon from "@/icons/LogoutIcon";
import { styles } from "./sidebar.style";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { removeToken } from "@/services/tokenService";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogOut = () => {
    if (typeof window !== "undefined") {
      removeToken();
      router.push("/");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <NoAvatar />
        <p className={styles.name}>
          {user?.firstName} {user?.lastName}
        </p>
        <p className={styles.phone}>{user?.phoneNumber}</p>
      </div>
      <ul className={styles.list}>
        <li
          className={`${
            pathname === "/profile/personal-info" ? styles.itemActive : ""
          } ${styles.listItem}`}
        >
          <UserIcon className={styles.listIcon} />
          <Link href="/profile/personal-info">اطلاعات حساب</Link>
        </li>
        <li
          className={`${
            pathname === "/profile/orders" ? styles.itemActive : ""
          } ${styles.listItem}`}
        >
          <OrderIcon className={styles.listIcon} />
          <Link href="/profile/orders">سفارشات</Link>
        </li>
        <li
          className={`${
            pathname === "/profile/address" ? styles.itemActive : ""
          } ${styles.listItem}`}
        >
          <AddressIcon className={styles.listIcon} />
          <Link href="/profile/address">آدرس ها</Link>
        </li>
      </ul>
      <button className={styles.logoutButton} onClick={handleLogOut}>
        <LogoutIcon className={styles.listIcon} />
        <span>خروج</span>
      </button>
    </div>
  );
};

export default Sidebar;
