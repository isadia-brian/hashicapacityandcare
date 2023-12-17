"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Antic_Didone } from "next/font/google";
const poppins_semibold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-SemiBold.ttf",
});
const poppins_extrabold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-ExtraBold.ttf",
});

const antic = Antic_Didone({
  subsets: ["latin"],
  weight: ["400"],
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

const Contact = () => {
  const once = true;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.5 }}
      className='relative mb-32 lg:pb-14'>
      <motion.p
        variants={defaultAnimations}
        className='text-primary md:text-2xl lg:text-center'>
        CONTACT US
      </motion.p>
      <motion.div variants={defaultAnimations} className='mt-6 pb-10 lg:mb-16'>
        <h5
          className={`${poppins_semibold.className} text-[1.58rem] md:text-5xl lg:text-6xl lg:text-center md:leading-tight`}>
          Get In <span className='text-accent underline'>Touch</span>
        </h5>
      </motion.div>
      <motion.div
        variants={defaultAnimations}
        className='grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:w-[960px] lg:mx-auto lg:gap-0 md:shadow-lg   '>
        <div
          className={`${antic.className} text-lg md:text-[18px] col-span-2 lg:text-[20px] md:placeholder:text-[20px] md:px-9 md:py-16 lg:bg-secondary/5 lg:p-32  `}>
          <form className='flex flex-col gap-10 mb-10'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-1 lg:gap-0'>
              <label htmlFor='name' className='md:w-full lg:w-full'>
                Hello there, my name is
              </label>
              <input
                type='text'
                className={`${poppins_extrabold.className} outline-none bg-transparent border-b-[0.5px] border-secondary/30 text-primary  lg:w-full placeholder:text-secondary/20`}
                placeholder='your name here'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>
                and i would like you to know more about
              </label>
              <textarea
                rows={5}
                type='text'
                className={`${poppins_extrabold.className} outline-none bg-transparent border-b-[0.5px] border-secondary/30 text-primary placeholder:text-secondary/20`}
                placeholder='short description'
              />
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-1 lg:gap-0'>
              <label htmlFor='name' className='md:w-full lg:w-full'>
                you can reach me at
              </label>
              <input
                type='text'
                className={`${poppins_extrabold.className} outline-none bg-transparent border-b-[0.5px] border-secondary/30 text-primary lg:w-full placeholder:text-secondary/20`}
                placeholder='your email address'
              />
            </div>
            <div className='grid justify-items-end text-2xl md:text-3xl '>
              <button className='transition delay-100 ease-in-out bg-primary md:bg-transparent text-black md:text-black px-10 py-2 flex items-center gap-3 hover:md:bg-primary hover:duration-500'>
                Send
                <span>
                  <FontAwesomeIcon icon={faPaperPlane} className='text-2xl' />
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className=' hidden md:flex bg-primary/50 h-80 md:h-full'></div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
