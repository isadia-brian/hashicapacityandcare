import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAngleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

const pnb_font = localFont({
  src: "../public/assets/fonts/fancy/pnb.ttf",
});

export default function Home() {
  return (
    <main className={`${poppins.className} relative  `}>
      <div className='relative  m-4 md:m-6'>
        <Navbar />
        <div className=' mt-9 py-5'>
          <div className='font-black text-left w-full relative flex items-center justify-start'>
            <h1 className='text-[2rem] md:text-[60px] leading-10 md:leading-none'>
              <span>
                PURSUE <br />A{" "}
              </span>
              <span className='text-accent'>
                REWARDING
                <br />
              </span>
              <span>HEALTHCARE CAREER</span>
            </h1>
          </div>
          <div className='mt-[11px] mb-[20px] '>
            <p className='text-[0.85rem] text-secondary/80 '>
              Begin a healthcare career, create a lasting difference.
            </p>
          </div>
        </div>

        <div className='h-[342px] md:h-[420px] relative rounded-[30px] '>
          <Image
            fill
            src='/hero-large.png'
            className='object-cover rounded-[30px] hidden md:flex'
            priority
          />
          <div className='w-[269px] h-[296px] left-0 top-[46px] absolute bg-white border border-secondary/80 md:hidden' />
          <div className='w-[212px] h-[237px]  top-0 right-0 absolute bg-primary md:hidden' />
          <div className='w-[237px] h-[272px] left-[16px] top-[58px] absolute md:hidden'>
            <div className='relative h-full w-full'>
              <Image
                src='/hero.png'
                fill
                className='object-fit object-cover'
                priority
              />
            </div>
          </div>
        </div>
        <div className='px-4 w-full flex items-center justify-center mt-8'>
          <FontAwesomeIcon
            icon={faAnglesDown}
            beatFade
            style={{ color: "#00CCCC", fontSize: "22px" }}
          />
        </div>
      </div>

      <div className='relative flex overflow-x-hidden md:-mt-10 '>
        <div className='flex animate-marquee whitespace-nowrap'>
          <span
            className={`${pnb_font.className} text-[5rem] md:text-[12.5rem] text-fill-transparent text-stroke-2 text-stroke-secondary tracking-wider mx-8 `}>
            HASHI CAPACITY & CARE
          </span>
        </div>
        <div className='absolute top-0 animate-marquee2 whitespace-nowrap'>
          <span
            className={`${pnb_font.className} text-[5rem] md:text-[12.5rem] text-fill-transparent text-stroke-2 text-stroke-secondary tracking-wider mx-8 `}>
            HASHI CAPACITY & CARE
          </span>
        </div>
      </div>

      <div className='relative my-3 bg-primary h-full md:h-[500px] px-4 md:px-0 grid grid-cols-1 md:grid-cols-2'>
        <div>
          <h4 className='flex items-center gap-3 text-lg  md:px-6 py-4'>
            <span className='text-white font-light'>About Us</span>
            <span>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "#00CCCC", fontSize: "16px" }}
              />
            </span>
            <span className='text-white font-bold'>Who We Are</span>
          </h4>
          <div className='relative w-full'>
            <div className='relative h-[180px] mb-10 md:hidden '>
              <Image
                src='/aboutImage.png'
                alt='about hashi image'
                fill
                className='rounded-xl object-cover'
                loading='lazy'
              />
            </div>
            <div className='md:absolute md:left-6 md:top-[6.25rem] md:w-[500px]'>
              <h2 className='text-white font-bold text-lg'>
                Hashi Capacity and Care is a premier healthcare company based in
                Kenya.
              </h2>
              <p className='text-white/75 text-[0.9375rem] my-5'>
                {" "}
                We are dedicated to providing exceptional medical services,
                focusing on improving the well-being of individuals and
                communities across the country. With a team of highly skilled
                professionals and state-of-the-art facilities, we strive to
                deliver high-quality healthcare services that meet the diverse
                needs of our patients.
              </p>

              <Link
                href='#'
                className='flex items-center gap-2 text-white/75 font-medium pb-10 md:pb-0 '>
                <span className='underline underline-offset-4'>LEARN MORE</span>{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} fade />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='relative h-full  '>
            <Image
              src='/aboutImage.png'
              alt='about hashi image'
              fill
              className='object-cover aspect-square'
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <div className='relative my-16'>
        <h5 className='text-secondary text-center  italic px-4 w-[300px]  mx-auto md:w-[600px] text-lg md:text-xl'>
          <span className='font-bold text-accent'>
            “I follow three rules: do the right thing, do your best, and always
            show people you care.”
          </span>
          <br />
          <br />

          <span className='underline underline-offset-4'>Lou Holtz1</span>
        </h5>
      </div>
    </main>
  );
}
