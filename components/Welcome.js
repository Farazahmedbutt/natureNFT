import React from "react";
import ape from "../public/img/ape.jpeg";
import ape2 from "../public/img/ape2.jpeg";
import banana from "../public/img/banana-200.png";
import bananaBlur from "../public/img/Banana-blur.png";
import bananaBlur2 from "../public/img/Banana-blur-2.png";
import bananaBlur3 from "../public/img/Banana-blur-3.png";
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

const animateBanana = {
  start: {
    rotate: -60,
  },
  end: {
    rotate: -45,

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
      <section className="py-20 bg-gray-900 font-oswald relative">
        <Particles
          className="absolute h-full z-10 "
          options={particlesOptions}
        />
        <div className="">
          <div className=" md:py-32 flex flex-col md:flex-row  items-center md:max-w-5xl xl:max-w-7xl mx-auto bg-split-white-black  relative">
            <motion.div
              variants={animateBanana}
              initial="start"
              animate="end"
              className="absolute right-24 sm:right-16 sm:top-16 lg:right-0 rotate-90 z-30 lg:top-8 w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] pointer-events-none
              "
            >
              <Image
                src={banana}
                // height={250}
                objectFit="contain"
                // className="h-[100px]"
              />
            </motion.div>
            {/* <div className="absolute  left-40 z-50 top-[180px]">
            <Image
              src={bananaBlur}
              height={150}
              objectFit="contain"
              className=""
            />
          </div> */}
            <div className=" order-1 md:order-0 text-center md:text-left mx-auto md:my-0 my-16 z-20">
              <h1 className="uppercase text-4xl md:text-6xl lg:text-7xl text-white mb-10 md:mb-8 font-bold">
                Welcome to the
                <br className="hidden md:block my-10" />
                <div className="flex w-full mx-auto text-center">
                  <span className=" text-sky-400 md:leading-snug">
                    APESHIBANATI
                  </span>
                  <Typewriter
                    options={{
                      strings: [""],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </h1>
              <div className="flex flex-col md:flex-row gap-5 md:gap-8">
                <a
                  href="/"
                  className="hover:text-sky-400  bg-white rounded-md  transition duration-150  py-5 px-16 md:px-4 font-semibold text-gray-900 leading shadow-md  text-lg uppercase "
                >
                  Buy on OpenSea
                </a>
                <a
                  href="/"
                  className="bg-sky-400  rounded-md transition duration-150  py-5 px-16 md:px-4 font-semibold text-white leading hover:bg-white hover:text-sky-400 shadow-md  text-lg  uppercase"
                >
                  Let's go APESHIB
                </a>
              </div>
            </div>

            <div className="relative md:mx-auto order-0 md:order-1  w-[300px] md:w-1/3 shadow-2xl mt-10 md:mt-0 z-20">
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
