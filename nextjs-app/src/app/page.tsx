// export { default } from './products/page';

import React from 'react'
import MenuWatch from '@/components/Header/Menu/MenuWatch'
import SliderWatch from '@/components/Slider/SliderWatch'
import Category from '@/components/Watch/Category'
import TabFeature from '@/components/Watch/TabFeature'
import Banner from '@/components/Watch/Banner'
import Benefit from '@/components/Home1/Benefit'
import productData from '../lib/Product.json'
import FeaturedProduct from '@/components/Watch/FeaturedProduct'
import TrendingProduct from '@/components/Watch/TrendingProduct'
import PopularProduct from '@/components/Watch/PopularProduct'
// import Brand from '@/components/Home6/Brand'/
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
        <div className="bg-black style-watch">
            <div id="header" className='relative w-full'>
                <MenuWatch props="bg-green" />
                <SliderWatch />
            </div>
            <Category />
            <TabFeature data={productData} start={0} limit={5} />
            <Banner />
            {/* <FeaturedProduct data={productData} /> */}
            <TrendingProduct data={productData} />
            <PopularProduct />
            <Benefit props="md:py-[60px] py-8 style-watch md:mt-20 mt-10" />
            {/* <Brand /> */}
            <div className="style-watch">
                <Footer />
            </div>
        </div>
    </>
  )
}