"use client";

import React, { useEffect, useState } from "react";
import TextInput from "@/components/shared/textInput/TextInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { styles } from "./register.style";
import { registerValidation } from "@/validation/auth.validation";
import axios from "axios";
import { toastNoti } from "@/utils/toasNoti";

const RegisterPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    userPhoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [touch, setTouch] = useState({});

  const router = useRouter();

  useEffect(() => {
    setErrors(registerValidation(data));
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      try {
        setLoading(true);
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/customers/register`,
          data
        );
        toastNoti("success", "حساب کاربری شما ایجاد شد");
        router.push("/auth/login");
      } catch (error) {
        toastNoti("error", error.response.data.message);
      } finally {
        setLoading(false);
      }
    } else {
      toastNoti("error", "لطفا موارد خواسته شده را وارد کنید");
      setTouch({
        email: true,
        password: true,
        userPhoneNumber: true,
      });
    }
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>پدیدپردازش پایدار</h1>
        <p className={styles.subtitle}>ایجاد حساب</p>
        <div className={styles.column}>
          <TextInput
            label="ایمیل"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            name="email"
            english
            onFocus={() => setTouch({ ...touch, email: true })}
          />
          {errors.email && touch.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
          <TextInput
            label="رمز عبور"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            name="password"
            type="password"
            english
            onFocus={() => setTouch({ ...touch, password: true })}
          />
          {errors.password && touch.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
          <TextInput
            label="شماره تماس"
            value={data.userPhoneNumber}
            onChange={(e) =>
              setData({ ...data, userPhoneNumber: e.target.value })
            }
            name="userPhoneNumber"
            english
            onFocus={() => setTouch({ ...touch, userPhoneNumber: true })}
            type="number"
          />
          {errors.userPhoneNumber && touch.userPhoneNumber && (
            <span className={styles.error}>{errors.userPhoneNumber}</span>
          )}
          <button className={styles.button} disabled={loading}>
            ایجاد حساب
          </button>
          <div className={styles.loginContainer}>
            <p className={styles.loginText}>قبلا ثبت نام کرده اید؟</p>
            <Link href="/auth/login" className={styles.loginLink}>
              ورود
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;
