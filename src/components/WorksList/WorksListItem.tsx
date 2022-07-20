import { Anchor, Card, Group, Text } from "@mantine/core";
import { MicroCmsWork } from "../../hooks/useWorks";

type Props = {
  work: MicroCmsWork;
};

export const WorksListItem = ({ work }: Props) => {
  return (
    <Card p="sm">
      <Text>{work.title}</Text>
      <Text size="xs">{work.content_name}</Text>
      <Text size="xs" color="dimmed" mt="sm">
        {work.role}
      </Text>
      <Text size="xs" color="dimmed">
        {new Date(work.released_at!).toLocaleDateString("ja-JP")}
      </Text>
      <Anchor size="xs" href={work.url}>
        details
      </Anchor>
    </Card>
  );
};
