"use client";
import { useState } from "react";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Collapse } from "react-collapse";
import localFont from "next/font/local";

const poppins_bold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Bold.ttf",
});
const poppins_semibold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-SemiBold.ttf",
});

const list = [
  {
    title: "What primary care services do you offer?",
    answer:
      "We provide comprehensive primary healthcare services, including regular check-ups, preventive care, and early intervention for individuals of all ages.",
  },
  {
    title: "Where are we located?",
    answer:
      "We are located in Nairobi, Kenya. Incase you need to reach out, contact us via email or phone number to get precise locations.",
  },
  {
    title: "How can I access emergency care at your facility?",
    answer:
      "Our 24/7 emergency department is equipped to handle medical emergencies promptly and efficiently. If you require immediate care, please call 0721203790.",
  },
  {
    title: "What diagnostic services are offered?",
    answer:
      "We offer advanced diagnostic services, including laboratory tests, radiology, ultrasounds, and medical imaging. These services aid in accurate diagnosis and effective treatment planning.",
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
const Faqs = () => {
  const [open, setOpen] = useState(true);
  const [accordion, setActiveAccordion] = useState(-1);

  const once = true;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.5 }}
      className='relative  mb-16 lg:mb-32 lg:pb-14 w-full'>
      <motion.p
        variants={defaultAnimations}
        className='text-primary md:text-2xl lg:text-center  uppercase'>
        Questions we get regularly
      </motion.p>
      <motion.div
        variants={defaultAnimations}
        className='relative  lg:text-center mt-6 pb-10 lg:mb-16  '>
        <h5
          className={`${poppins_semibold.className} text-[1.58rem] md:text-5xl lg:text-6xl md:leading-tight text-accent`}>
          FAQs
        </h5>
      </motion.div>
      <motion.div variants={defaultAnimations} className='relative'>
        <div className='relative w-full md:max-w-[700px] lg:max-w-[700px] lg:mx-auto flex flex-col  md:justify-end'>
          {list.map(({ title, answer }, index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className=' mb-8 rounded-lg  bg-secondary/30 px-4 py-7'>
              <div className='flex items-center justify-between gap-2 cursor-pointer'>
                <h3
                  className={`${accordion === index ? "active w-full" : ""} ${
                    poppins_bold.className
                  } text-[12px] md:text-3xl `}>
                  {title}
                </h3>
                <div>
                  {accordion === index ? (
                    <>
                      <span className='text-3xl'>-</span>
                    </>
                  ) : (
                    <>
                      <span className='text-3xl text-accent font-bold'>+</span>
                    </>
                  )}
                </div>
              </div>
              <div>
                <Collapse isOpened={open}>
                  <p
                    className={
                      accordion === index
                        ? "active text-[12px] md:text-2xl pt-8"
                        : "inactive text-[12px]"
                    }>
                    {answer}
                  </p>
                </Collapse>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Faqs;
