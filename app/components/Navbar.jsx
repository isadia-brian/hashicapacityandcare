import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
    link: "#",
  },
  {
    title: "Services",
    link: "#",
  },
  {
    title: "Careers",
    link: "#",
  },
];

function Navbar() {
  return (
    <div className='relative flex items-center justify-between'>
      <div className='relative h-[48px] w-[95px]'>
        <Image src='/logo-text.svg' fill alt='Hashi logo' />
      </div>
      <div>
        <div className='hidden md:flex items-center gap-[50px] border border-secondary py-1 rounded-full pr-1 pl-6'>
          <div className='flex gap-10 items-center'>
            {Links.map(({ title, link }) => (
              <div key={title}>
                <Link className='text-black text-[12px] font-light' href={link}>
                  {title}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <button className='text-black text-[12px] border border-accent px-[25px] py-[8px] rounded-full font-semibold'>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className='relative h-[16px] w-[30px] md:hidden'>
        <Image src='./menubar.svg' fill alt='navigation bar' />
      </div>
    </div>
  );
}

export default Navbar;
