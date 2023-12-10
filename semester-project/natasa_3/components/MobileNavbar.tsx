"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Page } from "@/components/Navbar";
import { Dispatch, SetStateAction } from "react";
import {faCartShopping,faMagnifyingGlass,faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const MobileNavbar=({ pages, open, clickHandler }:{pages:Page[], open:boolean, clickHandler:Dispatch<SetStateAction<boolean>>})=>{
    const pathname=usePathname();

    return(        
        <nav  className={cn(
          "flex md:hidden items-center justify-center p-20 w-screen absolute top-0 right-0 z-20 bg-brand-purple-200 opacity-95",
          { hidden: !open })}
        
        onClick={() => clickHandler(!open)} >
            
        <ul className="flex flex-col gap-8 items-center">
        {pages.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>
              <span className={ cn ("uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm",
                   {"bg-brand-purple-700 text-brand-purple-100 pointer-events-none":
                   pathname === href,
                  } )}>           
                 {title}
              </span>
            </Link>
           
          </li>
       
        ))}<li><Link  href="/search"> <FontAwesomeIcon  icon={faMagnifyingGlass}/> </Link> </li>
      </ul>  {/* <ul>   </ul> */}
    </nav>
  );
};
            
export default MobileNavbar;
            
            

  