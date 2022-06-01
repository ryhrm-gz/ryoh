import { MantineProvider } from "@mantine/core";
import { Router, Outlet } from "@tanstack/react-location";
import { QueryClient, QueryClientProvider } from "react-query";
import { location, routes } from "../router/router";
import { Layout } from "./Layout/Layout";

export const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <Router location={location} routes={routes}>
          <Layout>
            <Outlet />
          </Layout>
        </Router>
      </QueryClientProvider>
    </MantineProvider>
  );
};
