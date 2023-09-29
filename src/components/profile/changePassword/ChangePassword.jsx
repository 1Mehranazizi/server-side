"use client";

import React, { useState } from "react";
import { styles } from "./chnagePassword.styles";
import { handleEmptyError } from "@/utils/emptyError";
import { toastNoti } from "@/utils/toasNoti";
import Modal from "@/components/shared/modal/Modal";
import TextInput from "@/components/shared/textInput/TextInput";
import axiosInstance from "@/services/axiosInstance";

const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    console.log(params);
    e.preventDefault();
    if (!handleEmptyError(params, ["oldPassword", "newPassword"])) {
      setLoading(true);
      axiosInstance
        .post("/userManagement/changePassword", params)
        .then((res) => {
          toastNoti("success", "رمز عبور با موفقیت تغییر کرد");
          setOpen(false);
        })
        .catch((error) => {
          toastNoti("error", error.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <button className={styles.open} onClick={() => setOpen(true)}>
        تغییر رمز عبور
      </button>
      <Modal open={open} setOpen={setOpen} maxWidth="max-w-2xl">
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.header}>تغییر رمزعبور</h1>
          <TextInput
            label="رمز عبور قدیم"
            value={params.oldPassword}
            onChange={(e) =>
              setParams({ ...params, oldPassword: e.target.value })
            }
            type="password"
            name="oldPassword"
          />
          <TextInput
            label="رمز عبور جدید"
            value={params.newPassword}
            onChange={(e) =>
              setParams({ ...params, newPassword: e.target.value })
            }
            type="password"
            name="newPassword"
          />
          <button className={styles.submit} type="submit" disabled={loading}>
            تغییر رمز عبور
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ChangePassword;
