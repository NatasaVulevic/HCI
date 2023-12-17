 "use client"
 import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart } from "@fortawesome/free-regular-svg-icons";
import {faCartShopping,faMagnifyingGlass,faSearch  } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo';
import { useState } from "react";
import Hamburger from "@/components/Hamburger";
import MobileNavbar from "@/components/MobileNavbar";
import Products1 from "@/components/Products1";
import Products2 from "@/components/Products2";

export type Page = {
  href: string;
  title: string;
};

const NavBar=()=>{ 
  const[open, setOpen]=useState(false);
  const[ open1, setOpen1]=useState(false);

  const pages : Page[]= [    
    {href: "/",  title:"home" } ,  
    /* {href:"/products", title:"products"}, */
    {href: "/sign_in", title:"sign in "},
   /*  {href:"/products1", title:"products1"},*/
   ];  

  return (
  <nav className="flex items-center justify-between p-6 md:p-10 md:h-24 md:h-18 w-full text-xl text-gray-900 bg-sky-950/10">
      <div className="hover:bg-stone-100 p-2 scale-200"><Logo/></div> 
    < Products2 open={open1} clickHandler={setOpen1} /> 
     <ul className="hidden md:flex  md:gap-8"> 
         {pages.map(({ href, title }) => (
          <li key={href}>
            <Link  className="uppercase font-medium text-slate-950   " href={href}>  
            <div className="px-5 py-3 hover:bg-stone-100 font-roboto-condensed text-xl ">          
              {title}</div> 
              </Link> 
            </li>
          ))}  
        < Products1 open={open1} clickHandler={setOpen1} />         

      </ul>
      
      <ul className="flex items-center gap-4 md:gap-8"> 
        <li><Link className="invisible md:visible hover:bg-stone-100 p-2" href="/search"> <FontAwesomeIcon  icon={faMagnifyingGlass}/> </Link> </li>
        <li> <Link className="hover:bg-stone-100 p-2"  href="/likes"> <FontAwesomeIcon icon={faHeart}/> </Link></li>
        <li> <Link className="hover:bg-stone-100 p-2" href="/cart"> <FontAwesomeIcon icon={faCartShopping}/> </Link></li>        

      <Hamburger  open={open} clickHandler={setOpen}/> 

      <MobileNavbar  pages={pages} open={open} clickHandler={setOpen} openProducts1={open1} clickHandlerProducts1={setOpen1}/></ul> 
  </nav>
);};

export default NavBar;





   
  