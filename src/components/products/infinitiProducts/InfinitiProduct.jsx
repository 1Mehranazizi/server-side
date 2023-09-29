"use client";

import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import ProductCard from "@/components/shared/productCard/ProductCard";
import Spinner from "./Spinner";
import { styles } from "./styles";

const InfinitiProducts = ({ data, searchParams }) => {
  const [products, setProducts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  useEffect(() => {
    setHasMore(true);
  }, [searchParams]);

  const getMorePost = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/shop/items?limit=6&offset=${
          products.length
        }&${new URLSearchParams(searchParams).toString()}`
      );
      if (res.data?.length > 0) {
        setProducts((prev) => [...prev, ...res.data]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={products.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={
          <h4 className={styles.notMore}>محصول دیگری برای نمایش وجود ندارد</h4>
        }
      >
        <div className={styles.container}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default InfinitiProducts;
