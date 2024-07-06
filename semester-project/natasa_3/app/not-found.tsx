import Link from "next/link";
import Image from "next/image";
import slika11 from "/public/error2.svg"
import type { Metadata } from 'next';
import Button from "@/components/Button";

export const metadata:Metadata={
  title:'404 Not Found',
  description:'Custom 404 page for unregistered routes'
}

export default function NotFound() {
  return (
    <main className="flex flex-col lg:flex-row lg:justify-center items-center text-4xl p-14 h-full ">
 <div className="my-6 mr-36 relative left-20 lg:left-0 ">
 <Image  className=" " src={slika11} alt="slika"/>
</div>

   <div className="text-lg md:text-xl text-blue-950 font-serif text-center m-4 flex-col items-center">
    <p className="text-3xl md:text-4xl font-bold m-4">404 Page not found!</p>
      <p className="m-1">Sorry, page you were looking for can&apos;t be found.</p><p className="m-1"> Please return to the homepage to start fresh.  </p>   
   <div className="flex justify-center"> 
      <div className="">
 <Button text={"Go to Homepage"}url={"/"} />
  </div>   </div>   </div>      
    </main>
  );
}
//duration-300
