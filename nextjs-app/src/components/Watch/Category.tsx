'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';

const categoryImages: Record<string, string> = {
    smart: '/images/product/smart_1_1.jpg',
    luxury: '/images/product/luxury_1_2.jpg',
    classic: '/images/product/rolex_1_1.jpg',
    fitness: '/images/product/sport_1_2.jpg',
    apple: '/images/product/smart_1_3.jpg',
    sport: '/images/product/rolex_1_4.jpg',
}

const Category = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="trending-block style-six md:pt-20 pt-10">
                <div className="container">
                    <div className="list-trending section-swiper-navigation style-small-border style-outline">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1290: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                            }}
                            className='h-full'
                        >
                            {Object.entries(categoryImages).map(([type, image]) => (
                                <SwiperSlide key={type}>
                                    <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick(type)}>
                                        <div className="bg-img rounded-full bg-surface1 border-surface2 border-2 overflow-hidden aspect-square">
                                            <Image
                                                src={image}
                                                width={1000}
                                                height={1000}
                                                alt={type}
                                                className='w-full h-full object-cover'
                                            />
                                        </div>
                                        <div className="trending-name text-center mt-5 duration-500">
                                            <span className='heading6 text-white'>{type.charAt(0).toUpperCase() + type.slice(1)}{type === 'smart' ? ' watch' : type === 'apple' ? ' watch' : ''}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category