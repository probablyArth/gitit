import { Container, Grid } from "@mantine/core";
import Filters from "./Filters";
import Issue from "./Issue";
import Issues from "./Issues";

const Dashboard = () => {
  return (
    <Grid style={{ width: "80%" }}>
      <Grid.Col span={4}>
        <Filters />
      </Grid.Col>
      <Grid.Col span={8}>
        <Issues />
      </Grid.Col>
    </Grid>
  );
};

export default Dashboard;
