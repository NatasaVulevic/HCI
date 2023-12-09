import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Notable } from 'next/font/google';
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core"; // Tell Font Awesome to skip adding the CSS automatically since it's already imported above
config.autoAddCss = false; 
import Navbar from "@/components/Navbar";
import FooterItem from "@/components/FooterItem";
import SocialnIcons from "@/components/SocialNIcons";
  

// Get this info from some external source (e.g. CMS)
const pages = { 
  logo:"/",
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
      <body className=/* {inter.className} */ /* bg-gradient-to-b from-current to-transparent bg-blue-900/90 */ "bg-white"  >
        <Navbar/>
        {children}

        <footer className=" bg-slate-800 text-white" >
      <div className=" grid grid-cols-2 md:grid-cols-5 ">
        <FooterItem title={"ABOUT US"} content={["About us", "Join our team"]}/>
        <FooterItem title={"CUSTOMER SERVICE"} content={["Customer information", "Delivery","Returns"]}/>
        <FooterItem title={"CONTACT"} content={["Contact us", "Find store","Book appointment","As a professional"]}/>
       
          <div className=" w-3/12 items-end m-4 grid col-start-2 col-end-3 md:col-start-5 md:col-end-6">
            <SocialnIcons/>
          </div>
      </div>
      <div className="flex justify-center">
             copyright © 2023 the shop
      </div>

        </footer>

      </body>
    </html>
  );
}
   