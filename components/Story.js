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
    <div className=" bg-nature  bg-gras bg-no-repeat bg-bottom py-20">
      <div className=" max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto py-10 text-center text-white">
        <h2 className="text-5xl font-semibold ">STORY</h2>
        <p className=" text-xl my-10  z-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
          molestias reprehenderit veritatis earum temporibus hic, tenetur
          ducimus ab sunt nemo, vitae incidunt iure molestiae corporis
          assumenda? Temporibus voluptates ea a! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Unde labore porro saepe natus neque
          velit veniam. Unde, reprehenderit! Asperiores minus quidem ex
          voluptatem soluta numquam aliquid fugiat quibusdam cumque neque.
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
          className="mySwiper cursor-pointer"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
            <SwiperSlide key={e}>
              <Image
                className="rounded-md"
                src={e % 2 == 0 ? ape : ape2}
                objectFit="cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Story;
