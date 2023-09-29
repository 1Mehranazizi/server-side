export const getJwtToken = () => {
  const refresh_jwt = localStorage.getItem("Refresh-JWT");
  return refresh_jwt;
};

export const getRefreshToken = () => {
  const refresh_token = localStorage.getItem("refresh-token");
  return refresh_token;
};

export const updateJwtToken = (token) => {
  localStorage.setItem("Refresh-JWT", token);
};

export const removeToken = () => {
  localStorage.removeItem("Refresh-JWT");
  localStorage.removeItem("refresh-token");
};
