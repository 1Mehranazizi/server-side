"use client";

import React, { useContext, useState } from "react";
import { styles } from "./cartItem.style";
import PlusIcon from "@/icons/PlusIcon";
import TrashOutline from "@/icons/TrashOutline";
import MinusIcon from "@/icons/MinusIcon";
import axiosInstance from "@/services/axiosInstance";
import { CartContext } from "@/context/CartContext";
import { toastNoti } from "@/utils/toasNoti";

const ManageQuantity = ({
  count,
  id,
  color,
  multi,
  item,
  aggregateItemOrderedNumbers,
}) => {
  const [loading, setLoading] = useState(false);
  const { refresh, setRefresh } = useContext(CartContext);

  const handleChangeSingleCount = async (type) => {
    setLoading(true);
    try {
      const res = await axiosInstance.put("/shop/myShoppingCart", {
        itemType: "SingleItem",
        singleItemId: id,
        singleItemOrderedNumber: type === "increase" ? count + 1 : count - 1,
      });
      setRefresh(!refresh);
    } catch (error) {
      toastNoti("error", error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  const handleChangeMultiCount = async (type) => {
    const total = [...aggregateItemOrderedNumbers];
    if (type === "increase") {
      total[item] = total[item] + 1;
    } else {
      total[item] = total[item] === 0 ? 0 : total[item] - 1;
    }
    setLoading(true);
    try {
      const res = await axiosInstance.put("/shop/myShoppingCart", {
        itemType: "AggregationItem",
        aggregateItemId: id,
        aggregateItemOrderedNumbers: total,
      });
      setRefresh(!refresh);
    } catch (error) {
      toastNoti("error", error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.manageQuantity}>. . .</div>;
  }

  if (count > 1) {
    return (
      <div
        className={`${styles.manageQuantity} ${multi && `border-2 ${color}`}`}
      >
        <span
          onClick={() =>
            multi
              ? handleChangeMultiCount("increase")
              : handleChangeSingleCount("increase")
          }
        >
          <PlusIcon className={styles.add} />
        </span>
        <span>{count}</span>
        <span
          onClick={() =>
            multi
              ? handleChangeMultiCount("decrease")
              : handleChangeSingleCount("decrease")
          }
        >
          <MinusIcon className={styles.remove} />
        </span>
      </div>
    );
  }

  return (
    <div className={`${styles.manageQuantity} ${multi && `border ${color}`}`}>
      <span
        onClick={() =>
          multi
            ? handleChangeMultiCount("increase")
            : handleChangeSingleCount("increase")
        }
      >
        <PlusIcon className={styles.add} />
      </span>
      <span>{count}</span>
      <span
        onClick={() =>
          multi
            ? handleChangeMultiCount("decrease")
            : handleChangeSingleCount("decrease")
        }
      >
        <TrashOutline className={styles.remove} />
      </span>
    </div>
  );
};

export default ManageQuantity;
