"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

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
            <div className=' mt-20 py-5'>
              <h1>About</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
