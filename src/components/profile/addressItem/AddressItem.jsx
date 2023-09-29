"use client";

import React, { useContext } from "react";
import TrashOutline from "@/icons/TrashOutline";
import { styles } from "./addressItem.style";
import EditAddress from "../editAddress/EditAddress";
import { AuthContext } from "@/context/AuthContext";
import axiosInstance from "@/services/axiosInstance";
import { toastNoti } from "@/utils/toasNoti";

const AddressItem = ({ address }) => {
  const { user, refresh, setRefresh } = useContext(AuthContext);

  const handleDeleteAddress = async (id) => {
    const newAddresses = user?.addresses?.filter(
      (address) => address._id !== id
    );
    try {
      const response = await axiosInstance.put(
        "/userManagement/myAccountInfo",
        { addresses: newAddresses }
      );
      toastNoti("success", "آدرس مورد نظر با موفقیت حذف شد");
      setRefresh(!refresh);
    } catch (error) {
      toastNoti("error", error.response.data.error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.fullAddress}>{address?.fullAddress}</p>
        <div className={styles.addressInfo}>
          <p className={styles.addressInfoText}>نام آدرس:{address?.name}</p>
          <p className={styles.addressInfoText}>کدپستی:{address?.postalCode}</p>
        </div>
      </div>
      <div className={styles.end}>
        <EditAddress
          addresses={user?.addresses}
          refresh={refresh}
          setRefresh={setRefresh}
          address={address}
        />
        <span
          className={styles.delete}
          onClick={() => handleDeleteAddress(address?._id)}
        >
          <TrashOutline className={styles.deleteIcon} />
        </span>
      </div>
    </div>
  );
};

export default AddressItem;
