import { Group, MantineSize, MantineSizes, Stack } from "@mantine/core";
import { useLocation } from "@tanstack/react-location";
import { navLinks } from "../../utils/navLinks";
import { NavLinkAnchor } from "./NavLinkAnchor";

type Props = {
  size?: MantineSize;
  direction?: "row" | "column";
};

export const NavLinks = ({ size, direction }: Props) => {
  const location = useLocation();
  return (
    <Group direction={direction ?? "column"}>
      {navLinks.map((link) =>
        location.current.pathname !== link.path ? (
          <NavLinkAnchor size={size ?? "lg"} key={link.label} link={link} />
        ) : (
          <></>
        )
      )}
    </Group>
  );
};
