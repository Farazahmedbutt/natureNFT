import React from "react";
import ape from "../public/img/ape.jpeg";
import ape2 from "../public/img/ape2.jpeg";
import tree from "../public/img/tree.svg";
import tree2 from "../public/img/tree-2.svg";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { particlesOptions } from "../utils/particlesOptions";
import SwiperCore, { EffectCube, Autoplay } from "swiper";
import Link from "next/link";

const animateBanana = {
  start: {
    rotate: 4,
  },
  end: {
    rotate: 0,

    transition: {
      yoyo: Infinity,
      duration: 3,
      ease: "easeInOut",
      delay: 0,
    },
  },
};

SwiperCore.use([EffectCube, Autoplay]);

function Welcome() {
  return (
    <div>
      <section className=" pt-8 bg-nature relative overflow-hidden">
        {/* <div className="absolute">
          <Particles className=" " options={particlesOptions} />
        </div> */}
        <div className="">
          <div className=" py-20 md:py-32 flex flex-col md:flex-row  items-center md:max-w-5xl xl:max-w-7xl mx-auto bg-split-white-black  relative">
            <div
              className="absolute md:hidden lg:block right-[5%] top-64 sm:right-16 sm:top-16 md:-right-10 lg:-right-20 xl:-right-24 z-30 md:top-72 lg:top-72 w-[150px] sm:w-[100px] md:w-[180px] xl:w-[250px] pointer-events-none
              "
            >
              <Image src={tree} objectFit="contain" />
            </div>
            <div className="absolute md:hidden lg:block top-64 left-[10%] sm:left-auto sm:right-16 sm:top-16 md:right-62 lg:right-72 xl:right-96 z-30 md:top-80 lg:top-80 w-[100px] sm:w-[100px] md:w-[100px] lg:w-[100px] xl:w-[150px] pointer-events-none">
              <Image src={tree2} objectFit="contain" />
            </div>

            <div className=" order-1 md:order-0 text-center md:text-left mx-auto md:my-0 my-16 z-20">
              <h1 className="uppercase text-4xl md:text-6xl lg:text-7xl text-white mb-10 md:mb-8 font-bold font-Dongle">
                Welcome to the
                <br className="hidden md:block my-10" />
                <div className="flex w-full mx-auto text-center">
                  <span className=" text-soil md:leading-snug">Nature</span>
                  <Typewriter
                    options={{
                      strings: [""],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </h1>
              <div className="flex flex-col md:flex-row gap-5 md:gap-8 font-dongle">
                <a
                  href="#"
                  className=" bg-soil text-white rounded-md hover:scale-105 active:scale-95 transition duration-150  py-5 px-16 md:px-4 font-semibold  leading shadow-md  text-lg "
                >
                  Buy on OpenSea
                </a>
                <Link href="#">
                  <a className=" bg-orange-600  rounded-md transition duration-150  py-5 px-16 md:px-4 font-semibold text-white leading  shadow-md text-lg hover:scale-105 active:scale-95 ">
                    Connect MetaMask
                  </a>
                </Link>
              </div>
            </div>

            <div className="relative md:mx-auto order-0 md:order-1  w-[300px] md:w-1/3  mt-10 md:mt-0 z-20">
              <Swiper
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image className="rounded-lg" src={ape} objectFit="cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image className="rounded-lg" src={ape2} objectFit="cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image className="rounded-lg" src={ape} objectFit="cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image className="rounded-lg" src={ape2} objectFit="cover" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Welcome;
