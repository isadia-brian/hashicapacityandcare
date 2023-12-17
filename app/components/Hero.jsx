"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";

import Button from "./Button";

const poppins_heading = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Black.ttf",
});

const poppins_text = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Regular.ttf",
});

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  const primary = true;
  const once = true;

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.4 }}
      className={`${poppins_text.className} relative  mt-[100px] md:mt-52 mb-16`}>
      <motion.h1
        variants={defaultAnimations}
        className={`${poppins_heading.className} text-[21px] md:text-5xl md:leading-snug md:text-center lg:text-7xl lg:leading-normal`}>
        <span className='text-primary'>Hashi Capacity</span> is an agency
        providing expert recruitment and staffing for{" "}
        <span className='text-primary'>healthcare</span> professionals
      </motion.h1>
      <motion.div
        variants={defaultAnimations}
        className='mt-10 md:mt-12 flex gap-6 items-center md:justify-center'>
        <Button text='Learn More' primary={primary} />
        <Button text='View Services' />
      </motion.div>
      <motion.div
        variants={defaultAnimations}
        className='mt-12 md:mt-24  relative '>
        <div className='h-[342px] md:h-[420px] lg:h-[570px] relative rounded-[30px] '>
          <Image
            fill
            src='/hero-large.png'
            className='object-cover rounded-[30px] hidden md:flex'
            priority
            alt='hero image'
          />
          <div className='w-[269px] h-[296px] left-0 top-[46px] absolute bg-white border border-secondary/80 md:hidden' />
          <div className='w-[212px] h-[237px]  top-0 right-0 absolute bg-primary/30 md:hidden' />
          <div className='w-[237px] h-[272px] left-[16px] top-[58px] absolute md:hidden'>
            <div className='relative h-full w-full'>
              <Image
                src='/hero.png'
                fill
                className='object-fit object-cover'
                priority
                alt='hero image'
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
