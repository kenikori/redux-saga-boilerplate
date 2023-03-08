import { Store } from "@reduxjs/toolkit";
import Axios from "axios";

import { IGlobalStore } from "../redux/root-reducer";

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
      const newConfig = config;
      const globalStore: IGlobalStore = store.getState();

      if (globalStore.user.user?.email) {
        newConfig.headers.Authorization = `${globalStore.user.user?.email}`;
      }

      return newConfig;
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
      return Promise.reject(new Error("Internet connection error."));
    }

    if (error.response.data.message) {
      return Promise.reject(new Error(error.response.data.message));
    }

    return Promise.reject(
      new Error(`Internet connection error. (${error.response.status})`)
    );
  }
);

export default networking;
