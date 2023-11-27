"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

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
    title: "Services",
    link: "/services",
  },
  {
    title: "Careers",
    link: "/careers",
  },
];

const page = () => {
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
                  <p className='text-secondary'>
                    At Hashi Capacity and Care, we believe that everyone
                    deserves access to excellent healthcare. We are here to
                    provide exceptional medical services, promote a healthy
                    lifestyle, and contribute to the well-being of the Kenyan
                    population.
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
