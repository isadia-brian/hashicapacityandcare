"use client";

import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const poppins_heading = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Black.ttf",
});

const poppins_semibold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-SemiBold.ttf",
});
const poppins_text = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Regular.ttf",
});

const Careers = () => {
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
    <div
      className={`${poppins_text.className} relative px-4 py-7 md:py-12 md:px-8`}>
      <div className='mt-[100px] md:mt-52 mb-16'>
        <div className='relative'>
          <div className='relative'>
            <h1 className=' font-extrabold  text-[30px] md:text-[50px] leading-snug  md:leading-tight'>
              THE FUTURE <br /> FAVORS THE{" "}
              <span className='text-primary'>BRIGHTS</span>
            </h1>
            <div className=' md:relative mt-8 md:mt-12'>
              <div className='w-full md:w-full h-[252px] md:h-[500px] relative md:rounded-[30px] '>
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

        <div className='relative mt-8 md:mt-[70px] '>
          <div className='mt-12'>
            <p className='text-primary mt-10  md:text-2xl mb-2'>
              WHAT WE OFFER
            </p>
            <h1
              className={`${poppins_semibold.className} text-4xl  mb-6 text-left`}>
              Benefits
            </h1>

            <div className='mt-4 grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3 md:mb-24'>
              {benefits.map(({ id, name, description }) => {
                return (
                  <div className='flex flex-col gap-2' key={id}>
                    <p className='mt-10  md:text-2xl pr-12 text-primary'>
                      {id}
                    </p>
                    <div className='h-[0.5px] w-full bg-slate-400'></div>
                    <h5 className='text-[18px] font-bold '>{name}</h5>

                    <p className='mt-10  md:text-2xl '>{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='my-12 border-b-[0.5px] border-slate-400 pb-12 md:grid grid-cols-2'>
            <div>
              <p className='text-primary mt-10  md:text-2xl pr-12 mb-2'>
                CAREERS
              </p>
              <p
                className={`${poppins_semibold.className} text-4xl mb-2 text-left`}>
                Current Openings
              </p>
            </div>
            <div className='flex flex-col gap-2 md:text-[13px]'>
              <p className='mt-10  md:text-2xl'>
                At the momemt we do not have any open positions but we are
                always looking for curious, courageous, and collaborative
                talent. If you believe you can make us better, please reach out
                to
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
    </div>
  );
};

export default Careers;
