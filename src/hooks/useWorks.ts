import { useQuery } from "@tanstack/react-query";
import { fetchMicroCms, MicroCmsResponse } from "../utils/microcms";

const WORKS_QUERY =
  "works?fields=id%2Ctitle%2Creleased_at%2Crole%2Curl%2Ccontent_name&limit=70";

export interface MicroCmsWork {
  id?: string;
  title?: string;
  content_name?: string;
  released_at?: string;
  url?: string;
  role?: string;
}

export const useWorks = () => {
  const getWorks = () => {
    return useQuery(["works"], () =>
      fetchMicroCms<MicroCmsResponse<MicroCmsWork>>(WORKS_QUERY)
    );
  };

  return {
    getWorks,
  };
};
