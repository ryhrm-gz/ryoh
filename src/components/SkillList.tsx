import useSWR from "swr";
import { MictoCmsRes } from "../utils/microcms";
import { fetcher } from "../utils/fetcher";
import { Box, Group, Text, Loader } from "@mantine/core";
import { Heading } from "./Heading";

type SkillList = {
  title: string;
  startedAt: string;
};

const SkillItem = ({ title, startedAt }: SkillList) => {
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

export const SkillList = () => {
  const { data, error } = useSWR<MictoCmsRes<SkillList>>(
    "https://ryoh.microcms.io/api/v1/skill?fields=title%2CstartedAt",
    fetcher
  );

  if (error) return <div>Error</div>;
  if (!data) return <Loader color="gray" size="sm" variant="bars" />;
  console.log(data);

  return (
    <Group direction="column">
      <Heading text="スキル" />
      {data.contents.map((item) => (
        <SkillItem key={item.title} {...item} />
      ))}
    </Group>
  );
};
