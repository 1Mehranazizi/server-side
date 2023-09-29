export const styles = {
  container: "overflow-x-auto",
  table: "w-full table-auto text-sm text-textColor mb-4",
  header: "bg-pageColor font-bold",
  headerItem: "py-3 px-6 whitespace-nowrap text-center",
  bodyRow: "transition hover:bg-disablePrimary cursor-pointer",
  item: "px-6 py-4 whitespace-nowrap text-center",
  paginationContainer:
  "list-none flex items-center w-full justify-center gap-4",
  pageItemPrevNext:
  "w-[30px] h-[30px]  rounded-6px bg-disablePrimary cursor-pointer flex items-center justify-center fill-iconColor transition hover:fill-primaryTextButton hover:bg-primaryColor",
  pagItem:
  "w-[30px] h-[30px] text-center rounded-6px bg-disablePrimary cursor-pointer leading-7 text-subTitleColor transition hover:text-primaryTextButton hover:bg-primaryColor",
  activeItem:"w-[30px] h-[30px] text-center rounded-6px cursor-pointer leading-7 transition text-primaryTextButton bg-primaryColor",
  pagPrev: "w-[20px] h-[20px] rotate-[270deg]",
  pagNext: "w-[20px] h-[20px] rotate-90",
};
