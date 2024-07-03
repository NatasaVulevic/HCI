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

  const  Dnevni_boravak=async ()=>{
    const proizvodi= await Proizvodi();  
    const Living_proizvodi1=proizvodi.Living_proizvodi;
   return(
    <div >
    <div className={cn("text-center xl:text-5xl text-4xl font-extrabold font-serif text-blue-950 mt-12",playfairDisplay.className)}>Living room</div>
    <div className="px-6 py-6 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
    
     {Living_proizvodi1.map((proizvod)=>{return(
       <div key={proizvod.id}> 
        <Proizvod url={proizvod.url}  nazivProizvoda={proizvod.name} cijena={proizvod.price}/>
        </div>
        );})}    
    
    </div></div>
    );
  }; 

export default Dnevni_boravak;