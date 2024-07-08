"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Products1 from "./Products1";
import Search_bar from "./Search_bar";
import { usePathname } from "next/navigation"; 
  const pages=["/all","/kitchen","/bedroom","/living_room"];


const MobileNavbar=({ open,setOpen }:{ open:boolean,setOpen:Dispatch<SetStateAction<boolean>>,
   })=>{  
    const pathname=usePathname();  
    const[open2, setOpen2]=useState(false);
   
    return(             
        <nav className={cn("flex flex-col bg-slate-400 xl:hidden items-center justify-start h-screen p-10 w-screen absolute text-xl top-0 right-0 z-20",
                            { hidden: !open })}  >     
  
          <div className={cn("mb-6 mt-5 ")}  ><Search_bar /></div>

            <Link href="/" ><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm uppercase z-40",
                {"bg-blue-900 text-white":usePathname()==="/"})} onClick={()=>setOpen(false)} >Home</div></Link>             
                    
           <Link href="/about" ><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm z-20 uppercase",
                {"bg-blue-900 text-white":usePathname()==="/about"})} onClick={()=>setOpen(false)} >About</div></Link>
              
            <Link href="/wishlist"><div className={cn("px-5 py-2 m-1 hover:bg-blue-900 hover:text-white text-xl rounded-sm uppercase",
                {"bg-blue-900 text-white":usePathname()==="/wishlist"})} onClick={()=>setOpen(false)} >Wishlist</div></Link>
            <Link href="/cart"><div className={cn("px-5 py-2 m-1 mb-6 hover:bg-blue-900 hover:text-white text-xl rounded-sm uppercase",
                {"bg-blue-900 text-white":usePathname()==="/cart"})} onClick={()=>setOpen(false)} >Cart</div></Link>

            {/*  <div className=" self-center  relative right-16"> <Products1 open3={open} setOpen3={setOpen}/>  </div>   */}
    <div className=" self-center  relative right-16">
        <div className="absolute z-30 text-center xl:text-start ">       
       <button
          onClick={ ()=>setOpen2(!open2) }  onMouseEnter={() => setOpen2(!open2)}
           onMouseLeave={() =>setOpen2(false)}
                 className={cn(" uppercase text-xl px-5 py-2 text-blue-950 border-2 border-blue-900 round-sm rounded-sm mt-1 relative right-4 ",
                            {"bg-blue-900 text-white z-40":open2===true},
                pages.map( (a)=>{ return(   {"bg-blue-900 text-white":pathname===a} ) })     
           )}           
            > Products
       </button>  
    <Link href="/all">  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 relative right-4 " , {hidden: !open2} , {"bg-blue-900 text-white":usePathname()==="/all"}
       )}  onMouseEnter={() => setOpen2(true)}
       onMouseLeave={() =>setOpen2(false)} onClick={()=>setOpen(false)}>
              All
       </div></Link>  
       <Link href="/kitchen">  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 relative right-4" , {hidden: !open2} ,
           {"bg-blue-900 text-white":usePathname()==="/kitchen"}
       )} onMouseEnter={() => setOpen2(true)}
       onMouseLeave={() =>setOpen2(false)}
       onClick={()=>setOpen(false)} >
              Kitchen
       </div></Link> 
       <Link href="/bedroom">  <div className={cn("text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white  hover:bg-blue-900 relative right-4", {hidden: !open2},  {"bg-blue-900 text-white":usePathname()==="/bedroom"}
       )} onMouseEnter={() => setOpen2(true)}
       onMouseLeave={() =>setOpen2(false)}
       onClick={()=>setOpen(false)} >
              Bedroom
       </div></Link>
       <Link href="/living_room"><div className={cn(" text-xl px-5 py-2 round-sm bg-slate-400 hover:text-white hover:bg-blue-900 relative right-4",
         {hidden: !open2},  {"bg-blue-900 text-white":usePathname()==="/living_room"}
       )} onMouseEnter={() => setOpen2(true)}
       onMouseLeave={() =>setOpen2(false)}
       onClick={()=>setOpen(false)} >
              Living room
       </div></Link> 
       </div>
    </div>  {/* end of products */}

             <div className="h-6"></div>
         
        <XMarkIcon className={cn(" w-8 h-8 text-black m-6 absolute top-0 right-0 z-20 hover:cursor-pointer hover:text-white hover:bg-blue-900", { hidden: !open })} 
            onClick= {() => setOpen(!open)}/> 
            
    </nav>     
    );
};
export default MobileNavbar;
             /*  onMouseLeave={() =>setOpen(false)} */
            

  