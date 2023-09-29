import React from "react";

const OrderStatus = ({ status }) => {
  switch (status) {
    case "InShoppingCart":
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-secondaryColor text-primaryTextButton">
          در سبد خرید
        </span>
      );
    case "SubmittedWaitingPay":
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-infoColor text-primaryTextButton">
          منتظر پرداخت
        </span>
      );
    case "PaymentWindowExpired":
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-errorColor text-primaryTextButton">
          اتمام مهلت پرداخت
        </span>
      );
    case "OnlinePaymentWindowExpired":
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-errorColor text-primaryTextButton">
          اتمام مهلت پرداخت
        </span>
      );
    case "PaidWaitingPackaging":
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-infoColor text-primaryTextButton">
          درحال بسته بندی
        </span>
      );
    case "PackagedWaitingSending":
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-secondaryColor text-primaryTextButton">
          آماده ارسال
        </span>
      );
    case "SentWaitingDelivering":
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-primaryColor text-primaryTextButton">
          ارسال شده
        </span>
      );
    case "Delivered":
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-successColor text-primaryTextButton">
          دریافت شده
        </span>
      );
    default:
      return <></>;
  }
};

export default OrderStatus;
