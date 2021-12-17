import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { Box, Group, Text, Loader } from "@mantine/core";
import { Heading } from "./Heading";

type SkillList = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  startedAt: Date;
};

type MictoCmsRes = {
  contents: SkillList[];
  totalCount: number;
  offset: number;
  limit: number;
};

const SkillItem = ({
  title,
  startedAt,
}: {
  title: string;
  startedAt: Date;
}) => {
  const d = new Date(startedAt);
  const start = `${d.getFullYear()}`;
  return (
    <Box>
      <Text size="sm" weight={900} color="gray">
        {title}
      </Text>
      <Text size="xs" weight={900} style={{ color: "#888" }}>
        {start}~
      </Text>
    </Box>
  );
};

export const Skill = () => {
  const { data, error } = useSWR<MictoCmsRes>(
    "https://ryoh.microcms.io/api/v1/skill",
    fetcher
  );

  if (error) return <div>Error</div>;
  if (!data) return <Loader color="dark" size="sm" variant="bars" />;

  return (
    <Group direction="column">
      <Heading text="スキル" />
      {data.contents.map((item) => (
        <SkillItem
          key={item.title}
          title={item.title}
          startedAt={item.startedAt}
        />
      ))}
    </Group>
  );
};
