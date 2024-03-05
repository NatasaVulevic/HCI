
//import GetAll from "@/lib/contentfulClient";
 
 import Proizvod from "@/components/Proizvod";
import { FC } from "react";
import Proizvodi from "@/lib/contentfulClient";
import { playfairDisplay } from "../layout";
import { cn } from "@/lib/utils";
interface Type{
  id:string;
  category:string;
  subcategory:string;
  name:string;
  price:string;
  currency:string;
  url:string;};

 /* import slika21 from "/public/slika_kuh1.jpg"; 
 import slika22 from "/public/slika_kuh2.jpg"; 
 import slika23 from "/public/slika_kuh3.jpg"; 
 import slika24 from "/public/slika_kuh4.jpg"; 
 import slika25 from "/public/slikakuh5.jpg"; 
 import slika26 from "/public/slikakuh6.jpg"; 



export default Kuhinja; */
//const proizvodi  =  GetAll();
console.log("Tam tam tam tam 10000");


 const  Kuhinja=async ()=>{
 // const proizvodi  = await GetAll();
  const proizvodi= await Proizvodi();  
  //console.log(proizvodi);


  const a =5; /* console.log(proizvodi.name); */
  //const Kuhinja_proizvodi=proizvodi.filter((proizvod)=>proizvod.subcategory=="Kitchen");
   
  //const Kuhinja_proizvodi= proizvodi.Kuhinja_proizvodi;
  const Kuhinja_proizvodi= proizvodi.Kuhinja_proizvodi;

  console.log("bla"); 

 //console.log(Kuhinja_proizvodi); 

 return(
  <div >
    <div className={cn("text-center xl:text-5xl text-4xl font-extrabold font-serif text-blue-950 mt-12",playfairDisplay.className)}>Kitchen</div>
 <div className="px-6 py-6 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
  
   {Kuhinja_proizvodi.map((proizvod)=>{return(
     <div key={proizvod.id}> 
      <Proizvod url={proizvod.url}  nazivProizvoda={proizvod.name} cijena={proizvod.price}/>
      </div>
      );})}    
  
  </div></div>
  );
}; 
export default Kuhinja; 


