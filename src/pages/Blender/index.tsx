import { setTitle } from "../../utils/setTitle";
import { Nav } from "../../components/Nav";
import { PageTitle } from "../../components/PageTitle";
import { BlenderList } from "../../components/BlenderList";

const title = ["B", "L", "E", "N", "D", "E", "R"];

const nav = [
  { name: "Top", link: "/" },
  { name: "About", link: "/about" },
  { name: "Works", link: "/works" },
];

export const Blender = () => {
  setTitle("Blender | Ryo Hirama");
  return (
    <>
      <PageTitle title={title} />
      <BlenderList />
      <Nav nav={nav} />
    </>
  );
};
