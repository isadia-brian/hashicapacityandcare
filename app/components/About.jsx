"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import localFont from "next/font/local";
import { Antic_Didone } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const poppins_semibold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-SemiBold.ttf",
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

const About = () => {
  const once = true;

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.5 }}
      className='relative mb-32'>
      <motion.p
        variants={defaultAnimations}
        className='text-primary md:text-2xl'>
        WHO WE ARE
      </motion.p>
      <motion.div
        variants={defaultAnimations}
        className='mt-6 pb-10 border-b-[0.5px] border-secondary'>
        <h5
          className={`${poppins_semibold.className} text-[1.53rem] md:text-5xl lg:text-6xl md:leading-tight md:pr-28 lg:max-w-[950px] lg:pr-0 lg:leading-tight`}>
          Hashi Capacity and Care is a premier{" "}
          <span className='text-primary italic'>healthcare</span> agency based
          in Kenya, providing top-tier{" "}
          <span className='text-primary italic'>staffing</span> and{" "}
          <span className='text-primary italic'>recruitment</span> solutions for
          the industry.
        </h5>
      </motion.div>
      <motion.div variants={defaultAnimations} className='pt-10'>
        <div className='flex items-center justify-center gap-10 md:gap-14'>
          <div className='flex flex-col justify-center items-center'>
            <p className={`${antic.className} text-6xl md:text-[70px]`}>370</p>
            <p className='text-sm md:text-xl'>Clients Onboarded</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className={`${antic.className} text-6xl md:text-[70px]`}>420</p>
            <p className='text-sm md:text-xl'>Staff Onboarded</p>
          </div>
        </div>
        <div>
          <p className='text-center mt-10 px-8 md:px-28 md:text-2xl'>
            We are dedicated to providing exceptional medical services, focusing
            on improving the well-being of individuals and communities across
            the country. With a team of highly skilled professionals and
            state-of-the-art facilities, we strive to deliver high-quality
            healthcare services that meet the diverse needs of our patients.
          </p>
        </div>

        <div className='mt-12 flex items-center justify-center'>
          <Link
            className={`transition delay-75  w-[120px] md:w-52 py-[10px] border border-primary text-white md:py-4 md:text-xl flex justify-center items-center gap-3 bg-primary rounded-full font-semibold hover:bg-white hover:text-black hover:border hover:border-secondary hover:scale-x-110 duration-300 `}
            href='/about'>
            {" "}
            ABOUT US
            <span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className='text-xl -rotate-45'
              />
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
