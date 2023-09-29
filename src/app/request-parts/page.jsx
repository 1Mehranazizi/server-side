"use client";
import React, { useContext, useEffect, useState } from "react";
import TextInput from "@/components/shared/textInput/TextInput";
import { styles } from "./request-parts.styles";
import axios from "axios";
import { toastNoti } from "@/utils/toasNoti";
import { handleEmptyError } from "@/utils/emptyError";
import { AuthContext } from "@/context/AuthContext";

const RequestPartsPage = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    sender: "",
    email: "",
    title: "",
    messageType: "partRequest",
    messageBody: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setData({
        title: "",
        messageType: "partRequest",
        messageBody: "",
        sender: `${user?.firstName ?? ""} ${user?.lastName ?? ""}`,
        email: user?.email,
        phone: user?.phoneNumber,
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !handleEmptyError(
        data,
        ["sender", "email", "title", "messageType", "phone"],
        true
      )
    ) {
      setLoading(true);
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/messages/submitMessage`,
          data
        )
        .then(() => {
          toastNoti(
            "success",
            "اطلاعات شما با موفقیت ثبت شد کارشناسان ما به زودی با شما تماس خواهند گرفت"
          );
          setData({
            sender: "",
            email: "",
            title: "",
            messageType: "partRequest",
            messageBody: "",
            phone: "",
          });
        })
        .catch((err) => {
          toastNoti("error", err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>درخواست قطعات سفارشی</h1>
          <p className={styles.subtitle}>
            در صورتی که قطعه ی مورد نظر خود را در لیست قطعات سایت پیدا نکردید،
            برای درخواست قطعه سفارشی با کارشناسان ما تماس بگیرید. در متن پیام،
            شماره‌ی قطعه و توضیحات مربوطه به قطعه را اضافه کنید تا کارشناسان ما
            در اولین فرصت با شما تماس بگیرند.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formColumn}>
            <TextInput
              label="نام و نام خانوادگی"
              value={data.sender}
              onChange={(e) => setData({ ...data, sender: e.target.value })}
              name="sender"
              required
            />
            <TextInput
              label="ایمیل"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="email"
              required
              english
            />
            <TextInput
              label="شماره تماس"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              name="phone"
              required
            />
            <TextInput
              label="نوع دستگاه"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              name="title"
              required
              english
            />
          </div>
          <br />
          <TextInput
            label="توضیحات بیشتر"
            value={data.messageBody}
            onChange={(e) => setData({ ...data, messageBody: e.target.value })}
            name="messageBody"
            multiline
          />
          <button disabled={loading} type="submit" className={styles.button}>
            ارسال درخواست
          </button>
        </form>
      </section>
    </div>
  );
};

export default RequestPartsPage;
