import { MantineProvider, ScrollArea } from "@mantine/core";
import { Router, Outlet } from "@tanstack/react-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { location, routes } from "../router/router";
import { Layout } from "./Layout/Layout";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          fontFamily: "'Noto Sans JP', sans-serif;",
        }}
      >
        <Router location={location} routes={routes}>
          <ScrollArea style={{ height: "100vh" }}>
            <Layout>
              <Outlet />
            </Layout>
          </ScrollArea>
        </Router>
      </MantineProvider>
    </QueryClientProvider>
  );
};
