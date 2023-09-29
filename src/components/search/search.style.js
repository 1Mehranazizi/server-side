export const styles = {
  container: "relative",
  searchBox: "flex items-center p-2 bg-inputColor rounded-6px laptop:w-[300px]",
  searchInput: "border-none outline-none bg-transparent flex-1 font-yekanbakh",
  searchButton:
    "cursor-pointer fill-iconColor transition hover:fill-primaryColor",
  searchIcon: "w-[20px] h-[20px]",
  searchMenu:
    "z-30 rounded-6px p-4 absolute w-full top-10 bg-cardColor shadow-lg",
  searchMenuOpen: "opacity-100 visible",
  searchMenuClose: "opacity-0 invisible",
  loadingContainer: "flex justify-center items-center",
  loadingText: "text-subTitleColor",
  itemsContainer: "flex flex-col gap-4",
  item: "flex items-center gap-2 px-4 py-2 transition hover:bg-pageColor",
  image: "w-[50px] h-[50px] rounded-6px product-image",
  col: "flex flex-col",
  name: "text-textColor font-yekanbakh",
  category: "text-primaryColor font-yekanbakh",
  notFoundContainer: "flex justify-center items-center",
  notFound: "text-subTitleColor",
};
