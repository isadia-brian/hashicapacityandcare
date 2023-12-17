"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";

const poppins_semibold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-SemiBold.ttf",
});

const poppins_subheading = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Bold.ttf",
});

const services = [
  {
    id: "01",
    title: "STAFFING & RECRUITMENT",
    description:
      "We train, develop, and seamlessly link skilled healthcare-giving professionals with organizations in the industry, fostering a harmonious partnership that enhances the delivery of exceptional care.",
    image: "/staffing.jpg",
    direction: "row",
  },
  {
    id: "02",
    title: "PRIMARY CARE",
    description:
      "We provide comprehensive primary healthcare services to individuals of all ages, ensuring regular check-ups, preventive care, and early intervention.",
    image: "/diagnostic.jpg",
    direction: "row-reverse",
  },
  {
    id: "03",
    title: "SPECIALIZED MEDICAL CARE",
    description:
      "Our team of specialists offers expert care in various medical fields, including cardiology, oncology, pediatrics, gynecology, orthopedics, and more",
    image: "/specialized.jpg",
    direction: "row",
  },
  {
    id: "04",
    title: "DIAGNOSTIC SERVICES",
    description:
      "We offer advanced diagnostic services such as laboratory tests, radiology, ultrasounds, and medical imaging to aid accurate diagnosis and effective treatment plans.",
    image: "/diagnostics.jpg",
    direction: "row-reverse",
  },
  {
    id: "05",
    title: "EMERGENCY CARE",
    description:
      "Our 24/7 emergency department is equipped to handle medical emergencies promptly and efficiently, ensuring immediate care when needed.",
    image: "/emergency.jpg",
    direction: "row",
  },
  {
    id: "06",
    title: "WELLNESS PROGRAMS",
    description:
      "We promote holistic well-being through wellness programs that focus on nutrition, fitness, mental health, and overall lifestyle improvements.",
    image: "/wellness.jpg",
    direction: "row-reverse",
  },
  {
    id: "07",
    title: "COMMUNITY OUTREACH",
    description:
      "We actively engage with local communities, organizing health camps, educational workshops, and awareness campaigns to promote health and disease prevention",
    image: "/community.jpg",
    direction: "row",
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

const Services = () => {
  // const once = true;
  const ref = useRef(null);
  console.log(ref);

  const isInView = useInView(ref, { amount: 0.5 });
  console.log(isInView);

  return (
    <div className='relative mb-32 lg:pb-14'>
      <p className='text-primary md:text-2xl lg:text-center'>WHAT WE DO</p>
      <div className='mt-6 pb-10 lg:mb-20 lg:text-center '>
        <h5
          className={`${poppins_semibold.className} text-[1.58rem] md:text-5xl lg:text-6xl md:leading-tight`}>
          We Provide These
          <br />
          <span className='text-accent underline'>Services</span>
        </h5>
      </div>
      <div className=' flex flex-col gap-10'>
        {services.map(({ id, title, description, image, direction }) => {
          return (
            <div key={id}>
              <Picture_Card
                id={id}
                title={title}
                description={description}
                image={image}
                direction={direction}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

const Picture_Card = ({ title, description, image, direction, id }) => {
  return (
    <div className='relative'>
      {direction == "row" ? (
        <div className='relative flex flex-col gap-9 lg:gap-32 md:flex-row md:items-center'>
          <div className='relative h-[220px] w-full md:h-[300px] md:aspect-square lg:h-[420px]'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover'
              loading='lazy'
            />
          </div>
          <div className='w-full flex flex-col gap-10'>
            <p className='text-primary md:text-3xl'>{id}</p>
            <div className='w-full flex flex-col gap-3'>
              <h3
                className={`${poppins_subheading.className} text-3xl font-extrabold md:text-4xl`}>
                {title}
              </h3>
              <p className='text-secondary text-lg md:text-2xl lg:max-w-[500px]'>
                {description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='relative flex flex-col gap-9 lg:gap-32 md:flex-row-reverse md:items-center'>
          <div className='relative h-[220px] w-full md:h-[300px] md:aspect-square lg:h-[420px]'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover'
              loading='lazy'
            />
          </div>
          <div className='w-full flex flex-col gap-2'>
            <p className='text-primary md:text-3xl'>{id}</p>
            <div className='w-full flex flex-col gap-3'>
              <h3
                className={`${poppins_subheading.className} text-3xl font-extrabold md:text-4xl`}>
                {title}
              </h3>
              <p className='text-secondary md:text-2xl lg:max-w-[500px]'>
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
