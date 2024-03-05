
import Proizvod from "@/components/Proizvod";
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


 const  All=async ()=>{
  const proizvodi1= await Proizvodi();  
    const proizvodi=proizvodi1.Proizvodi;
 return(
  <div >
    <div className={cn("text-center xl:text-5xl text-4xl font-extrabold font-serif text-blue-950 mt-12",playfairDisplay.className)}>All</div>
 <div className="px-6 py-6 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
  
   {proizvodi.map((proizvod)=>{return(
     <div key={proizvod.id}> 
      <Proizvod url={proizvod.url}  nazivProizvoda={proizvod.name} cijena={proizvod.price}/>
      </div>
      );})}    
  
  </div></div>
  );
}; 
export default All; 


