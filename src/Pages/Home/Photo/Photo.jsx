import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import img1 from '../../../assets/banner/gallery-1.jpg'
import img2 from '../../../assets/banner/gallery-2.jpg'
import img3 from '../../../assets/banner/gallery-3.jpg'
import img4 from '../../../assets/banner/gallery-4.jpg'
import img5 from '../../../assets/banner/gallery-5.jpg'
import img6 from '../../../assets/banner/gallery-6.jpg'
import img7 from '../../../assets/banner/galler-4.jpg'
import img8 from '../../../assets/banner/gallery-8.jpg'
import img9 from '../../../assets/banner/banner-9.jpg'
import img10 from '../../../assets/banner/gallery-8.jpg'


const Photo = () => {
    return (
        <div className='w-[90%] mx-auto my-[190px]'>
            <Swiper
                slidesPerView={5}
                spaceBetween={40}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-[900px] h-[150px]' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide><img className='w-[900px] h-[150px]' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[900px] h-[150px]' src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[900px] h-[150px]' src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[900px] h-[150px]' src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[900px] h-[150px]' src={img6} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[900px] h-[150px]' src={img7} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[900px] h-[150px]' src={img8} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[900px] h-[150px]' src={img9} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[900px] h-[150px]' src={img10} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Photo;