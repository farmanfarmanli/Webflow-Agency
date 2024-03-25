import React from 'react'
import './swipeIcon.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from 'react-bootstrap';
import 'swiper/css';

const SwipeIcon = () => {
    return (
        <div className='swipeicon'>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col lg={2}>
                        <h3>100.000+</h3>
                        <span>Finsweet Users</span>
                    </Col>
                    <Col lg={9}>
                        <Swiper
                            loop={true}

                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                1444: {
                                    slidesPerView: 5,
                                }
                            }}
                        >
                            <SwiperSlide><img src="./assets/logo1.svg" alt="logo" className='logos' /></SwiperSlide>
                            <SwiperSlide><img src="./assets/loog2.svg" alt="logo" className='logos' /></SwiperSlide>
                            <SwiperSlide><img src="./assets/logo3.svg" alt="logo" className='logos' /></SwiperSlide>
                            <SwiperSlide><img src="./assets/logo4.svg" alt="logo" className='logos' /></SwiperSlide>
                            <SwiperSlide><img src="./assets/logo5.svg" alt="logo" className='logos' /></SwiperSlide>
                            <SwiperSlide><img src="./assets/loog2.svg" alt="logo" className='logos' /></SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SwipeIcon