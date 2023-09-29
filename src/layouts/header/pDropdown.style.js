export const styles = {
  dropDownContainer: "relative",
  dropDownButton:
    "cursor-pointer flex items-center gap-1 text-textColor transition hover:text-primaryColor hover:fill-primaryColor fill-iconColor",
  dropDownBox:
    "absolute z-10 top-6 right-0 w-[600px] px-4 pt-4 rounded-6px bg-cardColor shadow-lg",
  dropDownBoxClose: "opacity-0 invisible",
  dropDownBoxOpen: "opacity-100 visible",
  title: "text-md font-bold text-textColor mb-4",
  linksContainer: "grid grid-cols-2 gap-2",
  linkItem:
    "p-2 rounded-6px bg-pageColor gap-2 flex items-center transition hover:bg-primaryColor text-textColor hover:text-primaryTextButton",
  iconBox: "p-2 rounded-6px bg-disablePrimary fill-primaryColor",
  allProducts: "pb-4 mt-4 flex items-center justify-end",
  allButton: "text-primaryColor px-3 py-1",
};
