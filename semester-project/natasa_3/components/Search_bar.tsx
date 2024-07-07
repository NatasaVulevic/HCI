import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping,faMagnifyingGlass,faSearch  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";


const Search_bar=({open1}:{open1:boolean})=>{
    return(
    <div className="flex rounded-sm">
        <input onClick={()=>{hidden:false}}
        type="text"
        className={cn("p-2 visible")}
        placeholder="Search..."
        
    />
    <button type="submit" className="bg-blue-900 px-4 py-2 rounded-sm">
         <Link href="/not_found">  <FontAwesomeIcon style={{color: "white" }} icon={faMagnifyingGlass}/> </Link> </button>
</div>
    )
}
export default Search_bar;