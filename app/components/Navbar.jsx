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
    <div className='p-4 md:p-6 flex items-center justify-between'>
      <div className='relative h-[48px] w-[95px]'>
        <Image src='/logo-text.svg' fill />
      </div>
      <div>
        <div className='hidden md:flex items-center gap-[50px]'>
          <div className='flex gap-10 items-center'>
            {Links.map(({ title, link }) => (
              <div key={title}>
                <Link className='text-black text-[14px] font-light' href={link}>
                  {title}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <button className='text-black text-[13px] border border-accent px-[25px] py-[10px] rounded-full font-semibold'>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className='relative h-[16px] w-[30px] md:hidden'>
        <Image src='./menubar.svg' fill />
      </div>
    </div>
  );
}

export default Navbar;
