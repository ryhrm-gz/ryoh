import { setTitle } from "../../lib/setTitle";
import { Nav } from "../../components/Nav";
import { PageTitle } from "../../components/PageTitle";

const title = ["B", "L", "N", "D", "E", "R"];

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
      <Nav nav={nav} />
    </>
  );
};
