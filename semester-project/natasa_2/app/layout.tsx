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
        <nav className="flex items-center justify-between p-10">
        
          <div className={notable.className}><Link href="/">The shop</Link></div>
          <ul className="flex gap-8">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
           
            <li> <Link href="/likes"> <FontAwesomeIcon icon={faHeart}/> </Link></li>
            <li> <Link href="/cart"> <FontAwesomeIcon icon={faCartShopping}/> </Link></li> 

          </ul>
          <div>
             <Link href="/search"> <FontAwesomeIcon icon={faMagnifyingGlass}/> </Link> 
          </div>               

        </nav>
        {children}
      </body>
    </html>
  );
}
   