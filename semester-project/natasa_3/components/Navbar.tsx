 /*  <nav className="flex items-center justify-between p-10">
        
          <div className={notable.className}><Link href="/">The shop</Link></div>
          <ul className="flex gap-8">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            ))}           
            <li> <Link href="/likes"> <FontAwesomeIcon icon={faHeart}/> </Link></li>
            <li> <Link href="/cart"> <FontAwesomeIcon icon={faCartShopping}/> </Link></li> 

          </ul>
          <div>
             <Link href="/search"> <FontAwesomeIcon icon={faMagnifyingGlass}/> </Link> 
          </div>               

        </nav>  */
/* "use client"*/

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
  <nav className="flex items-center justify-between p-10">
    <div><Logo/></div>
    <div className="md:hidden"><Bars3Icon></Bars3Icon></div>
  <ul className="hidden md:flex md:gap-8">
            
            
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name} </Link>
              </li>
            ))}     
                
            <li> <Link href="/likes"> <FontAwesomeIcon icon={faHeart}/> </Link></li>
            <li> <Link href="/cart"> <FontAwesomeIcon icon={faCartShopping}/> </Link></li> 

          </ul>
          <div className="hidden md:visible" >
             <Link href="/search"> <FontAwesomeIcon icon={faMagnifyingGlass}/> </Link> 
          </div> 
  </nav>


);};

export default NavBar;
   
  
