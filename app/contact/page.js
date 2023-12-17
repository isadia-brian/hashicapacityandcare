"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

const Contact = () => {
  return (
    <div className={`${poppins.className} relative px-4 py-7 md:py-12 md:px-8`}>
      <div className='mt-[100px] md:mt-52 mb-16 md:text-2xl'>
        <div className=''>
          <h1
            className={`text-[1.53rem] mb-9 text-primary md:text-5xl lg:text-6xl md:leading-tight md:pr-28 lg:max-w-[950px] lg:pr-0 lg:leading-tight md:text-center mx-auto`}>
            Contact Us
          </h1>
          <p className='md:text-center mb-10 md:max-w-[500px] mx-auto'>
            Please fill in the form and click submit. One of our personel will
            get to you shortly
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
                  className='outline-none bg-transparent border-b-[0.5px] border-primary'
                />
              </div>
              <div className='grid grid-cols-1 gap-3 col-span-2 md:col-span-1'>
                <label htmlFor='Last Name' className=''>
                  Last Name <span>*</span>
                </label>
                <input
                  type='text'
                  className='outline-none bg-transparent border-b-[0.5px] border-primary'
                />
              </div>
              <div className='grid grid-cols-1 gap-3 col-span-2 md:col-span-1'>
                <label htmlFor='Email' className=''>
                  Email <span>*</span>
                </label>
                <input
                  type='text'
                  className='outline-none bg-transparent border-b-[0.5px] border-primary'
                />
              </div>
              <div className='grid grid-cols-1 gap-3 col-span-2 md:col-span-1'>
                <label htmlFor='Mobile' className=''>
                  Mobile <span>*</span>
                </label>
                <input
                  type='text'
                  className='outline-none bg-transparent border-b-[0.5px] border-primary'
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
                  className='outline-none bg-transparent border-b-[0.5px] border-primary py-2'>
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
                  className=' py-4 outline-none bg-transparent border-b-[0.5px] border-primary'
                  placeholder='Type your message...'></textarea>
              </div>
              <div className='mt-5 mb-28 grid grid-cols-1 col-span-2'>
                <button
                  type='submit'
                  className='bg-primary text-black px-6 py-3 rounded-full w-[150px] mx-auto'>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
