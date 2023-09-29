"use client";

import React, { useContext, useState } from "react";
import { styles } from "./checkout.styles";
import NewAddress from "@/components/profile/newAddress/NewAddress";
import { AuthContext } from "@/context/AuthContext";
import AddressBox from "@/components/checkout/addressBox/AddressBox";
import { CartContext } from "@/context/CartContext";
import ProductChecout from "@/components/checkout/product/ProductChecout";
import CheckoutCard from "@/components/checkout/checkout/CheckoutCard";
import CheckoutPDF from "@/components/checkout/checoutPDF/CheckoutPDF";
import Link from "next/link";
import Accordion from "@/components/shared/accordion/Accordion";
import HelpIcon from "@/icons/HelpIcon";

const CheckoutPage = () => {
  const [addressForFactorId, setAddressForFactorId] = useState("");
  const [addressForDeliveryId, setAddressForDeliveryId] = useState("");
  const { user, refresh, setRefresh } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <div className={styles.infoContainer}>
            <div className={styles.header}>
              <h1 className={styles.headerTitle}>مشخصات کاربر</h1>
              <Link href="/profile/personal-info" className={styles.link}>
                ویرایش مشخصات
              </Link>
            </div>
            <div className={styles.userInfo}>
              <div className={styles.infoRow}>
                <p className={styles.infoTitle}>نام :</p>
                <p className={styles.infoValue}>{user?.firstName}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoTitle}>نام خانوادگی :</p>
                <p className={styles.infoValue}>{user?.lastName}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoTitle}>شماره تماس :</p>
                <p className={styles.infoValue}>{user?.phoneNumber}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoTitle}>ایمیل :</p>
                <p className={`${styles.infoValue} font-yekanbakh`}>
                  {user?.email}
                </p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoTitle}>نام شرکت :</p>
                <p className={styles.infoValue}>{user?.companyName}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoTitle}>تلفن ثابت :</p>
                <p className={styles.infoValue}>{user?.landLinePhoneNumber}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoTitle}>نوع کاربر :</p>
                <p className={styles.infoValue}>
                  {user?.customerType === "Human" ? "حقیقی" : "حقوقی"}
                </p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoTitle}>
                  {user?.customerType === "Human" ? "کد ملی" : "شناسه ملی"} :
                </p>
                <p className={styles.infoValue}>
                  {user?.customerType === "Human"
                    ? user?.nationalHumanID
                    : user?.nationalCompanyID}
                </p>
              </div>
              {user?.customerType !== "Human" && (
                <div className={styles.infoRow}>
                  <p className={styles.infoTitle}>کد اقتصادی :</p>
                  <p className={styles.infoValue}>{user?.economicCode}</p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.header}>
              <h1 className={styles.headerTitle}>انتخاب آدرس</h1>
              <NewAddress
                addresses={user?.addresses}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            </div>
            <div className={styles.addressContainer}>
              <Accordion
                title={<span className={styles.addressTitle}>آدرس فاکتور</span>}
              >
                {user?.addresses?.map((address) => (
                  <AddressBox
                    address={address}
                    key={address._id}
                    setAddress={setAddressForFactorId}
                    selectedAddress={addressForFactorId}
                  />
                ))}
              </Accordion>
            </div>
            <div className={styles.addressContainer}>
              <Accordion
                title={<span className={styles.addressTitle}>آدرس ارسال</span>}
              >
                {user?.addresses?.map((address) => (
                  <AddressBox
                    address={address}
                    key={address._id}
                    setAddress={setAddressForDeliveryId}
                    selectedAddress={addressForDeliveryId}
                  />
                ))}
              </Accordion>
            </div>
            <div className={styles.sendDescriptionBox}>
              <HelpIcon className={styles.sDIcon} />
              <p className={styles.sDText}>
                شیوه ی ارسال و هماهنگی بعد از آماده سازی سفارش با مشتری انجام
                خواهد شد. هزینه ی ارسال بسته به ابعاد بسته و شیوه ی ارسال متفاوت
                است و جداگانه محاسبه می شود و بر عهده ی مشتری می باشد.
              </p>
            </div>
          </div>
          <div>
            <h1 className={styles.headerTitle}>محصولات</h1>
            <div className={styles.productContainer}>
              {cart?.orderItems?.map((product) => (
                <ProductChecout key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <CheckoutCard
          totalSellingPrices={cart?.totalSellingPrices}
          totalSellingPricesWithDiscount={cart?.totalSellingPricesWithDiscount}
          addressForDeliveryId={addressForDeliveryId}
          addressForFactorId={addressForFactorId}
          action={<CheckoutPDF />}
        />
      </main>
    </div>
  );
};

export default CheckoutPage;
