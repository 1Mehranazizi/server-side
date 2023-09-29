"use client";

import React, { useState } from "react";
import Modal from "@/components/shared/modal/Modal";
import TextInput from "@/components/shared/textInput/TextInput";
import { styles } from "./newAddress.style";
import { handleEmptyError } from "@/utils/emptyError";
import axiosInstance from "@/services/axiosInstance";
import { toastNoti } from "@/utils/toasNoti";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map/Map"), { ssr: false });

const NewAddress = ({ addresses, refresh, setRefresh }) => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState([
    35.699656076505015, 51.33805454824494,
  ]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    fullAddress: "",
    postalCode: "",
  });

  const handleSubmit = async (e) => {
    const newData = { ...data };
    newData.coords = location;
    e.preventDefault();
    if (!handleEmptyError(newData, ["name", "fullAddress", "postalCode"])) {
      const allAddresses = [...addresses];
      allAddresses.push(newData);
      try {
        setLoading(true);
        const response = await axiosInstance.put(
          "/userManagement/myAccountInfo",
          { addresses: allAddresses }
        );
        toastNoti("success", "آدرس جدید با موفقیت اضافه شد");
        setRefresh(!refresh);
        setOpen(false);
      } catch (error) {
        toastNoti("error", error.response.data.error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className={styles.Openbutton}>
        ثبت آدرس جدید
      </button>
      <Modal open={open} setOpen={setOpen} maxWidth="max-w-4xl">
        <form onSubmit={handleSubmit}>
          <div className={styles.header}>
            <h2 className={styles.titleHeaeder}>ثبت آدرس جدید</h2>
          </div>
          <div className={styles.gridUser}>
            <TextInput
              label="نام آدرس"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <TextInput
              label="کدپستی"
              name="postalCode"
              value={data.postalCode}
              onChange={(e) => setData({ ...data, postalCode: e.target.value })}
            />
          </div>
          <div className="mt-4">
            <TextInput
              label="آدرس کامل"
              name="fullAddress"
              value={data.fullAddress}
              onChange={(e) =>
                setData({ ...data, fullAddress: e.target.value })
              }
            />
          </div>
          <Map location={location} setLocation={setLocation} />
          <button type="submit" className={styles.submit} disabled={loading}>
            ثبت
          </button>
        </form>
      </Modal>
    </>
  );
};

export default NewAddress;
