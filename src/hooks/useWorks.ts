import { useQuery } from "react-query";
import { fetchMicroCms } from "../utils/microCms";

export const fetchWorksUrl = "works?fields=id%2Ctitle%2Creleased_at%2Crole";

export const useWorks = () =>
  useQuery(["works"], () => fetchMicroCms(fetchWorksUrl));
