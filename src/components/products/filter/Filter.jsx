"use client";

import React, { useEffect, useState } from "react";
import SearchIcon from "@/icons/SearchIcon";
import CheckBox from "@/icons/CheckBox";
import SelectBox from "@/components/shared/selectBox/SelectBox";
import { styles } from "./filter.style";
import { useRouter } from "next/navigation";
import TrashOutline from "@/icons/TrashOutline";
import CloseIcon from "@/icons/CloseIcon";
import { getList } from "@/utils/getList";

const Filter = ({ searchParams }) => {
  const [name, setName] = useState("");
  const [listApplicableDevices, setListApplicableDevices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getList(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/panel/items/listApplicableDevices`,
      setListApplicableDevices
    );
  }, []);

  const handleFilter = (filter) => {
    const queryString = { ...searchParams, ...filter };
    Object.keys(queryString)?.forEach((key) => {
      if (!queryString[key]) {
        delete queryString[key];
      }
    });
    router.push(`/products?${new URLSearchParams(queryString).toString()}`);
  };

  const removeFilter = (key) => {
    const query = { ...searchParams };
    delete query[key];
    router.push(`/products?${new URLSearchParams(query).toString()}`);
  };

  const listApplicableDevicesSelectItem = listApplicableDevices?.map((item) => {
    return {
      id: item,
      label: item,
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="نام محصول یا شماره قطعه"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className={styles.searchButton}
            onClick={() => {
              if (name.trim()) {
                handleFilter({ nameOrPN: name });
                setName("");
              }
            }}
          >
            <SearchIcon className={styles.searchIcon} />
          </button>
        </div>
      </div>
      {Object.keys(searchParams)?.length > 0 && (
        <div className={styles.card}>
          <div className={styles.filteredItemHeader}>
            <h1 className={styles.title}>فیلتر ها</h1>
            <button
              onClick={() => router.push("/products")}
              className={styles.removeAll}
            >
              <TrashOutline className={styles.trashIcon} />
              <span>حذف همه</span>
            </button>
          </div>
          <div className={styles.filteredItems}>
            {Object.keys(searchParams)?.map((key) => (
              <button key={key} className={styles.filteredItem}>
                <span onClick={() => removeFilter(key)}>
                  <CloseIcon className={styles.removeIcon} />
                </span>
                <span className={styles.removeFiltredItemText}>
                  {searchParams[key]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className={styles.card}>
        <h1 className={styles.title}>انتخاب مدل دستگاه</h1>
        <SelectBox
          label="دستگاه ها"
          menuItems={listApplicableDevicesSelectItem}
          onChange={(e) => handleFilter({ applicableDevices: e.target.value })}
        />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>دسته بندی محصول</h1>
        <div className={styles.selectContainer}>
          <div
            className={styles.selectItem}
            onClick={() => handleFilter({ subCategory: "toner" })}
          >
            <div className={styles.selectStart}>
              <span>تونر</span>
            </div>
            <CheckBox
              className={`${styles.selectItemCheckBox} ${
                searchParams?.subCategory === "toner"
                  ? styles.selectItemCheckBoxActive
                  : ""
              }`}
            />
          </div>
          <div
            className={styles.selectItem}
            onClick={() => handleFilter({ subCategory: "developer" })}
          >
            <div className={styles.selectStart}>
              <span>دولوپر</span>
            </div>
            <CheckBox
              className={`${styles.selectItemCheckBox} ${
                searchParams?.subCategory === "developer"
                  ? styles.selectItemCheckBoxActive
                  : ""
              }`}
            />
          </div>
          <div
            className={styles.selectItem}
            onClick={() => handleFilter({ subCategory: "unit" })}
          >
            <div className={styles.selectStart}>
              <span>درام یونیت</span>
            </div>
            <CheckBox
              className={`${styles.selectItemCheckBox} ${
                searchParams?.subCategory === "unit"
                  ? styles.selectItemCheckBoxActive
                  : ""
              }`}
            />
          </div>
          <div
            className={styles.selectItem}
            onClick={() => handleFilter({ subCategory: "sparePart" })}
          >
            <div className={styles.selectStart}>
              <span>قطعات</span>
            </div>
            <CheckBox
              className={`${styles.selectItemCheckBox} ${
                searchParams?.subCategory === "sparePart"
                  ? styles.selectItemCheckBoxActive
                  : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
