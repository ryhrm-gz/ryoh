const apiKey = "0ddd34b43cdd4b939968e90ab3246091b266";

type MictoCmsRes<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export { apiKey };
export type { MictoCmsRes };
