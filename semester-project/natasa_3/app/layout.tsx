import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Notable } from 'next/font/google';

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart } from "@fortawesome/free-regular-svg-icons";
import {faCartShopping,faMagnifyingGlass,faSearch  } from "@fortawesome/free-solid-svg-icons";
//import Navbar from "app/components/Navbar";
import Navbar from "@/components/Navbar";
// C:\Users\Lenovo\OneDrive\Dokumenti\HCI-2023-24\semester-project\natasa_3\app\layout.tsx

// Get this info from some external source (e.g. CMS)
const pages = { 
  home: "/",  
  products: "/products",
  sign_in: "/sign_in", 
};
 
const inter = Inter({ subsets: ["latin"] });
const notable = Notable({
  weight: '400',
  subsets: ['latin'],
  
})

export const metadata: Metadata = {
  title: "The shop",
  description: "Next.js lab project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
   