import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';
import "../styles/TextSlider.scss"

const TextRotation = () => {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      effect={'fade'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[ Autoplay, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <p className="home-page-description">Web Designer</p>
      </SwiperSlide>
      <SwiperSlide>
        <p className="home-page-description2">Frontend-developer</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default TextRotation;
