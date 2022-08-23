import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


// https://preview.themeforest.net/item/zoric-responsive-landing-page-template/full_screen_preview/34475028?_ga=2.84303965.594075311.1661176597-1708436370.1658760624





export default function Home() {


  // slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };


  return (
<div >
  {/* landing page */}
<section class="text-gray-600 body-font font-eng bg-gradient-to-t from-[#03326e] to-[#076295] ...">
  <div class="container mx-auto flex px-5 pt-8 pb-20 md:pt-14 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
      <h1 data-aos="fade-right"  data-aos-duration="500" class="title-font text-5xl mb-4 font-semibold text-orange-400">PnH <span className='text-white'> Corporation</span>
      </h1>
      <p class="mb-4 leading-relaxed text-white">IT Solution | Overseas | Study Consultation | Online Shop</p>
      <div class="flex justify-center">
        <button data-aos="fade-right"data-aos-duration="500" class="floating-4 inline-flex text-white bg-darken border-0 py-2 px-6 focus:outline-none hover:bg-light rounded text-lg  hover:scale-[1.1] duration-300 ...">Explore Us</button>
      </div>
    </div>
    <div data-aos="zoom-out" data-aos-duration="3000" class="floating lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
      <Image class="object-cover object-center rounded" alt="hero" src="/landing.png"  width={720} height={600}/>
    </div>
  </div>
</section>

{/* shape devider */}

<div class="custom-shape-divider-bottom-1661177948 -mt-8 md:-mt-24">
   <img src="/divider.svg" alt="" />
</div>



{/* sister concern */}
<section  class="text-gray-600 body-font pb-20 mt-[15.2px]  bg-white font-eng ">
  <div class="container px-5 py-0 mx-auto ">
    <div class="flex flex-wrap -m-4 text-center ">
      <div data-aos="flip-left" data-aos-duration="500"  class="p-4 md:w-1/4 sm:w-1/2 w-full  md:-mt-16">
        <Link href={'#'}><div class="cursor-pointer shadow-xl bg-white  px-4 py-6 rounded-lg hover:scale-[1.1] duration-1000 ">
         <Image src="/computer.gif" alt="computer" width={50} height={50} />
          <h2 class="title-font font-medium text-2xl text-gray-900">PnH It Solution</h2>
          <p class="leading-relaxed text-darken">Design and Develop</p>
        </div></Link>
      </div>
      <div data-aos="flip-left" data-aos-duration="500"  class="p-4 md:w-1/4 sm:w-1/2 w-full md:-mt-16">
      <Link href={'#'}><div class="cursor-pointer shadow-xl bg-white  px-4 py-6 rounded-lg hover:scale-[1.1] duration-1000 ">
        <Image src="/travel.gif" alt="travel" width={50} height={50} />
          <h2 class="title-font font-medium text-2xl text-gray-900">PnH Overseas</h2>
          <p class="leading-relaxed text-darken">Tour and Travels</p>
        </div></Link>
      </div>
      <div data-aos="flip-left" data-aos-duration="500"  class="p-4 md:w-1/4 sm:w-1/2 w-full md:-mt-16">
      <Link href={'#'}><div class="cursor-pointer shadow-xl bg-white  px-4 py-6 rounded-lg hover:scale-[1.1] duration-1000 ">
        <Image src="/book.gif" alt="book" width={50} height={50} />
          <h2 class="title-font font-medium text-2xl text-gray-900">Study </h2>
          <p class="leading-relaxed text-darken">Study Abroad Consultation</p>
        </div></Link>
      </div>
      <div data-aos="flip-left" data-aos-duration="500"  class="p-4 md:w-1/4 sm:w-1/2 w-full md:-mt-16">
      <Link href={'#'}><div class="cursor-pointer shadow-xl bg-white  px-4 py-6 rounded-lg hover:scale-[1.1] duration-1000 ">
        <Image src="/cart.gif" alt="cart" width={50} height={50} />
          <h2 class="title-font font-medium text-2xl text-gray-900">Online Shop</h2>
          <p class="leading-relaxed text-darken">E-commerce</p>
        </div></Link>
      </div>
    </div>
  </div>
</section>

{/* It serivces  */}

<section class="text-gray-600 body-font font-eng bg-white">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-6">
      <h2 class="text-sm text-[#f68923] tracking-widest font-medium title-font mb-1">PnH IT Solution</h2>
      <h1 class=" text-2xl font-medium title-font mb-4 text-darken">We do all Creative Services</h1>
      <Image data-aos="zoom-in"  data-aos-duration="500" width={4} height={2} src="/line.svg" alt="" />
      <p  class="md:w-1/2 mt-4 mx-auto text-center leading-relaxed text-sm">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value.</p>
    </div>
    <div class="flex flex-wrap">
      <div data-aos="flip-left"  data-aos-duration="1500" class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-4 items-center text-center">
        <Image width={50} height={50} src="/web.gif" alt="web" />
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Web Development</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
      <div data-aos="flip-left"  data-aos-duration="1500" class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-4 text-center">
      <Image width={50} height={50} src="/graphics.gif" alt="graphics" />
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Graphics Design</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
      <div data-aos="flip-right"  data-aos-duration="1500" class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-4 text-center">
      <Image width={50} height={50} src="/settings.gif" alt="seo" />
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">SEO Service</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
      <div data-aos="flip-right"  data-aos-duration="1500" class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-4 text-center">
      <Image width={50} height={50} src="/app.gif" alt="app" />
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">App Development</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
    </div>
    <Link href={'#'}><button class="flex mx-auto mt-4 text-white bg-darken border-0 py-2 px-8 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">View More</button></Link>
  </div>
</section>



{/* overseas */}
<section class="text-gray-600 body-font font-eng bg-bg">
  <div  data-aos="fade-right" data-aos-duration="800" class="container px-5 py-10 mx-auto  flex flex-wrap items-center">
    <div  class="floating lg:w-3/5 md:w-1/2 flex flex-col z-20 text-center w-full mb-6 bg-white rounded-md p-8 shadow-lg relative">
      <h2 class="text-sm text-[#f68923] tracking-widest font-medium title-font mb-1">PnH Overseas</h2>
      <h1 class=" text-2xl font-medium title-font mb-4 text-darken">Travles and Visa Processing</h1>
      <Image data-aos="zoom-in"  data-aos-duration="500" width={4} height={2} src="/line.svg" alt="" />
      <p  class="md:w-1/2 mt-4 mx-auto text-center leading-relaxed text-sm">We process all types of visas according to the client's demands. Here is the clients demand rate.  </p>

      <div class="flex justify-between mb-3 mt-5">
  <span class="text-base font-medium text-blue-700 dark:text-darken">Tourist Visa</span>
  <span class="text-sm font-medium text-blue-700 dark:text-darken">90.9%</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
  <div class="bg-blue-600 h-2.5 rounded-full w-[90.9%]" ></div>
</div>
      <div class="flex justify-between mb-3 mt-5">
  <span class="text-base font-medium text-blue-700 dark:text-darken">Medical Visa</span>
  <span class="text-sm font-medium text-blue-700 dark:text-darken">50%</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
  <div class="bg-blue-600 h-2.5 rounded-full w-[50%]" ></div>
</div>
      <div class="flex justify-between mb-3 mt-5">
  <span class="text-base font-medium text-blue-700 dark:text-darken">Work Permit Visa</span>
  <span class="text-sm font-medium text-blue-700 dark:text-darken">60%</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
  <div class="bg-blue-600 h-2.5 rounded-full w-[60%]" ></div>
</div>
    </div>

    <div class="lg:w-2/6 md:w-1/2 rounded-lg flex flex-col  w-full mt-2 md:mt-0 z-0">

<Slider {...settings}>
          <div>
          <Image className='rounded-md' width={600} height={600} src="/tourist.png" alt="" />
          </div>
          <div>
          <Image className='rounded-md' width={600} height={600} src="/post-1.png" alt="" />
          </div>
          <div>
          <Image className='rounded-md' width={600} height={600} src="/post-2.png" alt="" />
          </div>
          <div>
          <Image className='rounded-md' width={600} height={600} src="/post-3.png" alt="" />
          </div>
          <div>
          <Image className='rounded-md' width={600} height={600} src="/post-4.png" alt="" />
          </div>
          <div>
          <Image className='rounded-md' width={600} height={600} src="/post-5.png" alt="" />
          </div>
        </Slider>
    </div>

  </div>
</section>




</div>
    
  )
}
