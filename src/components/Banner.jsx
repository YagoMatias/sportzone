import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bannerSportZone from '../images/sportzoneBanner.png';
import bannerBasquete from '../images/bannerBasquete.jpg';
import bannerMessi from '../images/bannerMessi.png';
import bannerNey from '../images/bannerNey.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
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
          {isSmallScreen ? (
            <img src={bannerNey} alt="" />
          ) : (
            <img src={bannerSportZone} alt="" />
          )}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          {isSmallScreen ? (
            <img src={bannerMessi} alt="" />
          ) : (
            <img src={bannerBasquete} alt="" />
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
