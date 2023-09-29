export const styles = {
  card: "p-2 bg-cardColor rounded-6px transition hover:translate-y-[-5px] flex flex-col laptop:h-[300px] h-[400px]",
  image: "w-full rounded-6px laptop:h-[150px] h-[250px] product-image object-fit",
  imageBox: "relative",
  body: "mt-2 flex flex-col",
  title: "text-textColor font-yekanbakh",
  brand: "text-xs text-subTitleColor font-Arial",
  footer: "mt-auto flex items-center justify-between",
  prices: "flex flex-col",
  Oldprice: "text-subTitleColor line-through",
  price: "text-errorColor font-bold text-lg",
  rateContainer:
    "mt-2 flex items-center justify-end gap-1 text-textColor fill-secondaryColor",
  star: "w-[20px] h-[20px]",
  colors: "absolute bottom-2 right-2 flex items-center gap-2",
  color: "inline-block w-[16px] h-[16px] rounded-full",
  button:
    "w-[30px] h-[30px] flex items-center justify-center rounded-full fill-primaryColor bg-disablePrimary transition hover:bg-primaryColor hover:fill-primaryTextButton",
  iconButton: "w-[20px] h-[20px] rotate-90",
};
