import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

const Hamburger=({ open, setOpen }: {open:boolean,setOpen: Dispatch<SetStateAction<boolean>> }) =>{
    return(
    <div  className="xl:hidden hover:cursor-pointer hover:bg-stone-100 m-2 text-black w-8 h-8"
        onClick={() => setOpen(!open)}>                       
         <Bars3Icon className={cn({ hidden: open })}/>     
         <XMarkIcon className={cn("text-black", { hidden: !open })}/>  
    </div>
    );
};
export default Hamburger;
