import useSWR from "swr";
import { MictoCmsRes } from "../lib/microcms";
import { fetcher } from "../lib/fetcher";
import { Box, Group, Image, Anchor, Loader } from "@mantine/core";
import { Link } from "react-router-dom";

type BlenderList = {
  id: string;
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
};

const BlenderItem = ({ id, title, images }: BlenderList) => {
  const imgSrc = images[0].image.url + "?fit=crop&w=370&h=370";
  return (
    <Box style={{ width: "45%" }}>
      <Image
        src={imgSrc}
        alt={title}
        width="100%"
        sx={() => ({
          "&:hover": {
            margin: "-4px",
            border: "4px solid #c21500",
            borderImage: "linear-gradient(65deg, #4c6ef5 0%, #15aabf 100%)",
            borderImageSlice: 1,
          },
        })}
      />
    </Box>
  );
};

export const BlenderList = () => {
  const { data, error } = useSWR<MictoCmsRes<BlenderList>>(
    "https://ryoh.microcms.io/api/v1/blender?fields=id%2Ctitle%2Cimages%2C",
    fetcher
  );

  if (error) return <div>Error</div>;
  if (!data) return <Loader color="gray" size="sm" variant="bars" />;

  return (
    <Group position="center" grow>
      {data.contents.map((item) => (
        <BlenderItem key={item.title} {...item} />
      ))}
    </Group>
  );
};
