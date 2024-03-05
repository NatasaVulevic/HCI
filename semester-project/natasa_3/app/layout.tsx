import type { Metadata } from "next";
import clsx from "clsx";
import { Notable } from 'next/font/google';
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core"; // Tell Font Awesome to skip adding the CSS automatically since it's already imported above
config.autoAddCss = false; 
import Navbar from "@/components/Navbar";
import FooterItem from "@/components/FooterItem";
import SocialnIcons from "@/components/SocialNIcons";
import {
  Inter,
  Roboto,
  Roboto_Condensed,
  Playfair_Display,
} from "next/font/google";
import { cn } from "@/lib/utils";
 
  

// Get this info from some external source (e.g. CMS)
const pages = { 
  logo:"/",
  home: "/",   
  sign_in: "/sign_in",
  
};


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
export const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});



const notable = Notable({
  weight: '400',
  subsets: ['latin'],  
})

export const metadata: Metadata = {
  title: "The shop",
  description: "Next.js lab project",
};

//  "${inter.className} bg-page_background"    
export default function RootLayout(
  {
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"
    className={clsx(
      roboto.variable,
      roboto_condensed.variable,
      playfairDisplay.variable
    )}>
      <body className={cn( "bg-sky-950/10 relative",inter.className)}   > 
        <Navbar/>
        {children}

    <footer className=" bg-slate-800 text-white p-2" >
      <div className=" grid grid-cols-2 md:grid-cols-5 ">

     <div className="md:ml-0">   <FooterItem title={"ABOUT US"} content={["About us", "Join our team"]}/> </div>
     <div className="md:mr-0 relative right-12">      <FooterItem title={"CUSTOMER SERVICE"} content={["Customer information", "Delivery","Returns"]}/></div>
        <FooterItem title={"CONTACT"} content={["Contact us", "Find store","Book appointment","As a professional"]}/>
       
          <div className=" w-3/12 items-end m-4 grid col-start-2 col-end-3 md:col-start-5 md:col-end-6">
            <SocialnIcons/>
          </div>
      </div>
      <div className="flex justify-center">
             copyright © 2023 nateo
      </div>

        </footer>

      </body>
    </html>
  );
}
   