import { Anchor, MantineSize } from "@mantine/core";
import { Link } from "@tanstack/react-location";
import { NavLink } from "../../utils/navLinks";

type Props = {
  link: NavLink;
  size: MantineSize;
};

export const NavLinkAnchor = ({ link, size }: Props) => {
  return (
    <Anchor size={size} color="gray" component={Link} to={link.path}>
      {link.label}
    </Anchor>
  );
};
