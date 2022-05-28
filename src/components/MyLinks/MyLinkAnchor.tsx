import { Anchor } from "@mantine/core";
import { MyLink } from "../../utils/myLinks";

type Props = {
  link: MyLink;
};

export const MyLinkAnchor = ({ link }: Props) => {
  return (
    <Anchor size="lg" color="gray" href={link.url} target="_blank">
      {link.label}
    </Anchor>
  );
};
