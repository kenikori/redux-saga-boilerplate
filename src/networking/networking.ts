import Axios from "axios";
import { Store } from "redux";

const networking = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  responseType: "json",
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const setupAxios = (store: Store) => {
  networking.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => Promise.reject(err)
  );
};

networking.interceptors.response.use(
  (response) => {
    return new Promise((resolve) => {
      resolve(response);
    });
  },
  async (error: {
    response?: { status: number; data: { message: string } };
  }) => {
    if (!error.response) {
      return Promise.reject({ message: "Internet connection error." });
    }

    if (error.response && error.response.data && error.response.data.message) {
      return Promise.reject({ message: error.response.data.message });
    }

    return Promise.reject({
      message: "Internet connection error. (" + error.response.status + ")",
    });
  }
);

export default networking;
