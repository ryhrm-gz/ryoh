import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

type SkillList = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  startedAt: Date;
};

type MictoCmsRes = {
  contents: SkillList[];
  totalCount: number;
  offset: number;
  limit: number;
};

export const Skill = () => {
  const { data, error } = useSWR<MictoCmsRes>(
    "https://ryoh.microcms.io/api/v1/skill",
    fetcher
  );

  if (error) return <div>Error</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      {data.contents.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};
