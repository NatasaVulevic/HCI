import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

const Hamburger=({ open, clickHandler }: {open:boolean,clickHandler: Dispatch<SetStateAction<boolean>> }) =>{
    return(
    <div  className="md:hidden rounded-full hover:cursor-pointer hover:bg-stone-100 m-2 text-black w-8 h-8"
        onClick={() => clickHandler(!open)}>                        {/* onclick={()=>setOpen(!open)} */}
         <Bars3Icon className={cn({ hidden: open })}/>     
       {/*   <XMarkIcon className={cn(" w-8 h-8 text-black", { hidden: !open })}/> */}       
    </div>
    );
};
export default Hamburger;
