"use client";
import React, { useState } from "react";
import { styles } from "./header.style";
import Link from "next/link";
import Drawer from "@/components/shared/drawer/Drawer";
import MenuBurger from "@/icons/MenuBurger";
import Accordion from "@/components/shared/accordion/Accordion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.menuButton} onClick={() => setOpen(true)}>
        <MenuBurger className="w-[30px] h-[30px]" />
      </button>
      <Drawer open={open} setOpen={setOpen}>
        <nav>
          <ul className={styles.mobileNavbarList}>
            <Accordion title="محصولات">
              <div className="ps-2">
                <Accordion title="چاپ دیجیتال">
                  <ul className={styles.mobileNavbarList}>
                    <li className={styles.navbarItem}>
                      <Link
                        href="/products?subCategory=toner"
                        onClick={() => setOpen(false)}
                      >
                        تونر
                      </Link>
                    </li>
                    <li className={styles.navbarItem}>
                      <Link
                        href="/products?subCategory=developer"
                        onClick={() => setOpen(false)}
                      >
                        دولوپر
                      </Link>
                    </li>
                    <li className={styles.navbarItem}>
                      <Link
                        href="/products?subCategory=unit"
                        onClick={() => setOpen(false)}
                      >
                        درام یونیت
                      </Link>
                    </li>
                    <li className={styles.navbarItem}>
                      <Link
                        href="/products?subCategory=sparePart"
                        onClick={() => setOpen(false)}
                      >
                        قطعات
                      </Link>
                    </li>
                  </ul>
                </Accordion>
              </div>
            </Accordion>
            <li className={styles.navbarItem}>
              <a href={`${process.env.LANDING_URL}/devices`}>تجهیزات</a>
            </li>
            <li className={styles.navbarItem}>
              <a href={`${process.env.LANDING_URL}/articles`}>اخبار و آموزش</a>
            </li>
            <li className={styles.navbarItem}>
              <a href={`${process.env.LANDING_URL}/services`}>
                خدمات پس از فروش
              </a>
            </li>
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default MobileNav;
