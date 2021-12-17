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

const SnsWrapper = ({ sns }: { sns: { name: string; link: string } }) => (
  <Anchor
    transform="uppercase"
    href={sns.link}
    target="_blank"
    weight={900}
    style={{ color: "#868E96", textDecoration: "none" }}
    sx={(theme) => ({
      "&:hover": {
        backgroundImage: "linear-gradient(65deg, #4c6ef5 0%, #15aabf 100%)",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      lineHeight: 1,
      fontSize: "30px",
      [theme.fn.largerThan("xs")]: { fontSize: "50px" },
    })}
  >
    {sns.name}
  </Anchor>
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

const sns = [
  {
    name: "Twitter",
    link: "https://twitter.com/ryoh555",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCBZXxEztkFo5_EG68YpvCkA",
  },
  {
    name: "Niconico",
    link: "https://www.nicovideo.jp/mylist/30028746",
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/ryoh555",
  },
];

const firstName = ["R", "Y", "O"];
const lastName = ["H", "I", "R", "A", "M", "A"];

const nav = [
  { name: "About", link: "/about" },
  { name: "Works", link: "/works" },
  { name: "Blender", link: "/blender" },
];

export const Index = () => {
  useDocumentTitle("Ryo Hirama");
  return (
    <Box style={{ padding: 3 }}>
      <Group direction="column" style={{ maxWidth: "780px", margin: "auto" }}>
        <Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            {firstName.map((item) => (
              <TitleWrapper key={item} text={item} />
            ))}
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            {lastName.map((item, index) => (
              <TitleWrapper key={item + index} text={item} />
            ))}
          </Box>
        </Box>
        <Group direction="column" style={{ width: "100%", paddingLeft: "6px" }}>
          {sns.map((item) => (
            <SnsWrapper key={item.name} sns={item} />
          ))}
        </Group>
        <Group direction="column" position="right" style={{ width: "100%" }}>
          {nav.map((item) => (
            <NavWrapper key={item.name} nav={item} />
          ))}
        </Group>
      </Group>
    </Box>
  );
};
