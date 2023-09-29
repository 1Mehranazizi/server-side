"use client";

import AddressItem from "@/components/profile/addressItem/AddressItem";
import NewAddress from "@/components/profile/newAddress/NewAddress";
import { AuthContext } from "@/context/AuthContext";
import { checkLoggedin } from "@/utils/checkLoggeding";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import ProfileLoadingPage from "../loading";
import { styles } from "./addressesPage.style";

const AddressPage = () => {
  const { user, loading, refresh, setRefresh } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!checkLoggedin()) {
      router.push("/auth/login");
    }
  }, [router]);

  if (loading) return <ProfileLoadingPage />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>آدرس ها</h2>
        <NewAddress
          addresses={user?.addresses}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </div>
      <div className={styles.addresses}>
        {user?.addresses?.map((address) => (
          <AddressItem key={address._id} address={address} />
        ))}
      </div>
    </div>
  );
};

export default AddressPage;
