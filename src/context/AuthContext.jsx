"use client";

import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "@/services/axiosInstance";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, [refresh]);

  const getUserInfo = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/userManagement/me");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, refresh, setRefresh }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
