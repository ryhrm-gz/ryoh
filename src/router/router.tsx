import { Route, ReactLocation } from "@tanstack/react-location";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Works } from "../pages/Works";

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
  },
];
