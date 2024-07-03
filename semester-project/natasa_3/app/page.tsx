import Image from "next/image";
import slika5 from "/public/760x510_copy_2_blog_6500213eb865c.jpg";
import slika6 from "/public/dddddd3.jpg";
import slika7 from "/public/bed6.jpg";
import slika8 from "/public/d5.jpg";


import {Inter,Roboto, Roboto_Condensed,
  Playfair_Display,
} from "next/font/google";

import { cn } from "@/lib/utils";

import slika2 from "/public/dnevni.jpeg";
import slika3 from "/public/professional-use.png";
import Link from "next/link";
//flex flex-col justify-center font-playfair w-1/2 w-1/2 scale-x-125  mt-28 mb-16 
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function Home() {
  return (
    <main className="text-gray-900  " >

       <div className="flex justify-center items-center mb-24  h-screen  bg-no-repeat bg-cover bg-center apsolute"  style={{backgroundImage: `url(${slika8.src})`, }}>  
                           
        <div className=" bg-white/70 h-76 w-4/6 rounded-sm lg:relative md:top-20">
              <div className={cn(" text-center md:text-5xl text-4xl font-serif font-extrabold text-blue-950 m-6 ", 
                                playfairDisplay.className)}>
                  Discover your perfect space
                </div>
          <div className=" flex justify-center items-center lg:text-xl  md:text-lg px-10">Welcome to Nateo, where style meets comfort, and every piece of furniture
            tells a story. Step into a world of curated designs and timeless elegance, carefully selected to transform your living spaces into expressions of
            your unique personality.
            At Nateo, we understand that furniture is more than just a functional necessity it&apos;s an integral part of your lifestyle.
          </div>
         <div className="flex justify-center">
        <Link  className="  mt-6 mb-6 " href="/about" >
          <button className="px-5 py-2  grid place-self-center bg-blue-900 text-white md:text-xl rounded-sm transition ease-in-out delay-250 hover:scale-105">
            Discover more</button></Link></div> 
      </div>          
      </div>     
      
{/*<Image  className="  w-screen h-full mb-24" src={slika8} alt="Slika"  />
      <div className="flex justify-center ">
      <div className=" bg-white h-84 w-5/6">
         <div className={cn(" text-center md:text-5xl text-4xl font-serif font-extrabold text-blue-950 m-12 ", 
                          playfairDisplay.className)}>
            Discover your perfect space
          </div>
          <div className=" flex justify-center items-center lg:text-xl  md:text-lg px-10">Welcome to Nateo, where style meets comfort, and every piece of furniture
            tells a story. Step into a world of curated designs and timeless elegance, carefully selected to transform your living spaces into expressions of
            your unique personality.
            At Nateo, we understand that furniture is more than just a functional necessity it&apos;s an integral part of your lifestyle.
          </div>
         <div className="flex justify-center">
        <Link  className="  mt-6 mb-6 " href="/about" >
          <button className="px-5 py-2  grid place-self-center bg-blue-900 text-white text-xl rounded-sm transition ease-in-out delay-250 hover:scale-105">
            Discover more</button></Link></div> 
      </div>       
      </div> */} 


  <div className={cn("pt-12 pb-10 px-12 bg-blue-950/60 mt-20 mb-24 mx-4" )} >      
    <div className="grid 	gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  "> 

      <div className=" flex flex-col justify-center content-center ">        
            <Image src={slika5} alt="Kitchen" className="  " />
        
              <div className="flex justify-center">
                <Link  className="" href="/kitchen" > 
                      <button className={cn("px-8 py-2 mt-8 bg-blue-900 text-white md:text-xl rounded-sm transition ease-in-out delay-250 hover:scale-105")}>
                          Kitchen
                        </button>
        </Link>  </div>
      </div>

  <div>   
          <Image src={slika7} alt="Bed Room" className="  " />           
        <div className="flex  justify-center">       
    {/*  <Link  className="" href="/spavaca_soba" > */}
        <button className="px-8 py-2 mt-8   bg-blue-900 text-white md:text-xl rounded-sm transition ease-in-out delay-250 hover:scale-105">
        Bedroom
        </button>
    {/* </Link> */}</div> 
  </div>  
       
    <div className="md:relative md:left-1/2 xl:static"  > 
    {/*< Link  href="">  */}
        <Image src={slika6} alt="livingroom" className=" 
        "  /> 
    {/* </Link>  */}
    <div className="flex justify-center  ">      
  {/*  <Link  className="" href="/" > */}
        <button className="px-8 py-2 mt-8  bg-blue-900 text-white md:text-xl rounded-sm transition ease-in-out delay-250 hover:scale-105">
          Living room
        </button>
    {/*  </Link> */}      
  </div></div> 
    </div>  
    </div> 

  
<div className="flex lg:flex-row flex-col mt-24 mb-24 lg:mx-16 mx-10 ">
  <div className="lg:w-1/2 bg-white  w-full md:h-96 rounded-sm ">
    <div className={cn(" text-center md:text-4xl text-4xl font-serif font-extrabold text-blue-950 m-8 md:m-10 lg:m-8 ", 
                    playfairDisplay.className)}>
      New Arrivals
    </div>
    <div className=" flex justify-center items-center xl:text-lg md:text-lg px-10">
      Don&apos;t miss the chance to be ahead of the curve.Explore our New Arrivals and make a statement with pieces that reflect your distinctive
      taste. Because when it comes to style, being on-trend has never been so effortless. Welcome the new, and welcome a fresh perspective
      to your home.
    </div>
      <div className="flex justify-center">
      <Link  className="px-5 mt-5 mb-4 xl:mt-8" href="/about" >
        <button className="px-5 py-2 mt-1 grid place-self-center bg-blue-900 text-white md:text-xl rounded-sm transition ease-in-out delay-250 hover:scale-105">
          See what&apos;s new</button></Link>
      </div>    
    </div>

  <div className="lg:w-1/2 w-full "> <Image className="object-fit lg:h-96 h-80 md:h-96" src={slika2} alt="New Arrival" /></div>

</div>
      
  
</main>
  );
}

 //lg:text-xl  md:text-lg px-10