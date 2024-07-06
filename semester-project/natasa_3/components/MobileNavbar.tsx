"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Page } from "@/components/Navbar";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Products1 from "./Products1";
import Search_bar from "./Search_bar";


const MobileNavbar=({ open,setOpen }:{ open:boolean,setOpen:Dispatch<SetStateAction<boolean>>,
   })=>{  
    const pathname=usePathname();  
   
    return(             
        <nav className={cn("flex flex-col bg-slate-400 xl:hidden items-center justify-start h-screen  p-10 w-screen absolute text-xl top-0 right-0 z-20",
                            { hidden: !open })}  
                           onClick={()=>setOpen(false)}>     
  
          <div className={"mb-6 mt-5 "}><Search_bar open1={false}/></div>

            <Link href="/" ><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm uppercase",
                {"bg-blue-900 text-white":usePathname()==="/"})} >Home</div></Link>             
                    
           <Link href="/about" ><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm z-20 uppercase",
                {"bg-blue-900 text-white":usePathname()==="/about"})} >About</div></Link>
              
            <Link href="/wishlist"><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm uppercase",
                {"bg-blue-900 text-white":usePathname()==="/wishlist"})}  >Wishlist</div></Link>
            <Link href="/cart"><div className={cn("px-5 py-2 m-1 mb-6 hover:bg-blue-900 hover:text-white text-xl rounded-sm uppercase",
                {"bg-blue-900 text-white":usePathname()==="/cart"})}  >Cart</div></Link>
             <div className=" self-center  relative right-16"> <Products1/>  </div>  
             <div className="h-6"></div>
         
        <XMarkIcon className={cn(" w-8 h-8 text-black m-6 absolute top-0 right-0 z-20 hover:cursor-pointer hover:scale-110 transition-ease-out", { hidden: !open })} 
            onClick= {() => setOpen(!open)}/> 
            
    </nav>     
    );
};

export default MobileNavbar;
             /*  onMouseLeave={() =>setOpen(false)} */
            

  