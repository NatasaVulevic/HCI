import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
  const pages=["/all","/kitchen","/bedroom","/living_room"];
import { Dispatch, SetStateAction } from "react";


 const Products1=( {open3,setOpen3 }:{ open3:boolean,setOpen3:Dispatch<SetStateAction<boolean>>,
 } )=>{
    const pathname=usePathname();  
    const[ open2, setOpen2]=useState(false);     
  
    return(
    <div className="absolute z-30 text-center xl:text-start ">       
        <button
           onClick={ ()=>setOpen2(!open2) } onMouseEnter={() => setOpen2(true)}
            onMouseLeave={() =>setOpen2(false)} className={cn(" uppercase text-xl px-5 py-2 text-blue-950 border-2 border-blue-900 round-sm rounded-sm mt-1 relative right-4 ",{"bg-blue-900 text-white":open2===true },
                 pages.map( (a)=>{ return(   {"bg-blue-900 text-white":pathname===a} ) })     
            )}           
             > Products&nbsp;&nbsp;&gt;
        </button>  

     <Link href="/all">  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 relative right-4 " ,
                      {hidden: !open2}, {"bg-blue-900 text-white":usePathname()==="/all"}
        )}  onMouseEnter={() => setOpen2(true)}
        onMouseLeave={() =>setOpen2(false)}  onClick={()=>setOpen3(false) }>
               All
        </div></Link>  
        <Link href="/kitchen">  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 relative right-4", 
                                   {hidden: !open2}, {"bg-blue-900 text-white":usePathname()==="/kitchen"}
        )} onMouseEnter={() => setOpen2(true)}
        onMouseLeave={() =>setOpen2(false)}
        onClick={()=>setOpen3(false)}
        >
               Kitchen
        </div></Link> 
        <Link href="/bedroom">  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white  hover:bg-blue-900 relative right-4", 
                                   {hidden: !open2}, {"bg-blue-900 text-white":usePathname()==="/bedroom"}
        )} onMouseEnter={() => setOpen2(true)}
        onMouseLeave={() =>setOpen2(false)}
        onClick={()=>setOpen3(false)}
        >
               Bedroom
        </div></Link>
        <Link href="/living_room"><div className={cn(" text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 relative right-4",
                                          {hidden: !open2}, {"bg-blue-900 text-white":usePathname()==="/living_room"}
        )} onMouseEnter={() => setOpen2(true)}
        onMouseLeave={() =>setOpen2(false)}
        onClick={()=>setOpen3(false)}
         >
               Living room
        </div></Link> 
        </div>
    );
};
export default Products1; 
//  transition: 1s ease-in-out;
  
{/* { pages.map((a)=>{ <Link key={a} href={a}>  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 apsolute " , {hidden: !open},
        )}  onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>setOpen(false)} >
              {a}
        </div></Link>   
            
        })} */}