const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY as string;
const SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN as string;
const MICROCMS_URL = `https://${SERVICE_DOMAIN}.microcms.io/api/v1`;

export interface MicroCmsResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface MicroCmsWork {
  id?: string;
  title?: string;
  content_name?: string;
  released_at?: string;
  url?: string;
  role?: string;
}

export const fetchMicroCms = async <T>(
  url: string
): Promise<MicroCmsResponse<T>> => {
  const response = await fetch(`${MICROCMS_URL}/${url}`, {
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
  });
  const json = await response.json();
  return json;
};
