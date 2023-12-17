import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Products1 from "./Products1";
//import Kitchen_elements from "@/app/kitchen_elements/page";
/* import Logo from './Logo'; */
//-right-60 bottom-12



 

const Kitchen= ({ open, clickHandler }: {open:boolean,clickHandler: Dispatch<SetStateAction<boolean>> })=>{

    return(
        <div className={cn("bg-stone-300 flex flex-col items-center w-full px-4 py-6 uppercase absolute h-full md:h-fit md:top-20 ",
         {hidden:!open} ) } 
        onClick={()=>clickHandler(!open)}>
                               {/*  < Products1 open={open} clickHandler={clickHandler} />   */}
        <div className={cn("uppercase bg-stone-400 font-medium text-slate-950 text-xl p-2  md:hidden px-5 py-3 m-2")}
              >
                Products
        </div>
        
        <div className={cn(" px-5 py-3 md:hidden hover:bg-stone-100 md:hidden bg-stone-400 text-black pointer-events-none text-xl mb-4")}
                           > 
            Kitchen</div>
          



        <div className=" px-5 py-3  hover:bg-stone-100 ">
          <Link href="/products">Kitchen elements</Link>
        </div>
        <div className=" px-5 py-3  hover:bg-stone-100">
            Tables and chairs</div>
    </div>
    );
};
export default Kitchen;