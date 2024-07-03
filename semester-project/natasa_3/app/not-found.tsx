import Link from "next/link";
import Image from "next/image";
import slika11 from "/public/error2.svg"
import type { Metadata } from 'next';

export const metadata:Metadata={
  title:'404 Not Found',
  description:'Custom 404 page for unregistered routes'
}

export default function NotFound() {
  return (
    <main className="flex justify-center items-center text-4xl p-14 h-full items-center">
 <div className="my-6 mr-36">
 <Image  className="" src={slika11} alt="slika"/>
</div>

   <div className="text-xl text-blue-950 font-serif text-center m-4 flex-col items-center">
    <p className="text-4xl font-bold m-4">404 Page not found!</p>
      <p className="m-1">Sorry, page you were looking for can&apos;t be found.</p><p className="m-1"> Please return to the homepage to start fresh.  </p>   
   <div className="flex justify-center">  <Link  className="px-5 py-2 " href="/" ><button className="px-5 py-2 m-2 grid place-self-center bg-blue-900 text-white text-xl rounded-sm hover:scale-105 transition ease-in-out delay-250 duration-300">Go to Homepage</button></Link>  
       </div>   </div>         
    </main>
  );
}