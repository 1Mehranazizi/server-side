import { toast } from "react-hot-toast";

export const toastNoti = (type, message) => {
  return toast[type](message);
};
