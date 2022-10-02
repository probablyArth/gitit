import { Title } from "@mantine/core";
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
      <Title className="glow" color={"white"}>
        Git it
      </Title>
    </div>
  );
};

export default Home;
