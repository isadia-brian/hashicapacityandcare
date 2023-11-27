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

const Contact = () => {
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
            <div className='mt-20 md:mt-28 py-5'>
              <h1
                className={`${boska_Regular.className} text-[2.5rem] md:text-[4rem] text-center mb-4`}>
                Contact Us
              </h1>
              <p className='text-center mb-10'>
                Please fill in the form and click submit. One of our personel
                will get to you shortly
              </p>
              <div className=''>
                <form
                  action=''
                  className='grid grid-cols-1 md:grid-cols-2 gap-5 text-secondary md:py-[70px] md:px-[180px]'>
                  <div className='grid grid-cols-1 gap-3 col-span-2 md:col-span-1 '>
                    <label htmlFor='First Name' className=''>
                      First Name <span>*</span>
                    </label>
                    <input
                      type='text'
                      className='outline-none border-b-[0.5px] border-primary'
                    />
                  </div>
                  <div className='grid grid-cols-1 gap-3 col-span-2 md:col-span-1'>
                    <label htmlFor='Last Name' className=''>
                      Last Name <span>*</span>
                    </label>
                    <input
                      type='text'
                      className='outline-none border-b-[0.5px] border-primary'
                    />
                  </div>
                  <div className='grid grid-cols-1 gap-3 col-span-2 md:col-span-1'>
                    <label htmlFor='Email' className=''>
                      Email <span>*</span>
                    </label>
                    <input
                      type='text'
                      className='outline-none border-b-[0.5px] border-primary'
                    />
                  </div>
                  <div className='grid grid-cols-1 gap-3 col-span-2 md:col-span-1'>
                    <label htmlFor='Mobile' className=''>
                      Mobile <span>*</span>
                    </label>
                    <input
                      type='text'
                      className='outline-none border-b-[0.5px] border-primary'
                    />
                  </div>
                  <div className='grid grid-cols-1 col-span-2 gap-3 mt-6'>
                    <label htmlFor='category' className=''>
                      What do you need help with ? <span>*</span>
                    </label>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                      <div className='flex items-center gap-2'>
                        <input type='checkbox' value='health' />
                        <label for='health'> Health Queries</label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='checkbox' value='partner' />
                        <label for='partner'>Become a Partner</label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='checkbox' value='career' />
                        <label for='career'>Join Our Team</label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <input type='checkbox' value='other' />
                        <label for='other'>Other</label>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-1 col-span-2 gap-3 mt-6'>
                    <label htmlFor='category' className=''>
                      How did you hear about us ? <span>*</span>
                    </label>
                    <select
                      name='source'
                      id='source'
                      className='outline-none border-b-[0.5px] border-primary text-xs py-2'>
                      <option>Select One...</option>
                      <option>Referral</option>
                      <option>Google</option>
                      <option>Facebook</option>
                    </select>
                  </div>
                  <div className='grid grid-cols-1 col-span-2 gap-3 mt-6'>
                    <label htmlFor='message' className=''>
                      Message <span>*</span>
                    </label>
                    <textarea
                      name='message'
                      id='message'
                      cols='10'
                      rows='5'
                      className='text-xs py-4 outline-none border-b-[0.5px] border-primary'
                      placeholder='Type your message...'></textarea>
                  </div>
                  <div className='mt-5 mb-28 grid grid-cols-1 col-span-2'>
                    <button
                      type='submit'
                      className='border-[0.5px] border-accent px-6 py-3 rounded-full w-[150px] mx-auto'>
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
