import Image from "next/image";
//import styles from "./home.module.css"
import slika1 from "/public/slika4.png";
//justify-items-center overflow-hidden w-full h-96 w-screen object-cover h-32 w-screen 
//flex justify-center p-15 my-20 text-s md:text-xl font-medium gap-10 space-x-4
//Natasa  
import slika2 from "/public/new-arrival.png";
import slika3 from "/public/professional-use.png";


export default function Home() {

  return (
    <main >
      <div>
         <Image  className="w-full" src={slika1} alt="Slika" />                     
      </div>

      <div className="grid place-items-center my-20 font-playfair text-center text-4xl italic font-medium ">
        DISCOVER YOUR PERFECT SPACE
      </div>

      <div >
        <div className="font-playfair text-xl font-medium italic m-6">
          PRODUCTS
        </div>

        <div className="grid justify-items-center	  gap-6 overflow-hidden
                       sm:grid-cols-1
                       md:grid-cols-2
                       lg:grid-cols-3
                       xl:grid-cols-4 mx-1.5 mb-12 mt-1"> 

          <Image src="/kitchen.png" alt="Kitchen"  width={320}  height={320} />              
          <Image src="/living-room.png" alt="Living Room" width={320}height={320} />                         
          <Image src="/bedroom.png" alt="bedroom" width={320}  height={320}/>                   
          <Image src="/outdoor.png" alt="Outdoor" width={320} height={320}/>              
        </div>  
      </div>

      <div className=" 	my-20	 grid sm:grid-cols-1 md:grid-cols-2 md:h-96 overflow-hidden">

              <div className="bg-gradient-to-b from-gray-400 to-gray-100 h-72 md:h-full">        
                    <div className="  mt-24 md:mt-32 text-center font-tharlon  ">
                          <div className=" text-xl md:text-2xl font-medium m-8 md:m-10 ">
                            NEW ARRIVALS
                          </div>
                          <div className="text-l md:text-xl  ">
                            BE THE FIRST TO SEE WHAT S NEW
                          </div>
                    </div>
              </div> 
              <div >
                      <Image className="w-full h-80 md:h-96" src={slika2} alt="New Arrival"  />                          
              </div>
      </div>
      
      <div >
        <div className="font-playfair text-xl font-medium italic m-6">
          COLLECTION
        </div>        
        <div className="grid	place-items-center gap-10 overflow-hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                
              <div>
              <Image 
                  src="/anna.png"
                  alt="Anna"
                  width={350} 
                  height={350}/>
               </div>
              <div>
              <Image 
                  src="/donna.png"
                  alt="Donna"
                  width={350} 
                  height={350}
              /></div>
              <div>
              <Image 
                  src="/julia.png"
                  alt="Julia"
                  width={350} 
                  height={350}
              />    </div>
          </div>       
      </div>

    <div className=" grid sm:grid-cols-1 md:grid-cols-2 my-20  md:h-96" >

      <div className="bg-gradient-to-b from-gray-400 to-gray-100 h-72 md:h-full">
        <div className=" mt-24 md:mt-32 text-center font-tharlon   ">
          <div className=" text-xl md:text-2xl font-medium m-8 md:m-10">
            PROFESSIONAL USE
          </div>

          <div className="text-l md:text-xl">
              ELEVATE YOUR BUSINESS<br/>       
              WITH OUR PROFESSIONAL SOLUTIONS
          </div>
        </div>
      </div>
      
      <div className="justify-items-center max-w-full  w-screen object-cover">
        <Image className="h-80 md:h-96"
             src={slika3}
              alt="Professional Use"/>           
      </div>
    </div>
</main>
  );
}

 