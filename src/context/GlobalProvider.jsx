import React from "react";
import CartProvider from "./CartContext";
import AuthProvider from "./AuthContext";

const GlobalProvider = ({ children }) => {
  return (
    <CartProvider>
      <AuthProvider>{children}</AuthProvider>
    </CartProvider>
  );
};

export default GlobalProvider;
