import useSWR from "swr";
import { MictoCmsRes } from "../lib/microcms";
import { fetcher } from "../lib/fetcher";
import { Box, Group, Text, Anchor, Loader } from "@mantine/core";
import { Link } from "react-router-dom";

type WorksList = {
  id: string;
  title: string;
  releasedAt: string;
  role: string;
};

const WorksItem = ({ id, title, releasedAt, role }: WorksList) => {
  const d = new Date(releasedAt);
  const release = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;

  return (
    <Box>
      <Anchor
        component={Link}
        to={`/works/${id}`}
        style={{ textDecoration: "none" }}
        sx={() => ({
          "&:hover": {
            div: {
              backgroundImage:
                "linear-gradient(65deg, #4c6ef5 0%, #15aabf 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
          },
        })}
      >
        <Text size="sm" weight={900} color="gray">
          {title}
        </Text>
        <Text size="xs" weight={900} style={{ color: "#888" }}>
          {release}
        </Text>
        <Text size="xs" weight={900} style={{ color: "#888" }}>
          {role}
        </Text>
      </Anchor>
    </Box>
  );
};

export const WorksList = () => {
  const { data, error } = useSWR<MictoCmsRes<WorksList>>(
    "https://ryoh.microcms.io/api/v1/works?fields=id%2Ctitle%2CreleasedAt%2Crole",
    fetcher
  );

  if (error) return <div>Error</div>;
  if (!data) return <Loader color="gray" size="sm" variant="bars" />;

  return (
    <Group direction="column">
      {data.contents.map((item) => (
        <WorksItem key={item.title} {...item} />
      ))}
    </Group>
  );
};
