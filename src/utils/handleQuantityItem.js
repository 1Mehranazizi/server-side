import { toastNoti } from "./toasNoti";

export const handleQuantity = (type, max, total, setQuantity, quantity) => {
  console.log(max, total);
  if (type === "increase") {
    if (max < total) {
      if (quantity === max) {
        toastNoti(
          "error",
          `برای سفارش بیش از ${max} عدد با کارشناسان تماس بگیرید`
        );
        return;
      }
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity === total) {
        if (total === 0) {
          toastNoti("error", "محصول ناموجود است");
        } else {
          toastNoti(
            "error",
            `برای سفارش بیش از ${total} عدد با کارشناسان تماس بگیرید`
          );
        }

        return;
      }
      setQuantity((prev) => prev + 1);
      if (total === 0) {
        setQuantity(1);
      }
    }
  } else {
    setQuantity((prev) =>
      prev === 0 ? (prev === 0 ? 0 : prev - 1) : prev === 1 ? 1 : prev - 1
    );
  }
};
