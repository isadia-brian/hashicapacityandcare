import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";
const poppins_text = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Regular.ttf",
});
const poppins_medium = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Medium.ttf",
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
const Footer = () => {
  return (
    <div
      className={`${poppins_text.className} px-4 md:px-8 py-10 bg-secondary/5`}>
      <div className='flex flex-col md:flex-row md:justify-between md:border-b-[0.5px] md:border-secondary/50'>
        <div className='relative h-[48px] w-[95px] mb-10'>
          <Image src='/logo-text.svg' fill alt='hashi logo' />
        </div>
        <div className='pb-12 border-b-[0.5px] border-secondary/50 md:border-none md:flex md:gap-[70px]'>
          <div className='mb-10'>
            <h6
              className={` ${poppins_medium.className} uppercase font-normal text-[15px] md:text-[13px] mb-3`}>
              Navigation
            </h6>
            <div className='flex flex-col gap-3'>
              {Links.map(({ title, link }) => (
                <div key={title}>
                  <Link
                    className='text-black text-[14px] md:text-[12px] font-light'
                    href={link}>
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className='mb-10'>
            <h6
              className={` ${poppins_medium.className} uppercase font-normal text-[15px] md:text-[13px] mb-3`}>
              Address
            </h6>
            <div className='flex flex-col gap-3'>
              <p className='text-black text-[14px] md:text-[12px] font-light'>
                P.O BOX 80100-41864
              </p>
              <p className='text-black text-[14px] md:text-[12px] font-light'>
                Oleander Drive
              </p>
              <p className='text-black text-[14px] md:text-[12px] font-light'>
                Mombasa
              </p>
            </div>
          </div>
          <div className='mb-10'>
            <h6
              className={` ${poppins_medium.className} uppercase font-normal text-[15px] md:text-[13px] mb-3`}>
              Contact
            </h6>
            <div className='flex flex-col gap-3'>
              <Link
                className='text-black text-[14px] md:text-[12px] font-light'
                href='tel:0721203790'>
                Phone
              </Link>
              <Link
                className='text-black text-[14px] md:text-[12px] font-light'
                href='mailto:info@hashicapacityandcare.org'>
                Email
              </Link>
            </div>
          </div>
          <div>
            <h6 className='uppercase font-normal text-[15px] md:text-[13px] mb-3'>
              Social
            </h6>
            <div className='flex flex-col gap-3'>
              <Link
                className='text-black text-[14px] md:text-[12px] font-light'
                href='https://www.facebook.com/people/Hashi-Capacity-and-Care/61553692082957/'>
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-8 md:pt-4 pb-1 md:pb-2 flex flex-col gap-3 md:flex-row md:items-center md:gap-3'>
        <p className='text-black text-[14px] md:text-[12px] font-light'>
          <span>&copy;</span> 2023 Hashi Capacity & Care.
        </p>
        <p className='text-black text-[14px]  md:text-[12px] font-light'>
          Developed by Isadia.
        </p>
      </div>
    </div>
  );
};

export default Footer;
