import React from "react";
import ape3 from "../public/img/ape3.png";
import Image from "next/image";
function Migration() {
  return (
    <div className=" bg-sky-400 z-40">
      <div className="flex flex-col md:flex-row max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto justify-end text-center md:text-left items-center gap-10 py-16 ">
        <div className="">
          <h2 className=" font-semibold text-4xl text-white mb-5 ">
            ABOUT APESHIBANATI
          </h2>
          <p className="text-white leading-7 text-lg md:text-xl z-20">
            APESHIBANATI is a collection of 10,000 Apeshib NFTs—unique digital
            collectibles living on the Ethereum blockchain. Your Apeshib doubles
            as your APESHIBANATI membership card, and grants access to
            members-only investment opportunity, the first of which is access to
            Apeshib Swap, a DEX. Future areas and perks can be unlocked by the
            community through roadmap activation.
          </p>
        </div>
        <div className=" text-center z-20">
          <button className="py-4 px-14 text-2xl bg-gray-800 text-white font-oswald hover:scale-105 active:scale-100 transition duration-105 rounded-md ">
            Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}

export default Migration;
