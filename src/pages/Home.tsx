import { Divider, Stack } from "@mantine/core";
import { MyLinks } from "../components/MyLinks/MyLinks";
import { NavLinks } from "../components/NavLinks/NavLinks";

export const Home = () => {
  return (
    <Stack spacing="xl">
      <Divider />
      <MyLinks />
      <Divider />
      <NavLinks />
    </Stack>
  );
};
