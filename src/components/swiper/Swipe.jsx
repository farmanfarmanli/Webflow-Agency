import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swipe.scss'

const Swipe = () => {
    return (
        <div className='swipe'>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                    <div className='personal'>
                        <img src="./assets/personal.png" alt="" />
                        <div className='personal-items'>
                            <span className='name'>Lisa Williams</span>
                            <span className='duty'>Vice President</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                    <div className='personal'>
                        <img src="./assets/personal.png" alt="" />
                        <div className='personal-items'>
                            <span className='name'>Lisa Williams</span>
                            <span className='duty'>Vice President</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                    <div className='personal'>
                        <img src="./assets/personal.png" alt="" />
                        <div className='personal-items'>
                            <span className='name'>Lisa Williams</span>
                            <span className='duty'>Vice President</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Swipe