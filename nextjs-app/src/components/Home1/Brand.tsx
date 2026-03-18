'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const Brand = () => {
    return (
        <>
            <div className="brand-block md:py-[60px] py-[32px]">
                <div className="container">
                    <div className="list-brand">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                680: {
                                    slidesPerView: 4,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 16,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[36px]">
                                    <Image
                                        src={'/images/product/rolex_1_thumb.jpg'}
                                        width={300}
                                        height={300}
                                        alt='rolex'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[36px]">
                                    <Image
                                        src={'/images/product/rolex_2_thumb.jpg'}
                                        width={300}
                                        height={300}
                                        alt='rolex'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[36px]">
                                    <Image
                                        src={'/images/product/luxury_1_thumb.jpg'}
                                        width={300}
                                        height={300}
                                        alt='luxury'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[36px]">
                                    <Image
                                        src={'/images/product/smart_1_thumb.jpg'}
                                        width={300}
                                        height={300}
                                        alt='smart watch'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[36px]">
                                    <Image
                                        src={'/images/product/sport_1_thumb.jpg'}
                                        width={300}
                                        height={300}
                                        alt='sport watch'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-item relative flex items-center justify-center h-[36px]">
                                    <Image
                                        src={'/images/product/rolex_1_2.jpg'}
                                        width={300}
                                        height={300}
                                        alt='rolex'
                                        className='h-full w-auto duration-500 relative object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand