import { Skeleton, Stack, Text } from "@mantine/core";
import { WorksList } from "../components/WorksList/WorksList";
import { useWorks } from "../hooks/useWorks";

export const Works = () => {
  const { getWorks } = useWorks();
  const { isLoading, error, data } = getWorks();

  if (isLoading) {
    return (
      <Stack spacing="sm">
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </Stack>
    );
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return <WorksList works={data!} />;
};
