import { TypographyStylesProvider, Image, SimpleGrid } from "@mantine/core";
import Family1Img from "../assets/family1.png";
import Family2Img from "../assets/family2.png";
import Family3Img from "../assets/family3.png";

export const About = () => {
  return (
    <TypographyStylesProvider>
      <h1>About</h1>
      <p>I'm Ryo Hirama. A music content creator, and a software developer.</p>
      <p>I'm from Hokkaido, Japan and live with my wife and a child.</p>
      <SimpleGrid cols={3} spacing="xs">
        <div>
          <Image src={Family1Img} radius="md" alt="My family" />
        </div>
        <div>
          <Image src={Family2Img} radius="md" alt="My family" />
        </div>
        <div>
          <Image src={Family3Img} radius="md" alt="My family" />
        </div>
      </SimpleGrid>
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
      <h2>Contact</h2>
      <a href="https://www.twitter.com/ryoh555" target="_blank">
        Twitter
      </a>
    </TypographyStylesProvider>
  );
};
