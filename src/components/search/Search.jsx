"use client";

import React, { useEffect, useRef, useState } from "react";
import { styles } from "./search.style";
import SearchIcon from "@/icons/SearchIcon";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wrapperRef = useRef("search");

  useEffect(() => {
    setItems([]);
    setOpen(false);
    setSearch("");
  }, [pathname]);

  function useClickOutside(ref, onClickOutside) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }
  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    if (search.trim()) {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/shop/items?limit=4&offset=0&name=${search}`
        );
        setItems(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setItems([]);
    }
  };

  return (
    <div className={styles.container} ref={wrapperRef}>
      <div className={styles.searchBox} onClick={() => setOpen(!open)}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="جستجو..."
          onChange={handleSearch}
          value={search}
        />
        <span className={styles.searchButton}>
          <SearchIcon className={styles.searchIcon} />
        </span>
      </div>
      <div
        className={`${styles.searchMenu} ${
          open ? styles.searchMenuOpen : styles.searchMenuClose
        }`}
      >
        {loading ? (
          <div className={styles.loadingContainer}>
            <p className={styles.loadingText}>درحال بارگذاری...</p>
          </div>
        ) : (
          <div className={styles.itemsContainer}>
            {items?.length > 0 ? (
              items?.map((item) => (
                <Link
                  href={`/products/${item._id}`}
                  className={styles.item}
                  key={item._id}
                >
                  <Image
                    width={50}
                    height={50}
                    src={item.primaryImage}
                    alt={item.name}
                    className={styles.image}
                  />
                  <div className={styles.col}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.category}>{item.subCategory}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className={styles.notFoundContainer}>
                <p className={styles.notFound}>محصولی یافت نشد</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
