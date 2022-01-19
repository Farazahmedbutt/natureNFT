import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import ape from "../public/img/ape.jpeg";
import ape2 from "../public/img/ape2.jpeg";
import Image from "next/image";
SwiperCore.use([Autoplay]);
function Story() {
  return (
    <div className=" bg-gray-900 font-oswald">
      <div className=" max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto py-10 text-center text-white">
        <h2 className="text-5xl">Story</h2>
        <p className=" text-xl my-10 font-oswald">
          For centuries, the apeshib believe that in order to thrive, they have
          to explore planets beyond the earth. To embark on space travel, the
          Apeshib has gathered a group of rocket scientists and bioengineers for
          R&D. After decades of effort, the apeshib has successfully made it to
          different planets in the solar system.
        </p>
        <Swiper
          breakpoints={{
            250: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
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
  );
}

export default Story;
