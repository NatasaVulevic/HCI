import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

//Products bg-blue-950

 const Products1=()=>{
    const[ open, setOpen]=useState(false);
    return(
    <div className="absolute  z-30">
        <button 
           onClick={ ()=>setOpen(!open) } onMouseEnter={() => setOpen(true)}
            onMouseLeave={() =>setOpen(false)} className={cn(" uppercase text-xl px-5 text-white py-2 round-sm  bg-blue-950  mt-1 ",{"bg-blue-900":open===true },
                    {"bg-blue-900":usePathname()==="/kuhinja"})}
             > Products
        </button>
       <Link href="/all">  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 " , {hidden: !open},
        )}  onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
               All
        </div></Link> 
        <Link href="/kuhinja">  <div className={cn("text-xl px-5 py-2 round-sm  bg-slate-400 hover:text-white apsolute hover:bg-blue-900", {hidden: !open},
            {"bg-blue-900 text-white":usePathname()==="/kuhinja"}
        )} onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
               Kitchen
        </div></Link>
        <Link href="/spavaca_soba">  <div className={cn("text-xl px-5 py-2 round-sm  bg-slate-400 hover:text-white apsolute hover:bg-blue-900 overflow-visible", {hidden: !open}
        )} onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
               Bedroom
        </div></Link>
        <Link href="/dnevni_boravak"><div className={cn("object-fill text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white apsolute hover:bg-blue-900 ",
         {hidden: !open}
        )} onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
               Living room
        </div></Link>

        </div>
    );
};
export default Products1; 
//  transition: 1s ease-in-out;
