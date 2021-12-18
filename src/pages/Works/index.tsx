import { setTitle } from "../../lib/setTitle";
import { Nav } from "../../components/Nav";
import { PageTitle } from "../../components/PageTitle";
import { WorksList } from "../../components/WorksList";

const title = ["W", "O", "R", "K", "S"];

const nav = [
  { name: "Top", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blender", link: "/blender" },
];

export const Works = () => {
  setTitle("Works | Ryo Hirama");
  return (
    <>
      <PageTitle title={title} />
      <WorksList />
      <Nav nav={nav} />
    </>
  );
};
