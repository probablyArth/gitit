import { Paper, Stack } from "@mantine/core";
import Issue from "./Issue";

const Issues = () => {
  return (
    <Paper p={20}>
      <Stack>
        <Issue
          url="url"
          labels={[]}
          number={20}
          repositoryUrl={"repoUrl"}
          title={"Create database migrations."}
        />
      </Stack>
    </Paper>
  );
};

export default Issues;
