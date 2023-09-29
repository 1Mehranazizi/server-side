import { toastNoti } from "./toasNoti";

export const handleEmptyError = (data, requiredItems, starField) => {
  let emptyItem = false;
  Object.keys(data).map((key) => {
    if (data[key] === "" || data[key] == [] || data[key] == {}) {
      if (requiredItems.includes(key)) {
        emptyItem = true;
      }
    }
  });
  if (emptyItem) {
    toastNoti(
      "error",
      starField
        ? "لطفا فیلدهای ستاره دار را وارد کنید"
        : "لطفا تمامی فیلدها را پر کنید"
    );
  }
  return emptyItem;
};
