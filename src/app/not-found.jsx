import ArrowDown from "@/icons/ArrowDown";
import NotFound from "@/icons/NotFound";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-2">
      <h1 className="text-xl text-textColor font-bold mt-8">
        صفحه‌ای که دنبال آن بودید پیدا نشد!
      </h1>
      <Link href="/products" className="flex items-center mt-4 rounded-6px text-primaryColor">
        <span>فروشگاه</span>
        <ArrowDown className="w-[18px] h-[18px] fill-primaryColor rotate-90" />
      </Link>
      <NotFound className="w-full laptop:w-[700px]" />
    </div>
  );
};

export default NotFoundPage;
