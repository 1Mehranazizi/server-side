"use client";

import React, { useEffect, useState } from "react";
import { styles } from "./orderDetails.style";
import axiosInstance from "@/services/axiosInstance";
import { toastNoti } from "@/utils/toasNoti";
import ProfileLoadingPage from "../../loading";
import OrderStatus from "@/components/orderStatus/OrderStatus";
import OrderItem from "@/components/orderItem/OrderItem";

const OrderDetails = ({ params }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axiosInstance
        .get(`/shop/myOrders/${params.id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          toastNoti("error", "خطا دربرقراری ارتباط");
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, [params.id]);

  if (loading) return <ProfileLoadingPage />;

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>جزییات سفارش</h3>
      <div className={styles.grid}>
        <div className={styles.infoRow}>
          <p className={styles.infoTitle}>نام :</p>
          <p className={styles.infoValue}>{data?.customerP?.firstName}</p>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.infoTitle}>نام خانوادگی :</p>
          <p className={styles.infoValue}>{data?.customerP?.lastName}</p>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.infoTitle}>ایمیل :</p>
          <p className={`${styles.infoValue} font-yekanbakh`}>
            {data?.customerP?.email}
          </p>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.infoTitle}>شماره تماس :</p>
          <p className={styles.infoValue}>{data?.customerP?.phoneNumber}</p>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.infoTitle}>مبلغ سفارش :</p>
          <p className={styles.infoValue}>
            {data?.totalSellingPricesWithDiscount?.toLocaleString() ?? "-"}{" "}
            تومان
          </p>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.infoTitle}>تاریخ سفارش :</p>
          <p className={styles.infoValue}>
            {new Date(data?.orderSubmittedAt)?.toLocaleDateString("fa")}
          </p>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.infoTitle}>وضعیت سفارش :</p>
          <p className={styles.infoValue}>
            <OrderStatus status={data?.orderState} />
          </p>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.infoTitle}>سریال سفارش :</p>
          <p className={`${styles.infoValue} font-yekanbakh`}>{data?.orderSerial}</p>
        </div>
      </div>
      <h3 className={styles.header}>محصولات</h3>
      <div className={styles.products}>
        {data?.orderItems?.map((item) => (
          <OrderItem key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
