import { url } from "./url";
import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
