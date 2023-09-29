import axios from "axios";

export const getList = async (url, setData) => {
  try {
    const response = await axios.get(url);
    setData(response.data);
  } catch (error) {
    setData([]);
  }
};
