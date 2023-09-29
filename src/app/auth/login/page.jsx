"use client";

import React, { useContext, useEffect, useState } from "react";
import TextInput from "@/components/shared/textInput/TextInput";
import Link from "next/link";
import axios from "axios";
import { styles } from "./login.style";
import { toastNoti } from "@/utils/toasNoti";
import { useRouter, useSearchParams } from "next/navigation";
import { loginValidation } from "@/validation/auth.validation";
import { AuthContext } from "@/context/AuthContext";

const LoginPage = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [touch, setTouch] = useState({});
  const searchParams = useSearchParams();
  const { setRefresh, refresh } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    setErrors(loginValidation(data));
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      try {
        setLoading(true);
        const respose = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/customers/login`,
          data
        );
        localStorage.setItem("Refresh-JWT", respose.data["Refresh-JWT"]);
        localStorage.setItem("refresh-token", respose.data["refresh-token"]);
        router.push(
          searchParams.get("backTo")
            ? "/" + searchParams.get("backTo")
            : "/profile/personal-info"
        );
        setRefresh(!refresh);
        toastNoti("success", respose.data.message);
      } catch (error) {
        toastNoti("error", error.response.data.message);
      } finally {
        setLoading(false);
      }
    } else {
      toastNoti("error", "لطفا موارد خواسته شده را وارد کنید");
      setTouch({
        username: true,
        password: true,
      });
    }
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>پدیدپردازش پایدار</h1>
        <p className={styles.subtitle}>ورود به حساب کاربری</p>
        <div className={styles.column}>
          <TextInput
            label="نام کاربری"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            name="username"
            english
            onFocus={() => setTouch({ ...touch, username: true })}
          />
          {errors.username && touch.username && (
            <span className={styles.error}>{errors.username}</span>
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
          <button className={styles.button} disabled={loading}>
            ورود به حساب
          </button>
          <div className={styles.registerContainer}>
            <p className={styles.registerText}>تاکنون ثبت نام نکرده اید؟</p>
            <Link href="/auth/register" className={styles.registerLink}>
              ثبت نام
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
