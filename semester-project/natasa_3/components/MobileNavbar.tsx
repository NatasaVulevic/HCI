"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Page } from "@/components/Navbar";
import { Dispatch, SetStateAction } from "react";
import {faCartShopping,faMagnifyingGlass,faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Products2 from "./Products2";
//bg-gray-300




const MobileNavbar=({ pages, open, clickHandler,openProducts1,clickHandlerProducts1 }:{pages:Page[], open:boolean,
    clickHandler:Dispatch<SetStateAction<boolean>>,
    openProducts1:boolean, clickHandlerProducts1:Dispatch<SetStateAction<boolean>>})=>{  
    const pathname=usePathname();
    
    return(    
           
        <nav  className={cn("flex md:hidden items-center justify-center p-20 w-screen absolute text-xl top-0 right-0 z-20  bg-stone-300 opacity-95",
          { hidden: !open })}   >
            
        <ul className="flex flex-col text-xl gap-8 items-center">
            {pages.map(({ href, title }) => (
                <li key={href}>
                    <Link href={href}>
                        <span className={ cn ("uppercase text-xl whitespace-nowrap font-roboto-condensed  px-5 py-3 hover:bg-stone-100",
                         /*    {"bg-stone-700 text-black pointer-events-none":pathname === href,} */ )}> 
                            {title}
                        </span>                    
                    </Link>                               
                </li> ))}      
             
                <li>  
                     <span className={ cn ("uppercase whitespace-nowrap font-roboto-condensed  px-5 py-3 hover:bg-stone-100" )}
                         onClick={ ()=>(clickHandlerProducts1(!openProducts1) )}  > 
                        products
                    </span> 
                </li> 
        

                
  
            <li><Link className="hover:bg-stone-100 p-2" href="/search"> <FontAwesomeIcon  icon={faMagnifyingGlass}/> </Link> </li>
        </ul>  
        <XMarkIcon className={cn(" w-8 h-8 text-black m-6 absolute top-0 right-0 z-20 hover:bg-stone-100", { hidden: !open })} 
            onClick= {() => clickHandler(!open)}/> 
              < Products2 open={openProducts1} clickHandler={clickHandlerProducts1} /> 
    </nav>  

   
    );
};
            
export default MobileNavbar;
            
            

  