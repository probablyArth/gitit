import { Title, Stack, Center, Text, Mark } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "../components/Dashboard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Git it</title>
        <meta name="description" content="No bs github issue finder." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Stack
          align={"center"}
          p={20}
          sx={() => ({ height: 300, width: "100%" })}
        >
          <Title className="glow" color={"white"} sx={() => ({ fontSize: 76 })}>
            git it
          </Title>
          <Text italic>
            <Mark>no-bs</Mark> github issue finder
          </Text>
          <Dashboard />
        </Stack>
      </Center>
    </div>
  );
};

export default Home;
