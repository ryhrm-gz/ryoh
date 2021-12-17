import { Text, Box, Group, Anchor } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { Link } from "react-router-dom";

const TitleWrapper = ({ text }: { text: string }) => (
  <Text
    component="span"
    weight={900}
    variant="gradient"
    gradient={{ from: "indigo", to: "cyan", deg: 65 }}
    sx={(theme) => ({
      lineHeight: 1,
      fontSize: "70px",
      [theme.fn.largerThan("xs")]: { fontSize: "100px" },
    })}
  >
    {text}
  </Text>
);

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

const title = ["B", "L", "N", "D", "E", "R"];

const nav = [
  { name: "Top", link: "/" },
  { name: "About", link: "/about" },
  { name: "Works", link: "/works" },
];

export const Blender = () => {
  useDocumentTitle("Blender | Ryo Hirama");
  return (
    <Box style={{ padding: 3 }}>
      <Group direction="column" style={{ maxWidth: "780px", margin: "auto" }}>
        <Box>
          {title.map((item, index) => (
            <TitleWrapper key={item + index} text={item} />
          ))}
        </Box>
        <Group direction="column" position="right" style={{ width: "100%" }}>
          {nav.map((item) => (
            <NavWrapper key={item.name} nav={item} />
          ))}
        </Group>
      </Group>
    </Box>
  );
};
