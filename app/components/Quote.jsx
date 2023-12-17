"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Playfair_Display } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["800"],
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

const Quote = () => {
  const once = true;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.5 }}
      className='relative mb-32 md:px-24 lg:px-0 lg:max-w-[700px] mx-auto'>
      <motion.div variants={defaultAnimations}>
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className='text-secondary/25 text-5xl lg:text-7xl'
          // style={{ color: "#BFBFBF", fontSize: "40px" }}
        />
      </motion.div>

      <div className='py-5'>
        <motion.p
          variants={defaultAnimations}
          className={`${playfair.className} text-2xl text-center md:text-4xl`}>
          “I follow three rules: do the right thing, do your best, and always
          show people you care.”
        </motion.p>
        <motion.div
          variants={defaultAnimations}
          className='my-5 flex items-center justify-center'>
          <div className='h-[0.2px] w-12 md:w-20  bg-secondary/70' />
          <p className='text-secondary/70 md:text-2xl'>Lou Holtz</p>
          <div className='h-[0.2px] w-12 md:w-20  bg-secondary/70' />
        </motion.div>
      </div>
      <motion.div variants={defaultAnimations} className='flex justify-end'>
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className='text-primary/40 text-3xl lg:text-5xl'
        />
      </motion.div>
    </motion.div>
  );
};

export default Quote;
