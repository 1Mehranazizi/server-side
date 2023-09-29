export const styles = {
  container:
    "flex flex-col gap-4 overflow-y-auto h-screen laptop:h-fit pb-8 laptop:pb-0",
  card: "p-4 rounded-6px bg-cardColor",
  searchBox: "bg-inputColor rounded-6px flex items-center",
  searchInput:
    "bg-transparent outline-none border-none text-textColor w-4/5 px-4 py-2 text-sm laptop:text-md",
  searchButton:
    "px-4 py-2 h-full bg-primaryColor fill-primaryTextButton rounded-6px transition-all hover:opacity-75",
  searchIcon: "w-[24px] h-[24px]",
  title: "text-textColor font-bold mb-4",
  selectContainer: "flex flex-col gap-2",
  selectItem:
    "flex items-center justify-between cursor-pointer text-textColor transition hover:text-primaryColor fill-iconColor hover:fill-primaryColor",
  selectStart: "flex items-center gap-2",
  selectItemIcon: "rounded-full",
  selectItemCheckBox: "w-[24px] h-[24px] rounded-full transition",
  selectItemCheckBoxActive: "bg-primaryColor fill-primaryTextButton",
  colorBox: "w-[22px] h-[22px] rounded-full inline-block",
  priceRange: "flex items-center justify-between",
  priceText: "text-textColor",
  priceItem: "flex items-center gap-2",
  priceInput:
    "bg-inputColor outline-none border-none rounded-6px text-textColor px-4 py-2 w-[100px]",
  priceButton:
    "w-full py-2 rounded-6px bg-primaryColor text-primaryTextButton text-center mt-4 transition hover:opacity-75",
  openFilter: "flex items-center text-textColor gap-2 laptop:hidden",
  openFilterIcon: "w-[24px] h-[24px] fill-iconColor",
  filteredItemHeader: "flex items-center justify-between",
  removeAll: "flex items-center gap-2 fill-errorColor text-errorColor mb-4",
  trashIcon: "w-[20px] h-[20px]",
  filteredItems: "flex items-center gap-4 flex-wrap",
  filteredItem:
    "flex items-center gap-2 bg-pageColor text-textColor p-2 rounded-6px fill-iconColor",
  removeIcon: "w-[24px] h-[24px]",
  removeFiltredItemText: "font-yekanbakh",
};
