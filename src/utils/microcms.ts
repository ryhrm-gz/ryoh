export const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY as string;
export const SERVICE_DOMAIN = import.meta.env
  .VITE_MICROCMS_SERVICE_DOMAIN as string;

export interface MicroCmsResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
