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

const Careers = () => {
  const [navOpen, setNavOpen] = useState(false);
  const benefits = [
    {
      id: "01",
      name: "Health Insurance",
      description:
        "Comprehensive health coverage ensures your well-being, providing peace of mind for you and your family.",
    },
    {
      id: "02",
      name: "Vacation Time",
      description:
        "Enjoy work-life balance with generous vacation time, fostering relaxation and rejuvenation for sustained productivity.",
    },
    {
      id: "03",
      name: "Parental Leave",
      description:
        "Supporting your family journey, our parental leave allows you precious time to bond with your newborn.",
    },
    {
      id: "04",
      name: "Training",
      description:
        "Continuous learning is at our core. Access cutting-edge training programs to enhance your skills and career.",
    },
    {
      id: "05",
      name: "Team Retreat",
      description:
        "Forge stronger bonds and synergies with team retreats, creating a collaborative and innovative work culture.",
    },
    {
      id: "06",
      name: "Holiday Rest",
      description:
        "Embrace the festive spirit guilt-free with ample holiday rest, ensuring a joyful and stress-free celebration.",
    },
  ];
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
            <div className='relative  mt-28 md:mt-36] py-5'>
              <div className='relative'>
                <h1 className=' font-extrabold text-[30px] md:text-[50px] leading-snug  md:leading-tight'>
                  THE FUTURE <br /> FAVORS THE{" "}
                  <span className='text-primary'>BRIGHTS</span>
                </h1>
                <div className='absolute top-[25%] right-0 -z-30 md:relative md:mt-12'>
                  <div className='w-[300px] md:w-full h-[252px] md:h-[500px] relative md:rounded-[30px] '>
                    <Image
                      src='/team.jpg'
                      alt='team'
                      className='object-cover md:rounded-[30px] '
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='relative mt-[232px] md:mt-[70px] '>
              <div className='mt-12'>
                <p className='text-primary text-sm'>WHAT WE OFFER</p>
                <h1
                  className={`${boska_Regular.className} text-[3rem] leading-[-1rem] md:text-[4rem]`}>
                  Benefits
                </h1>

                <div className='mt-4 grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3 md:mb-24'>
                  {benefits.map(({ id, name, description }) => {
                    return (
                      <div className='flex flex-col gap-2' key={id}>
                        <p className='text-xs text-slate-400'>{id}</p>
                        <div className='h-[0.5px] w-full bg-slate-400'></div>
                        <h5 className='text-[18px] font-bold text-slate-700'>
                          {name}
                        </h5>

                        <p className='md:text-[13px] text-slate-500'>
                          {description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='my-12 border-b-[0.5px] border-slate-400 pb-12 md:grid grid-cols-2'>
                <div>
                  <p className='text-primary text-sm mb-1'>CAREERS</p>
                  <p
                    className={`${boska_Regular.className}  text-[2.5rem] leading-[-1rem] md:text-[4rem]`}>
                    Current Openings
                  </p>
                </div>
                <div className='flex flex-col gap-2 md:text-[13px] text-slate-500'>
                  <p className=''>
                    At the momemt we do not have any open positions but we are
                    always looking for curious, courageous, and collaborative
                    talent. If you believe you can make us better, please reach
                    out to
                  </p>
                  <div className=' underline mt-2'>
                    <Link href='#' className={` text-lg text-primary `}>
                      INFO@HASHICAPACITYANDCARE.ORG
                    </Link>
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

export default Careers;
