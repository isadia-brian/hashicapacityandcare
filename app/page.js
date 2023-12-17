import localFont from "next/font/local";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";

import About from "./components/About";
import Quote from "./components/Quote";
import Services from "./components/Services";
import Why_Us from "./components/Why_Us";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const poppins_text = localFont({
  src: "../public/assets/fonts/poppins/Poppins-Regular.ttf",
});

export const metadata = {
  title: "hashicapacityandcare",
  description: "Providing healthcare for all",
};

export default function Home() {
  return (
    <main
      className={`${poppins_text.className} relative px-4 py-7 md:py-12 md:px-8 `}>
      <Hero />
      <About />
      <Quote />
      <Services />
      <Why_Us />
      <Testimonials />
      <Contact />
      <Faqs />
    </main>
  );
}
