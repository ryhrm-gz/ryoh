import { apiKey } from "./microcms";

export const fetcher = (url: string): Promise<any> =>
  fetch(url, { headers: { "X-MICROCMS-API-KEY": apiKey } }).then((res) =>
    res.json()
  );
