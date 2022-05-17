export const apiKey = import.meta.env.VITE_MICROCMS_APIKEY;

export type MictoCmsRes<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
