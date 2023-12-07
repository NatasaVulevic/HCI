import Image from "next/image";
//import styles from "./home.module.css"
import slika1 from "/public/slika4.png";


export default function Home() {

  return (
    <main >
      <div>
         <Image 
            className="justify-items-center overflow-hidden max-w-full h-96 w-screen object-cover"
            src={slika1}
            alt="Slika" 
          />           
      </div>

      <div className="grid place-items-center max-w-full h-32 w-screen text-black bg-white">
        DISCOVER YOUR PERFECT SPACE
      </div>

      <div className="bg-white">
        <div className="p-4 text-black">
          Products
        </div>

        <div className="grid justify-items-center	 p-2 gap-6 overflow-hidden
                       sm:grid-cols-1
                       md:grid-cols-2
                       lg:grid-cols-3
                       xl:grid-cols-4">
          <Image 
              src="/kitchen.png"
              alt="Kitchen"
              width={320} 
              height={320}
          />
              
          <Image 
              src="/living-room.png"
              alt="Living Room"
              width={320} 
              height={320}
          />
              
          <Image 
              src="/bedroom.png"
              alt="bedroom"
              width={320} 
              height={320}
          />
              
          <Image 
              src="/outdoor.png"
              alt="Outdoor"
              width={320} 
              height={320}
          />     
        </div>
      </div>

      <div className="bg-stone-200		 text-black grid overflow-hidden
                       sm:grid-cols-1
                       md:grid-cols-2">
        <div className="grid place-items-center text-black h-64">
          NEW ARRIVALS
          <div>
            BE THE FIRST TO SEE WHAT'S NEW
          </div>
        </div>

        <div className="justify-items-center max-w-full h-64 w-screen object-cover">
        <Image 
              src="/new-arrival.png"
              alt="New Arrival"
              width={1980} 
              height={320}
          /> 
        </div>
      </div>

      <div className="bg-white">
        
        <div className="p-4 text-black">
          Collection
        </div>

        <div className="grid	 p-2 gap-6 overflow-hidden  justify-items-center
                       sm:grid-cols-1
                       md:grid-cols-2
                       lg:grid-cols-3
                       xl:grid-cols-4">
          <Image 
              src="/anna.png"
              alt="Anna"
              width={320} 
              height={320}
          />
              
          <Image 
              src="/donna.png"
              alt="Donna"
              width={320} 
              height={320}
          />
              
          <Image 
              src="/julia.png"
              alt="Julia"
              width={320} 
              height={320}
          />    
        </div>
      </div>

    <div className="bg-stone-200		 text-black grid overflow-hidden
                       sm:grid-cols-1
                       md:grid-cols-2">
        <div className="grid place-items-center text-black h-64">
         PROFESSIONAL USE
          <div>
            ELEVATE YOUR BUSINESS
          </div>
          <div>
            WITH OUR PROFESSIONAL SOLUTIONS
          </div>
        </div>

        <div className="justify-items-center max-w-full h-64 w-screen object-cover">
        <Image 
              src="/professional-use.png"
              alt="Professional Use"
              width={1980} 
              height={320}
          /> 
        </div>
      </div>
    </main>
  );
}

  /*      
import Text1 from "/components/Text1.tsx";
import Slike1set from "/components/Slike1set.tsx";
import Slike2set from "/components/Slike2set.tsx";



export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div  className="w-full"  > */
       {/*  <h1 className="text-3xl font-bold mb-8 text-center">Home page</h1> */}
 /*        <Image className="w-full" src={slika1} alt="Slika" />
         <Text1/>
         <Slike1set/>   
         <Slike2set/>           

      </div>
    </main>
  );
}
*/

