import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Kitchen from "./Kitchen";
import Livingroom from "./Livingroom";
import Bedroom from "./Bedroom";
import Outdoor from "./Outdoor";
 

const Products2=({ open, clickHandler }: {open:boolean,clickHandler: Dispatch<SetStateAction<boolean>> })=>{
    
  const[ open2, setOpen2]=useState(false); 
  const[ open3, setOpen3]=useState(false);
  const[ open4, setOpen4]=useState(false);
  const[ open5, setOpen5]=useState(false);

    return( 

<div className={cn(" bg-stone-300   flex flex-col items-center py-10 px-8 uppercase absolute left-2/3 top-20 border-2", {hidden: !open})}
                 /* onClick={()=>(clickHandler(false)) }*/   >

        <div className={cn(" px-5 py-3  hover:bg-stone-100" , {"bg-stone-400 text-black pointer-events-none": open2==true,})}
                        onClick={()=>(setOpen2(!open2), setOpen3(false),setOpen4(false), setOpen5(false))}   > 
            Kitchen</div>
            <Kitchen open={open2} clickHandler={setOpen2}/>

        <div className={cn(" px-5 py-3  hover:bg-stone-100", {"bg-stone-400 text-black pointer-events-none": open3==true,} )}
                        onClick= {()=>(setOpen3(!open3), setOpen2(false),setOpen4(false), setOpen5(false))}  >
            Living room</div>
            <Livingroom open={open3} clickHandler={setOpen3}/>

        <div className={cn(" px-5 py-3  hover:bg-stone-100",  {"bg-stone-400 text-black pointer-events-none": open4==true,})}
                        onClick= {()=>(setOpen4(!open4), setOpen3(false),setOpen2(false), setOpen5(false))}  >
            Bedroom</div>
            <Bedroom open={open4} clickHandler={setOpen4}/>    

        <div className={cn(" px-5 py-3  hover:bg-stone-100", {"bg-stone-400 text-black pointer-events-none": open5==true,} )}
                        onClick= {()=>(setOpen5(!open5), setOpen3(false),setOpen4(false), setOpen2(false))}>
            Outdoor</div>
            <Outdoor open={open5} clickHandler={setOpen5}/>
 
    </div>    
    );
};
export default Products2;
