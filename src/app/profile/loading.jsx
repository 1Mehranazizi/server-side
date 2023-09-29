import Spinner from "@/components/products/infinitiProducts/Spinner";
import React from "react";

const ProfileLoadingPage = () => {
  return (
    <div className="w-full min-h-[50vh] flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default ProfileLoadingPage;
