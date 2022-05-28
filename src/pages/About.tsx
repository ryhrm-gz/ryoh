import { Divider, TypographyStylesProvider, Image } from "@mantine/core";
import FamilyImg from "../assets/family.png";

export const About = () => {
  return (
    <TypographyStylesProvider>
      <h1>About</h1>
      <p>I'm Ryo Hirama. A music content creator, and a software developer.</p>
      <p>I'm from Hokkaido, Japan and live with my wife and a child.</p>
      <div style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}>
        <Image src={FamilyImg} radius="md" alt="My family" />
      </div>
      <h2>Vocaloid music</h2>
      <p>I've been making Vocaloid music since 2012.</p>
      <a
        href="https://www.youtube.com/channel/UCBZXxEztkFo5_EG68YpvCkA"
        target="_blank"
      >
        YouTube
      </a>
      <br />
      <a href="https://www.nicovideo.jp/mylist/30028746" target="_blank">
        Niconico
      </a>
    </TypographyStylesProvider>
  );
};
