import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

const Hamburger=({ open, clickHandler }: {open:boolean,clickHandler: Dispatch<SetStateAction<boolean>> }) =>{
    return(
        <div
      className="md:hidden rounded-full hover:bg-brand-purple-100 hover:cursor-pointer  text-black w-8 h-8"
      onClick={() => clickHandler(!open)}>
         <Bars3Icon className={cn("text-brand-purple-800 w-8 h-8", { hidden: open })}/>
     
         <XMarkIcon className={cn("text-black w-8 h-8", { hidden: !open })}/> 
      
    </div>
    );
};
export default Hamburger;
