import { useParams } from "react-router-dom";
import { Nav } from "../../../components/Nav";
import { PageTitle } from "../../../components/PageTitle";
import { WorksDetail } from "../../../components/WorksDetail";

const title = ["W", "O", "R", "K", "S"];

const nav = [
  { name: "← Works", link: "/works" },
  { name: "Top", link: "/" },
  { name: "About", link: "/about" },
  // { name: "Blender", link: "/blender" },
];

export const WorksId = () => {
  const { id } = useParams();
  return (
    <>
      <PageTitle title={title} />
      <WorksDetail id={id} />
      <Nav nav={nav} />
    </>
  );
};
