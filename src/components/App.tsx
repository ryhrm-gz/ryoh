import { MantineProvider } from "@mantine/core";
import { Router, Outlet } from "@tanstack/react-location";
import { location, routes } from "../router";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        fontFamily: "'Zen Maru Gothic', sans-serif;",
      }}
    >
      <Router location={location} routes={routes}>
        <Layout>
          <Outlet />
        </Layout>
      </Router>
    </MantineProvider>
  );
};
