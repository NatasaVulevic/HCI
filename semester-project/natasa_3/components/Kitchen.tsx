import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Kitchen_elements from "@/app/kitchen_elements/page";
/* import Logo from './Logo'; */




 

const Kitchen= ({ open, clickHandler }: {open:boolean,clickHandler: Dispatch<SetStateAction<boolean>> })=>{

    return(
        <div className={cn(  " bg-stone-300 flex flex-col items-center px-6 py-8  uppercase absolute left-4/5  -right-60 bottom-12 border-2", {hidden:!open} ) } 
        onClick={()=>clickHandler(!open)}>
        <div className=" px-5 py-3  hover:bg-stone-100 ">
          <Link href='./app/kitchen_elements'>Kitchen elements</Link>
        </div>
        <div className=" px-5 py-3  hover:bg-stone-100">
            Tables and chairs</div>
    </div>
    );
};
export default Kitchen;