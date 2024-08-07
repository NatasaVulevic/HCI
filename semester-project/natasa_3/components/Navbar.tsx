 "use client"
 import Link from "next/link";
import Logo from './Logo';
import { useState } from "react";
import Hamburger from "@/components/Hamburger";
import MobileNavbar from "@/components/MobileNavbar";
import Products1 from "@/components/Products1";
import Search_bar from "./Search_bar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type Page = {
  href: string;
  title: string;
};

const NavBar=()=>{ 
  const[open, setOpen]=useState(false);
  const[ open1, setOpen1]=useState(false);
  
  const pages : Page[]= [    
    {href: "/",  title:"home" } ,  
    {href: "/sign_in", title:"sign in "}
    ];   
  
  return (
  <nav className=" flex justify-between p-4 w-full text-xl text-gray-900 bg-slate-400 items-center ">
      <div className=" pl-4 scale-200"><Logo/></div> 
  
          <div className="relative right-4 invisible xl:visible bottom-7 ">                        
                <Products1  open3={open1} setOpen3={setOpen1} />
           </div> 
            <div className="m-1  hidden xl:inline relative left-32 "><Search_bar /></div>
            
              <div className="xl:flex flex justify-between uppercase  hidden relative left-24">
                <Link href="/" ><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm",
                    {"bg-blue-900 text-white":usePathname()==="/"})} >Home</div></Link>
                <Link href="/about" ><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm",
                    {"bg-blue-900 text-white":usePathname()==="/about"})} >About</div></Link>
                  
                <Link href="/wishlist"><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm",
                    {"bg-blue-900 text-white":usePathname()==="/wishlist"})}  >Wishlist</div></Link>
                <Link href="/cart"><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm",
                    {"bg-blue-900 text-white":usePathname()==="/cart"})}  >Cart</div></Link>
              </div>
          <div className="apsolute right-0"> <Hamburger  open={open1} setOpen={setOpen1}/> </div> 
    <MobileNavbar  open={open1} setOpen={setOpen1} /> 
          
    
  </nav>
);};

export default NavBar;





   
  