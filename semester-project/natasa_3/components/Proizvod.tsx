"use client"
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Playfair_Display} from "next/font/google";
export const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});


const Proizvod= ({url,nazivProizvoda, cijena }:{url:string,nazivProizvoda:string,cijena:string})=>{
  const[open2,setOpen2]=useState(false); 
  return(
    <div className=" border-2 border-black m-6 p-4 flex-col bg-white rounded-sm drop-shadow-md">  {/*bg-slate-50  */}
        <div className="relative md:h-72 md:w-94 h-60  "> 
            <Image src={url} alt="aaa" fill={true} /><Link href=""> </Link>
        </div>

    <div className="flex justify-end ">  <div  className=" mx-4 my-4 h-4 w-4 hover:scale-125 transition ease-in-out delay-250 fill-blue-950"  onClick={()=>setOpen2(!open2)}  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  className={cn( {hidden:open2})}  ><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                                  </svg> <svg className={cn("fill-blue-950", {hidden:!open2})} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></div> </div>
   

     <div className={cn("flex justify-center text-xl font-extrabold font-serif  text-blue-950")}>{nazivProizvoda}</div>
     <div className={cn("flex justify-center  font-bold font-serif  text-blue-950")}>{cijena} €</div>
     
     <div className="self-end flex justify-end  my-6">
  <Link href="/cart">  <div className=" px-5 py-2  bg-blue-900 text-white hover:scale-105 transition ease-in-out delay-250 rounded-sm
     ">Add to Cart</div></Link></div> 
     
 </div>
)    
}
export default Proizvod;