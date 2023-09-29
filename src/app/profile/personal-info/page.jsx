"use client";

import React, { useContext, useEffect, useState } from "react";
import { styles } from "./pInfo.style";
import TextInput from "@/components/shared/textInput/TextInput";
import { useRouter } from "next/navigation";
import { checkLoggedin } from "@/utils/checkLoggeding";
import axiosInstance from "@/services/axiosInstance";
import { toastNoti } from "@/utils/toasNoti";
import ProfileLoadingPage from "../loading";
import { AuthContext } from "@/context/AuthContext";
import ChangePassword from "@/components/profile/changePassword/ChangePassword";
import SelectBox from "@/components/shared/selectBox/SelectBox";
import { handleEmptyError } from "@/utils/emptyError";

const PersonalInfoPage = () => {
  const { user, loading, refresh, setRefresh } = useContext(AuthContext);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    landLinePhoneNumber: "",
    nationalHumanID: "",
    nationalCompanyID: "",
    economicCode: "",
    customerType: "",
    companyName: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (!checkLoggedin()) {
      router.push("/auth/login");
    }
  }, [router]);

  useEffect(() => {
    setData(user);
  }, [user]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const requiredHuman = ["firstName", "lastName"];
    const requiredCompany = [
      "firstName",
      "lastName",
      "companyName",
      "nationalCompanyID",
    ];
    if (
      !handleEmptyError(
        data,
        data.customerType === "Human" ? requiredHuman : requiredCompany,
        true
      )
    ) {
      try {
        setSubmitLoading(true);
        const res = await axiosInstance.put(
          "/userManagement/myAccountInfo",
          data
        );
        toastNoti("success", "اطلاعات حساب کاربری با موفقیت ویرایش شد");
        setRefresh(!refresh);
      } catch (error) {
        toastNoti("error", error.response.data.error);
      } finally {
        setSubmitLoading(false);
      }
    }
  };

  if (loading) return <ProfileLoadingPage />;

  return (
    <div className={styles.box}>
      <h2 className={styles.header}>اطلاعات حساب کاربری</h2>
      <div className={styles.grid}>
        <TextInput
          label="نام"
          value={data.firstName}
          name="firstName"
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          required
        />
        <TextInput
          label="نام خانوادگی"
          value={data.lastName}
          name="lastName"
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          required
        />
        <TextInput
          label="شماره تماس"
          value={data.phoneNumber}
          name="phoneNumber"
          onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
          disable
        />
        <TextInput
          label="ایمیل"
          value={data.email}
          name="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          english
          disable
        />
        <TextInput
          label="نام شرکت"
          value={data.companyName}
          name="companyName"
          onChange={(e) => setData({ ...data, companyName: e.target.value })}
          required={data.customerType === "Company"}
        />
        <TextInput
          label="تلفن ثابت"
          value={data.landLinePhoneNumber}
          name="landLinePhoneNumber"
          onChange={(e) =>
            setData({ ...data, landLinePhoneNumber: e.target.value })
          }
        />
        <SelectBox
          label="نوع کاربر"
          value={data.customerType}
          page
          onChange={(e) => setData({ ...data, customerType: e.target.value })}
          menuItems={[
            { id: "Human", label: "حقیقی" },
            { id: "Company", label: "حقوقی" },
          ]}
        />
        {data.customerType === "Human" ? (
          <TextInput
            label="کد ملی"
            value={data.nationalHumanID}
            name="nationalHumanID"
            onChange={(e) =>
              setData({ ...data, nationalHumanID: e.target.value })
            }
          />
        ) : (
          <>
            <TextInput
              label="شناسه ملی"
              value={data.nationalCompanyID}
              name="nationalCompanyID"
              onChange={(e) =>
                setData({ ...data, nationalCompanyID: e.target.value })
              }
              required
            />
            <TextInput
              label="کد اقتصادی"
              value={data.economicCode}
              name="economicCode"
              onChange={(e) =>
                setData({ ...data, economicCode: e.target.value })
              }
            />
          </>
        )}
      </div>
      <div className={styles.footer}>
        <button
          className={styles.button}
          disabled={submitLoading}
          onClick={handleEdit}
        >
          ویرایش اطلاعات
        </button>
        <ChangePassword />
      </div>
    </div>
  );
};

export default PersonalInfoPage;
