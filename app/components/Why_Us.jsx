"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faHeart,
  faPeopleGroup,
  faSpa,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

import localFont from "next/font/local";

const poppins_semibold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-SemiBold.ttf",
});

const items = [
  {
    icon: <FontAwesomeIcon icon={faUserDoctor} />,

    paragraph: "Highly skilled and experienced healthcare professionals",
  },
  {
    icon: <FontAwesomeIcon icon={faStethoscope} />,

    paragraph: "State-of-the-art medical infrastructure and technology",
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,

    paragraph: "Commitment to personalized patient care and attention",
  },
  {
    icon: <FontAwesomeIcon icon={faSpa} />,

    paragraph: "Emphasis on preventive healthcare and wellness programs",
  },
  {
    icon: <FontAwesomeIcon icon={faPeopleGroup} />,

    paragraph: "Strong community involvement and social responsibility",
  },
];

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

const Why_Us = () => {
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
        PROVEN EXCELLENCE
      </motion.p>
      <motion.div
        variants={defaultAnimations}
        className='mt-6 pb-10 lg:mb-16  '>
        <h5
          className={`${poppins_semibold.className} text-[1.58rem] md:text-5xl lg:text-6xl lg:text-center md:leading-tight`}>
          Why <span className='text-accent underline'>Choose</span> Us
        </h5>
      </motion.div>
      <motion.div
        variants={defaultAnimations}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
        {items.slice(0, 4).map(({ icon, paragraph }, index) => {
          return <WhyCard icon={icon} paragraph={paragraph} key={index} />;
        })}
        <div className='col-span-2 lg:col-span-1'>
          {items.slice(-1).map(({ icon, paragraph }, index) => {
            return <WhyCard icon={icon} paragraph={paragraph} key={index} />;
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

const WhyCard = ({ icon, paragraph }) => {
  return (
    <div className=' py-8 grid grid-cols-1 justify-items-center px-2 bg-secondary/5 md:h-[200px]'>
      <p className='mb-6 text-[25px] text-accent md:text-center'>{icon}</p>
      <p className='text-secondary/95 text-[0.95rem] text-center md:text-[12px] md:text-center md:text-xl'>
        {paragraph}
      </p>
    </div>
  );
};

export default Why_Us;
