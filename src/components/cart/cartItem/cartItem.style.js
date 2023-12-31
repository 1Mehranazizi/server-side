export const styles = {
  box: "p-4 rounded-6px bg-cardColor flex flex-col laptop:flex-row items-center justify-between",
  start: "flex gap-2 flex-col items-center laptop:flex-row",
  image: "rounded-6px product-image w-full laptop:w-[100px] laptop:h-[100px]",
  info: "flex flex-col",
  title: "text-textColor mb-2 font-yekanbakh font-medium",
  color: "flex items-center gap-2",
  colorShape: "inline-block w-[20px] h-[20px] rounded-full",
  end: "flex flex-col items-end",
  oldPrice: "text-subTitleColor line-through",
  newPrice: "text-errorColor font-bold",
  manageQuantity:
    "flex items-center gap-4 px-4 py-2 bg-pageColor rounded-6px text-textColor font-bold",
  add: "w-[24px] h-[24px] fill-primaryColor cursor-pointer",
  remove: "w-[22px] h-[22px] fill-errorColor cursor-pointer",
  cartItemSkeletContainer:
    "flex w-full overflow-hidden bg-cardColor rounded-lg shadow-lg animate-pulse",
  imageSkelet: "w-1/3 bg-inputColor",
  contentSkelet: "w-2/3 p-4 md:p-4",
  titleSkelet: "w-40 h-2 bg-inputColor rounded-lg",
  subtitleSkelet: "w-48 h-2 mt-4 bg-inputColor rounded-lg",
  contentRowSkelet: "flex mt-4 item-center gap-x-2",
  contentRowItemSkelet: "w-5 h-2 bg-inputColor rounded-lg",
  contentSkeletEnd: "flex justify-between mt-6 item-center",
  contentSkeletEndTitle: "w-10 h-2 bg-inputColor rounded-lg",
  contentSkeletEndAction: "h-4 bg-inputColor rounded-lg w-28",
  colors: "flex item-center gap-2 flex-wrap",
  aggregateQuantityContainer: "grid grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-4 gap-2",
  quantityBox: "flex flex-col items-center gap-2 mt-4",
};
