export const styles = {
  container: "p-4 bg-cardColor rounded-6px flex flex-col h-full",
  info: "flex flex-col items-center",
  name: "text-textColor font-bold mt-2",
  phone: "text-subTitleColor",
  list: "list-none flex flex-col gap-2 mt-4",
  listItem:
    "flex items-center gap-1 p-2 rounded-6px text-[#666] fill-iconColor transition hover:bg-disablePrimary hover:text-primaryColor hover:fill-primaryColor",
  itemActive: "bg-disablePrimary text-primaryColor fill-primaryColor",
  listIcon: "w-[18px] h-[18px]",
  logoutButton:
    "mt-4 laptop:mt-auto flex items-center gap-1 p-2 rounded-6px text-[#666] fill-errorColor transition hover:bg-disableError hover:text-errorColor",
};
