import Image from "next/image";
//import styles from "./home.module.css"
import slika1 from "/public/slika4.png";
import Text1 from "/components/Text1.tsx";
import Slike1set from "/components/Slike1set.tsx";
import Slike2set from "/components/Slike2set.tsx";



export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div  className="w-full"  >
       {/*  <h1 className="text-3xl font-bold mb-8 text-center">Home page</h1> */}
         <Image className="w-full" src={slika1} alt="Slika" />
         <Text1/>
         <Slike1set/>   
         <Slike2set/>           

      </div>
    </main>
  );
}

