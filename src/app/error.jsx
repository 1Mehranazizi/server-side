"use client";

import React, { useEffect } from "react";
import WarningIcon from "@/icons/WarningIcon";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-7xl mx-auto px-2 min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <WarningIcon className="w-[100px] h-[100px] opacity-75" />
        <h1 className="text-subTitleColor text-2xl laptop:text-4xl font-bold mt-2 text-center">
          خطا دربرقراری ارتباط!
        </h1>
        <p className="text-textColor mt-2">
          لطفا از اتصال اینترنت خود مطمعن شوید و دوباره تلاش کنید
        </p>
        <button
          className="px-6 py-2.5 bg-primaryColor text-primaryTextButton mt-4 rounded-6px"
          onClick={reset}
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}
