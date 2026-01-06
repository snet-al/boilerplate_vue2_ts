import axios from "axios";
import eventBus from "@/plugins/eventBus";

export default (axiosOptions: any = {}, withoutAuthorization: any = false) => {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_BASE_URL + `/api`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "",
      "Sector-id": "",
    },
  };

  if (import.meta.env.VITE_SECTOR_ID !== "") {
    defaultOptions.headers["Sector-id"] = import.meta.env.VITE_SECTOR_ID ?? "";
  }

  const accessToken = "";
  const options = { ...defaultOptions, ...axiosOptions };
  if (!withoutAuthorization) {
    options.headers.Authorization = "Bearer " + accessToken;
  }

  return axios.create(options);
};

