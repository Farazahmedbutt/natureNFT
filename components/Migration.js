import React from "react";
import tree from "../public/img/tree-2.svg";
import Image from "next/image";
function Migration() {
  return (
    <div className=" md:bg-moon  md:bg-nature bg-soil bg-no-repeat bg-center bg-fixed ">
      <div className="  z-40 md:pt-32  md:bg-mountain bg-bottom bg-no-repeat ">
        <div className="flex flex-col md:flex-row max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto justify-end text-center md:text-left md:items-center gap-10 py-16 md:pb-0 md:pt-16 ">
          <div className="relative w-[750px] hidden lg:block">
            <Image className="" src={tree} />
          </div>
          <div className="">
            <h2 className=" font-semibold text-5xl text-white mb-5 ">
              ABOUT NATURE
            </h2>
            <p className="text-white leading-7 text-lg md:text-xl z-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              fuga neque provident corporis obcaecati cupiditate similique
              repellat veniam in, ab dolor ad quidem sequi dolore ullam ipsum
              amet recusandae! Adipisci. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Recusandae voluptate eos consequuntur fugit
              accusantium mollitia reiciendis a ad commodi. Totam, dolore amet.
              Laboriosam rem ratione sequi delectus, ipsam quasi molestiae?
            </p>
          </div>
          {/* <div className=" text-center z-20">
            <button className="py-4 px-14 text-2xl bg-orange-600 shadow-md text-white font-oswald hover:scale-105 active:scale-100 transition duration-105 rounded-md ">
              Roadmap
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Migration;
