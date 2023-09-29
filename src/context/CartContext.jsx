"use client";

import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "@/services/axiosInstance";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getCart();
  }, [refresh]);

  const getCart = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("shop/myShoppingCart");
      setCart(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, loading, setRefresh, refresh }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
