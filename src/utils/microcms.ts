const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY;
const SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const MICROCMS_URL = `https://${SERVICE_DOMAIN}.microcms.io/api/v1`;

export interface MicroCmsResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

export const fetchMicroCms = <T>(url: string) => {
  return fetch(`${MICROCMS_URL}/${url}`, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
  }).then((res) => res.json() as unknown as T);
};
