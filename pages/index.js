import Head from "next/head";

import Story from "../components/Story";
import Welcome from "../components/Welcome";
import Migration from "../components/Migration";
import Roadmap from "../components/Roadmap";

export default function Home() {
  return (
    <div className="font-Dongle">
      <Head>
        <title>Nature NFT</title>
      </Head>
      <Welcome />
      <Migration />
      <Story />
      <Roadmap />
    </div>
  );
}
