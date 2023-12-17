import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";


 
const Outdoor= ({ open, clickHandler }: {open:boolean,clickHandler: Dispatch<SetStateAction<boolean>> })=>{

    return(
        <div className={cn( " bg-stone-300 flex flex-col w-full items-center px-4 py-6 uppercase absolute h-full md:h-fit md:top-20 ", {hidden:!open} ) }
        onClick={()=>clickHandler(!open)}>

<div className={cn(" uppercase font-medium text-slate-950 text-xl p-2 bg-stone-400 md:hidden px-5 py-3 m-2")} >
                Products
            </div>
        <div className={cn(" px-5 py-3 md:hidden hover:bg-stone-100 md:hidden bg-stone-400 text-black pointer-events-none text-xl mb-4")} > 
          outdoor
            </div>

        <div className=" px-5 py-3  hover:bg-stone-100 ">
           garden sets 
        </div>
        <div className=" px-5 py-3  hover:bg-stone-100">
            garden chairs
        </div>
    </div>
    );
};
export default Outdoor;