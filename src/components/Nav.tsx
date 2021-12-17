import { Group, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";

const NavWrapper = ({ nav }: { nav: { name: string; link: string } }) => (
  <Anchor
    transform="uppercase"
    component={Link}
    to={nav.link}
    weight={900}
    style={{ color: "#868E96", textDecoration: "none" }}
    sx={(theme) => ({
      "&:hover": {
        backgroundImage: "linear-gradient(65deg, #4c6ef5 0%, #15aabf 100%)",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      lineHeight: 1,
      fontSize: "40px",
      [theme.fn.largerThan("xs")]: { fontSize: "70px" },
    })}
  >
    {nav.name}
  </Anchor>
);

export const Nav = ({ nav }: { nav: { name: string; link: string }[] }) => {
  return (
    <Group
      direction="column"
      position="right"
      style={{ width: "100%", paddingRight: "5px" }}
    >
      {nav.map((item) => (
        <NavWrapper key={item.name} nav={item} />
      ))}
    </Group>
  );
};
