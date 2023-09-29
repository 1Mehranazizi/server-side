export const checkHasDiscount = (sellingPrice, sellingPriceWithDiscount) => {
  let hasDiscount = false;
  if (sellingPrice > sellingPriceWithDiscount) {
    hasDiscount = true;
  }
  return hasDiscount;
};
