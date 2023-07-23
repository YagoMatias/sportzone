import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bannerImage from '../images/sportzoneBanner.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <div>
            <img src={bannerImage} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={bannerImage} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={bannerImage} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={bannerImage} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={bannerImage} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
