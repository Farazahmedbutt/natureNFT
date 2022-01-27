import React from "react";
import { motion } from "framer-motion";
const roadmap = [
  {
    id: 1,
    title: "Sale Event",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempore aut sequi minus praesentium incidunt cumque iure minima repudiandae, suscipit officiis eveniet dolorum, quos a neque soluta commodi est itaque.",
  },
  {
    id: 2,
    title: "Earnings",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempore aut sequi minus praesentium incidunt cumque iure minima repudiandae, suscipit officiis eveniet dolorum, quos a neque soluta commodi est itaque.",
  },
  {
    id: 3,
    title: "Discovery",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempore aut sequi minus praesentium incidunt cumque iure minima repudiandae, suscipit officiis eveniet dolorum, quos a neque soluta commodi est itaque.",
  },
  {
    id: 4,
    title: "Stepping into the Metaverse",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempore aut sequi minus praesentium incidunt cumque iure minima repudiandae, suscipit officiis eveniet dolorum, quos a neque soluta commodi est itaque.",
  },
  {
    id: 5,
    title: "Launching the Apeshib Swap",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempore aut sequi minus praesentium incidunt cumque iure minima repudiandae, suscipit officiis eveniet dolorum, quos a neque soluta commodi est itaque.",
  },
  {
    id: 6,
    title: "Launching the Merch Collection",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempore aut sequi minus praesentium incidunt cumque iure minima repudiandae, suscipit officiis eveniet dolorum, quos a neque soluta commodi est itaque.",
  },
  {
    id: 7,
    title: "Launching a Venture Capital",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempore aut sequi minus praesentium incidunt cumque iure minima repudiandae, suscipit officiis eveniet dolorum, quos a neque soluta commodi est itaque..",
  },
  {
    id: 8,
    title: "Expand our community",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempore aut sequi minus praesentium incidunt cumque iure minima repudiandae, suscipit officiis eveniet dolorum, quos a neque soluta commodi est itaque.s",
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
    <div className="bg-soil font-oswald">
      <div className="max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto py-10 text-center text-white">
        <h2 className="text-5xl font-semibold">ROADMAP</h2>
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
              <div className="text-left p-4 bg-brown bg-opacity-90 backdrop-blur-sm rounded-md shadow-sm h-full">
                <p className="font-bold text-lg font-oswald text-gray-100">
                  {r.title}
                </p>
                <p className="text-gray-300 text-sm">{r.description}</p>
              </div>
              {r.id !== 8 && (
                <motion.div className="w-12 h-2 bg-nature absolute rotate-90 left-1/2 -bottom-[30px] -translate-x-1/2 lg:hidden"></motion.div>
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
                  className="w-28 h-2 bg-nature absolute  -right-24 top-1/2 hidden lg:block -z-20"
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
                  className="w-28 h-2 bg-nature rotate-90  absolute hidden lg:block  -translate-x-1/2 trans left-1/2 top-[128%] -z-20"
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
                  className="w-28 h-2 bg-nature rotate-90  absolute hidden lg:block  -translate-x-1/2 trans left-1/2 top-[131%] -z-20"
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
