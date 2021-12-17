import { setTitle } from "../lib/setTitle";
import { Nav } from "../components/Nav";
import { PageTitle } from "../components/PageTitle";
import { Skill } from "../components/Skill";

const title = ["A", "B", "O", "U", "T"];

const nav = [
  { name: "Top", link: "/" },
  { name: "Works", link: "/works" },
  { name: "Blender", link: "/blender" },
];

export const About = () => {
  setTitle("About | Ryo Hirama");
  return (
    <>
      <PageTitle title={title} />
      <Skill />
      <Nav nav={nav} />
    </>
  );
};
