import { Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { MicroCmsWork } from "../../hooks/useWorks";
import { MicroCmsResponse } from "../../utils/microcms";
import { WorksListItem } from "./WorksListItem";

type Props = {
  works: MicroCmsResponse<MicroCmsWork>;
};

export const WorksList = ({ works }: Props) => {
  console.log(works);
  return (
    <Stack spacing="md" mt="lg">
      {works.contents.map((work) => (
        <WorksListItem work={work} key={work.id} />
      ))}
    </Stack>
  );
};
