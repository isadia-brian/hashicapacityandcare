"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/caregiver.png";
import image2 from "@/public/diagnose.jpg";
import image3 from "@/public/wellness.jpg";
import image4 from "../../public/test.jpg";
const images = [image1, image2, image3, image4];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});
const boska_Regular = localFont({
  src: "../../public/assets/fonts/fancy/Bosca.ttf",
});

const Links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },

  {
    title: "Careers",
    link: "/careers",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Services = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={`${poppins.className} relative`}>
      <div className='fixed w-full left-0 p-4 top-1 z-50'>
        <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
      {navOpen ? (
        <div className='absolute z-40 h-screen top-0 left-0 bg-secondary w-full flex  items-center'>
          <div className='text-white p-12 w-full'>
            <p className='text-sm'>Menu</p>
            <div className='border-b-[0.5px] border-white mb-6 mt-4 w-full'></div>
            <div className='flex flex-col gap-7'>
              {Links.map(({ link, title }) => (
                <Link
                  key={title}
                  href={link}
                  className={`${boska_Regular.className} text-5xl font-medium`}
                  onClick={() => setNavOpen(false)}>
                  {title}
                </Link>
              ))}
            </div>
            <div className='border-b-[0.5px] border-white mb-3  mt-6 w-full'></div>
            <Link href='#' className='text-xs'>
              Facebook
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className='relative  p-4 md:p-6'>
            <div className=' mt-20 py-5'>
              <div className='grid grid-cols-1 md:grid-cols-2 md:px-[80px] md:items-center md:pb-[100px]'>
                <div className='md:h-[500px] md:w-[350px] relative h-[350px]'>
                  <Image
                    src='/medicine.jpg'
                    fill
                    alt='services image'
                    className='object-cover'
                  />
                </div>
                <div className='order-first mb-10 md:order-last md:mb-0'>
                  <p className='text-primary text-sm'>WHAT WE OFFER</p>
                  <h1
                    className={`${boska_Regular.className} text-[3rem] leading-[-1rem] md:text-[4rem]`}>
                    Services
                  </h1>
                  <p className='text-secondary text-sm'>
                    At Hashi Capacity and Care, our esteemed healthcare services
                    elevate standards in patient care. Specializing in
                    connecting top-tier medical professionals with leading
                    healthcare organizations, we ensure an unmatched commitment
                    to quality and expertise.
                  </p>
                  <br />
                  <p className='text-secondary text-sm'>
                    From comprehensive patient-focused solutions to specialized
                    medical staffing, our services cater to diverse healthcare
                    needs. Whether you are in search of skilled healthcare
                    professionals or exploring innovative care solutions, Hashi
                    Capacity and Care is your dedicated partner for excellence
                    in healthcare services.
                  </p>
                </div>
              </div>

              <div className='border-b-[0.5px] border-secondary/75 mb-6  mt-6 w-full'></div>
              <div className='flex flex-col gap-8 md:gap-0 md:grid grid-cols-2 md:py-[100px] md:px-[80px] md:items-center'>
                <div className='flex flex-col'>
                  <p className='text-primary text-sm'>01</p>
                  <h5
                    className={`${boska_Regular.className} text-[2.5rem] leading-[-1rem] md:text-[4rem]`}>
                    Primary Care
                  </h5>
                </div>
                <div>
                  <p className=' text-secondary'>
                    We provide comprehensive primary healthcare services to
                    individuals of all ages, ensuring regular check-ups,
                    preventive care, and early intervention.
                  </p>
                </div>
              </div>
              <div className='border-b-[0.5px] border-secondary/75 mb-6  mt-8 w-full'></div>
              <div className='flex flex-col gap-8 md:gap-0 md:grid grid-cols-2 md:py-[100px] md:px-[80px] md:items-center'>
                <div className='flex flex-col'>
                  <p className='text-primary text-sm'>02</p>
                  <h5
                    className={`${boska_Regular.className} text-[2.5rem] leading-[-1rem] md:text-[4rem]`}>
                    Specialized Medical Care
                  </h5>
                </div>
                <div>
                  <p className=' text-secondary'>
                    Our team of specialists offers expert care in various
                    medical fields, including:
                  </p>
                  <ul className='px-5 md:mt-8 text-secondary'>
                    <li className='list-disc'>cardiology</li>
                    <li className='list-disc'>oncology</li>
                    <li className='list-disc'>pediatrics</li>
                    <li className='list-disc'>gynecology</li>
                    <li className='list-disc'>orthopedics, and more</li>
                  </ul>
                </div>
              </div>
              <div className='border-b-[0.5px] border-secondary/75 mb-6  mt-8 w-full'></div>
              <div className='flex flex-col gap-8 md:gap-0 md:grid grid-cols-2 md:py-[100px] md:px-[80px] md:items-center'>
                <div className='flex flex-col'>
                  <p className='text-primary text-sm'>03</p>
                  <h5
                    className={`${boska_Regular.className} text-[2.5rem] leading-[-1rem] md:text-[4rem]`}>
                    Diagnostic Services
                  </h5>
                </div>
                <div>
                  <p className=' text-secondary'>
                    We offer advanced diagnostic services such as laboratory
                    tests, radiology, ultrasounds, and medical imaging to aid
                    accurate diagnosis and effective treatment plans.
                  </p>
                </div>
              </div>
              <div className='border-b-[0.5px] border-secondary/75 mb-6  mt-8 w-full'></div>
              <div className='flex flex-col gap-8 md:gap-0 md:grid grid-cols-2 md:py-[100px] md:px-[80px] md:items-center'>
                <div className='flex flex-col'>
                  <p className='text-primary text-sm'>04</p>
                  <h5
                    className={`${boska_Regular.className} text-[2.5rem] leading-[-1rem] md:text-[4rem]`}>
                    Emergency Care
                  </h5>
                </div>
                <div>
                  <p className=' text-secondary'>
                    Our 24/7 emergency department is equipped to handle medical
                    emergencies promptly and efficiently, ensuring immediate
                    care when needed.
                  </p>
                </div>
              </div>
              <div className='border-b-[0.5px] border-secondary/75 mb-6  mt-8 w-full'></div>
              <div className='flex flex-col gap-8 md:gap-0 md:grid grid-cols-2 md:py-[100px] md:px-[80px] md:items-center'>
                <div className='flex flex-col'>
                  <p className='text-primary text-sm'>05</p>
                  <h5
                    className={`${boska_Regular.className} text-[2.5rem] leading-[-1rem] md:text-[4rem]`}>
                    Wellness Programs
                  </h5>
                </div>
                <div>
                  <p className=' text-secondary'>
                    We promote holistic well-being through wellness programs
                    that focus on nutrition, fitness, mental health, and overall
                    lifestyle improvements.
                  </p>
                </div>
              </div>
              <div className='border-b-[0.5px] border-secondary/75 mb-6  mt-8 w-full'></div>
              <div className='flex flex-col gap-8 md:gap-0 md:grid grid-cols-2 md:py-[100px] md:px-[80px] md:items-center'>
                <div className='flex flex-col'>
                  <p className='text-primary text-sm'>06</p>
                  <h5
                    className={`${boska_Regular.className} text-[2.5rem] leading-[-1rem] md:text-[4rem]`}>
                    Community Outreach
                  </h5>
                </div>
                <div>
                  <p className=' text-secondary'>
                    We actively engage with local communities, organizing health
                    camps, educational workshops, and awareness campaigns to
                    promote health and disease prevention.
                  </p>
                </div>
              </div>
              <div className='border-b-[0.5px] border-secondary/75 mb-6  mt-8 w-full'></div>
              <div className='flex gap-5 mt-[100px] overflow-x-scroll md:overscroll-x-none'>
                {images.map((image, index) => {
                  return (
                    <div
                      className='relative h-[350px] w-[250px] min-w-[250px]'
                      key={index}>
                      <Image
                        src={image}
                        fill
                        alt='services image'
                        className='object-cover object-center'
                        loading='lazy'
                      />
                    </div>
                  );
                })}
              </div>
              <div className='my-[130px] text-center'>
                <h5 className={`${boska_Regular.className} text-5xl mb-8`}>
                  Like What You See ?
                </h5>
                <p className='text-secondary mb-16'>
                  Interested in working with us ? or just saying Hi feel free to
                  contact us and have a chat
                </p>
                <Link
                  href='/contact'
                  className='border-[0.5px] border-accent px-6 py-3 rounded-full'>
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
