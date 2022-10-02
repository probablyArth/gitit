import { Title, Stack, Center, Text, Mark, Paper } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>git it</title>
        <meta name="description" content="No bs github issue finder." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Stack
          align={"center"}
          p={20}
          sx={() => ({ height: 300, width: "80%" })}
        >
          <Title
            className="glow"
            color={"white"}
            sx={() => ({ fontSize: 100 })}
          >
            Git it
          </Title>
          <Text italic>
            <Mark>no-bs</Mark> github issue finder
          </Text>
          <Paper>{/* <Filters /> */}</Paper>
        </Stack>
      </Center>
    </div>
  );
};

export default Home;
