import localFont from "next/font/local";
import Image from "next/image";

const poppins_subheading = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-Bold.ttf",
});
const Picture_Card = ({ title, description, image, direction, id }) => {
  return (
    <div className='relative'>
      {direction == "row" ? (
        <div className='relative flex flex-col gap-9 lg:gap-32 md:flex-row md:items-center'>
          <div className='relative h-[220px] w-full md:h-[300px] md:aspect-square lg:h-[420px]'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover'
              loading='lazy'
            />
          </div>
          <div className='w-full flex flex-col gap-10'>
            <p className='text-primary md:text-3xl'>{id}</p>
            <div className='w-full flex flex-col gap-3'>
              <h3
                className={`${poppins_subheading.className} text-3xl font-extrabold md:text-4xl`}>
                {title}
              </h3>
              <p className='text-secondary text-lg md:text-2xl lg:max-w-[500px]'>
                {description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='relative flex flex-col gap-9 lg:gap-32 md:flex-row-reverse md:items-center'>
          <div className='relative h-[220px] w-full md:h-[300px] md:aspect-square lg:h-[420px]'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover'
              loading='lazy'
            />
          </div>
          <div className='w-full flex flex-col gap-2'>
            <p className='text-primary md:text-3xl'>{id}</p>
            <div className='w-full flex flex-col gap-3'>
              <h3
                className={`${poppins_subheading.className} text-3xl font-extrabold md:text-4xl`}>
                {title}
              </h3>
              <p className='text-secondary md:text-2xl lg:max-w-[500px]'>
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Picture_Card;
