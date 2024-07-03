
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

 
 const  Kuhinja=async ()=>{ 
  const proizvodi= await Proizvodi();    
  const Kuhinja_proizvodi= proizvodi.Kuhinja_proizvodi;  

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


