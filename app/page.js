import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} relative m-4 md:m-6 `}>
      <div className='h-screen relative'>
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

        <div className='h-[342px] md:h-[360px] relative rounded-[30px] '>
          <Image
            fill
            src='/hero-large.png'
            className='object-cover rounded-[30px] hidden md:flex'
          />
          <div className='w-[269px] h-[296px] left-0 top-[46px] absolute bg-white border border-secondary/80 md:hidden' />
          <div className='w-[212px] h-[237px]  top-0 right-0 absolute bg-primary md:hidden' />
          <div className='w-[237px] h-[272px] left-[16px] top-[58px] absolute md:hidden'>
            <div className='relative h-full w-full'>
              <Image src='/hero.png' fill objectFit='cover' />
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
    </main>
  );
}
