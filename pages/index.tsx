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
      Git it
    </div>
  );
};

export default Home;
