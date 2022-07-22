import { Skeleton, Stack, Text } from "@mantine/core";
import { WorksList } from "../components/WorksList/WorksList";
import { useWorks } from "../hooks/useWorks";

export const Works = () => {
  const { getWorks } = useWorks();
  const { isLoading, error, data } = getWorks();

  if (isLoading) {
    return (
      <Stack spacing="md" mt="lg">
        <Skeleton height={141} />
        <Skeleton height={141} />
        <Skeleton height={141} />
      </Stack>
    );
  }

  if (error) {
    return (
      <Text mt="lg" color="dimmed">
        Error
      </Text>
    );
  }

  return <WorksList works={data!} />;
};
