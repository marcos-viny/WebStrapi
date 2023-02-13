import axios from "axios";
import useSWR from "swr";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  responseType: "json",
  timeout: 35000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url);
    return response.data;
  });

  return { data, error };
}

export const Get = (url: string, config = {}, auth = true) => {
  return api.get(url, config);
};

export const Post = (url: string, body: any, config = {}, auth = true) => {
  return api.post(url, body, config);
};

export const Put = (url: string, body: any, config = {}, auth = true) => {
  return api.put(url, body, config);
};

export const Delete = (url: string, config = {}, auth = true) => {
  return api.delete(url, config);
};

// export const Delete = (url: string, body: any, config = {}, auth = true) => {
//   return api.delete(url, body);
// };
