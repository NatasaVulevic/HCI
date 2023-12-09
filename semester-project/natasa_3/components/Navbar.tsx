 import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart } from "@fortawesome/free-regular-svg-icons";
import {faCartShopping,faMagnifyingGlass,faSearch  } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo';
import { Bars3Icon } from "@heroicons/react/24/solid";

const NavBar=()=>{ 

  const pages = {    
    home: "/",  
    products: "/products",
    sign_in: "/sign_in", 
  };

  return (
  <nav className="flex items-center justify-between p-10 bg-gray-300 h-12 md:h-18">
    <div><Logo/></div>
    <div className="md:hidden text-black w-8 h-8"><Bars3Icon/></div>
     <ul className="hidden md:flex md:gap-8">           
        {Object.entries(pages).map(([name, path]) => (
          <li key={name}>
            <Link className="uppercase font-medium text-slate-950 text-xl" href={path}>{name} </Link>
          </li>
              ))}     
            
       
      </ul>
      <ul className="hidden md:flex md:gap-8">
         <li> <Link href="/likes"> <FontAwesomeIcon icon={faHeart}/> </Link></li>
        <li> <Link href="/cart"> <FontAwesomeIcon icon={faCartShopping}/> </Link></li> 
        <li><Link href="/search"> <FontAwesomeIcon className="hidden md:visible" icon={faMagnifyingGlass}/> </Link> </li>
      </ul>     
  </nav>

);};

export default NavBar;
   
  
