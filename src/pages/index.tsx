import { setTitle } from "../utils/setTitle";
import { Nav } from "../components/Nav";
import { Sns } from "../components/Sns";
import { PageTitle } from "../components/PageTitle";

const firstName = ["R", "Y", "O"];
const lastName = ["H", "I", "R", "A", "M", "A"];

const nav = [
  { name: "About", link: "/about" },
  { name: "Works", link: "/works" },
  // { name: "Blender", link: "/blender" },
];

export const Index = () => {
  setTitle("Ryo Hirama");
  return (
    <>
      <PageTitle title={firstName} />
      <PageTitle title={lastName} />
      <Sns />
      <Nav nav={nav} />
    </>
  );
};
