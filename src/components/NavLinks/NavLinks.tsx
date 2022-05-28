import { Group, MantineSize, Stack } from "@mantine/core";
import { useLocation } from "@tanstack/react-location";
import { navLinks } from "../../utils/navLinks";
import { NavLinkAnchor } from "./NavLinkAnchor";

type Props = {
  size?: MantineSize;
  direction?: "row" | "column";
};

export const NavLinks = ({ size, direction }: Props) => {
  const location = useLocation();
  const Wrapper = direction === "row" ? Group : Stack;
  return (
    <Wrapper>
      {navLinks.map((link) =>
        location.current.pathname !== link.path ? (
          <NavLinkAnchor size={size ?? "lg"} key={link.label} link={link} />
        ) : (
          <></>
        )
      )}
    </Wrapper>
  );
};
