"use client";

import Table from "@/components/shared/table/Table";
import { styles } from "./order.page.style";
import { useRouter } from "next/navigation";
import { checkLoggedin } from "@/utils/checkLoggeding";
import { useEffect, useState } from "react";
import axiosInstance from "@/services/axiosInstance";
import { toastNoti } from "@/utils/toasNoti";
import ProfileLoadingPage from "../loading";
import OrderStatus from "@/components/orderStatus/OrderStatus";

const OrderPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const router = useRouter();
  useEffect(() => {
    if (!checkLoggedin()) {
      router.push("/auth/login");
    }
  }, [router]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/shop/myOrders?limit=5&offset=${(page - 1) * 5}`
        );
        setData(response.data);
        setTotal(+response.headers.recordstotal);
      } catch (error) {
        toastNoti("error", "خطا در برقراری ارتباط");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);
  const orderTable = data?.map((item) => {
    return {
      id: item._id,
      date: new Date(item.orderSubmittedAt).toLocaleDateString("fa"),
      serial: <span className={styles.serial}>{item.orderSerial}</span>,
      price: `${
        item.totalSellingPricesWithDiscount?.toLocaleString() ?? "-"
      } تومان`,
      status: <OrderStatus status={item.orderState} />,
    };
  });

  if (loading) return <ProfileLoadingPage />;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>سفارشات</h2>
      <Table
        headers={["تاریخ سفارش", "سریال سفارش", "قیمت کل", "وضعیت"]}
        tableItems={orderTable}
        total={total}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default OrderPage;
