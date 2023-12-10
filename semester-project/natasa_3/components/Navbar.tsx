 "use client"
 import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart } from "@fortawesome/free-regular-svg-icons";
import {faCartShopping,faMagnifyingGlass,faSearch  } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo';
import { useState } from "react";
import Hamburger from "@/components/Hamburger";
import MobileNavbar from "@/components/MobileNavbar";


export type Page = {
  href: string;
  title: string;
};

const NavBar=()=>{ 
  const[open, setOpen]=useState(false);

  const pages : Page[]= [    
    {href: "/",  title:"home" } ,  
    {href:"/products", title:"products"},
    {href: "/sign_in", title:"sign in "} ]; 

  return (
  <nav className="flex items-center justify-between p-10 bg-gray-300 h-12 md:h-18">
      <div className="hover:text-xl"><Logo/></div>      
     <ul className="hidden md:flex md:gap-8">     

         {pages.map(({ href, title }) => (
          <li key={href}>
            <Link  className="uppercase font-medium text-slate-950 text-xl hover:text-xl  " href={href}>  
            <div className="p-2 hover:bg-stone-200">          
              {title}</div> 
              </Link> 
            </li>
          ))}             
      </ul>
      
      <ul className="flex gap-4 md:gap-8"> 
        <li><Link className="invisible md:visible hover:text-xl" href="/search"> <FontAwesomeIcon  icon={faMagnifyingGlass}/> </Link> </li>
        <li> <Link className="hover:text-xl"  href="/likes"> <FontAwesomeIcon icon={faHeart}/> </Link></li>
        <li> <Link className="hover:text-xl" href="/cart"> <FontAwesomeIcon icon={faCartShopping}/> </Link></li>        
       

      <Hamburger  open={open} clickHandler={setOpen}/> </ul> 
      <MobileNavbar  pages={pages} open={open} clickHandler={setOpen}/>
  </nav>
);};

export default NavBar;





   
   {/*  {Object.entries(pages).map(([name, path]) => (
          <li key={name}>
            <Link className="uppercase font-medium text-slate-950 text-xl" href={path}>{name} </Link>
          </li>))}    */}  
