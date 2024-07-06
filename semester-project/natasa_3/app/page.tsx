import Image from "next/image";
import slika5 from "/public/760x510_copy_2_blog_6500213eb865c.jpg";
import slika6 from "/public/dddddd3.jpg";
import slika7 from "/public/bed6.jpg";
import slika8 from "/public/d5.jpg";
//import slika9 from "/public/b1.jpg";
//import slika9 from "/public/bed2.jpg";
import slika9 from "/public/bedroom11.jpg";
import Button from "@/components/Button";
import {Inter,Roboto, Roboto_Condensed,
        Playfair_Display,} from "next/font/google";
import { cn } from "@/lib/utils";

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

{/*mb-24  */}
       <div className="flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center apsolute" style={{backgroundImage: `url(${slika8.src})`, }}>  
                           
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

         <div className="flex justify-center my-6">       
            <Button text={"Discover more"} url={"/about"}/>      
          </div> 
      </div>          
      </div>       
 

 {/* second section */}
<div className="flex lg:flex-row flex-col mx-6 justify-around items-center md:my-36 my-4">{/* lg:mx-16 mt-24 mb-24*/}
   <div className="w-full md:w-1/2 mr-6">
  <div className=" w-full rounded-smitems-center pt-6 p-2">{/*lg:w-1/2  h-84   bg-white/60   */}
    {/*  <div className={cn(" text-center md:text-4xl text-4xl font-serif font-extrabold text-blue-950 m-8 md:m-10 lg:mx-4 lg:mb-6 lg:mt-4 ", 
                    playfairDisplay.className)}>
      New Arrivals
    </div>  */}
    <div className=" flex justify-center text-center xl:text-lg md:text-lg px-8">
      Don&apos;t miss the chance to be ahead of the curve.Explore our range of products and make a statement with pieces that reflect your distinctive
      taste. Because when it comes to style, being on-trend has never been so effortless. Welcome the new, and welcome a fresh perspective
      to your home.
    </div>
      <div className="flex justify-center m-4">  
     
            <Button text={"Shop all"} url={"/about"}  /></div>         
   </div> 
</div>
  <div className="lg:w-1/2 w-full mt-2 mb-6 lg:m-0  "> <Image className="object-fit md:h-96  " src={slika9} alt="New Arrival" /></div>{/*lg:h-96  h-80*/}
</div> 
    

{/* Third section */}
   <div className={cn("h-1/2 pt-12 md:pt-20 pb-10 px-8 md:px-12 bg-blue-950/60 mb-6 " )} >     {/*mx-4 pt-12 pb-4 mb-16 mb-10 */} 

    <div className="grid 	gap-12 gap-6 md:gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  "> 

      <div className=" flex flex-col justify-center content-center ">        
            <Image src={slika5} alt="Kitchen" className="  " />        
              <div className="flex justify-center mt-2">               
                  <Button text={"Kitchen"} url={"/kitchen"}/>
              </div>
      </div>


    <div>   
          <Image src={slika7} alt="Bed Room" className="  " />           
            <div className="flex  justify-center mt-2">   
              <Button text={"Bedroom"} url={"/spavaca_soba"}/>     
     </div> 
  </div>  
       
  <div className="md:relative md:left-1/2 xl:static"  >     
        <Image src={slika6} alt="livingroom" className=" "  />    
           <div className="flex justify-center mt-2 ">    
            <Button text={"Living room"} url={"/living_room"}/>
          </div>
  </div> 
</div>  
</div> 
</main>
  );
}

 //lg:text-xl  md:text-lg px-10
  {/* <Link  className="" href="/kitchen" > 
                      <button className={cn("px-8 py-2 mt-2 bg-blue-900 text-white md:text-xl rounded-sm transition ease-in-out delay-250 hover:scale-105")}>
                          Kitchen
                        </button>  </Link> */} 

                        {/* second section */}
{/* <div className="flex lg:flex-row flex-col  mb-24  mx-6 justify-around items-center"> lg:mx-16 mt-24
   <div className="w-1/2 mr-6">
  <div className=" w-full rounded-sm  items-center p-2">{lg:w-1/2  h-84   bg-white/50 
      <div className={cn(" text-center md:text-4xl text-4xl font-serif font-extrabold text-blue-950 m-8 md:m-10 lg:mx-4 lg:mb-6 lg:mt-4 ", 
                    playfairDisplay.className)}>
      New Arrivals
    </div>  
    <div className=" flex justify-center items-center xl:text-lg md:text-lg px-8">
      Don&apos;t miss the chance to be ahead of the curve.Explore our New Arrivals and make a statement with pieces that reflect your distinctive
      taste. Because when it comes to style, being on-trend has never been so effortless. Welcome the new, and welcome a fresh perspective
      to your home.
    </div>
      <div className="flex justify-center m-4">
    
      
            <Button text={"See what's new"} url={"/about"}  /></div>
        
   </div> 
</div>
  <div className="lg:w-1/2 w-full "> <Image className="object-fit md:h-96  " src={slika2} alt="New Arrival" /></div>lg:h-96  h-80

</div>  */}


{/* <div className="flex justify-center"> 
  <div className=" bg-white w-full p-10 text-lg flex-col items- m-4">
  <p>Uncover our entire collection and find the perfect items for you. Whether you're looking for the latest trends or timeless classics,
     we've got something for everyone. "</p>
  <div className="flex justify-center m-4"><Button text={"Shop All"} url={"/All"}/></div>

  </div>
</div> */}