import { apiKey } from "./microcms";

console.log("apiKey", import.meta.env);

export const fetcher = (url: string): Promise<any> =>
  fetch(url, { headers: { "X-MICROCMS-API-KEY": apiKey } }).then((res) =>
    res.json()
  );
