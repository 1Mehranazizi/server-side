"use client";

import React from "react";

const CheckoutPDF = () => {
  const handlePrint = () => {
    if (typeof window !== undefined) {
      window.print();
    }
  };

  return (
    <button
      onClick={handlePrint}
      className="w-full py-2 rounded-6px bg-secondaryColor text-primaryTextButton transition hover:opacity-75"
    >
      دانلود پیش فاکتور
    </button>
  );
};

export default CheckoutPDF;
