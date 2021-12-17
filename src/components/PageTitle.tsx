import { Text, Box } from "@mantine/core";

const TitleWrapper = ({ text }: { text: string }) => (
  <Text
    component="span"
    weight={900}
    variant="gradient"
    gradient={{ from: "indigo", to: "cyan", deg: 65 }}
    sx={(theme) => ({
      lineHeight: 1,
      fontSize: "70px",
      [theme.fn.largerThan("xs")]: { fontSize: "100px" },
    })}
  >
    {text}
  </Text>
);

export const PageTitle = ({ title }: { title: string[] }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }}>
      {title.map((item, index) => (
        <TitleWrapper key={item + index} text={item} />
      ))}
    </Box>
  );
};
