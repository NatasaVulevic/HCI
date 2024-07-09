import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping,faMagnifyingGlass,faSearch  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";


const Search_bar=()=>{
    return(
    <div className="flex rounded-sm">
        <input 
        type="text"
        className={cn("p-2 rounded-sm text-sm sm:text-lg")}
        placeholder="Search..."
        
    />
    <button type="submit" className="bg-blue-900 px-4 py-2 rounded-sm">
         <Link href="/not_found">  <FontAwesomeIcon style={{color: "white" }} icon={faMagnifyingGlass}/> </Link> </button>
</div>
    )
}
export default Search_bar;