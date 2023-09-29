import { getJwtToken } from "@/services/tokenService";

export const checkLoggedin = () => {
  let loggin = false;
  if (typeof window !== "undefined") {
    const token = getJwtToken();
    if (token) {
      loggin = true;
    }
  }
  return loggin;
};
