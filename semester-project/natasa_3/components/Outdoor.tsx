import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";


 
const Outdoor= ({ open, clickHandler }: {open:boolean,clickHandler: Dispatch<SetStateAction<boolean>> })=>{

    return(
        <div className={cn( " bg-stone-300 flex flex-col items-center px-6 py-8 uppercase absolute left-48 -right-3/4 -bottom-24 border-2", {hidden:!open} ) }
        onClick={()=>clickHandler(!open)}>
        <div className=" px-5 py-3  hover:bg-stone-100 ">
            chairs
        </div>
        <div className=" px-5 py-3  hover:bg-stone-100">
            tables
        </div>
    </div>
    );
};
export default Outdoor;