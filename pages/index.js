import Head from "next/head";

import Story from "../components/Story";
import Welcome from "../components/Welcome";
import Migration from "../components/Migration";
import Roadmap from "../components/Roadmap";

export default function Home() {
  return (
    <>
      <Head>
        <title>APESHIBANATI NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Welcome />
      <Migration />
      <Story />
      <Roadmap />
    </>
  );
}
