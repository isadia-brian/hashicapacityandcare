"use client";

import { useState } from "react";

import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const poppins_heading = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Black.ttf",
});

const poppins_semibold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-SemiBold.ttf",
});
const poppins_text = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Regular.ttf",
});

const About = () => {
  return (
    <div
      className={`${poppins_text.className} relative px-4 py-7 md:py-12 md:px-8`}>
      <div className='mt-[100px] md:mt-52 mb-16'>
        <div className=''>
          <h1
            className={`${poppins_semibold.className} text-[1.53rem] mb-9 text-primary md:text-5xl lg:text-6xl md:leading-tight md:pr-28 lg:max-w-[950px] lg:pr-0 lg:leading-tight`}>
            About Us
          </h1>
          <p
            className={`${poppins_heading.className} text-[21px] md:text-5xl md:leading-snug md:text-center lg:text-7xl lg:leading-normal`}>
            We are a distinguished healthcare agency headquartered in Kenya,
            delivering exemplary staffing and recruitment solutions for the
            industry.
          </p>
          <p className='md:text-center mt-10  md:text-2xl md:max-w-[500px] mx-auto'>
            Equipped with a proficient team and cutting-edge facilities, we
            endeavor to provide premium healthcare services tailored to the
            varied needs of our patients.
          </p>
          <div className='mt-[60px] md:mt-[100px] lg:max-w-[950px] lg:pr-0 mx-auto'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 items-center'>
              <div className=''>
                <h5
                  className={`${poppins_semibold.className} text-4xl text-primary mb-6 text-left  `}>
                  OUR MISSION
                </h5>
                <p className=' mt-10  md:text-2xl pr-12'>
                  To enhance the health and wellness of the Kenyan population by
                  delivering personalized, compassionate, and accessible
                  healthcare solutions.
                </p>
              </div>
              <div className='relative h-[300px] md:h-[408px] md:aspect-square'>
                <Image
                  src='/mission.jpg'
                  fill
                  alt='mission image'
                  className='object-cover'
                />
              </div>
            </div>
          </div>
          <div className='mt-[60px] md:mt-[100px] lg:max-w-[950px] lg:pr-0 mx-auto'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 items-center'>
              <div className='relative h-[300px] md:h-[408px] md:aspect-square '>
                <Image
                  src='/vision.jpg'
                  fill
                  alt='mission image'
                  className='object-fit'
                />
              </div>
              <div className='md:pl-12'>
                <h5
                  className={`${poppins_semibold.className} text-4xl text-primary mb-6 text-left `}>
                  OUR VISION
                </h5>
                <p className=' mt-10  md:text-2xl lg:pr-12 '>
                  To be the leading healthcare provider in Kenya, setting
                  industry benchmarks through exceptional patient care,
                  innovation, and community involvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
