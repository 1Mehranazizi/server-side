import React from "react";
import Instagram from "@/icons/Instagram";
import Telegram from "@/icons/Telegram";
import AparatIcon from "@/icons/AparatIcon";
import Image from "next/image";
import Link from "next/link";
import Services from "@/components/home/services/Services";
import { styles } from "./footer.style";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Services />
      <div className={styles.topFooter}>
        <div className={styles.topStart}>
          <h1 className={styles.company}>پدید پردازش پایدار</h1>
          <p className={styles.about}>
            شرکت پدیدپردازش، شرکتی فنی-مهندسی و دانش محور با بیش از 12 سال تجربه
            ی حضور گسترده و موفق در عرصه ی صنعت چاپ می باشد. این شرکت فعالیت خود
            را با تکیه بر تجربه ی 13 ساله ی فنی و مدیریتی پایه گزار و مدیرعامل
            خود آقای مهندس محمود پدیدار در سال 1382، با ارائه ی دستگاه های چاپ
            دیجیتال لارج فرمت و چاپ دیجیتال حرفه ای ورقی اغاز کرد.
          </p>
          <div className={styles.addressBox}>
            <span className={styles.address}>
              تهران, خیابان ولیعصر, کوچه ارمغان غربی پلاک 64
            </span>
            <span className={styles.phone}>021-522038263</span>
            <span className={styles.email}>info@padidpardazesh.com</span>
          </div>
        </div>
        <div className={styles.topEnd}>
          <div className={styles.socialSection}>
            <h3>شبکه های اجتماعی</h3>
            <div className={styles.socailRow}>
              <a href="/">
                <Telegram className={styles.socailIcon} />
              </a>
              <a href="/">
                <Instagram className={styles.socailIcon2} />
              </a>
              <a href="/">
                <AparatIcon className={styles.socailIcon} />
              </a>
            </div>
          </div>
          <div className={styles.degratSite}>
            <a href="/" className={styles.enamad}>
              <Image
                src="/img/enamad.png"
                alt="enamad"
                width={120}
                height={120}
                className="w-auto"
              />
            </a>
            <a href="/">
              <Image
                src="/img/zarinpal.png"
                alt="enamad"
                width={120}
                height={120}
                className="w-auto"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className={styles.bottomRow}>
          <div>
            <h3 className={styles.bottomTitle}>دسته بندی ها</h3>
            <ul className={styles.bottomList}>
              <li className={styles.bottomListItem}>
                <Link href="/products?subCategory=toner">تونر</Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href="/products?subCategory=developer">دولوپر</Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href="/products?subCategory=unit">درام یونیت</Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href="/products?subCategory=parts">قطعات</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.bottomTitle}>دسترسی سریع</h3>
            <ul className={styles.bottomList}>
              <li className={styles.bottomListItem}>
                <Link href={`${process.env.LANDING_URL}/about-us`}>
                  درباره ما
                </Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href={`${process.env.LANDING_URL}/contact-us`}>
                  تماس باما
                </Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href={`${process.env.LANDING_URL}/cooperation`}>
                  همکاری با ما
                </Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href={`${process.env.LANDING_URL}/devices`}>تجهیزات</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.bottomTitle}>پشتیبانی</h3>
            <ul className={styles.bottomList}>
              <li className={styles.bottomListItem}>
                <Link href="/">کارشناس فروش</Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href="/">خدمات فنی</Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href="/">مشاوره راه اندازی</Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href="/">پشتیبانی</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.bottomTitle}>خدمات مشتریان</h3>
            <ul className={styles.bottomList}>
              <li className={styles.bottomListItem}>
                <Link href="/guide">راهنمای خرید</Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href={`${process.env.LANDING_URL}/services`}>
                  خدمات پس از فروش
                </Link>
              </li>
              <li className={styles.bottomListItem}>
                <Link href="/request-parts">درخواست قطعات سفارشی</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 flex justify-center items-center mt-4 px-2">
          <p className="text-textColor text-center">
            کلیه حقوق این سایت متعلق به{" "}
            <Link href="/" className="text-primaryColor">
              شرکت پدید پردازش پایدار
            </Link>{" "}
            می باشد.
          </p>
        </div>
        <p className="text-subTitleColor text-center font-yekanbakh">
          Version {process.env.VERSION}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
