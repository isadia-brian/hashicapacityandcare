"use client";
import { useState } from "react";

import { Collapse } from "react-collapse";
import localFont from "next/font/local";

const boska_Regular = localFont({
  src: "../../public/assets/fonts/fancy/Bosca.ttf",
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
      "Our 24/7 emergency department is equipped to handle medical emergencies promptly and efficiently. If you require immediate care, please call 07********.",
  },
  {
    title: "What diagnostic services are available at your facility?",
    answer:
      "We offer advanced diagnostic services, including laboratory tests, radiology, ultrasounds, and medical imaging. These services aid in accurate diagnosis and effective treatment planning.",
  },
];
const Faqs = () => {
  const [open, setOpen] = useState(true);
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <div className='relative border-b-[0.5px] grid grid-cols-1 border-secondary/30 py-12 px-4 md:px-28 md:grid-cols-2 md:py-20  w-full'>
      <div className='relative md:flex md:flex-col mb-6'>
        <h5
          className={`${boska_Regular.className} text-5xl mb-6 text-left text-primary `}>
          FAQS
        </h5>
        <p className='text-secondary text-[0.85rem]'>
          Questions we get regularly
        </p>
      </div>
      <div className='relative mt-3 md:mt-0    '>
        <div className='relative w-full flex flex-col  md:justify-end'>
          {list.map(({ title, answer }, index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className='border-b-[0.5px] border-primary mb-2 pb-2'>
              <div className='flex items-center justify-between cursor-pointer'>
                <h3
                  className={`${
                    accordion === index ? "active" : ""
                  } font-medium text-[15px] text-primary `}>
                  {title}
                </h3>
                <div>
                  {accordion === index ? (
                    <>
                      <span className='text-3xl text-secondary'>-</span>
                    </>
                  ) : (
                    <>
                      <span className='text-3xl text-primary'>+</span>
                    </>
                  )}
                </div>
              </div>
              <div className='mt-4'>
                <Collapse isOpened={open}>
                  <p
                    className={
                      accordion === index
                        ? "active text-[0.85rem] text-secondary"
                        : "inactive text-[0.85rem] text-secondary"
                    }>
                    {answer}
                  </p>
                </Collapse>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
