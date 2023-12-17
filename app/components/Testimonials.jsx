"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import localFont from "next/font/local";
import Image from "next/image";
const poppins_semibold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-SemiBold.ttf",
});

const testimonials = [
  {
    image: "/image1.jpg",
    title: "Kennedy Mbele",
    message:
      "Hashi Capacity and Care transformed my career. They expertly connected me to a healthcare organization overseas, propelling my profession.",
    rating: 5,
  },
  {
    image: "/image2.jpg",
    title: "Amina Aisha",
    message:
      "Hashi changed my life, linking me to a healthcare organization abroad. A dream job realized with Hashi Capacity and Care.",
    rating: 4,
  },
  {
    image: "/image3.jpg",
    title: "Steve Michaelson",
    message:
      "Our healthcare organization thrives with Hashi Capacity and Care. Their top-tier staff enriches our services, ensuring exceptional patient care.",
    rating: 5,
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
const Testimonials = () => {
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
        TESTIMONIALS
      </motion.p>
      <motion.div variants={defaultAnimations} className='mt-6 pb-10 lg:mb-16 '>
        <h5
          className={`${poppins_semibold.className} text-[1.58rem] md:text-5xl lg:text-6xl md:leading-tight lg:text-center`}>
          <span className='text-accent underline'>Love</span> From Our Clients
        </h5>
      </motion.div>
      <motion.div
        variants={defaultAnimations}
        className='grid grid-cols-1 md:grid-cols-3 gap-3 lg:w-[960px] lg:mx-auto'>
        {testimonials.map(({ image, title, message, rating }, index) => {
          return (
            <TestimonialsCard
              image={image}
              title={title}
              message={message}
              rating={rating}
              key={index}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const TestimonialsCard = ({ image, title, message, rating }) => {
  return (
    <div className='transition ease-in-out py-8 grid grid-cols-1 justify-items-center px-7 lg:px-3 bg-card lg:h-[370px] lg:py-9 cursor-pointer hover:scale-110 hover:bg-primary/60 hover:text-black hover:z-40 duration-300'>
      <div>
        <div className='rounded-full relative h-20 w-20 lg:h-28 lg:w-28'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover rounded-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 my-4'>
        <p
          className={` ${poppins_semibold.className} text-[16px] text-center md:text-center md:text-2xl`}>
          {title}
        </p>
        <div className='my-4'>
          <StarRating rating={rating} />
        </div>
        <p className=' text-[14px] max-w-[280px] mx-auto lg:max-w-[300px]  md:text-[12px]  md:text-xl lg:text-center'>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div className='flex gap-1 items-center justify-center'>
      {stars.map((star) => (
        <FontAwesomeIcon
          icon={faStar}
          key={star}
          className='text-accent text-2xl'
        />
      ))}
    </div>
  );
};
