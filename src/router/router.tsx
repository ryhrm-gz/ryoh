import { Route, ReactLocation } from "@tanstack/react-location";
import { queryClient } from "../components/App";
import { fetchWorksUrl } from "../hooks/useWorks";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Works } from "../pages/Works";
import { fetchMicroCms } from "../utils/microcms";

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "about", element: <About /> },
  {
    path: "works",
    element: <Works />,
    loader: () =>
      queryClient.getQueryData(["works"]) ??
      queryClient.fetchQuery(["works"], () => fetchMicroCms(fetchWorksUrl)),
  },
];
