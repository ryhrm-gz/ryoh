import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import YouTube from "react-youtube";
import { Box, Group, Text, Loader } from "@mantine/core";
import { Heading } from "./Heading";
import style from "../style/Youtube.module.css";

type WorksRes = {
  title: string;
  name: string;
  releasedAt: string;
  url: string;
  role: string;
};

export const WorksDetail = ({ id }: { id: string | undefined }) => {
  const { data, error } = useSWR<WorksRes>(
    `https://ryoh.microcms.io/api/v1/works/${id}?fields=title%2Cname%2CreleasedAt%2Curl%2Crole`,
    fetcher
  );

  if (error) return <div>Error</div>;
  if (!data) return <Loader color="gray" size="sm" variant="bars" />;

  const d = new Date(data.releasedAt);
  const release = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;

  const youtubeId = data.url.split("/")[3];

  return (
    <Group direction="column" style={{ width: "100%" }}>
      <Box style={{ width: "100%" }}>
        <Box>
          <Heading text={data.title} />
          <Text size="xs" weight={900} style={{ color: "#888" }}>
            {release}
          </Text>
          <Text size="xs" weight={900} style={{ color: "#888" }}>
            {data.role}
          </Text>
          <Text size="xs" weight={900} style={{ color: "#888" }}>
            {data.name}
          </Text>
        </Box>
        <Box mt="10px">
          <YouTube
            videoId={youtubeId}
            className={style.iframe}
            iframeClassName={style.youtube}
          />
        </Box>
      </Box>
    </Group>
  );
};
