import axios from "axios";
import eventBus from "@/plugins/eventBus";

export default (axiosOptions: any = {}, withoutAuthorization: any = false) => {
  const defaultOptions = {
    baseURL: process.env.VUE_APP_BASE_URL + `/api`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "",
      "Sector-id": "",
    },
  };

  if (process.env.VUE_APP_SECTOR_ID !== "") {
    defaultOptions.headers["Sector-id"] = process.env.VUE_APP_SECTOR_ID ?? "";
  }

  const accessToken = "";
  const options = { ...defaultOptions, ...axiosOptions };
  if (!withoutAuthorization) {
    options.headers.Authorization = "Bearer " + accessToken;
  }

  return axios.create(options);
};
