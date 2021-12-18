import { Text } from "@mantine/core";

export const Heading = ({ text }: { text: string }) => (
  <Text
    size="lg"
    weight={900}
    variant="gradient"
    gradient={{ from: "indigo", to: "cyan", deg: 65 }}
  >
    {text}
  </Text>
);
