import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "https://assets-bucket.b-cdn.net/magic-win-biz/cms-content/assets/images/categorydetail/5984.webp",
  "https://assets-bucket.b-cdn.net/magic-win-biz/cms-content/assets/images/categorydetail/5927.webp",
  "https://assets-bucket.b-cdn.net/magic-win-biz/cms-content/assets/images/categorydetail/4198.webp",
  "https://assets-bucket.b-cdn.net/magic-win-biz/cms-content/assets/images/categorydetail/4054.webp",
  "https://assets-bucket.b-cdn.net/magic-win-biz/cms-content/assets/images/categorydetail/4188.webp"
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="swiper-desktop mb-3"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index}`} className="banners-img" width={150} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
