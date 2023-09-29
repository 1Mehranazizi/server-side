import React from "react";
import { styles } from "./services.style";
import BoxIcon from "@/icons/BoxIcon";
import FastDeliveryIcon from "@/icons/FastDeliveryIcon";
import PaymentIcon from "@/icons/PaymentIcon";
import GarantiIcon from "@/icons/GarantiIcon";

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <BoxIcon className={styles.icon} />
        <div className={styles.textContainer}>
          <p className={styles.title}>بسته بندی با کیفیت</p>
          <small className={styles.subtitle}>
            بسته بندی امن برای محافظت فیزیکی
          </small>
        </div>
      </div>
      <div className={styles.box}>
        <FastDeliveryIcon className={styles.icon} />
        <div className={styles.textContainer}>
          <p className={styles.title}>تحویل سریع و آسان</p>
          <small className={styles.subtitle}>
            ارسال کالا در سریع ترین زمان ممکن
          </small>
        </div>
      </div>
      <div className={styles.box}>
        <PaymentIcon className={styles.icon} />
        <div className={styles.textContainer}>
          <p className={styles.title}>پرداخت امن آنلاین</p>
          <small className={styles.subtitle}>
            درگاه پرداخت امن برای خرید ها
          </small>
        </div>
      </div>
      <div className={styles.box}>
        <GarantiIcon className={styles.icon} />
        <div className={styles.textContainer}>
          <p className={styles.title}>تضمین اصالت کالا</p>
          <small className={styles.subtitle}>ضمانت اصل بودن کالاها</small>
        </div>
      </div>
    </section>
  );
};

export default Services;
