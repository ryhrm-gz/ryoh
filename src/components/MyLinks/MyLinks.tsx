import { Stack } from "@mantine/core";
import { myLinks } from "../../utils/myLinks";
import { MyLinkAnchor } from "./MyLinkAnchor";

export const MyLinks = () => {
  return (
    <Stack>
      {myLinks.map((link) => (
        <MyLinkAnchor key={link.label} link={link} />
      ))}
    </Stack>
  );
};
