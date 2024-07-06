
import { cn } from "@/lib/utils";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
  const pages=["/all","/kitchen","/bedroom","/living_room"];
//Products bg-blue-950

//  {"bg-blue-900":usePathname()==="/kitchen"})}       pages.map( (a)=>{ return(   {"bg-blue-900":pathname===a} ) })
 const Products1=()=>{
    const pathname=usePathname();
  
    const[ open, setOpen]=useState(false);     
    return(
    <div className="absolute z-30 text-center xl:text-start">
       
        <button
           onClick={ ()=>setOpen(!open) } onMouseEnter={() => setOpen(true)}
            onMouseLeave={() =>setOpen(false)} className={cn(" uppercase text-xl px-5 py-2 text-blue-950 border-2 border-blue-900 round-sm rounded-sm mt-1 ",{"bg-blue-900 text-white":open===true },
                 pages.map( (a)=>{ return(   {"bg-blue-900 text-white":pathname===a} ) })     
            )}           
             > Products
        </button>  

     <Link href="/all">  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 apsolute " , {hidden: !open}, {"bg-blue-900 text-white":usePathname()==="/all"}
        )}  onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
               All
        </div></Link>  
        <Link href="/kitchen">  <div className={cn("text-xl px-5 py-2 round-sm  bg-slate-400 hover:text-white apsolute hover:bg-blue-900", {hidden: !open},
            {"bg-blue-900 text-white":usePathname()==="/kitchen"}
        )} onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
               Kitchen
        </div></Link> 
        <Link href="/bedroom">  <div className={cn("text-xl px-5 py-2 round-sm  bg-slate-400 hover:text-white apsolute hover:bg-blue-900 overflow-visible", {hidden: !open}, {"bg-blue-900 text-white":usePathname()==="/bedroom"}
        )} onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
               Bedroom
        </div></Link>
        <Link href="/living_room"><div className={cn("object-fill text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white apsolute hover:bg-blue-900 ",
         {hidden: !open}, {"bg-blue-900 text-white":usePathname()==="/living_room"}
        )} onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
               Living room
        </div></Link> 


  {/* { pages.map((a)=>{ <Link key={a} href={a}>  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 apsolute " , {hidden: !open},
        )}  onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
              {a}
        </div></Link>   
            
        })} */}

        </div>
    );
};
export default Products1; 
//  transition: 1s ease-in-out;
