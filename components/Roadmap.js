import React from "react";
import { motion } from "framer-motion";
const roadmap = [
  {
    id: 1,
    title: "Sale Event",
    description:
      "Launching our collection of 10000 Apeshib on our website. Please use only the link provided by our social media account or in Discord. The return of our holders is our top priority, so we have spent an immense amount of time to provide our holders with the most gas-efficient ERC-1155 token possible.",
  },
  {
    id: 2,
    title: "Earnings",
    description:
      "Each NFT holder will be earning 100 Apeseed everyday for the next 5 years.",
  },
  {
    id: 3,
    title: "Discovery",
    description:
      "After the reveal of the artwork, you will be able to know which character, planets, and clothing style you successfully minted. The rarity rank of your NFT will be directly available across the main two rarity services available – Rarity Tools and Rarity Sniper.",
  },
  {
    id: 4,
    title: "Stepping into the Metaverse",
    description:
      "Our goal is to build a complete ecosystem around the metaverse and Defi with a playful heart. We will be using the community fund to buy properties in the Sandbox and Decentraland to offer a ground of exchange for owners to mingle and profit from the metaverse.",
  },
  {
    id: 5,
    title: "Launching the Apeshib Swap",
    description:
      "The Apeshib Swap is the DEX of our own. NFT holders can utilize the APESEED token rewarded by holding the NFT and trade in our DEX.",
  },
  {
    id: 6,
    title: "Launching the Merch Collection",
    description:
      "After the reveal of the artwork, you will be able to know which character, planets, and clothing style you successfully minted. The rarity rank of your NFT will be directly available across the main two rarity services available – Rarity Tools and Rarity Sniper.",
  },
  {
    id: 7,
    title: "Launching a Venture Capital",
    description:
      "We would set aside a portion of the fund gained from NFT sale, Apeshib Swap and Metaverse profit to launch a Venture Capital. We truly believe in NFT and metaverse so we would like to put the focus of our VC on these areas. We will be investing in potential projects with our own A tokens. We let holders participate in VC investing just like how you participate in crowdfunding. Holders can stake their APESEED tokens until we exit the investment opportunity. Profits will be split amongst investors.",
  },
  {
    id: 8,
    title: "Expand our community",
    description:
      "We are a member-centric community and we would seek ways to be more inclusive for new joiners to participate in the Apeshibanati. We hope to help Apeseed expand popularity and expand the Apeshibanati into a bigger community. At this point we will be unlocking the breeding functions and new joiner can participate by owning our next gen of Apeshib. Utility of the next gen Apeshib will be further revealed.",
  },
];

const stage = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
const roadLink1 = {
  start: {
    right: 0,
    opacity: 0,
  },
  end: {
    right: -100,
    opacity: 1,
  },
};
const roadLink = {
  start: {
    width: 0,
    opacity: 0,
  },
  end: {
    width: 100,
    opacity: 1,
  },
};

const roadLinkV = {
  start: {
    top: 120,
    opacity: 0,
  },
  end: {
    top: 210,
    opacity: 1,
  },
};

function Roadmap() {
  return (
    <div className="bg-gray-900 font-oswald">
      <div className="max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto py-10 text-center text-white">
        <h2 className="text-5xl">
          <span className=" text-sky-500">APESHIBANATI</span> Roadmap
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            delayChildren: 0.2,
            staggerChildren: 0.4,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 py-20  mx-auto"
        >
          {roadmap.map((r) => (
            <motion.div
              variants={stage}
              key={r.id}
              transition={{
                delayChildren: 0.4,
                staggerChildren: 0.8,
              }}
              className="relative z-20"
            >
              <div className="text-left p-4 bg-gray-800 bg-opacity-95 backdrop-blur-sm rounded-md shadow-sm h-full">
                <p className="font-bold text-lg font-oswald text-gray-100">
                  {r.title}
                </p>
                <p className="text-gray-400 text-sm">{r.description}</p>
              </div>
              {r.id !== 8 && (
                <motion.div className="w-12 h-2 bg-sky-400 absolute rotate-90 left-1/2 -bottom-[30px] -translate-x-1/2 lg:hidden"></motion.div>
              )}
              {r.id !== 3 && r.id !== 6 && r.id !== 8 && (
                <motion.div
                  variants={
                    r.id == 1 || r.id == 2 || r.id == 7 ? roadLink1 : roadLink
                  }
                  initial="start"
                  whileInView="end"
                  viewport={{ once: true }}
                  transition={{
                    delay:
                      (r.id == 1 && "0.5") ||
                      (r.id == 2 && "1") ||
                      (r.id == 4 && "2.5") ||
                      (r.id == 5 && "2") ||
                      (r.id == 7 && "2"),
                    duration: "0.5",
                  }}
                  className="w-28 h-2 bg-sky-400 absolute  -right-24 top-1/2 hidden lg:block -z-20"
                ></motion.div>
              )}
              {r.id === 3 && (
                <motion.div
                  variants={roadLinkV}
                  initial="start"
                  whileInView="end"
                  viewport={{ once: true }}
                  transition={{
                    delay: "2",
                    duration: "0.5",
                  }}
                  className="w-28 h-2 bg-sky-400 rotate-90  absolute hidden lg:block  -translate-x-1/2 trans left-1/2 top-[128%] -z-20"
                ></motion.div>
              )}
              {r.id === 4 && (
                <motion.div
                  variants={roadLinkV}
                  initial="start"
                  whileInView="end"
                  viewport={{ once: true }}
                  transition={{
                    delay: "2.5",
                    duration: "0.5",
                  }}
                  className="w-28 h-2 bg-sky-400 rotate-90  absolute hidden lg:block  -translate-x-1/2 trans left-1/2 top-[131%] -z-20"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Roadmap;
