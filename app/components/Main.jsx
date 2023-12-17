import React from "react";

const Main = () => {
  return (
    <div>
      <div
        className={`fixed w-full left-0 p-4 top-0 z-50 ${
          scrolled ? "bg-primary" : "bg-transparent"
        } transition duration-300 ease-in-out`}>
        <Navbar navOpen={navOpen} setNavOpen={setNavOpen} scrolled={scrolled} />
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
        <div>
          <Hero />

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

          <div className='relative border-y-[0.5px] grid grid-cols-1 border-secondary/30 py-12 px-4 md:px-6 lg:px-16 md:grid-cols-2 md:py-20'>
            <motion.div
              initial='hidden'
              animate='visible'
              transition={{ staggerChildren: 0.5 }}
              className='relative md:flex md:flex-col md:justify-center   '>
              <motion.p
                variants={defaultAnimations}
                className='uppercase font-medium text-sm text-primary mb-2'>
                Hashi Capacity
              </motion.p>
              <motion.h5
                variants={defaultAnimations}
                className={`${boska_Regular.className} text-5xl mb-6 text-left `}>
                About
              </motion.h5>
              <motion.p
                variants={defaultAnimations}
                className='text-secondary  md:max-w-[450px] text-[0.85rem] md:text-[16px] mb-6 lg:pr-10'>
                Hashi Capacity and Care is a premier healthcare agency based in
                Kenya, providing top-tier staffing and recruitment solutions for
                the industry.
                <br />
                <br />
                We are dedicated to providing exceptional medical services,
                focusing on improving the well-being of individuals and
                communities across the country. With a team of highly skilled
                professionals and state-of-the-art facilities, we strive to
                deliver high-quality healthcare services that meet the diverse
                needs of our patients.
              </motion.p>

              <motion.div variants={defaultAnimations}>
                <Link
                  href='/about'
                  className='text-sm  underline underline-offset-8 cursor-pointer hover:underline-offset-4 transition ease-in duration-300 text-accent'>
                  EXPLORE MORE
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1.5 },
              }}
              className='relative mt-10 md:mt-0  flex  md:items-center md:justify-end  '>
              <div className='relative w-full md:w-[351px] h-[300px] md:h-[498px] '>
                <Image
                  src='/aboutImage.png'
                  fill
                  alt='about hashi'
                  className='object-cover'
                  loading='lazy'
                />
              </div>
            </motion.div>
          </div>

          <div className='relative my-16'>
            <h5 className='text-secondary text-center  italic px-4 w-[300px]  mx-auto md:w-[600px] text-lg md:text-xl'>
              <span className='font-light text-secondary'>
                “I follow three rules: do the right thing, do your best, and
                always show people you care.”
              </span>
              <br />
              <br />

              <span className='underline underline-offset-4'>Lou Holtz1</span>
            </h5>
          </div>

          <div className='relative border-y-[0.5px] text-secondary grid grid-cols-1 border-secondary/30 py-12 px-4 md:px-6 lg:px-16 md:grid-cols-4 md:py-20 gap-10'>
            <div className='relative   '>
              <p className='uppercase font-medium text-sm text-primary mb-2'>
                What we do
              </p>
              <h5
                className={`${boska_Regular.className} text-5xl mb-6 text-left `}>
                Services
              </h5>
            </div>
            <div></div>

            <div className='-mt-16 md:-mt-0'>
              <p className='text-accent text-5xl font-medium'>01</p>
              <h5 className='text-primary my-4 uppercase'>
                Staffing & Recruitment
              </h5>
              <p className='text-[0.85rem md:text-[12px]'>
                We train, develop, and seamlessly link skilled healthcare-giving
                professionals with organizations in the industry, fostering a
                harmonious partnership that enhances the delivery of exceptional
                care.
              </p>
            </div>

            <div>
              <p className='text-accent text-5xl font-medium'>02</p>
              <h5 className='text-primary my-4 uppercase'>Primary Care</h5>
              <p className='text-[0.85rem md:text-[12px]'>
                We provide comprehensive primary healthcare services to
                individuals of all ages, ensuring regular check-ups, preventive
                care, and early intervention.
              </p>
            </div>
            <div>
              <p className='text-accent text-5xl font-medium'>03</p>
              <h5 className='text-primary my-4 uppercase'>
                Specialized Medical Care
              </h5>
              <p className='text-[0.85rem md:text-[12px]'>
                Our team of specialists offers expert care in various medical
                fields, including cardiology, oncology, pediatrics, gynecology,
                orthopedics, and more
              </p>
            </div>
            <div>
              <p className='text-accent text-5xl font-medium'>04</p>
              <h5 className='text-primary my-4 uppercase'>
                Diagnostic Services
              </h5>
              <p className='text-[0.85rem md:text-[12px]'>
                We offer advanced diagnostic services such as laboratory tests,
                radiology, ultrasounds, and medical imaging to aid accurate
                diagnosis and effective treatment plans.
              </p>
            </div>
            <div>
              <p className='text-accent text-5xl font-medium'>05</p>
              <h5 className='text-primary my-4 uppercase'>Emergency Care</h5>
              <p className='text-[0.85rem md:text-[12px]'>
                Our 24/7 emergency department is equipped to handle medical
                emergencies promptly and efficiently, ensuring immediate care
                when needed.
              </p>
            </div>
            <div>
              <p className='text-accent text-5xl font-medium'>06</p>
              <h5 className='text-primary my-4 uppercase'>Wellness Programs</h5>
              <p className='text-[0.85rem md:text-[12px]'>
                We promote holistic well-being through wellness programs that
                focus on nutrition, fitness, mental health, and overall
                lifestyle improvements.
              </p>
            </div>
            <div>
              <p className='text-accent text-5xl font-medium'>07</p>
              <h5 className='text-primary my-4 uppercase'>
                Community Outreach
              </h5>
              <p className='text-[0.85rem md:text-[12px]'>
                We actively engage with local communities, organizing health
                camps, educational workshops, and awareness campaigns to promote
                health and disease prevention
              </p>
            </div>
          </div>

          <div className='relative border-b-[0.5px] grid grid-cols-1 border-secondary/30 py-12 px-4 md:px-6 lg:px-16  md:py-20'>
            <h5
              className={`${boska_Regular.className} text-5xl mb-6 text-left md:text-center `}>
              Why Choose Us
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-5 md:gap-2 mb-12 md:mb-20'>
              {items.map(({ icon, paragraph }, index) => (
                <div
                  className='border-b-[0.5px] border-secondary/30 py-8'
                  key={index}>
                  <p className='mb-6 text-[25px] text-primary md:text-center'>
                    {icon}
                  </p>
                  <p className='text-secondary/95 text-[0.85rem md:text-[12px] md:text-center md:text-xs'>
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
            <div className='mb-9'>
              <h6
                className={`${boska_Regular.className} text-4xl text-primary mb-6 text-left md:text-center `}>
                Our Mission
              </h6>
              <p className='text-secondary/95 md:text-center text-[0.85rem md:text-[12px]  max-w-[600px] mx-auto'>
                To enhance the health and wellness of the Kenyan population by
                delivering personalized, compassionate, and accessible
                healthcare solutions.
              </p>
            </div>
            <div>
              <h6
                className={`${boska_Regular.className} text-primary text-4xl mb-6 text-left md:text-center `}>
                Our Vision
              </h6>
              <p className='text-secondary/95 md:text-center text-[0.85rem md:text-[12px] text-[0.85rem md:text-[12px max-w-[600px] mx-auto'>
                To be the leading healthcare provider in Kenya, setting industry
                benchmarks through exceptional patient care, innovation, and
                community involvement.
              </p>
            </div>
          </div>
          <div className='relative border-y-[0.5px] grid grid-cols-1 border-secondary/30 py-12 px-4 md:px-28 md:grid-cols-2 md:py-20 bg-primary w-full'>
            <div className='relative md:flex md:flex-col md:justify-center mb-3  '>
              <p className='uppercase font-medium text-sm text-secondary mb-3'>
                GET IN TOUCH
              </p>
              <h5
                className={`${boska_Regular.className} text-5xl mb-6 text-left text-white `}>
                Contact Us
              </h5>
              <p className='mb-6 md:pr-10 text-[0.85rem md:text-[12px] text-secondary'>
                Interested in joining our team or simply reaching out? Whether
                you are exploring career opportunities or have inquiries, we are
                here for you. Fill out the form and click send to get in touch
                with us. Let us know if you are interested in collaboration or
                if you have general questions. We look forward to connecting
                with you.
              </p>
            </div>
            <div className='relative mt-3 md:mt-0    '>
              <div className='relative w-full  md:flex  md:items-center md:justify-end'>
                <form
                  className='grid grid-cols-1 gap-2  relative '
                  action='mailto:info@hashicapacityandcare.org'
                  method='get'
                  encType='text/plain'>
                  <div>
                    <input
                      type='text'
                      className='outline-none border-[0.5px] border-gray-700 w-full md:w-[350px] px-2 py-2 rounded-lg bg-primary/10'
                      placeholder='Full Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name='subject'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      className='outline-none border-[0.5px] border-gray-700 w-full md:w-[350px] px-2 py-2 rounded-lg bg-primary/10'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name='email'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      className='outline-none border-[0.5px] border-gray-700 w-full md:w-[350px] px-2 py-2 rounded-lg bg-primary/10'
                      placeholder='Mobile Number'
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div>
                    <textarea
                      type='text'
                      rows={3}
                      className='outline-none border-[0.5px] border-gray-700 w-full md:w-[350px] px-2 py-2 rounded-lg bg-primary/10'
                      placeholder='Message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name='body'
                    />
                  </div>
                  <button
                    type='submit'
                    className='mt-4 bg-white py-2 rounded-lg'>
                    SEND
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Faqs />
        </div>
      )}
    </div>
  );
};

export default Main;
