import localFont from "next/font/local";

const poppins_semibold = localFont({
  src: "../../public/assets/fonts/poppins/Poppins-SemiBold.ttf",
});

const Button = ({ text, primary }) => {
  return (
    <div>
      {primary ? (
        <button
          className={`transition delay-75 ease-in-out bg-primary w-[120px] md:w-[150px] py-3 md:py-4 md:text-xl flex items-center justify-center border border-primary hover:bg-white hover:border-secondary hover:scale-x-110 duration-300 ${poppins_semibold.className}`}>
          {text}
        </button>
      ) : (
        <button
          className={`transition delay-75 ease-in-out w-[120px]  md:w-[150px] py-3 md:py-4 md:text-xl flex items-center justify-center hover:bg-black hover:text-white hover:border-secondary hover:scale-x-110 duration-300 ${poppins_semibold.className} border border-secondary`}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
