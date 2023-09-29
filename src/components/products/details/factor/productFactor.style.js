export const styles = {
  container: "p-4 flex flex-col gap-4 bg-pageColor rounded-6px h-fit",
  header: "text-xl text-textColor font-bold",
  row: "flex items-center justify-between",
  title: "text-textColor",
  status: "text-successColor",
  unavailableStatus: "text-errorColor",
  garanti: "text-primaryColor",
  price: "text-textColor",
  oldPrice: "line-through text-subTitleColor",
  newPrice: "text-errorColor font-bold",
  newPriceTitle: "text-textColor",
  finalPriceTitle: "text-textColor font-bold",
  finalPrice: "text-errorColor font-bold",
  border: "w-full border border-[#e8e8e8]",
  cartActions: "flex items-center gap-4",
  button:
    "flex-1 w-full py-2.5 rounded-6px bg-primaryColor transition hover:opacity-75 text-primaryTextButton disabled:bg-[#ddd] disabled:text-[#999]",
  manageQuantity:
    "flex items-center gap-4 p-2 bg-cardColor rounded-6px text-textColor font-bold",
  add: "w-[24px] h-[24px] fill-primaryColor cursor-pointer",
  remove: "w-[22px] h-[22px] fill-errorColor cursor-pointer",
};
