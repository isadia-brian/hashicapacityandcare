"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
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
];

function Navbar({ navOpen, setNavOpen, scrolled }) {
  const handleShowNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={`relative flex items-center justify-between `}>
      <div className='relative h-[48px] w-[95px]'>
        <Image src='/logo-text.svg' fill alt='Hashi logo' />
      </div>
      <div>
        <div className='hidden md:flex items-center gap-[50px] border border-secondary py-1 rounded-full pr-1 pl-6'>
          <div className='flex gap-10 items-center'>
            {Links.map(({ title, link }) => (
              <div key={title}>
                <Link
                  className={"text-black text-[12px] font-light"}
                  href={link}>
                  {title}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <Link
              href='/contact'
              className='text-black text-[12px] border border-accent px-[25px] flex items-center justify-center py-3 rounded-full font-semibold'>
              Contact
            </Link>
          </div>
        </div>
      </div>
      {navOpen ? (
        <>
          {" "}
          <div className='relative  md:hidden' onClick={handleShowNav}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='text-white text-[1.675rem]'
            />
          </div>
        </>
      ) : (
        <>
          {" "}
          <div
            className='relative h-[16px] w-[30px] md:hidden'
            onClick={handleShowNav}>
            <Image src='./menubar.svg' fill alt='navigation bar' />
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
