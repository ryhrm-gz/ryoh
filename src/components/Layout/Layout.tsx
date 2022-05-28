import { Container, Group, Stack, Text } from "@mantine/core";
import { Title } from "../Title/Title";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Container size="sm">
      <Stack spacing="xl">
        <Title />

        {children}
      </Stack>
      <Group position="center" mt={100}>
        <Text size="xs" color="#444">
          Copyright © 2022 Ryo Hirama.
        </Text>
      </Group>
    </Container>
  );
};
