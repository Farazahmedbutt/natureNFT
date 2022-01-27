import Image from "next/image";
import React from "react";
import tree from "../public/img/tree-3.svg";

function Footer() {
  return (
    <div className="bg-brown text-center py-20 relative font-Dongle">
      <p className="text-white text-lg z-20">
        2021 Copyrights © Nature. All rights reserved
      </p>
      <div className=" absolute w-[100px] md:w-[150px] md:bottom-10 md:right-20 right-2 bottom-14">
        <Image src={tree} />
      </div>
    </div>
  );
}

export default Footer;
