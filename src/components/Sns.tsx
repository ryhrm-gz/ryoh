import { Group, Anchor } from "@mantine/core";

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

const sns = [
  {
    name: "Twitter",
    link: "https://twitter.com/ryoh555",
  },
  {
    name: "Niconico",
    link: "https://www.nicovideo.jp/mylist/30028746",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCBZXxEztkFo5_EG68YpvCkA",
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/ryoh555",
  },
  { name: "GitHub", link: "https://github.com/ryhrm-gz" },
];

export const Sns = () => {
  return (
    <Group direction="column" style={{ width: "100%", paddingLeft: "5px" }}>
      {sns.map((item) => (
        <SnsWrapper key={item.name} sns={item} />
      ))}
    </Group>
  );
};
