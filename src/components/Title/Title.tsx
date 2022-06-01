import { Avatar, Group, Stack, Text } from "@mantine/core";
import { useLocation } from "@tanstack/react-location";
import ProfileImg from "../../assets/profile.png";
import { NavLinks } from "../NavLinks/NavLinks";

export const Title = () => {
  const location = useLocation();
  const home = location.current.pathname === "/";
  return (
    <Group mt={home ? 30 : 0} py={12} position="apart">
      <Group>
        <Avatar radius="xl" src={ProfileImg} size={home ? "md" : "sm"} />
        <Stack spacing={0}>
          <Text weight={700}>Ryo Hirama</Text>
          {home && (
            <Text size="sm">
              A music content creator, and a software developer.
            </Text>
          )}
        </Stack>
      </Group>
      {!home && <NavLinks size="sm" direction="row" />}
    </Group>
  );
};
