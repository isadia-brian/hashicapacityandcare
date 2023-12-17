"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const poppins_text = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Regular.ttf",
});

const boska_Regular = localFont({
  src: "../../public/assets/fonts/fancy/Bosca.ttf",
});
const Header = ({ navOpen, setNavOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleShowNav = () => {
    setNavOpen(!navOpen);
  };

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
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {navOpen && (
        <div className='absolute z-40 h-screen top-0 left-0 bg-secondary/40 w-full flex  items-center'>
          <div className='text-black p-12 w-full'>
            <p className={` ${poppins_text.className}`}>Menu</p>
            <div className='border-b-[0.5px] border-black mb-6 mt-4 w-full'></div>
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
            <div className='border-b-[0.5px] border-black mb-3  mt-6 w-full'></div>
            <Link href='#' className={` ${poppins_text.className}`}>
              Facebook
            </Link>
          </div>
        </div>
      )}
      <div
        className={`${
          poppins_text.className
        } fixed top-0 z-50 flex w-full justify-between items-center  px-4 py-7 md:py-8 md:px-8 ${
          scrolled
            ? "bg-white border-b-[0.5px] border-primary shadow-md"
            : "bg-transparent"
        } transition duration-300 ease-in-out`}>
        <div className='relative h-[35px] w-[85px]'>
          <Image src='/logo.svg' fill alt='Hashi logo' />
        </div>
        <nav className='hidden md:flex items-center gap-12'>
          {Links.map(({ title, link }) => {
            return (
              <Link
                href={link}
                key={title}
                className='  md:text-[14px] text-secondary hover:underline hover:underline-offset-4 hover:transition-all duration-700 delay-200 ease-in-out '>
                {title}
              </Link>
            );
          })}
        </nav>
        <div>
          {navOpen ? (
            <>
              <div className='relative  md:hidden' onClick={handleShowNav}>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className='text-black text-[1.875rem]'
                />
              </div>
            </>
          ) : (
            <>
              <div
                className='relative h-[16px] w-[22px] md:hidden'
                onClick={handleShowNav}>
                <Image src='./menu.svg' fill alt='navigation bar' />
              </div>
              <div className='hidden md:flex'>
                <Link
                  href='/contact'
                  className={`transition ease-in-out delay-75 w-[110px] rounded-full py-3 md:py-3 md:text-xl flex items-center justify-center border border-secondary hover:bg-primary hover:border-primary duration-300 `}>
                  Contact Us
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
