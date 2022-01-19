import React from "react";
import ape from "../public/img/ape.jpeg";
import ape2 from "../public/img/ape2.jpeg";
import Particles from "react-tsparticles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import SwiperCore, { EffectCube, Autoplay } from "swiper";
const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

// install Swiper modules
SwiperCore.use([EffectCube, Autoplay]);

function Welcome() {
  return (
    <section className="py-20 bg-gray-900 font-oswald relative">
      <Particles className="absolute h-full" options={particlesOptions} />
      <div className=" md:py-32 flex flex-col md:flex-row  items-center md:max-w-5xl xl:max-w-7xl mx-auto bg-split-white-black ">
        <div className=" order-1 md:order-0 text-center md:text-left sm:max-w-sm lg:max-w-6xl mx-auto md:my-0 my-16 z-20">
          <h1 className="uppercase text-5xl md:text-6xl lg:text-7xl text-white mb-10 md:mb-8 font-bold">
            Welcome to the
            <br className="hidden md:block my-10" />
            <span className=" text-sky-400 md:leading-snug"> APESHIBANATI</span>
          </h1>
          <a
            href="/"
            className="bg-sky-400  transition duration-150  py-5 px-16 md:px-4 font-bold text-white leading hover:bg-white hover:text-sky-400 shadow-md font-oswald text-lg"
          >
            Buy on OpenSea
          </a>
        </div>

        <div className="relative md:mx-auto order-0 md:order-1  w-[300px] md:w-1/3 shadow-2xl mt-10 md:mt-0">
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
              <Image src={ape} objectFit="cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ape2} objectFit="cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ape} objectFit="cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ape2} objectFit="cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
export default Welcome;
