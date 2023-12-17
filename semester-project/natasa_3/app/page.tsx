import Image from "next/image";
import slika1 from "/public/slika4.png"; 
import slika2 from "/public/new-arrival.png";
import slika3 from "/public/professional-use.png";
import Link from "next/link";


export default function Home() {

  return (
    <main >
      <div>
         <Image  className="w-full" src={slika1} alt="Slika" />                     
      </div>

      <div className="grid place-items-center mt-28 mb-16 font-playfair text-center text-4xl italic font-medium text-gray-800 ">
        DISCOVER YOUR PERFECT SPACE
      </div>

      <div >
        <div className="font-playfair text-2xl font-medium italic mb-8 ms-6 text-gray-800">
          PRODUCTS
        </div>

        <div className="grid justify-items-center	gap-6 overflow-hidden sm:grid-cols-1
                       md:grid-cols-2
                       lg:grid-cols-3  xl:grid-cols-4 mx-1.5 mb-24 mt-1"> 

<Link  className="hover:scale-105" href="">     <Image src="/kitchen.png" alt="Kitchen"  width={320}  height={320} />    </Link>          
<Link  className="hover:scale-105" href="">         <Image src="/living-room.png" alt="Living Room" width={320}height={320} />   </Link>                      
<Link  className="hover:scale-105" href="">          <Image src="/bedroom.png" alt="bedroom" width={320}  height={320}/>      </Link>             
<Link  className="hover:scale-105" href="">          <Image src="/outdoor.png" alt="Outdoor" width={320} height={320}/>   </Link>           
        </div>  

      </div>

      <div className=" 	my-36	 grid sm:grid-cols-1 md:grid-cols-2 md:h-96 overflow-hidden md:scale-110">   
           {/*  <Link href="" className="h-72 md:h-full"> */}
              <div className="bg-gradient-to-b from-gray-400 to-gray-100 h-80 md:h-96 ">     
              <Link  href="">  
                    <div className="  mt-24 md:mt-32 text-center font-tharlon  hover:scale-105">
                          <div className=" text-xl md:text-2xl font-medium m-8 md:m-10 ">
                            NEW ARRIVALS
                          </div>
                          <div className="text-l md:text-xl  ">
                            BE THE FIRST TO SEE WHAT S NEW
                          </div>
                    </div></Link>

              </div> 
              <div >
                <Image className="w-full h-80 md:h-96" src={slika2} alt="New Arrival"  />                       
              </div>
      </div>
      
      <div className="my-24 " >
        <div className="font-playfair text-2xl font-medium italic mb-8 ms-6 text-gray-800">
          COLLECTION
        </div>    

        <div className="grid	place-items-center mx-4 gap-2 overflow-hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                
              <div>
               <Link  href="">   <Image className="scale-90 md:scale-100 hover:scale-105" src="/anna.png" 
                    alt="Anna"
                    width={420} 
                    height={420}/> </Link>  
              </div>
              <div>
              <Link  href="">   <Image className="scale-90 md:scale-100 hover:scale-105" src="/donna.png"
                    alt="Donna"
                    width={420} 
                    height={420} /></Link>

              </div>
             <Link href="/products">   <div>
              <Image className="scale-90 md:scale-100 hover:scale-105" src="/julia.png"
                  alt="Julia"
                  width={420
                  } 
                  height={420}/>               
                </div></Link> 
          </div>       
      </div>

    <div className=" grid sm:grid-cols-1 md:grid-cols-2 my-36 w-full md:h-1/2 md:scale-110" >

      {/*   <div className="invisible md:visible" >
            <Image className="h-80 md:h-96 w-full " src={slika3}  alt="Professional Use"/>          
        </div> */}

        <div className="bg-gradient-to-b from-gray-400 to-gray-100 h-80 md:h-full overflow:hidden  ">   

       <Link href= "" >     <div className=" mt-24 md:mt-32 text-center font-tharlon hover:scale-105  ">
                <div className=" text-xl md:text-2xl font-medium m-8 md:m-10">
                  PROFESSIONAL USE
                </div>
                <div className="text-l md:text-xl">
                    ELEVATE YOUR BUSINESS<br/>       
                    WITH OUR PROFESSIONAL SOLUTIONS
                </div>
              </div> </Link> 
        </div> 

        <div /* className="visible md:invisible" */ >
            <Image className="h-80 md:h-96 w-full " src={slika3}  alt="Professional Use"/>           {/* "w-full h-80 md:h-96" */}
        </div>
      
    </div>
</main>
  );
}

 