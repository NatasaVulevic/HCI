import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Kitchen from "./Kitchen";
import Livingroom from "./Livingroom";
import Bedroom from "./Bedroom";
import Outdoor from "./Outdoor";
import Products1 from "./Products1";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

 
//flex-col md:left-2/3 md:top-20 md:absolute

const Products2=({ open, clickHandler  }: {open:boolean,clickHandler: Dispatch<SetStateAction<boolean>> })=>{
    
  const[ open2, setOpen2]=useState(false); 
  const[ open3, setOpen3]=useState(false);
  const[ open4, setOpen4]=useState(false);
  const[ open5, setOpen5]=useState(false);

    return( 

<div className={cn("bg-stone-300 flex flex-col md:flex-row md:justify-center items-center py-10  uppercase top-0 right-0 w-full" ,
                    "md:h-24 md:w-auto lg:w-1/2 absolute md:top-24 md:right-1/4  ",
                     {hidden: !open})}>
                  
    
   <div className="md:hidden">     < Products1 open={open} clickHandler={clickHandler} />  </div>
           
        <div className={cn(" px-5 py-3 text-xl hover:bg-stone-100" , {"bg-stone-400 text-black ": open2==true,})}
                        onClick={()=>(setOpen2(!open2), setOpen3(false),setOpen4(false), setOpen5(false))}   > 
            Kitchen</div>
            <Kitchen open={open2} clickHandler={setOpen2}/>

        <div className={cn(" px-5 py-3 text-xl hover:bg-stone-100", {"bg-stone-400 text-black pointer-events-none": open3==true,} )}
                        onClick= {()=>(setOpen3(!open3), setOpen2(false),setOpen4(false), setOpen5(false))}  >
            Living room</div>
            <Livingroom open={open3} clickHandler={setOpen3}/>

        <div className={cn(" px-5 py-3 text-xl hover:bg-stone-100",  {"bg-stone-400 text-black pointer-events-none": open4==true,})}
                        onClick= {()=>(setOpen4(!open4), setOpen3(false),setOpen2(false), setOpen5(false))}  >
            Bedroom</div>
            <Bedroom open={open4} clickHandler={setOpen4}/>    

        <div className={cn(" px-5 py-3 text-xl hover:bg-stone-100", {"bg-stone-400 text-black pointer-events-none": open5==true,} )}
                        onClick= {()=>(setOpen5(!open5), setOpen3(false),setOpen4(false), setOpen2(false))}>
            Outdoor</div>
            <Outdoor open={open5} clickHandler={setOpen5}/>

            <XMarkIcon className={cn(" w-8 h-8 text-black m-6 absolute top-0 right-0 z-20 hover:bg-stone-100 md:hidden")} 
            onClick={()=>clickHandler(!open)}/>
        
    </div>    
    );
};
export default Products2;
