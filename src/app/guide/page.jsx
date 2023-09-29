import React from "react";
import Image from "next/image";
import { styles } from "./guide.styles";
import HelpIcon from "@/icons/HelpIcon";

const GuidePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>راهنمای خرید محصولات</h1>
        <HelpIcon className={styles.headerIcon} />
      </div>
      <p className={styles.login}>1.ابتدا وارد حساب کاربری خود شوید.</p>
      <div className={styles.item}>
        <Image
          src="/img/guide/select.png"
          width={400}
          height={400}
          className={styles.image}
          alt="guide"
          priority
        />
        <p className={styles.text}>
          2. محصول مورد نظر خود را از قسمت جستجو پیدا کنید و یا از بین محصولات
          انتخاب کنید.
        </p>
      </div>
      <div className={styles.item}>
        <Image
          src="/img/guide/quantity.png"
          width={400}
          height={400}
          className={styles.image}
          alt="guide"
          priority
        />
        <p className={styles.text}>
          3. تعداد محصول را به اندازه نیاز تغییر داده و دکمه افزودن به سبد خرید
          را بزنید.
        </p>
      </div>
      <div className={styles.item}>
        <Image
          src="/img/guide/cart.png"
          width={400}
          height={400}
          className={styles.image}
          alt="guide"
          priority
        />
        <p className={styles.text}>
          4.وارد سبد خرید شده و محصولات را در صورت نیاز تغییر داده و سپس دکمه
          ادامه فرآیند خرید را بزنید
        </p>
      </div>
      <div className={styles.item}>
        <Image
          src="/img/guide/checkout.png"
          width={400}
          height={400}
          className={styles.image}
          alt="guide"
          priority
        />
        <p className={`${styles.text} mb-2`}>
          5.در این صفحه مشخصات خود را چک کرده و در صورت ناقص بودن و یا اشتباه
          بودن با دکمه ویرایش مشخصات, آن را تغییر دهید.
        </p>
        <p className={`${styles.text} mb-2`}>
          6.از قسمت آدرس ها یک آدرس به عنوان آدرس فاکتور و یک آدرس به عنوان آدرس
          ارسال انتخاب کنید در صورت نداشتن آدرس با دکمه آدرس جدید آدرس خود را
          ثبت کرده و سپس آن را انتخاب کنید.
        </p>
        <p className={`${styles.text} mb-2`}>
          7.با زدن ثبت سفارش به صفحه پرداخت منتقل می شوید بعد از پرداخت موفق
          سفارش شما ثبت می شود.
        </p>
      </div>
    </div>
  );
};

export default GuidePage;
