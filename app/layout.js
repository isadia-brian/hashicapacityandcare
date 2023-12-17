"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer";
import Header from "./components/Header";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='bg-background'>
          <Header setNavOpen={setNavOpen} navOpen={navOpen} />
          {!navOpen && (
            <div>
              {children}
              <Footer />
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
