import { useParams } from "react-router-dom";
import { BlenderDetail } from "../../../components/BlenderDetail";
import { Nav } from "../../../components/Nav";
import { PageTitle } from "../../../components/PageTitle";

const title = ["B", "L", "E", "N", "D", "E", "R"];

const nav = [
  { name: "← Blender", link: "/blender" },
  { name: "Top", link: "/" },
  { name: "About", link: "/about" },
  { name: "Works", link: "/works" },
];

export const BlenderId = () => {
  const { id } = useParams();

  return (
    <>
      <PageTitle title={title} />
      <BlenderDetail id={id} />
      <Nav nav={nav} />
    </>
  );
};
