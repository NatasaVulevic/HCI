import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import Products2 from "@/components/Products2";
import { useState } from "react";


 

const Products1=({ open, clickHandler }: {open:boolean,clickHandler: Dispatch<SetStateAction<boolean>> })=>{
    return(
        <div className={cn(" uppercase font-medium text-slate-950 text-xl px-5 py-3 md:hover:bg-stone-100 "
         /* ,{"bg-stone-400 text-black pointer-events-none": open===true,} */ )}
             onClick={ ()=>clickHandler(!open) } >
                Products
        </div>
    );
};
export default Products1;