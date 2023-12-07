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
    title: "Careers",
    link: "/careers",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const About = () => {
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
            <div className=' mt-28 md:mt-36 py-5 mb-4 md:mb-2'>
              <h1 className=' font-extrabold text-[40px] md:text-[50px] leading-snug  md:leading-tight'>
                About Us
              </h1>
              <p className='mt-[30px] md:mt-[80px] font-bold text-[18px] md:text-[50px] md:leading-tight md:text-center'>
                We are a distinguished healthcare agency headquartered in Kenya,
                delivering exemplary staffing and recruitment solutions for the
                industry.
              </p>
              <p className='mt-5 text-sm md:text-center md:mt-10 max-w-[500px] mx-auto'>
                Equipped with a proficient team and cutting-edge facilities, we
                endeavor to provide premium healthcare services tailored to the
                varied needs of our patients.
              </p>
              <div className='mt-[60px] md:mt-[100px]'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 items-center'>
                  <div className='md:text-center'>
                    <h5
                      className={`${boska_Regular.className} text-4xl text-primary mb-6 text-left md:text-center `}>
                      OUR MISSION
                    </h5>
                    <p className='text-sm md:max-w-[400px] md:mx-auto'>
                      To enhance the health and wellness of the Kenyan
                      population by delivering personalized, compassionate, and
                      accessible healthcare solutions.
                    </p>
                  </div>
                  <div className='relative h-[300px] md:h-[408px] md:aspect-square'>
                    <Image
                      src='/mission.jpg'
                      fill
                      alt='mission image'
                      className='object-cover'
                    />
                  </div>
                </div>
              </div>
              <div className='mt-[60px] md:mt-[100px] md:px-16'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 items-center'>
                  <div className='relative h-[300px] md:h-[408px] md:aspect-square '>
                    <Image
                      src='/vision.jpg'
                      fill
                      alt='mission image'
                      className='object-fit'
                    />
                  </div>
                  <div className='md:pr-10'>
                    <h5
                      className={`${boska_Regular.className} text-4xl text-primary mb-6 text-left md:text-center `}>
                      OUR VISION
                    </h5>
                    <p className='text-sm md:max-w-[420px] md:mx-auto md:text-center '>
                      To be the leading healthcare provider in Kenya, setting
                      industry benchmarks through exceptional patient care,
                      innovation, and community involvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
