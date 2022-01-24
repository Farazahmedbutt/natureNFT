import React from "react";
import { motion } from "framer-motion";
import ape from "../public/img/ape.jpeg";
import ape2 from "../public/img/ape2.jpeg";
import Image from "next/image";
import Select from "react-select";
import Particles from "react-tsparticles";
import { bgOptions } from "../utils/galleryFilters";
import { particlesOptions } from "../utils/particlesOptions";

function gallery() {
  return (
    <div className="py-20 bg-gray-900  font-oswald relative">
      <Particles className="absolute h-full z-10 " options={particlesOptions} />

      <div className=" md:py-10 flex flex-col items-center max-w-md sm:max-w-xl md:max-w-5xl xl:max-w-7xl  relative z-20 mx-auto">
        <h1 className="text-white text-4xl mb-10">Gallery</h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-26">
          <div className="basis-1/4 ">
            <Select
              placeholder="Background"
              options={bgOptions}
              isSearchable={false}
              className="lg:w-[300px] md:w-[200px] w-full"
            />
          </div>
          <div className="basis-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 lg:gap-10">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
              <div className=" md:max-w-[300px]">
                <Image className="rounded-lg" src={ape} objectFit="cover" />
                <p className="text-white uppercase  text-lg mt-2">
                  Ape Shibanati #1
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default gallery;
