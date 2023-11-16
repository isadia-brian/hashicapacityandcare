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
    <main className={`${poppins.className} `}>
      <div className='h-screen w-full relative'>
        <Navbar />
        <div className='px-4 md:px-6 mt-9 py-5'>
          <div className='font-black text-left w-full relative flex items-center justify-start'>
            <h1 className='text-[2rem] leading-10'>
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
          <div className='mt-[11px]'>
            <p className='text-[0.875rem] text-slate-700 mb-[36px]'>
              Begin a healthcare career, create a lasting difference.
            </p>
          </div>
        </div>

        <div className='w-full h-[342px] relative mx-4'>
          <div className='w-[269px] h-[296px] left-0 top-[46px] absolute bg-white border border-secondary' />
          <div className='w-[212px] h-[237px] left-[120px] top-0 absolute bg-primary' />
          <div className='w-[237px] h-[272px] left-[16px] top-[58px] absolute'>
            <div className='relative h-full w-full'>
              <Image src='/hero.png' fill objectFit='cover' />
            </div>
          </div>
        </div>
        <div className='px-4 w-full flex items-center justify-center mt-6'>
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
