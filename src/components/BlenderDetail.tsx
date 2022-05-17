import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { Box, Group, Text, Loader, Image, Anchor } from "@mantine/core";
import { Heading } from "./Heading";

type BlenderRes = {
  title: string;
  images: {
    fieldId: string;
    name: string;
    image: {
      url: string;
      height: number;
      width: number;
    };
  }[];
  makedAt: string;
  ref: {
    fieldIt: "ref";
    url: string;
  }[];
  feelings: string;
};

export const BlenderDetail = ({ id }: { id: string | undefined }) => {
  const { data, error } = useSWR<BlenderRes>(
    `https://ryoh.microcms.io/api/v1/blender/${id}?fields=title%2Cimages%2CmakedAt%2Cref%2Cfeelings`,
    fetcher
  );

  if (error) return <div>Error</div>;
  if (!data) return <Loader color="gray" size="sm" variant="bars" />;

  const d = new Date(data.makedAt);
  const makedAt = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;

  return (
    <Group direction="column">
      <Heading text={data.title} />
      <Text size="xs" weight={900} style={{ color: "#888" }}>
        {makedAt}
      </Text>
      {data.images.map((item) => (
        <Image src={`${item.image.url}?w=780&q=100&`} />
      ))}
      <Text size="xs" weight={900} style={{ color: "#888" }}>
        {data.feelings}
      </Text>
      <Text size="sm" weight={900} style={{ color: "#555" }}>
        Reference
      </Text>
      {data.ref.map((item) => (
        <Anchor href={item.url} size="xs">
          {item.url}
        </Anchor>
      ))}
    </Group>
  );
};
